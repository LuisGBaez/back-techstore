import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full border-t bg-muted/40 z-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 p-6 text-sm text-muted-foreground">
                
        <div className="flex items-center gap-3">
          
          <p className="font-semibold text-muted-foreground">
            TechStore <br />
            <span className="text-xs font-normal">Tu mejor opción en tecnología</span>
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold text-muted-foreground mb-2">Información</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/sobre-nosotros" className="hover:underline">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contactos" className="hover:underline">
                Contactos
              </Link>
            </li>
            <li>
              <Link href="/politicas-privacidad" className="hover:underline">
                Políticas de Privacidad
              </Link>
            </li>
            <li>
              <Link href="/terminos-condiciones" className="hover:underline">
                Términos y Condiciones
              </Link>
            </li>
          </ul>
        </div>
       
        <div>
          <h3 className="font-semibold text-muted-foreground mb-2">Contacto</h3>
          <ul className="space-y-1">
            <li>Calle 89A # 116A - 35 Bogotá</li>
            <li>
              Email:{" "}
              <a href="mailto:info@techstore.com" className="hover:underline">
                info@techstore.com
              </a>
            </li>
            <li>Tel: +601 5332399</li>
          </ul>
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-3">
          <p className="text-muted-foreground">Síguenos:</p>
          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="w-5 h-5 text-blue-600 hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="w-5 h-5 text-pink-500 hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="w-5 h-5 text-sky-500 hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    
      <div className="border-t py-3 text-center text-xs text-muted-foreground bg-muted/30">
        © 2025 TechStore. Todos los derechos reservados.
      </div>
    </footer>
  );
}