import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/dbConfig/dbConfig";
import Inventory from "@/models/inventoryModel";

connect();

export async function DELETE(request: NextRequest, { params }: { params: { name: string } }) {
    try {

        await Inventory.deleteOne({ name: params.name });
        return NextResponse.json({
            message: "Inventory deleted successfully",
            success: true
        });
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}