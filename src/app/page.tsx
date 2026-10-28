
"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, HardHat, MessageSquare, PackageSearch, ShieldCheck, ShoppingCart, Star, Wrench, ArrowRight, Phone, Mail, Zap, Handshake } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
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
    name: "Roberto Reyes V.",
    quote: "Excelente Servicio, gran variedad de productos, trato ejemplar, eficiencia, entrega rápida. Recomendado como uno de los mejores proveedores.",
    rating: 5,
    timeAgo: "hace 4 meses",
  },
  {
    name: "Nehme Basila",
    quote: "Excelente servicio, el material de separadores es de buena calidad y muy amable la atención.",
    rating: 5,
    timeAgo: "hace 6 meses",
  },
  {
    name: "Distribuidora de Maderas y Triplay Querétaro",
    quote: "Excelente servicio, entregan en tiempo y forma y tienen amplio stock de materiales y excelente precio.",
    rating: 5,
    timeAgo: "hace 3 meses",
  },
  {
    name: "Jose Antonio Rodriguez Ibarra",
    quote: "Desde que estamos en el proyecto de loma dorada hemos trabajado de la mano con DFAC y con su colaboración la obra no para. Adriana se compromete y apoya con su buena actitud y servicio.",
    rating: 5,
    timeAgo: "hace 1 año",
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
        title: "Tubocimbra",
        hint: "cardboard tube forms"
    },
    {
        image: "/Image/Galeria/CARRUSEL-DFAC11-D5.jpg",
        title: "Cuñas para Moños",
        hint: "shoring props"
    },
    {
        image: "/Image/Galeria/CARRUSEL-DFAC3-D5.jpg",
        title: "Moños",
        hint: "PVC waterstop"
    },
    {
        image: "/Image/Galeria/CARRUSEL-DFAC-D5.jpg",
        title: "Silletas",
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
  const catalogPdfUrl = "/archivos/CATALOGO-2026.pdf";

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
            <DialogTitle className="text-2xl font-bold font-headline text-primary">¿Necesitas Material de URGENCIA en Querétaro o el Bajío?</DialogTitle>
            <DialogDescription className="mt-2 text-muted-foreground">
                ¡No te preocupes! Entregamos en tu obra en menos de 24 horas. <br/> Contáctanos ahora mismo.
            </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-4">
                <a href="https://wa.me/524421550415" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
                        <WhatsAppIcon className="mr-2 h-5 w-5" /> Chatear por WhatsApp
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
                        <a href="mailto:ventas.qro.dfac@gmail.com" className="text-primary font-semibold hover:underline text-left block">ventas.qro.dfac@gmail.com</a>
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

      {/* Featured Videos Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Videos <span className="text-primary">Explicativos</span></h2>
            <p className="mt-4 text-lg text-muted-foreground">Conoce nuestros productos en acción</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: "/videos/silletas.mp4", title: "Silletas para construcción", description: "Tipos y usos de silletas" },
              { src: "/videos/monos-1.mp4", title: "Moños para cimbra", description: "Características de moños para cimbra" },
              { src: "/videos/puntal-1.mp4", title: "Puntal para cimbra", description: "Uso del puntal estándar" },
            ].map((video) => (
              <div key={video.src} className="group">
                <div className="relative rounded-lg overflow-hidden shadow-lg bg-black">
                  <video controls preload="metadata" className="w-full aspect-video">
                    <source src={video.src} type="video/mp4" />
                  </video>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{video.title}</h3>
                <p className="text-muted-foreground text-sm">{video.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline">
              <Link href="/videos">Ver Todos los Videos <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section — Google Reviews Style */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-3 mb-6">
              <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-lg font-medium text-muted-foreground">Reseñas de Google</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Lo que dicen nuestros clientes</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#FBBC05] fill-[#FBBC05]" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.6</span>
              <span className="text-muted-foreground">· 49 opiniones</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mt-10">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col h-full bg-card rounded-xl border shadow-sm p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.timeAgo}</p>
                  </div>
                  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div className="flex mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FBBC05] fill-[#FBBC05]" />
                  ))}
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed flex-grow">{testimonial.quote}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 space-y-4">
            <Button asChild size="lg" variant="default" className="gap-2">
              <a href="https://g.page/r/Csomaw2iGgNaEBM/review" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#fff"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fff"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff"/>
                </svg>
                Dejar reseña en Google
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">¿Ya compraste con nosotros? Tu opinión nos ayuda a mejorar</p>
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

    