"use client";

import { Mail } from "lucide-react";
import { Container } from "@/components/layout";
import { ScrollReveal } from "@/animations";
import { ContactInfo } from "./contact-info";
import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-16 sm:py-20"
    >
      <Container className="relative">
        {/* Header */}
        <ScrollReveal className="max-w-3xl">
          <span className="glass text-muted-foreground mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm">
            <Mail className="text-accent-400 size-4" aria-hidden />
            Get In Touch
          </span>
          <h2
            id="contact-heading"
            className="font-heading text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Let&apos;s Build Something <span className="text-gradient">Intelligent</span>{" "}
            Together
          </h2>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
            I&apos;m always open to discussing AI engineering opportunities, cloud-native
            solutions, research collaborations, and innovative projects.
          </p>
        </ScrollReveal>

        {/* Two-column: info + form */}
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
