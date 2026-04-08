import * as YUP from 'yup'

let LoginSchema = YUP.object({
    email : YUP.string().email("*").required("*"),
    password : YUP.string().required("*"),

})

export default LoginSchema