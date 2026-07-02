"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { sendContactMessage } from "@/lib/contact";
import { fadeUp, staggerContainer } from "@/animations";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.email("Please enter a valid email"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactSchema = z.infer<typeof contactSchema>;

const fieldClass =
  "glass placeholder:text-muted-foreground/60 focus:ring-primary-500/60 focus:shadow-glow-secondary aria-[invalid=true]:ring-destructive/60 w-full rounded-lg px-4 py-2.5 text-sm outline-none transition focus:ring-2 aria-[invalid=true]:ring-2";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (values: ContactSchema) => {
    try {
      await sendContactMessage(values);
      toast.success("Message sent!", {
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      reset();
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again, or email me directly.",
      });
    }
  };

  return (
    <div className="card-glow-border rounded-2xl">
      <motion.form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="glass flex flex-col gap-5 rounded-2xl p-6 sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className="text-sm font-medium">
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              className={fieldClass}
              {...register("name")}
            />
            {errors.name && (
              <p
                id="contact-name-error"
                role="alert"
                className="text-destructive text-xs"
              >
                {errors.name.message}
              </p>
            )}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              className={fieldClass}
              {...register("email")}
            />
            {errors.email && (
              <p
                id="contact-email-error"
                role="alert"
                className="text-destructive text-xs"
              >
                {errors.email.message}
              </p>
            )}
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
          <label htmlFor="contact-subject" className="text-sm font-medium">
            Subject
          </label>
          <input
            id="contact-subject"
            type="text"
            placeholder="What's this about?"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "contact-subject-error" : undefined}
            className={fieldClass}
            {...register("subject")}
          />
          {errors.subject && (
            <p
              id="contact-subject-error"
              role="alert"
              className="text-destructive text-xs"
            >
              {errors.subject.message}
            </p>
          )}
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
          <label htmlFor="contact-message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            placeholder="Tell me about the opportunity or idea..."
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className={cn(fieldClass, "resize-y")}
            {...register("message")}
          />
          {errors.message && (
            <p
              id="contact-message-error"
              role="alert"
              className="text-destructive text-xs"
            >
              {errors.message.message}
            </p>
          )}
        </motion.div>

        <motion.button
          variants={fadeUp}
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className="gradient-bg-animated text-primary-foreground shadow-glow-primary focus-visible:ring-ring focus-visible:ring-offset-background flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-opacity focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="size-4" aria-hidden />
            </>
          )}
        </motion.button>
      </motion.form>
    </div>
  );
}
