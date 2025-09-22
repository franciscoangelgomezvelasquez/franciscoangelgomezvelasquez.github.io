let empleados = []

function guardarEmpleado(){
    const nombreEmpleado = document.getElementById("nombre")
    const departamentoEmpleado = document.getElementById("departamento")
    const sueldoEmpleado = document.getElementById("salario")

    let Empleado = {
        Nombre: nombreEmpleado.value,
        Departamento: departamentoEmpleado.value,
        Sueldo: parseFloat(sueldoEmpleado.value)
    }

    empleados.push(Empleado)

    if(nombreEmpleado.value == "" || departamentoEmpleado.value == ""  || sueldoEmpleado.value == ""){
        alert("Porfavor ingrese un empleado")
        empleados.pop()
        
    }else{
        alert("Los datos se guardaron exitosamente...")
    }

    nombreEmpleado.value =""
    departamentoEmpleado.value =""
    sueldoEmpleado.value =""

    nombreEmpleado.focus()
    
    listarEmpleados()
}


function listarEmpleados(){
    const _tbody = document.querySelector("tbody")
    _tbody.innerHTML = ""

    for(i=0;i<empleados.length;i++){
        _tbody.innerHTML += `<td>${empleados[i].Nombre}</td>
                            <td>${empleados[i].Departamento}</td>
                            <td>${empleados[i].Sueldo}</td>`
    }
}



function sumarSueldos(){

    let sumaSueldos = 0

    for(i=0;i<empleados.length;i++){
        sumaSueldos += empleados[i].Sueldo
    }
    
    const pSumaSueldos = document.getElementById("sumaDeSueldos")
    pSumaSueldos.innerHTML = `La suma de los sueldos es: ${sumaSueldos}`

}


function sueldoMasAlto(){
    
    let sueldoMasAlto = 0 
    let nombreSueldoMasAlto = ""


    for(i=0;i<empleados.length;i++){
        if(empleados[i].Sueldo>sueldoMasAlto){
            sueldoMasAlto = empleados[i].Sueldo
            nombreSueldoMasAlto = empleados[i].Nombre
        }
    }
    
    alert(`El sueldo mas alto es de ${sueldoMasAlto} y es de ${nombreSueldoMasAlto}`)
}


