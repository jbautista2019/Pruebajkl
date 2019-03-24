function capturar() {
var nombrec=document.getElementById("nombrec").value;
var correo=document.getElementById("correo").value;
var puesto=document.getElementById("puesto").value;
var fecha=document.getElementById("fecha").value;
var situacion=valorRadio("situacion");
var url=document.getElementById("url").value;
var respuesta=valorRadio("respuesta");
var nombre2=document.getElementById("nombre2").value;
var correo2=document.getElementById("correo2").value;
  

    document.getElementById("nombrepinta").innerHTML=nombrec;
    document.getElementById("correopinta").innerHTML=correo;
    document.getElementById("puestopinta").innerHTML=puesto;
    document.getElementById("fechapinta").innerHTML=fecha;
    document.getElementById("situacionpinta").innerHTML=situacion;
    document.getElementById("urlpinta").innerHTML=url;
    document.getElementById("respuestapinta").innerHTML=respuesta;
    document.getElementById("nombre2pinta").innerHTML=nombre2;
    document.getElementById("correo2pinta").innerHTML=correo2;
    
    
    document.getElementById("nombrec2").value=nombrec;
    document.getElementById("correo22").value=correo;
    document.getElementById("puesto22").value=puesto;
    document.getElementById("fecha2").value=fecha;
    document.getElementById("situacion2").value=situacion;
    document.getElementById("url2").value=url;
    document.getElementById("respuesta22").value=respuesta;
    document.getElementById("nombre33").value=nombre2;
    document.getElementById("correo2pinta").value=correo2;
    
    
    
    if (respuesta=="si")
        {
            alert("Si usted tiene una referencia debe llenar nombre y correo");
        }

}

    function valorRadio(nombre)
    {
        var resultado="ninguno";
 
        var porNombre=document.getElementsByName(nombre);
        // Recorremos todos los valores del radio button para encontrar el
        // seleccionado
        for(var i=0;i<porNombre.length;i++)
        {
            if(porNombre[i].checked)
            {
                resultado=porNombre[i].value;
                break;
            }
        }
     return resultado;
        console.log(resultado);
           }
