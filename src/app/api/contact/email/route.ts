import { NextResponse, NextRequest } from 'next/server';
import { NewVipMemberWelcome } from '../../../../../utils/contact';



export async function POST(request: NextRequest) {
    const body = await request.json()
    const res = await NewVipMemberWelcome({ ...body })

    try {

        return NextResponse.json(res);

    } catch (error) {
        console.log({ error })
        return NextResponse.json(error)
    }


}