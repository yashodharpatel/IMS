import { connect } from "@/dbConfig/dbConfig";
import Inventory from "@/models/inventoryModel";
import User from "@/models/userModel";

import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const userCount = await User.countDocuments({ role: "User" });
    const inventoryCount = await Inventory.countDocuments();
    const adminCount = await User.countDocuments({ role:"admin" });

    return NextResponse.json([
        { type: "User", count: userCount },
        { type: "Inventory", count: inventoryCount },
        { type: "Admin", count: adminCount },
    ]);

  } catch (error:any) {
    return NextResponse.json({error: error.message}, {status: 400});
  }
}
