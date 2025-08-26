export interface Product {
    id: string
    name: string
    slug: string
    description: string
    price: number
    oldprice?: number
    images: string[]
    category: string
    stock: number
    features: string[]
    isNew: boolean
}

export interface category {
    id: string
    name: string
    slug: string    
    images: string[]
    bannerImage?: string
    description?: string
    featured?: boolean
}

export interface Order {
    id: string
    customer: string
    date: string
    status: `pending´ / `completed´
    total: number
    items: {
        id: string
        name: string
        quantify: number
        price: number        
    }{}
}