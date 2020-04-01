//================Declaraciones========================
var z, t, w, op='nuevoV'; //Se puede declara varias variabkles a
                          //si sea de diferente tipo
var x=5; //Se puede declarar independiente
var y = 6; //Se puede usar espacio o no, javascript lo aceptara de toda forma
z = x+y; // Se puede usar despues de la declaracion sin ningun problema
t = 'Hola'; w=true; //z,t y w son variables de diferente tipo
//========================================================
//Un bloque de codigo es usado para ejecultar varias sentencias al mismo tiempo
// function functionName() {
//   document.getElementById('id').innerHTML='valor';
//   document.getElementById('id').style.size='valor_px';
// }
//========================================================
function pyc(id){
  if('none'==document.getElementById(id).style.display){
      document.getElementById(id).style.display="block";
  }else{
      document.getElementById(id).style.display="none";
  }
}

function cambio() {
  if(op=="nuevoV"){
      op='ValorA';
      document.getElementById("parrafo").innerHTML=t+' mundo';
      document.getElementById("parrafo").style.color='#ff4499';
  }else{
      op='nuevoV';
      document.getElementById("parrafo").innerHTML='Parrafo de prueba';
      document.getElementById("parrafo").style.color='#000000';
  }
}

function respuesta() {
    document.getElementById("p2").innerHTML=w;
}

function operacion(valor){
    var v=false;
    if(valor=="or"){ document.getElementById("p2").innerHTML=(v||w); }
    else { document.getElementById("p2").innerHTML=(false&&w); }
}
