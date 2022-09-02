import "./styles.css";
// ingresar contraseña  mi primer intento
/* let clave:string
let cont:number = 0
 clave = prompt("ingrese la contraseña")
let men:string
  
 

 while(cont<3) { 
    
    if(clave==="carba"){ 
    console.log("contraseña correcta")           
    cont=3
    men="bienvenido"     

        
    } else {
      console.log("contraseña incorrecta")      
      clave = prompt("ingrese la contraseña") 
      men="contraseña incorrecta"
     } 
     
      cont++
    }
    console.log(men)
  */
// forma corecta coregida en clase
/*let contraCorrc:string= "carba"
 let intento:number=0
 let contraIngre:string 


 while(intento<=3 && contraIngre!= contraCorrc ){
   contraIngre= prompt("ingrese la clave")
   intento++
   console.log("intentos: ",intento); 

 }
 if (contraIngre== contraCorrc){
   console.log("contraseña correcta");   
 } else{
   console.log("contraseñas incorrecta ya no tiene intentos")
 }*/
/* let numIngre:any = document.getElementById("numeroingresado") 
  let boton= document.getElementById("guardar")
 let numero:number
 
 
 boton.addEventListener("click",(e) =>{
   e.preventDefault()
   
  numero=Number(numIngre.value)
 
  while(numero!<0){
   console.log("ingrese un numero mayor que cero")
    numero=1 
}
console.log(numero)
  let resultado= numero % 2
  if (resultado === 0){
  console.log("el numero ingresado es par ")

} else {
   console.log("el numero ingresado es inpar")
}  


}) */
/* const altp:any = document.getElementById("alturp")
const cal = document.getElementById("nose")
let altura:number
const altPermitida:number =1.30
cal.addEventListener("click",() => {
 altura =parseFloat (altp.value)
 if (altura>=altPermitida){
   console.log("puede subir a la montaña")
 } else{
   console.log("no puede subir a la montaña")
 } 

 
})*/
/* const usar:string=document.getElementById("usar")
const clave:string=document.getElementById("clave")
const boton= document.getElementById("ingre")
boton.addEventListener("click",()=>{
  let usuario=String(usar.value)
  let contraseña=String(clave.value)
 
  if(usuario==="monkey" && contraseña==="123456"){
    console.log("bienvenido monkey")
  } else{
    console.log(" usuario/contraseña incorrecta intente nuevamente")
  }
}) */
/* Desarrolle un algoritmo que dada una compra:
precio unitario, cantidad y el mes, indicados
por el usuario, determine si el cliente tiene
descuento o no */
let precio: string = document.getElementById("preciop");
let cantidad: string = document.getElementById("cantidad");
let mes: string = document.getElementById("fecha");
const botonc = document.getElementById("ingre");
botonc.addEventListener("click", () => {
  let prcTotal = precio.value * cantidad.value;
  console.log(prcTotal);
});
