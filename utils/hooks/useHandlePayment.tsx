import { CartList, CheckoutBody, SingleLineItems } from '../types'
import { round } from 'lodash'

export default function useHandlePayment() {
    return { checkout, formatMetadata, calculateShipping, calculateTotal, formatBody }
}

async function checkout(body: any) {

    try {
        const res = await fetch('/api/payments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
        if (res.status === 200) {
            const session = await res.json()

            return session
        } else {
            throw new Error(await res.text())
        }
    } catch (error) {
        console.error('An unexpected error happened occurred:', error)
    }
}

function formatMetadata(cart: CartList) {
    let metaData: any = {}
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i]
        metaData[item.name] = `${item.size} - x ${item.qty}`
    }

    return metaData
}
function formatLineItems(cart: CartList) {
    let lineItems = []
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i]
        let body = {
            price_data: {
                currency: 'usd',
                unit_amount: item.price * 100,
                product_data: {
                    name: item.name,
                    description: item.size,
                },
            },
            quantity: item.qty,
        }

        lineItems.push(body)
    }
    return lineItems
}

function calculateTotal(cart: CartList) {
    let total = 0;

    if (cart.length >= 1) {
        for (let i = 0; i < cart.length; i++) {
            const item = cart[i];
            const price = item.price;
            const quantity = item.qty;

            total += price * quantity;
        }
    }

    return round(total, 2);
}
function calculateShipping(cart: CartList) {
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i]
        const charachtercount = item.size.length
        const length = charachtercount == 3 ? 1 : 2
        const quantity = item.qty;
        const size = Number(item.size.substring(0, length))
        if (item.size !== 'wax') {
            total += size * quantity
        } else {
            total += 4 * quantity
        }
    }
    let shipping = total / 16 + 8
    return round(shipping, 2)
}

function formatBody(cart: CartList, profileData?: any, affiliateCode?: string, total?: number, shipping_total?: number) {
    const metadata = formatMetadata(cart)
    const line_items = formatLineItems(cart)
    let body: any = {
        mode: 'payment',
        line_items,
        metadata
    }
    if (profileData?.userData?.customer_id) {
        body['customer_id'] = profileData.userData.customer_id
    }
    if (shipping_total) {
        body['shipping_total'] = shipping_total * 100
    }
    if (affiliateCode && total && shipping_total) {
        body['affiliate_code'] = affiliateCode
        let orderTotal = total + shipping_total
        console.log({ orderTotal })
        let processing_fee = orderTotal * 0.9
        console.log(round(processing_fee, 2))
        body['application_fee_amount'] = round(processing_fee * 100)
    }
    return body
}



