
import Link from "next/link"
import { Mail, Phone, Facebook, Instagram, Linkedin, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/">
              <Image src="/Image/logo/image (3).png" alt="DFAC Logo" width={120} height={40} data-ai-hint="logo" />
            </Link>
            <p className="text-muted-foreground">Tu socio en construcción en Querétaro y el Bajío.</p>
            <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
                <Link href="https://www.tiktok.com/@accesorios.dfac" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
            </div>
            <div className="rounded-lg overflow-hidden border h-[180px]">
              <iframe
                title="Ubicación de DFAC Querétaro en Google Maps"
                src="https://maps.google.com/maps?q=Prol.%20Bernardo%20Quintana%202481%2C%20Felipe%20Carrillo%20Puerto%2C%2076113%20Santiago%20de%20Quer%C3%A9taro%2C%20Qro&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Navegación</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">Productos</Link></li>
              <li><Link href="/#catalog" className="text-muted-foreground hover:text-primary transition-colors">Catálogo</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Nosotros</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">Preguntas frecuentes</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Contacto Querétaro</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                 <p>Prol. Bernardo Quintana 2481 ,Felipe Carrillo puerto, 76113 Santiago de Querétaro,Qro</p>
              </li>
              <li className="flex items-start space-x-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:4421550415" className="hover:text-primary transition-colors">442 155 0415</a>
                </div>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:ventas.qro.dfac@gmail.com" className="hover:text-primary transition-colors">ventas.qro.dfac@gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Términos de Servicio</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DFAC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
