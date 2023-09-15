import {connect} from "@/dbConfig/dbConfig";
import Inventory from "@/models/inventoryModel";
import {NextRequest, NextResponse} from "next/server";
import {sendEmail} from "@/helpers/lowstockmailer";
import {getDataFromToken} from "@/helpers/getDataFromToken";
import User from "@/models/userModel";

connect();

export async function PUT(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId});

        const reqBody = await request.json();
        const {name, category, description, quantity, userId} = reqBody;

        const inventory = await Inventory.findOne({name});

        // check if the inventory doesn't exist
        if(!inventory) {
            return NextResponse.json(
                {message: "Inventory doesn't exists"},
                {status: 400}
            )
        }

        inventory.name = name;
        inventory.category = category;
        inventory.description = description;
        inventory.quantity = quantity;
        inventory.userId = userId;

        const updatedInventory = await inventory.save();
        console.log(updatedInventory);

        if(updatedInventory.quantity < 10) {
            try{
                await sendEmail({email: user.email, stock: updatedInventory.quantity})
            } catch (e) {
                console.log(e);
            }
        }

        return NextResponse.json({
            message: "Inventory updated successfully",
            success: true,
            updatedInventory
        });

    } catch (error: any) {
        return NextResponse.json(
            {message: error.message},
            {status: 500}
        )
    }
}

