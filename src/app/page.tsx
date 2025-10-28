
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, HardHat, PackageSearch, ShieldCheck, ShoppingCart, Star, Wrench, ArrowRight, Phone, Mail, MessageSquare, Zap, Handshake } from 'lucide-react';
import Image from 'next/image';
import { ProductCard } from '@/components/product-card';
import { Product } from '@/lib/data';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ContactSection } from '@/components/contact-section';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const Flipbook = dynamic(() => import('@/components/flipbook').then(mod => mod.Flipbook), {
    ssr: false,
    loading: () => <Skeleton className="w-full max-w-5xl aspect-[2/1.414]" />,
});

const differentiators = [
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Velocidad Insuperable",
      description: "Garantizamos la entrega de tu material en menos de 24 horas en Querétaro y el Bajío para que tu obra no se detenga."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: "Calidad Certificada",
      description: "Nuestros productos cumplen con los más altos estándares de seguridad y resistencia del mercado."
    },
    {
      icon: <Handshake className="w-10 h-10 text-primary" />,
      title: "Asesoría Personalizada",
      description: "Un equipo de expertos te acompaña en cada paso para asegurar la mejor solución para tu proyecto."
    }
];

const testimonials = [
  {
    name: "Constructora del Bajío",
    quote: "La calidad de los puntales y la velocidad de entrega de DFAC en Querétaro no tienen comparación. Son nuestro proveedor de confianza.",
    rating: 5,
  },
  {
    name: "Ing. Roberto Morales",
    quote: "El equipo de DFAC siempre está dispuesto a asesorarte. Gracias a ellos, optimizamos nuestros costos de apuntalamiento en un 15%.",
    rating: 5,
  },
  {
    name: "ARQ. Sofia Castillo",
    quote: "Los andamios son robustos y seguros. Su servicio en el Bajío es rápido y confiable, un gran aliado para nuestros proyectos.",
    rating: 5,
  },
];

const processSteps = [
    {
      icon: <PackageSearch className="w-12 h-12 text-primary" />,
      title: "1. Elige tu material",
      description: "Explora nuestro catálogo y selecciona los productos que necesitas."
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-primary" />,
      title: "2. Cotiza y Confirma",
      description: "Recibe tu cotización al instante y confirma tu pedido con un asesor."
    },
    {
      icon: <HardHat className="w-12 h-12 text-primary" />,
      title: "3. Recibe en tu Obra",
      description: "Recibe tu material en menos de 24 horas en Querétaro y el Bajío."
    }
];

const clientLogos = [
    { name: 'BBVA Bancomer', src: 'https://upload.wikimedia.org/wikipedia/commons/1/15/BBVA_Bancomer_logo.svg' , hint: 'BBVA Bancomer logo'},
    { name: 'Aeropuerto Internacional Felipe Angeles', src: 'https://upload.wikimedia.org/wikipedia/commons/6/60/010aeropuerto-felipe-angeles-2.jpg' , hint: 'AIFA airport logo'},
    { name: 'Secretaría de Marina', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/SEMAR_Logo_2019.svg/2560px-SEMAR_Logo_2019.svg.png' , hint: 'Secretaria de Marina logo'},
    { name: 'UNAM', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Escudo-UNAM-escalable.svg/1024px-Escudo-UNAM-escalable.svg.png' , hint: 'UNAM university logo'},
];

const solutionsSlides = [
    {
        image: "/Image/Galeria/CARRUSEL-DFAC9-D5.jpg",
        title: "Moños para cimbra",
        hint: "formwork ties"
    },
    {
        image: "/Image/Galeria/CARRUSEL-DFAC11-D5.jpg",
        title: "Puntales para cimbra",
        hint: "shoring props"
    },
    {
        image: "/Image/Galeria/CARRUSEL-DFAC3-D5.jpg",
        title: "Bandas de PVC",
        hint: "PVC waterstop"
    },
    {
        image: "/Image/Galeria/CARRUSEL-DFAC-D5.jpg",
        title: "Cuñas para moño",
        hint: "formwork wedges"
    }
];

const heroSlides = [
  {
    image: "/Image/Galeria/CARRUSEL-DFAC14-D5.jpg",
    hint: "building structure",
    headline: "Calidad y Seguridad en Cada Pieza",
    subheadline: "Construye con la tranquilidad de usar productos certificados que superan los más altos estándares.",
  },
  {
    image: "/Image/Fotos Banner/1.jpg",
    hint: "team working construction",
    headline: "Somos el Socio Estratégico que tu Obra en el Bajío Necesita",
    subheadline: "Accesorios de alta resistencia con entrega en tu obra en menos de 24 horas en Querétaro y toda la región.",
  },
  {
    image: "/Image/Galeria/CARRUSEL-DFAC7-D5.jpg",
    hint: "formwork materials",
    headline: "Innovación y Eficiencia para tus Proyectos en Querétaro",
    subheadline: "Soluciones de cimbra y andamiaje que optimizan tiempos y garantizan resultados impecables.",
  }
];

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = React.useState<Product[]>([]);
  const [isUrgentDialogOpen, setIsUrgentDialogOpen] = React.useState(false);
  const catalogPdfUrl = "/archivos/CATALOGO-DFAC_compressed.pdf";

  React.useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        const productData = data.map((row: any) => ({
            id: String(row.id),
            name: row.name,
            slug: row.slug,
            price: (Number(row.prices?.price) || 0) / 100,
            description: row.description,
            image: row.images?.[0]?.src || 'https://placehold.co/400x300.png',
            images: row.images,
            category: row.categories?.[0]?.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() || 'accesorios'
        }));
        
        const featuredKeywords = ["puntal", "viga", "moño"];
        const filtered = productData.filter((product: Product) => {
          const productName = product.name.toLowerCase();
          return featuredKeywords.some(keyword => productName.includes(keyword));
        });

        const prioritized: Product[] = [];
        for (const keyword of featuredKeywords) {
          const product = filtered.find(p => p.name.toLowerCase().includes(keyword) && !prioritized.some(fp => fp.id === p.id));
          if (product) {
            prioritized.push(product);
          }
        }
        
        if (prioritized.length < 3) {
            const remaining = filtered.filter(p => !prioritized.some(fp => fp.id === p.id));
            prioritized.push(...remaining.slice(0, 3 - prioritized.length));
        }

        setFeaturedProducts(prioritized.slice(0, 3));
    };

    fetchProducts();

    const timer = setTimeout(() => {
        setIsUrgentDialogOpen(true);
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <>
      {/* Urgent Contact Dialog */}
      <Dialog open={isUrgentDialogOpen} onOpenChange={setIsUrgentDialogOpen}>
        <DialogContent className="sm:max-w-md text-center">
            <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-headline text-primary">¿Necesitas Material de URGENCIA en Querétaro?</DialogTitle>
            <DialogDescription className="mt-2 text-muted-foreground">
                ¡No te preocupes! Entregamos en tu obra en menos de 24 horas. <br/> Contáctanos ahora mismo.
            </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-4">
                <a href="https://wa.me/524421550415" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
                        <MessageSquare className="mr-2 h-5 w-5" /> Chatear por WhatsApp
                    </Button>
                </a>
                <div className="flex items-start gap-4 p-4 bg-secondary rounded-md">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold text-left">Llámanos para una atención directa</h3>
                        <div className="flex flex-col space-y-1 mt-1 text-left">
                            <a href="tel:4421550415" className="text-primary font-semibold hover:underline">442 155 0415</a>
                        </div>
                    </div>
                </div>
                 <div className="flex items-start gap-4 p-4 bg-secondary rounded-md">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                        <h3 className="text-lg font-semibold text-left">Escríbenos</h3>
                        <a href="mailto:ventas@cimbrayaccesorios.com.mx" className="text-primary font-semibold hover:underline text-left block">ventas@cimbrayaccesorios.com.mx</a>
                    </div>
                </div>
            </div>
        </DialogContent>
      </Dialog>


      {/* Hero Section Carousel */}
      <section className="relative h-[60vh] md:h-[80vh] w-full">
        <Carousel
          className="w-full h-full"
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-[60vh] md:h-[80vh]">
                  <Image
                    src={slide.image}
                    alt={slide.headline}
                    fill
                    className="object-cover"
                    data-ai-hint={slide.hint}
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
                    <h1 className="text-4xl md:text-5xl font-black font-headline tracking-tight">
                        {slide.headline.split(" ").map((word, i) => (
                           (word === "Estratégico" || word === "Seguridad" || word === "Eficiencia" || word === "Bajío" || word === "Querétaro") ? <b key={i} className="text-primary"> {word}</b> : ` ${word}`
                        ))}
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-slate-200">
                      {slide.subheadline}
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg" className="text-lg px-8 py-6">
                        <Link href="/products">Ver Productos <ArrowRight className="ml-2 h-5 w-5" /></Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-primary">
                        <Link href="/contact">Solicitar Cotización</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex" />
        </Carousel>
      </section>

      {/* Client Logos Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-sm font-bold text-muted-foreground tracking-widest uppercase">Empresas que construyen con nosotros en Querétaro y el Bajío</h3>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
                {clientLogos.map((logo, index) => (
                    <div key={index} className="flex justify-center">
                        <Image src={logo.src} alt={logo.name} width={120} height={40} className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all" data-ai-hint={logo.hint}/>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">¿Por qué Confiar en <span className="text-primary">DFAC?</span></h2>
                  <p className="mt-4 text-lg text-muted-foreground">Te damos más que productos, te damos <b className="text-foreground">soluciones integrales para el Bajío</b>.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                  {differentiators.map((d) => (
                      <div key={d.title} className="flex flex-col items-center p-8 bg-background rounded-lg shadow-md transition-transform hover:-translate-y-2">
                          <div className="bg-primary/10 p-4 rounded-full mb-4">{d.icon}</div>
                          <h3 className="text-xl font-bold mb-2">{d.title}</h3>
                          <p className="text-muted-foreground">{d.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Solutions Gallery */}
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Nuestras <span className="text-primary">Soluciones</span></h2>
                    <p className="mt-4 text-lg text-muted-foreground">Todo lo que necesitas para cada etapa de tu construcción en la región.</p>
                </div>
                <Carousel 
                    opts={{ align: "start", loop: true }}
                    className="w-full"
                >
                    <CarouselContent>
                        {solutionsSlides.map((slide, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                                <div className="p-1 group">
                                    <div className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
                                        <Image src={slide.image} alt={slide.title} fill objectFit="cover" className="transition-transform duration-300 group-hover:scale-110" data-ai-hint={slide.hint} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">{slide.title}</h3>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
                </Carousel>
                <div className="text-center mt-12">
                    <Button asChild size="lg">
                        <Link href="/products">Explorar Catálogo Completo</Link>
                    </Button>
                </div>
            </div>
        </section>


      {/* About Us Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Más de 10 Años Construyendo <span className="text-primary">Confianza en el Bajío</span></h2>
              <p className="mt-4 text-lg text-muted-foreground">
                En DFAC, nacimos para resolver un problema clave en la construcción de la región: la necesidad de contar con material de alta resistencia de forma inmediata. Nuestra promesa es simple y poderosa: <b className="text-foreground">calidad que soporta tus ideas, entregada en tiempo récord en Querétaro y alrededores.</b>
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Más que un proveedor, somos tu socio estratégico en cada obra, comprometidos con la seguridad, la calidad y la eficiencia.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="outline">
                  <Link href="/about">Conoce Nuestra Historia</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-lg shadow-2xl overflow-hidden">
              <Image
                src="/Image/Monos.jpeg"
                alt="Moños para cimbra"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                data-ai-hint="form ties construction"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured-products" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Productos Destacados para el Bajío</h2>
            <p className="mt-4 text-lg text-muted-foreground">Material <b className="text-foreground">listo para resolver</b> las necesidades de tu obra en la región.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Nuestro <span className="text-primary">Catálogo Interactivo</span></h2>
                  <p className="mt-4 text-lg text-muted-foreground">Descubre nuestra gama completa de productos de una forma innovadora.</p>
              </div>
              <Flipbook pdfUrl={catalogPdfUrl} />
          </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Lo que dicen <span className="text-primary">Nuestros Clientes en el Bajío</span></h2>
             <p className="mt-4 text-lg text-muted-foreground">Su éxito es nuestra mejor carta de presentación.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="flex flex-col text-center p-6 bg-card shadow-lg">
                   <CardContent className="flex-grow mb-4">
                    <p className="text-foreground italic">"{testimonial.quote}"</p>
                  </CardContent>
                  <div className="flex items-center justify-center mb-2">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  <CardTitle className="text-base font-semibold">- {testimonial.name}</CardTitle>
                </Card>
              ))}
            </div>
        </div>
      </section>
      
      {/* How it Works Section */}
      <section className="py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Nuestro Proceso en <span className="text-primary">3 Pasos Simples</span></h2>
                  <p className="mt-4 text-lg text-muted-foreground">Comienza a construir de forma más <b className="text-foreground">rápida y segura</b>.</p>
              </div>
              <div className="relative grid md:grid-cols-3 gap-8 text-center">
                  {/* Dashed lines for desktop */}
                  <div className="hidden md:block absolute top-1/2 left-0 w-full -translate-y-12">
                      <div className="flex justify-around">
                          <div className="w-1/4 border-t-2 border-dashed border-primary"></div>
                          <div className="w-1/4 border-t-2 border-dashed border-primary"></div>
                      </div>
                  </div>
                  {processSteps.map((step) => (
                      <div key={step.title} className="relative flex flex-col items-center p-6 bg-background rounded-lg shadow-md border z-10">
                          <div className="bg-primary/10 text-primary p-4 rounded-full mb-4">{step.icon}</div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                          <p className="text-muted-foreground mt-2">{step.description}</p>
                      </div>
                  ))}
              </div>
               <div className="text-center mt-12">
                <Button asChild size="lg">
                    <Link href="/contact">Comienza tu Cotización</Link>
                </Button>
            </div>
          </div>
      </section>


      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">¿Listo para construir con la <br/> <span className="italic">máxima eficiencia y seguridad en Querétaro</span>?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            Contacta a nuestros expertos para una <b className="text-white">cotización inmediata</b> y sin compromiso. Recibe la mejor asesoría para tu proyecto en el Bajío <b className="text-white">hoy mismo</b>.
          </p>
          <div className="mt-8">
             <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/contact">Hablemos de tu Proyecto</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

    