function ingreso() {
    let num=Number(prompt("Ingrese el numero de inicio"))
    let num2=Number(prompt("Ingrese el numero de fin"))
    calculo(num,num2) 

}

function calculo(n,n2) {
    let num1=(n+n2)*(n2/2);
    resultado(num1);
}

function resultado(r) {
    console.log(r);
    
}

ingreso();
