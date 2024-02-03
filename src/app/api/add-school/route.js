import { NextResponse } from "next/server";
export async function POST(req, res) {
  let payload = await req.json();
  if (
    !payload.name ||
    !payload.address ||
    !payload.city ||
    !payload.state ||
    !payload.contact ||
    !payload.email
  ) {
    return NextResponse.json(
      { result: "require field not found", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { result: "new user created", success: true },
    { status: 201 }
  );
}
