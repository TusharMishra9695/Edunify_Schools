import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";
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
  } else {
    var sql =
      "INSERT INTO dummy VALUES ('" +
      payload.name +
      "','" +
      payload.address +
      "','" +
      payload.city +
      "','" +
      payload.state +
      "','" +
      payload.contact +
      "','" +
      payload.image +
      "','" +
      payload.email +
      "')";
    try {
      db.query(sql, (err, results) => {
        if (err) {
          console.log("db not connected");
        } else {
          console.log("registered");
        }
      });
      // return NextResponse.json(
      //   { result: "School registered!", success: true },
      //   { status: 201 }
      // );
    } catch (e) {
      return NextResponse.json({ message: e, success: false }, { status: 500 });
    }
  }
}
