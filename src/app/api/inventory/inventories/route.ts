import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/dbConfig/dbConfig";
import Inventory from "@/models/inventoryModel";

connect();

export async function GET(request: NextRequest) {
    try {
        const inventories = await Inventory.find({});
        return NextResponse.json(inventories);
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}