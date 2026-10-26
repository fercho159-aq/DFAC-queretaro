
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Script from 'next/script';
import { FloatingActionButtons } from '@/components/floating-action-buttons';

export const metadata: Metadata = {
  metadataBase: new URL('https://dfacparacimbra.com.mx'),
  title: {
    default: 'DFAC - Accesorios para Cimbra en Querétaro y el Bajío',
    template: '%s | DFAC Accesorios para Cimbra Querétaro',
  },
  description: 'Venta de accesorios para cimbra, puntales, silletas, cuñas, desmoldante y productos para concreto en Querétaro y el Bajío. Entrega en 24 horas.',
  keywords: ['cimbra queretaro', 'andamios queretaro', 'construccion bajio', 'accesorios para cimbra queretaro', 'puntales queretaro', 'silletas queretaro'],
  verification: {
    google: [
      'VcHiJDttxnnmOnWj3cIRHbGRTyJvEMO2iKMqcroZ_a0',
      'myqCGczfCZokKKlmAGdR-W-GS-4JC8IGNLlng50KB5I',
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'DFAC - Accesorios para Cimbra Querétaro',
    description: 'Venta de accesorios para cimbra, puntales, silletas y productos para concreto en Querétaro y el Bajío. Entrega en 24 horas.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'DFAC - Accesorios para Cimbra Querétaro',
              description: 'Venta de accesorios para cimbra, puntales, silletas, cuñas, desmoldante y productos para concreto en Querétaro y el Bajío.',
              url: 'https://dfacparacimbra.com.mx',
              telephone: ['+524422517169', '+524422517168', '+524421550415'],
              email: 'ventas@cimbrayaccesorios.com.mx',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Prol. Bernardo Quintana 2481, Bod. 15',
                addressLocality: 'Querétaro',
                addressRegion: 'Querétaro',
                postalCode: '76090',
                addressCountry: 'MX',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '14:00',
                },
              ],
              sameAs: [
                'https://www.facebook.com/share/1GYpQ8pWLK/',
                'https://www.instagram.com/dfac_cimbra',
                'https://www.tiktok.com/@accesorios.dfac',
              ],
            }),
          }}
        />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WN6W5G9B');
          `}
        </Script>
        {/* End Google Tag Manager */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
        
        {/* Google Analytics 4 — propiedad exclusiva QRO */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-R55MMMCF7B"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-R55MMMCF7B');
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WN6W5G9B"
        height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe></noscript>
        {/* End Google Tag Manager (noscript) */}
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-background">{children}</main>
          <Footer />
        </div>
        <FloatingActionButtons />
        <Toaster />
      </body>
    </html>
  );
}
