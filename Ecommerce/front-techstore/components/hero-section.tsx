import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 items-center">
       
        <div className="flex flex-col justify-center p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Tecnología de última generación
          </h1>
          <p className="text-muted-foreground mb-6 md:mb-8 text-lg">
            Descubre nuestra amplia gama de productos tecnológicos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Button asChild size="lg">
              <Link href="/categorias/smartphones">Ver Smartphones</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/categorias/laptops">Ver Laptops</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/categorias/tablets">Ver Tablets</Link>
            </Button>
          </div>
        </div>
              
        <div className="flex justify-center md:justify-end p-2">
          <div className="relative md:w-[400px] md:h-[300px] z-10 overflow-hidden rounded-lg">
            <Image
              src="/images/hero-image.jpg"
              alt="Imagen de tecnología"
              fill
              className="object-cover rounded-lg"
              priority
            />            
          </div>
        </div>

      </div>
    </section>
  );
}