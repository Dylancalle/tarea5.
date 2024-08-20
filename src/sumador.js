function saludar(nombre) {
    if(nombre == "")
    {
        return "ingrese nombre"
    }
  return "hola" + nombre;
}

function saludar(nombre, genero){
    if(nombre == "")
    {
        return "ingrese nombre"
    }
    if(genero == "")
    {
        return "ingrese genero"
    }
    if(genero == "F")
    {
        return "Hola Sra. " + nombre
    }
    if(genero == "M")
    {
        return "Hola Sr. " + nombre
    }
    return "Ingrese en genero F (femenino) o M (Masculino)"
}

function saludar(nombre, genero, edad){
    if(nombre == "" || genero == "" || edad == "") 
    {
        return "llene todos los espacios"
    }
    if(edad > 30){
        if(genero == "F")
        {
            return "Hola Sra. " + nombre
        }
        if(genero == "M")
        {   
            return "Hola Sr. " + nombre
        }     
    }else{
        return "Hola Joven " + nombre
    }
  
    return "Ingrese en genero F (femenino) o M (Masculino)"
}
export default saludar;
