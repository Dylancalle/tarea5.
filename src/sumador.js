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
export default saludar;
