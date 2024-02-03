import { NextResponse } from "next/server";
export async function GET(req) {
  return NextResponse.json(
    { result: "school data", success: true },
    { status: 201 }
  );
}
