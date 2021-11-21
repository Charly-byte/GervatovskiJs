let miPrestamo = document.getElementById("formu");

miPrestamo.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();

    let vcuo=Number();

    let vtot= Number();

    let formulario= e.target
    
    const TotalDatos=[];

    TotalDatos.push(formulario.children[1].value,Number(formulario.children[3].value),Number(formulario.children[5].value),vcuo,vtot);

    console.log(TotalDatos);

    valorCuo(TotalDatos[0],TotalDatos[1],TotalDatos[2],TotalDatos[3],TotalDatos[4]);

}
var boton= document.getElementById("btnClean");

boton.onclick= function () { 
    limpiar(); 
    limpiarFormulario()
};
function limpiarFormulario() {
    document.getElementById("formu").reset();
  }
function valorCuo(n,v,c,vc,vt){
    const cuota1=1;

    const cuota3=1.10;

    const cuota6=1.30;

    const cuota9=1.40;

    const cuota12=1.50;
switch(c){
    case 1:
        vc=((v*cuota1)/c);
        vt=v*c;
        informar(vc,vt,c,v,n);
    break;

    case 3:
       vc=((v*cuota3)/c);
       vt=v*cuota3;
       informar(vc,vt,c,v,n);
    break;


    case 6:
        vc=((v*cuota6)/c);
        vt=v*cuota6;
        informar(vc,vt,c,v,n);
    break;

    case 9:
        vc=((v*cuota9)/c);
        vt=v*cuota9;
        informar(vc,vt,c,v,n);
    break;

    case 12:
        vc=((v*cuota12)/c);
        vt=v*cuota12;
        informar(vc,vt,c,v,n);
    break;

    default:
        const ul2=document.querySelector(".lista");
        const li2=document.createElement("li");
        li2.textContent=("Algo no salio bien");
        ul2.appendChild(li2);
    break;
}
 }
function informar(v,vt,c,t,n){
    
    const ul5=document.querySelector(".lista");
    const li5=document.createElement("li");
    li5.textContent=("Señor:"+" "+ n);
    ul5.appendChild(li5);


    const ul4=document.querySelector(".lista");
    const li4=document.createElement("li");
    li4.textContent=("El valor solicitado es:"+" "+"$"+t.toFixed(2));
    ul4.appendChild(li4);



    const ul2=document.querySelector(".lista");
    const li2=document.createElement("li");
    li2.textContent=("El valor de la cuota es:"+" "+"$"+v.toFixed(2));
    ul2.appendChild(li2);



    const ul3=document.querySelector(".lista");
    const li3=document.createElement("li");
    li3.textContent=("La cantidad de cuotas elegidas es:"+" "+c+" "+"cuotas");
    ul3.appendChild(li3);


    const ul=document.querySelector(".lista");
    const li=document.createElement("li");
    li.textContent=("El valor del credito total es:"+" "+"$"+vt.toFixed(2));
    ul.appendChild(li);
}



function limpiar(){
const ul=document.querySelector(".lista");
ul.innerHTML=" ";
}

