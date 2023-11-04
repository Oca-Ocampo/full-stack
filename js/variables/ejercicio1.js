
var nombre = "Oca";
var apellido = "Ocampo";

if(nombre.length >= 3 && apellido.length >= 3){
    console.log(nombre +" "+ apellido);
}else{
    if(nombre.length < 3 && apellido.length <3){
        console.log("El nombre y el apellido deben tener más de 3 caracteres");
    }else if(nombre.length <3){
        console.log("el nombre debe tener al menos 3 caracteres");
    }else{
        console.log("el apellido debe tener al menos 3 caracteres");
    }

}
