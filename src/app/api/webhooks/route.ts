import { NextResponse, NextRequest } from 'next/server';
import Stripe from 'stripe';
import { NewOrder } from '../../../../utils/contact';
import { supabase } from '../../../../utils/hooks/useStripe';
import { NextApiResponse } from 'next';
const stripe = new Stripe(process.env.STRIPE_SK!, {
    apiVersion: '2022-11-15',
});

export async function POST(request: NextRequest, res: NextApiResponse) {
    try {
        const event = await request.json()
        // Handle the event
        switch (event.type) {
            case 'checkout.session.completed':
                const session = event.data.object;
                console.log('Checkout Session Completed')
                console.log({ session })

                const res = await NewOrder({
                    order: {
                        email: session.customer_details.email,
                        id: session.payment_intent,
                        customer_name: session.customer_details.name,
                        receipt_url: session.receipt_url,
                        date: String(Date.now()),
                        phone: session.customer_details.phone
                    }
                })
                console.log({ res })


                break;

            case 'customer.subscription.created':
                const subscription_details = event.data.object;
                console.log({ subscription_details })


                break;

            // ... handle other event types


            default:
                console.log(`Unhandled event type ${event.type}`);
        }
        return NextResponse.json({received: true},{status: 200})
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error },{status: 500})
    }
}


