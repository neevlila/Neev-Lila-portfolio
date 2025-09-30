import React from 'react';
import { Mail, MapPin, Clock, Send, Loader2 } from 'lucide-react'; // Added Loader2 for loading indicator
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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// --- FIX: Updated import paths to use the alias @/components/ui/ ---
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';
// ------------------------------------------------------------------

// --- Web3Forms Configuration ---
const WEB3FORMS_ACCESS_KEY = "f5447994-b4cb-49b8-8f93-5d25ae14855f";
const RECIPIENT_EMAIL = "nneev223@gmail.com";
// -------------------------------

// Form Schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
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

  // Function to handle form submission and API call
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Show an initial toast immediately, replacing the previous one if it exists
    toast.info("Sending message...", { description: "Please wait while your message is transmitted.", id: "contact-form-status", duration: 10000 });

    try {
      // 1. Create a FormData object for the fetch request
      const formData = new FormData();
      
      // Append form fields
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("message", values.message);

      // Append Web3Forms configuration
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("subject", `New Portfolio Message from ${values.name}`);
      formData.append("recipient", RECIPIENT_EMAIL);
      
      // 2. Send the request
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // 3. Handle the response
      const data = await response.json();

      if (data.success) {
        toast.success("Message Sent!", {
          description: "Thank you for reaching out. I will get back to you soon.",
          id: "contact-form-status",
        });
        form.reset(); // Reset form on success
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
    { icon: MapPin, label: "Location", value: "India" },
    { icon: Clock, label: "Available", value: "Monday - Friday" },
  ];

  const { isSubmitting } = form.formState;

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
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} disabled={isSubmitting} />
                            </FormControl>
                            <FormMessage />
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
                              <Input placeholder="your@email.com" {...field} disabled={isSubmitting} />
                            </FormControl>
                            <FormMessage />
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
                              className="min-h-[120px]"
                              {...field}
                              disabled={isSubmitting}
                            />
                          </FormControl>
                          <FormMessage />
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
