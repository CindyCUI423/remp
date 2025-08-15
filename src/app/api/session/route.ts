import {NextResponse} from "next/server";
import {createSession, deleteSession} from "@/lib/session";

export async function POST (request: Request) {
    const body = await request.json();
    console.log("body:", body);
    const {token} = body;


    if (!token) {
        return NextResponse.json({error: 'Token is required'}, {status: 400});
    }

    await createSession(token);
    return NextResponse.json({ok: true});
}

export async function DELETE () {
    await deleteSession();
    return NextResponse.json({ok: true});
}