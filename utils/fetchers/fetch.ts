import { getAcctData, getCustomerData, supabase } from "../hooks/useStripe"
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SK!, {
    apiVersion: '2022-11-15',
});

export async function fetchUserData() {
    const { data } = await supabase.auth.getUser()
    let session = data

    if (session.user) {
        const { data, error } = await supabase.from('user_profiles').select().eq('id', session.user.id)

        if (data && data?.length >= 1) {
            const accountData = await getAcctData(data[0].account_id)
            const customerData = await getCustomerData(data[0].customer_id)

            return { userData: data[0], accountData, customerData }

        } else {
            const customer = await stripe.customers.create({
                description: 'Candleicious candle customer',
                email: session.user.email,
                metadata: { id: session.user.id }
            });
            const account = await stripe.accounts.create({
                type: 'express',
                email: session.user.email,
                business_type: 'individual',
                individual: {
                    email: session.user.email,
                }
            });

            const { error } = await supabase
                .from('user_profiles')
                .insert({ id: session.user.id, email: session.user.email, customer_id: customer.id, account_id: account.id })
            console.log({ error })
            if (!error) {
                console.log('inserted data')
                let userData = [{ id: session.user.id, email: session.user.email, customer_id: customer.id, account_id: account.id }]
                let profileData = { userData: userData[0], customerData: customer, accountData: account }

                return profileData
            }


        }


    }
    return
}

