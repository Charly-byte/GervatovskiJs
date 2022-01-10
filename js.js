
$(document).ready(function(){



let miPrestamo = document.getElementById("formu");

miPrestamo.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
  
    let vcuo=Number();

    let vtot= Number();

    let formulario= e.target
    
    const TotalDatos=[];

    TotalDatos.push(formulario.children[1].value,Number(formulario.children[3].value),Number(formulario.children[5].value),vcuo,vtot);

    valorCuo(TotalDatos[0],TotalDatos[1],TotalDatos[2],TotalDatos[3],TotalDatos[4]);

    e.target.removeEventListener(e.type, validarFormulario)
    
    envioPost();

};

function valorCuo(nombreClie,vaLor,cuota,valorCuota,valorTotal){
    const cuota1=1;

    const cuota3=1.10;

    const cuota6=1.30;

    const cuota9=1.40;

    const cuota12=1.50;
switch(cuota){
    case 1:
        valorCuota=((vaLor*cuota1)/cuota);
        
        valorTotal=vaLor*cuota;
        
        informar(valorCuota,valorTotal,cuota,vaLor,nombreClie);

       

    break;

    case 3:
        valorCuota=((vaLor*cuota3)/cuota);
        
        valorTotal=vaLor*cuota3;
        
       informar(valorCuota,valorTotal,cuota,vaLor,nombreClie);
    break;


    case 6:
        valorCuota=((vaLor*cuota6)/cuota);
        
        valorTotal=vaLor*cuota6;
        
        informar(valorCuota,valorTotal,cuota,vaLor,nombreClie);
    break;

    case 9:
        valorCuota=((vaLor*cuota9)/cuota);
        
        valorTotal=vaLor*cuota9;
        
        informar(valorCuota,valorTotal,cuota,vaLor,nombreClie);
    break;

    case 12:
        valorCuota=((vaLor*cuota12)/cuota);
        
        valorTotal=vaLor*cuota12;
        
        informar(valorCuota,valorTotal,cuota,vaLor,nombreClie);
    break;

    default:
        const ul2=document.querySelector(".lista");
        
    
        const li2=document.createElement("li");
      
        li2.textContent=("Algo no salio bien");
       
        li2.setAttribute('style', 'list-style: none');

        ul2.appendChild(li2);
        
       

    break;

  
}

guarda_Local(valorCuota,valorTotal,cuota,vaLor);

}
 
function informar(vAlor,valorTo,cuOta,toTal,name){
    
    const ul5=document.querySelector(".lista");
    
    const li5=document.createElement("li");
    
    li5.textContent=("Señor:"+" "+ name);
  
    li5.setAttribute('style', 'list-style: none',);

    ul5.appendChild(li5);


    const ul4=document.querySelector(".lista");
    
    const li4=document.createElement("li");
    
    li4.textContent=("El valor solicitado es:"+" "+"$"+toTal.toFixed(2));
    
    li4.setAttribute('style', 'list-style: none');

    ul4.appendChild(li4);



    const ul2=document.querySelector(".lista");
    
    const li2=document.createElement("li");
    
    li2.textContent=("El valor de la cuota es:"+" "+"$"+vAlor.toFixed(2));

    li2.setAttribute('style', 'list-style: none');
    
    ul2.appendChild(li2);



    const ul3=document.querySelector(".lista");
    
    const li3=document.createElement("li");
    
    li3.textContent=("La cantidad de cuotas elegidas es:"+" "+cuOta+" "+"cuotas");

    li3.setAttribute('style', 'list-style: none');
    
    ul3.appendChild(li3);


    const ul=document.querySelector(".lista");
    
    const li=document.createElement("li");
    
    li.textContent=("El valor del credito total es:"+" "+"$"+valorTo.toFixed(2));

    li.setAttribute('style', 'list-style: none', 'text-align:justify');
    
    ul.appendChild(li);

   
};



function  guarda_Local(valores,valTotal,cuotas,totalPedido){
    let infoCre={
        valorCuota:parseInt(valores),
        
        valorTotal:parseInt(valTotal),
        
        cuota:parseInt(cuotas),
        
        totalPedido:parseInt(totalPedido),
    
    };
    localStorage.setItem("InfoCre",JSON.stringify(infoCre));
    
   

};

function limpiar(){
	
const ul=document.querySelector(".lista");

ul.innerHTML=" ";
};



function limpiarFormulario() {
	
    document.getElementById("formu").reset();
  };



$("#btnClean").click(function(){

    limpiar()
    limpiarFormulario()
    $("#div1").hide();

})


$("#div1").hide();
  
function envioPost(){
    $("#btn1").click(() => {

            var name = $("#name").val();
            var valor = $("#valor").val();
            var cuota = $("#cuota").val();
            $.post("https://jsonplaceholder.typicode.com/posts", {
                nombre: name,
                valores: valor,
                cuotas: cuota,
            }, function () {
                $("#div1").css("color", "white")

                    .delay(300)
                    .slideDown(1000);
                $("#div1").delay(1000)
                    .slideUp(1000);
            });


        })  }
        

})
  

 