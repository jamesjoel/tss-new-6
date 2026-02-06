import nodemailer from 'nodemailer';
const Transporter=nodemailer.createTransport({
    host:"smtp-relay.brevo.com",
    port:587,
    secure : false,
    auth :{
        user :'a0ab66001@smtp-brevo.com',
        pass : 'xsmtpsib-7aa1c5f8b9112f386d54a4bcbdb65479f6ce136850accabcd9420ae93787d868-Y6ejYHHjRjfTqjOO'
    }
})


let dosendMail=async(to,sub,body)=>{
    try{
    let response = await Transporter.sendMail({
        to:to,
        from: "amanpatel97529@gmail.com",
        subject:sub,
        html:body
        
    })
    // console.log(response.messageId)
  }catch(err){
         console.log("------ERROR",err)
  }
}

export default dosendMail;