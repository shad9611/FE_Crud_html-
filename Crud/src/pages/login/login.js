
const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');


const expresiones = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	
}

const formValidation = (e) => {
    switch(e.target.name){
        case "usuario":
            if(expresiones.user.test(e.target.value)){
                document.getElementById('group_user').classList.add('form_group_incorrec');
            }else{
                document.getElementById('group_user').classList.remove('form_group_incorrec');
            }
            break;

            case "email":

            break;


            case "password":

           break;
    }
}
inputs.forEach((input)=>{
    input.addEventListener('keyup', formValidation);
    input.addEventListener('blur', formValidation);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

