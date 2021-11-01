let form = document.getElementById("formulario");
let nombre = document.getElementsByName("Nombre"); //[0 y 1]
let correo = document.getElementsByName("Correo");
let password = document.getElementsByName("password")[0];
console.log(nombre);
console.log(correo);
console.log(password);
console.log(form);

form.addEventListener('submit',(e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //Verificando que el nombre haya sido ingresado
    for (let i = 0; i < nombre.length; i++) {
        const element = nombre[i];
        if (element.value === "") {
            alert(`Debes llenar el campo correspondiente ${nombre[i].placeholder}`)
        }else if (element.value.length > 30){
            alert(`El nombre ingresado es muy largo ${nombre[i].value}`)

        }        
    }
    if (password.value.length < 10 && password.value.search(/[0-9]/) < 0 ) {
        alert(`Tu contraseña debe tener al menor 10 caracteres`)    
        alert(`Tu contraseña debe tener al menos 1 numero`)            
        console.log(password.value)
    }

  
}