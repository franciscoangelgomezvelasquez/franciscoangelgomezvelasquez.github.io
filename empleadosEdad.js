let empleados = []
const fechaActual = new Date()
const mesActual = fechaActual.getMonth()
const añoActual = fechaActual.getFullYear()
let edadEmpleado = 0
let sumaEdades = 0
let promedio = 0


function guardarEmpleado(){
    const nombreEmpleado = document.getElementById("nombre")
    const departamentoEmpleado = document.getElementById("departamento")
    const fechaEmpleado = document.getElementById("fecha-nac")
    


    let Empleado = {
        Nombre: nombreEmpleado.value,
        Departamento: departamentoEmpleado.value,
        Nacimiento : fechaEmpleado.value,
        
    }

    empleados.push(Empleado)

    if(nombreEmpleado.value == "" || departamentoEmpleado.value == ""  || fechaEmpleado.value == ""){
        alert("Porfavor ingrese un empleado")
        empleados.pop()
        
    }else{
        alert("Los datos se guardaron exitosamente...")
    }


    nombreEmpleado.value =""
    departamentoEmpleado.value =""
    fechaEmpleado.value =""

    nombreEmpleado.focus()
    
    calcularEdad()
    listarEmpleados()
}


function calcularEdad() {
    for(let i = 0; i < empleados.length; i++){
        const fechaNacimiento = new Date(empleados[i].Nacimiento)
        const mesNacimiento = fechaNacimiento.getMonth() + 1 
        let edadEmpleado = añoActual - fechaNacimiento.getFullYear()

        if(mesActual > mesNacimiento){
            empleados[i].Edad = edadEmpleado
        }else{
            empleados[i].Edad = edadEmpleado - 1
        }
    }
}


function listarEmpleados(){
    const _tbody = document.querySelector("tbody")
    _tbody.innerHTML = ""

    for(i=0;i<empleados.length;i++){
        _tbody.innerHTML += `<td>${empleados[i].Nombre}</td>
                            <td>${empleados[i].Departamento}</td>
                            <td>${empleados[i].Nacimiento}</td>
                            <td>${empleados[i].Edad}</td>`
    }
}



function calcularPromedio(){
    
    for(let i = 0;i<empleados.length;i++){
        sumaEdades += empleados[i].Edad
    }

    promedio = sumaEdades / empleados.length

    const pPromedioEdad = document.getElementById("promedioEdad")
    pPromedioEdad.innerHTML = `El promedio de edad de los empleados es: ${promedio}`
}