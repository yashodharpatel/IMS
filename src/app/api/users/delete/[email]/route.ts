import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

connect();

export async function DELETE(request: NextRequest, { params }: { params: { email: string } }) {
    try {
        await User.deleteOne({ email: params.email });
        return NextResponse.json({
            message: "User deleted successfully",
            success: true
        });
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}