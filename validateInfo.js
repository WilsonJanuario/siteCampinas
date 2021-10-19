export default function validateInfo(values) {
    let errors = {};
    if (!values.username.trim()){
        errors.username = "Username required";
   }
   //Emaill
   if (!values.email) {
       errors.email = " Email require";
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
       errors.email = "Endereço de E-mail inválido"
   }

   if(!values.password) {
       errors.password = "Password require"
   }else if (values.password.lenght < 6) {
       errors.password = " Prrecise de mais de seis";
   }

   if(!values.password2) {
    errors.password2 = "Password require"
}else if (values.password2 !== values.password) {
    errors.password2 = " Senhas não conferem";
}
return errors;


}