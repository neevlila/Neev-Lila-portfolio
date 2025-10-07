import React from 'react';
import { Mail, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';

const WEB3FORMS_ACCESS_KEY = "f5447994-b4cb-49b8-8f93-5d25ae14855f";
const RECIPIENT_EMAIL = "nneev223@gmail.com";

const DISPOSABLE_DOMAINS = [
  "mailinator.com", "mailinator.net", "mailinator.org", "mailinator.co",
  "yopmail.com", "yopmail.fr", "yopmail.net", "cool.fr.nf", "jetable.fr.nf", "nospam.ze.tc", "nomail.xl.cx",
  "sharklasers.com", "guerrillamail.com", "guerrillamail.de", "guerrillamail.info", "guerrillamail.net", "guerrillamail.org",
  "10minutemail.com", "10minutemail.net", "10minutesemail.net",
  "temp-mail.org", "tempmail.org", "tempmail.com", "tempmail.net", "mytemp.email",
  "trashmail.com", "trashmail.de", "dispostable.com", "getnada.com", "inboxbear.com", "throwawaymail.com", "fakemail.net",
];

function isDisposableEmail(email: string) {
  const domain = email.toLowerCase().split("@")[1] || "";
  return DISPOSABLE_DOMAINS.some((d) => domain === d || domain.endsWith(`.${d}`));
}

const disposableCache = new Map<string, boolean>();

async function isDisposableEmailOnline(email: string): Promise<boolean> {
  const domain = (email.split("@")[1] || "").toLowerCase();
  if (!domain) return false;
  if (disposableCache.has(domain)) return disposableCache.get(domain)!;

  const withTimeout = async (promise: Promise<Response>, ms = 2000) => {
    return await Promise.race([
      promise,
      new Promise<Response>((_, reject) => setTimeout(() => reject(new Error("timeout")), ms)) as unknown as Promise<Response>,
    ]);
  };

  try {
    const res = await withTimeout(fetch(`https://disposable.debounce.io/?email=${encodeURIComponent(email)}`));
    if (res.ok) {
      const data = await res.json() as { disposable?: string };
      if (typeof data.disposable === "string") {
        const isDisp = data.disposable === "true";
        disposableCache.set(domain, isDisp);
        if (isDisp) return true;
      }
    }
  } catch (e) {}

  try {
    const res2 = await withTimeout(fetch(`https://open.kickbox.com/v1/disposable/${encodeURIComponent(domain)}`));
    if (res2.ok) {
      const data2 = await res2.json() as { disposable?: boolean };
      if (typeof data2.disposable === "boolean") {
        disposableCache.set(domain, data2.disposable);
        return data2.disposable;
      }
    }
  } catch (e) {}

  return false;
}

const formSchema = z.object({
  name: z
    .string({ required_error: "Name is required." }),
  email: z
    .string({ required_error: "Email is required." })
    .refine((e) => !isDisposableEmail(e), {
      message: "Disposable/temporary emails are not allowed.",
    }),
  message: z
    .string({ required_error: "Message is required." })
    .min(10, { message: "Message must be at least 10 characters." }),
});

const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const msg = (values.message || "").trim();
    const charCount = msg.length;
    const wordCount = msg === "" ? 0 : msg.split(/\s+/).filter(Boolean).length;

    if (charCount < 10) {
      window.alert("Message must be at least 10 characters. Please type more before sending.");
      form.setFocus("message");
      return;
    }

    if (isDisposableEmail(values.email)) {
      toast.error("Disposable Email Blocked", {
        description: "Please use a permanent email address (no temporary/disposable providers).",
        id: "contact-form-status",
      });
      return;
    }

    const onlineDisposable = await isDisposableEmailOnline(values.email);
    if (onlineDisposable) {
      toast.error("Disposable Email Blocked", {
        description: "This email appears to be temporary. Use a permanent address.",
        id: "contact-form-status",
      });
      return;
    }
    toast.info("Sending message...", { description: "Please wait while your message is transmitted.", id: "contact-form-status", duration: 10000 });

    try {
      const formData = new FormData();
      
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("message", values.message);

      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("subject", `New Portfolio Message from ${values.name}`);
      formData.append("recipient", RECIPIENT_EMAIL);
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message Sent!", {
          description: "Thank you for reaching out. I will get back to you soon.",
          id: "contact-form-status",
        });
        form.reset(); 
      } else {
        console.error("Submission Error:", data);
        toast.error("Submission Failed", {
          description: data.message || "An unknown error occurred. Please try again.",
          id: "contact-form-status",
        });
      }
    } catch (error) {
      console.error("Network or Fetch Error:", error);
      toast.error("Network Error", {
        description: "Could not send the message. Please check your connection.",
        id: "contact-form-status",
      });
    }
  }

  const contactDetails = [
    { icon: Mail, label: "Email", value: RECIPIENT_EMAIL, href: `mailto:${RECIPIENT_EMAIL}` },
    { icon: MapPin, label: "Location", value: "Ahmedabad, India" },
    { icon: Clock, label: "Available", value: "Monday - Friday" },
  ];

  const { isSubmitting, errors, isSubmitted, touchedFields } = form.formState as any;

  const darkInputClasses = "bg-background text-foreground focus-visible:ring-primary focus-visible:border-primary";
  const errorInputClasses = "border-destructive ring-1 ring-destructive";
  const normalBorder = "border-border";

  const shouldShowError = (field: "name" | "message" | "email") => {
    const val = String(form.getValues(field) ?? "");
    return !!errors[field] && (isSubmitted || (touchedFields?.[field] && val !== ""));
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Talk</h2>
              <p className="text-lg text-muted-foreground">
                I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology.
              </p>
            </div>
            <div className="space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <div className="bg-secondary p-3 rounded-lg">
                    <detail.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{detail.label}</h3>
                    {detail.href ? (
                      <a href={detail.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <Card className="bg-secondary border-border p-2 sm:p-4">
              <CardHeader>
                <CardTitle className="text-2xl">Send Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  {/* enable native validation tooltips by removing noValidate and adding required */}
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your full name"
                                {...field}
                                disabled={isSubmitting}
                                autoComplete="name"
                                aria-invalid={!!errors.name}
                                required
                                className={`${darkInputClasses} ${shouldShowError("name") ? errorInputClasses : normalBorder}`}
                              />
                            </FormControl>
                            {shouldShowError("name") && (
                              <p role="alert" className="text-white text-sm mt-1">
                                {errors.name?.message}
                              </p>
                            )}
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your@email.com"
                                {...field}
                                disabled={isSubmitting}
                                inputMode="email"
                                autoComplete="email"
                                aria-invalid={!!errors.email}
                                required
                                className={`${darkInputClasses} ${shouldShowError("email") ? errorInputClasses : normalBorder}`}
                              />
                            </FormControl>
                            {shouldShowError("email") && (
                              <p role="alert" className="text-white text-sm mt-1">
                                {errors.email?.message}
                              </p>
                            )}
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project or just say hello..."
                              className={`min-h-[120px] ${darkInputClasses} ${shouldShowError("message") ? errorInputClasses : normalBorder}`}
                              {...field}
                              disabled={isSubmitting}
                              aria-invalid={!!errors.message}
                              required
                              minLength={10}
                              onInvalid={(e: any) => {
                                const el = e.currentTarget as HTMLTextAreaElement;
                                const val = (el.value || "").trim();
                                const wordCount = val === "" ? 0 : val.split(/\s+/).filter(Boolean).length;
                                if (wordCount < 10) {
                                  el.setCustomValidity("Please enter at least 10 words in the message.");
                                } else if (val.length < 10) {
                                  el.setCustomValidity("Please enter at least 10 characters in the message.");
                                } else {
                                  el.setCustomValidity("");
                                }
                              }}
                              onInput={(e: any) => {
                                (e.currentTarget as HTMLTextAreaElement).setCustomValidity("");
                              }}
                              onFocus={(e: any) => {
                                (e.currentTarget as HTMLTextAreaElement).setCustomValidity("");
                              }}
                              onMouseEnter={(e: any) => {
                                (e.currentTarget as HTMLTextAreaElement).setCustomValidity("");
                              }}
                            />
                          </FormControl>
                          {shouldShowError("message") && (
                            <p role="alert" className="text-white text-sm mt-1">
                              {errors.message?.message || errors.message}
                            </p>
                          )}
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
