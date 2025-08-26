import Image from "next/image";
import Link from "next/link";
import { Category } from "@/lib/types";

interface CategoryCardProps {
    category: Category;
}

export default function CategoryCardProps({ category}: CategoryCardProps) {
    return(
       <Link href={`/caterorias/${category.slug}`} className="group relative block overflow-hidden rounded-lg
       bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-square overflow-hidden bg-muted">
            <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={300}
                height={300}
                className="object-cover transition-transform group-hover:scale-105 h-full w-full "
            />
            <div className="absolute inset-0 bg-black/40 felx items-center justify-center">           
                <h3 className="text-wghite font-bold text-xl">category.name</h3>
            </div>  
        </div>
       </Link>           
    )
}