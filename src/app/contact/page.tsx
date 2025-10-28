
"use client"

import { ContactSection } from "@/components/contact-section";

export default function ContactPage() {
  return (
    <>
      <div className="bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-black font-headline">Hablemos de tu <span className="inline-block px-4 py-2 mt-2 bg-[#FFC107]/75 text-primary rounded-lg">proyecto en el Bajío</span></h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Estamos <b className="text-foreground">listos para ayudarte</b> en Querétaro y toda la región. Déjanos un mensaje y te responderemos lo antes posible.
          </p>
        </div>
      </div>

      <div className="py-20 bg-background">
        <ContactSection />
      </div>
    </>
  );
}
