import { NextResponse } from "next/server";
import { sendQuote } from "@/app/libs/sendQuote";

export async function POST(request) {
  try {
    const { full_Names, email_address, project_brief } = await request.json();

    const data = { full_Names, email_address, project_brief };
    // console.log(data);

    await sendQuote(full_Names, email_address, project_brief);

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
