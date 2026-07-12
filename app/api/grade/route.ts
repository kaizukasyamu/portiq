import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request){
    try{
        const { portfolio } = await req.json();

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content:
                     "あなたはIT企業の採用担当兼シニアエンジニアです。ポートフォリオを評価してください。",    
                },
                {
                    role: "user",
                    content: portfolio,
                },
            ]
        });

        return NextResponse.json({
            result: completion.choices[0].message.content,
        });
    }   catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "アプリとの通信に失敗しました"},
            { status: 500 }
        );
    }
}