import { NextResponse, NextRequest } from 'next/server';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SK!, {
    apiVersion: '2022-11-15',
});



export async function POST(request: NextRequest) {
    const req = await request.json()

    let body: any = {
        line_items: req.line_items,
        mode: req.mode,
        metadata: req.metadata,
        success_url: `${process.env.DOMAIN}payment/success/?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: req.cancel_url || `${process.env.DOMAIN}cart?canceled=true`,
        allow_promotion_codes: true,
        payment_method_types: req.payment_method_types || ['card', 'afterpay_clearpay', 'cashapp', 'klarna'],
        phone_number_collection: {
            enabled: true
        },
        shipping_address_collection: {
            allowed_countries: ['US']
        },
    }
    if (req.shipping_total) {
        body['shipping_options'] = [
            {
                shipping_rate_data: {
                    type: 'fixed_amount',
                    display_name: 'Candleicious Priority Shipping',
                    fixed_amount: {
                        amount: req.shipping_total,
                        currency: 'usd'
                    },

                }
            }
        ]
    }
    if (req.customer_id) {
        body['customer'] = req.customer_id
    }
    if (req.application_fee_amount && req.affiliate_code && req.mode !== 'subscription') {
        body['payment_intent_data'] = {
            application_fee_amount: req.application_fee_amount,
            transfer_data: {
                destination: req.affiliate_code,
            },
        }
    }
    if (req.application_fee_amount && req.affiliate_code && req.mode === 'subscription') {
        body['subscription_data'] = {
            transfer_data: {
                destination: req.affiliate_code,
                amount_percent: 10
            }
        }
    }


    try {
        console.log({ body })
        const session = await stripe.checkout.sessions.create(body)
        return NextResponse.json(session.url);

    } catch (error) {
        console.log({ error })
        return NextResponse.json(error)
    }


}