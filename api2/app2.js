import express from 'express';
import nodemailer from "nodemailer";
//xsmtpsib-37713545390f084a2c5315abf57df56061df7a47f28221e3e5ce0c6e0b1862a9-3iGTH5h3S8vdfe3P
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587, // or 465 for SSL
  secure: false, // true for port 465
  auth: {
    user: "870885002@smtp-brevo.com", // the email used in your Brevo account
    pass: "xsmtpsib-37713545390f084a2c5315abf57df56061df7a47f28221e3e5ce0c6e0b1862a9-3iGTH5h3S8vdfe3P", // your SMTP key from Brevo
  },
});

async function sendMail() {
  try {
    const info = await transporter.sendMail({
      from: '"Hello World" james.steppingstone@gmail.com', // must be a verified sender
      to: "james.joelj@gmail.com",
      subject: "Important Message",
      html: "<h2>Welcome!</h2><p>This email was sent using Brevo SMTP and Node.js.</p>",
    });

    console.log("✅ Email sent successfully:", info.messageId);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
}


const app = express();

app.get("/", (req, res)=>{
    sendMail();
    res.send("hello")
})

app.listen(3000, ()=>console.log("server running"));

























/*
const API_KEY =  "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"

const brevoClient = new Brevo.TransactionalEmailsApi();
brevoClient.setApiKey(
    Brevo.TransactionalEmailsApiApiKeys.apiKey,
    API_KEY
)


const sendEmail = async()=>{
    const sendSmtpEmail = new Brevo.SendSmtpEmail();

  sendSmtpEmail.subject = "Hello from Brevo via Node.js 🚀";
  sendSmtpEmail.htmlContent = `
    <h2>Welcome!</h2>
    <p>This is a test email sent from <strong>Node.js</strong> using Brevo API.</p>
  `;
  sendSmtpEmail.sender = { name: "Hello World", email: "james.steppingstone@gmail.com" };
  sendSmtpEmail.to = [{ email: "james.joelj@gmail.com", name: "Recipient Name" }];

   try {
    const response = await brevoClient.sendTransacEmail(sendSmtpEmail);
    console.log("✅ Email sent successfully:");
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
}

*/
