import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";
export async function GET(req) {
  try {
    const list = await new Promise((resolve, reject) => {
      db.query("SELECT * FROM school_list", (err, results) => {
        if (err) {
          console.log("db not connected");
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
    return NextResponse.json({ result: list, success: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: e, success: false }, { status: 500 });
  }
}
