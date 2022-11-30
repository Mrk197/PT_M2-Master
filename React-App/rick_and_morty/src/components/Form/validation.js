
export function validation({username, password}) {
    const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i; //Estandar RFC 5322
    const regexPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,10}$/;
    let errors = {};
    if (username === '') {
        errors.username = "Debe ingresar un usuario";
    }
    else if (!regexEmail.test(username)) {
        errors.username = "Debe ingresar un correo válido"
    }
    else if(username.length >= 35){
        errors.username = "Longitud no válida"
    }
    if (password === '') {
        errors.password = "Ingrese contraseña"
    } 
    else if (!regexPwd.test(password)){
        errors.password = `Debe contener: 
        *Almenos un número
        *Una mayúscula
        *Una minúscua
        *Entre 6 y 10 caracteres`
    }
    return errors;
}