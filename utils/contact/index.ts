import sgMail from '@sendgrid/mail'
import twilio from "twilio"
const accountSid = process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID;
const authToken = process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN;


const client = twilio(accountSid, authToken);

type SendTextProps = {
    message: string
    phone: string
}

export async function sendtextcode({ message, phone }: SendTextProps) {

    try {
        let text = await client.messages
            .create({
                body: message,
                from: '+18888912749',
                to: phone
            })
        console.log(text)
        return text.sid
    } catch (error) {
        console.log(error)
    }



}

type EmailProps = {
    info: {
        subject: string
        phone: string
        message: string
        name: string
        email: string
    }
}

export async function sendEmail({ info }: EmailProps) {


    try {

        sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID!)
        let msg: any = {
            "from": {
                "email": info.email
            },
            "personalizations": [
                {
                    "to": [
                        {
                            "email": "admin@kustomcharmz.com"
                        }
                    ],
                    "dynamic_template_data": {
                        "subject": info.subject,
                        "phone": info.phone,
                        "message": info.message,
                        "name": info.name
                    }
                }
            ],
            "template_id": "d-87325302f0804cccaa74d32e9ee78089"
        }

        console.log(msg);

        let result = await sgMail.send(msg);
        return result
    } catch (error) {
        console.log(error)
    }


}

type NewOrderProps = {
    order: {
        email: string,
        id: number | string
        customer_name: string
        receipt_url: string,
        date: string,
        phone: number
    }
}

export async function NewOrder({ order }: NewOrderProps) {
    console.log('my order')
    console.log(order)

    try {

        sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID!)
        let msg: any = {
            "from": {
                "email": "admin@kustomcharmz.com"
            },
            "personalizations": [
                {
                    "to": [
                        {
                            "email": "admin@kustomcharmz.com"
                        }
                    ],
                    "dynamic_template_data": {
                        "email": order.email,
                        "id": order.id,
                        "customer_name": order.customer_name,
                        "receipt_url": order.receipt_url,
                        "date": order.date,
                        "phone": order.phone

                    }
                }
            ],
            "template_id": "d-416c5d218e934e489d73e0af0e662360"
        }


        console.log(msg);

        let result = await sgMail.send(msg);
        return result
    } catch (error) {
        console.log(error)
    }

}

type ShippingConfirmationProps = {
    info: {
        name: string
        tracking_number: string
        order_number: string
        to: string
    }
}

export async function ShippingConfirmation({ info }: ShippingConfirmationProps) {
    console.log('info')
    console.log(info)


    try {

        sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID!)
        let msg: any = {
            "from": {
                "email": "admin@kustomcharmz.com"
            },
            "personalizations": [
                {
                    "to": [
                        {
                            "email": info.to
                        }
                    ],
                    "cc": [{
                        "email": "admin@kustomcharmz.com"
                    }],
                    "dynamic_template_data": {
                        "name": info.name,
                        "tracking_number": info.tracking_number,
                        "order_number": info.order_number,
                    }
                }
            ],
            "template_id": "d-7ed702adc9cf456cb13f0078cae06238"
        }


        console.log(msg);

        let result = await sgMail.send(msg);
        return result
    } catch (error) {
        console.log(error)
    }
}

type VipWelcomeProps = {
    email: string
}
export async function NewVipMemberWelcome({ email }: VipWelcomeProps) {
    console.log('new member')
    console.log(email)


    try {

        sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID!)
        let msg: any = {
            "from": {
                "email": "admin@kustomcharmz.com"
            },
            "personalizations": [
                {
                    "to": [
                        {
                            "email": email
                        }
                    ],
                    "dynamic_template_data": {
                        "first_name": email
                    }
                }
            ],
            "template_id": "d-1eef6c1bb66f4661bb12a939714e3f99"
        }


        console.log(msg);

        let result = await sgMail.send(msg);
        return result
    } catch (error) {
        console.log(error)
    }

}

