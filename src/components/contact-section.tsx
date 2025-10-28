
"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ContactSection() {

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={cn(
                "grid gap-12",
                "md:grid-cols-2"
            )}>
            
            {/* Contact Form */}
            <Card>
                <CardHeader>
                <CardTitle className="text-2xl font-bold">Envíanos un mensaje</CardTitle>
                </CardHeader>
                <CardContent>
                <form className="space-y-6">
                    <div className="space-y-2">
                    <Label htmlFor="name" className="font-semibold">Nombre completo</Label>
                    <Input id="name" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold">Correo electrónico</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="phone" className="font-semibold">Teléfono (Opcional)</Label>
                    <Input id="phone" type="tel" placeholder="Tu número de teléfono" />
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="message" className="font-semibold">Mensaje</Label>
                    <Textarea id="message" placeholder="¿En qué podemos ayudarte para tu obra en Querétaro?" rows={5} />
                    </div>
                    <Button type="submit" size="lg" className="w-full font-bold">
                    Enviar Mensaje
                    </Button>
                </form>
                </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-bold font-headline">Otras formas de <span className="text-primary">contactar</span></h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                            <Phone className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-semibold">Teléfonos</h3>
                            <p className="text-sm text-muted-foreground">Llámanos para una <b className="text-foreground">atención inmediata</b>.</p>
                            <div className="flex flex-col space-y-1 mt-1">
                                <a href="tel:4421550415" className="text-sm text-primary font-semibold hover:underline">442 155 0415</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                            <Mail className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-semibold">Correo Electrónico</h3>
                            <p className="text-sm text-muted-foreground">Envíanos tus <b className="text-foreground">requerimientos y cotizaciones</b>.</p>
                            <a href="mailto:ventas@cimbrayaccesorios.com.mx" className="text-sm text-primary font-semibold hover:underline">ventas@cimbrayaccesorios.com.mx</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                            <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-semibold">WhatsApp</h3>
                            <p className="text-sm text-muted-foreground">El canal <b className="text-foreground">más rápido</b> para resolver dudas.</p>
                            <a href="https://wa.me/524421550415" target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-semibold hover:underline">Chatea con nosotros</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                            <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <h3 className="text-base md:text-lg font-semibold">Sucursal Querétaro</h3>
                            <p className="text-sm text-muted-foreground">Carr. Querétaro - San Luis Potosí km 17.5, 76220, Querétaro</p>
                            <p className="text-xs text-muted-foreground"><b className="text-foreground">Horario:</b> Lunes a Viernes de 9:00 a 18:00 hrs.</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="text-base md:text-lg font-semibold">Síguenos en <span className="text-primary">redes</span></h3>
                    <div className="flex space-x-4">
                        <Button asChild variant="outline" size="icon" className="text-muted-foreground hover:text-primary hover:border-primary">
                            <Link href="#"><Facebook /></Link>
                        </Button>
                        <Button asChild variant="outline" size="icon" className="text-muted-foreground hover:text-primary hover:border-primary">
                            <Link href="#"><Instagram /></Link>
                        </Button>
                        <Button asChild variant="outline" size="icon" className="text-muted-foreground hover:text-primary hover:border-primary">
                            <Link href="#"><Linkedin /></Link>
                        </Button>
                    </div>
                </div>
            </div>
            </div>
      </div>
    );
}

    