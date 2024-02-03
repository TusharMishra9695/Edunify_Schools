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
      "INSERT INTO school_list (name, address, city, state, contact, image , email) VALUES ('" +
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
      const list = await new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
      return NextResponse.json(
        { result: "School registered Successfully", success: true },
        { status: 201 }
      );
    } catch (e) {
      return NextResponse.json({ message: e, success: false }, { status: 500 });
    }
  }
}
