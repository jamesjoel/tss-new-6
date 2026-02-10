import nodemailer from 'nodemailer'

const Transporter = nodemailer.createTransport({
    host : "smtp-relay.brevo.com",
    port : 587,
    secure : false,
    auth : {
        user : 'a08904001@smtp-brevo.com',
        pass : 'xsmtpsib-7c295802d6464e8f42cdd7bb13a6dbc0704965c6c6d7d37740a4d0aefaa29e22-7qvF7MTRLA0JbfHz'
    }
})

let DoSendMail = async(to, sub, body)=>{
    try{
        let response = await Transporter.sendMail({
            to : to,
            from : "tss759048@gmail.com",
            subject : sub,
            html : body
        })
        
    }catch(err){
        console.log("--------- ERROR ", err)
    }
}

export default DoSendMail;