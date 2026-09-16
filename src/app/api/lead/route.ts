import { NextRequest, NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Check Honeypot spam trap
    if (body._gotcha && body._gotcha.length > 0) {
      return NextResponse.json(
        { success: false, message: "Spam rejected" },
        { status: 400 }
      );
    }

    // Validate with Zod
    const parsed = leadFormSchema.safeParse(body);
    if (!parsed.success) {
      const errorMsg = parsed.error.issues.map((i) => i.message).join("، ");
      return NextResponse.json(
        { success: false, message: errorMsg },
        { status: 400 }
      );
    }

    const { projectType, timeline, budget, name, phone, message } = parsed.data;

    // Log internally (In production this would dispatch an email or webhook)
    console.log("[LEAD_RECEIVED]", {
      timestamp: new Date().toISOString(),
      name,
      phone,
      projectType,
      timeline,
      budget,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "درخواست شما با موفقیت ثبت شد. به زودی با شما تماس خواهیم گرفت.",
    });
  } catch (err) {
    console.error("[LEAD_API_ERROR]", err);
    return NextResponse.json(
      { success: false, message: "خطای سرور در ثبت درخواست" },
      { status: 500 }
    );
  }
}
