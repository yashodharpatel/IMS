import nodemailer from "nodemailer";

export const sendEmail = async ({email, stock}:any) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAILSERVICE_USER,
                pass: process.env.MAILSERVICE_PASS
            }
        });

        const mailOptions = {
            from: process.env.MAIL_FROM,
            to: email,
            subject: "Low Stock!!",
            html: `<p>Stock ${stock}</p>`
        }

        const mailresponse = await transporter.sendMail(mailOptions);
        return mailresponse;
    } catch (error:any) {
        throw new Error(error.message);
    }
}
