import {connect} from "@/dbConfig/dbConfig";
import Inventory from "@/models/inventoryModel";
import {NextRequest, NextResponse} from "next/server";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {name, category, description, quantity, userId} = reqBody;

        // check if the inventory already exists
        const inventory = await Inventory.findOne({name});
        if(inventory) {
            return NextResponse.json(
                {message: "Inventory already exists"},
                {status: 400}
            )
        }

        // create new inventory
        const newInventory = new Inventory({
            name, category, description, quantity, userId
        });

        const savedInventory = await newInventory.save();
        console.log(savedInventory);

        return NextResponse.json({
            message: "Inventory created successfully",
            success: true,
            savedInventory
        });

    } catch (error: any) {
        return NextResponse.json(
            {message: error.message},
            {status: 500}
        )
    }
}

