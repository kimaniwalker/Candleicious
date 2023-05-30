"use client"
import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
import Stripe from 'stripe';
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SK!, {
    apiVersion: '2022-11-15',
});

export default function useStripe() {

    let isLoading = false


    async function createAccountLink(account_id: string) {
        const accountLink = await stripe.accountLinks.create({
            account: account_id,
            refresh_url: `${process.env.NEXT_PUBLIC_DOMAIN}auth/profile?affiliate_refresh=true`,
            return_url: `${process.env.NEXT_PUBLIC_DOMAIN}auth/profile`,
            type: 'account_onboarding',
        });
        console.log({ accountLink })
        return accountLink
    }
    async function stripeBillingPortal(customer_id: string) {
        const session = await stripe.billingPortal.sessions.create({
            customer: customer_id,
            return_url: `${process.env.NEXT_PUBLIC_DOMAIN}auth/profile`,
        });
        console.log({ session })
        return session
    }
    async function affiliateLoginLink(account_id: string) {
        const loginLink = await stripe.accounts.createLoginLink(
            account_id
        );
        console.log({ loginLink })
        return loginLink
    }

    function hasActiveSubscription(data: any) {
        const subscription = data?.customerData?.subscriptions?.data[0]

        if (subscription?.status === 'active') return true
        else return false
    }
    function isAffiliateReady(data: any) {
        const accountReady = data?.accountData?.charges_enabled && data?.accountData?.payouts_enabled

        if (accountReady) return true
        else return false
    }

    return { supabase, createAccountLink, affiliateLoginLink, stripeBillingPortal, isLoading, getAcctData, getCustomerData, hasActiveSubscription, isAffiliateReady }
}




export async function getAcctData(account_id: string) {
    const account = await stripe.accounts.retrieve(
        account_id
    );
    console.log({ account })
    return account
}
export async function getCustomerData(customer_id: string) {
    const customer = await stripe.customers.retrieve(
        customer_id, { expand: ['subscriptions'] }
    );
    console.log({ customer })
    return customer
}