export type PromoBannerProps = {
    content: string
    link?: URL
}

export type ProductList = {
    name: string[]
    prices: string[]
    available_sizes: string[]
}

export type ProductDetailsProps = {
    name: string,
    isAvailable: boolean,
    description: string,
    disclaimer?: string,
    images: string[]
}


export type ProductDetailsArray = ProductDetailsProps[]

export type ProductThumbnailProps = {
    name: string,
    images?: string[]
}

export type ProductItem = {
    name: string
    price: number
    size: string
    qty: number
    custom_message?: string
}

export type CartList = ProductItem[]

export type CheckoutBody = {
    mode: string
    line_items: SingleLineItems[]
    metadata: Record<string, unknown>
}

export type SingleLineItems = {
    price_data: {
        unit_amount: number
        currency: 'usd'
        product_data: {
            name: string
            description: string

        }
    },
    quantity: number
    description: string
}

