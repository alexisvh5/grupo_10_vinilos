window.addEventListener("load", () => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const pass = document.getElementById("password");
  const form = document.getElementById("formulario");
  const image = document.getElementById("image")
  const listaErrores = document.querySelector("section.errores ul")

  form.addEventListener("submit", (e)=>{

    e.preventDefault()
      
    
    let errores =[]
    
  
  let extensiones = ["jpg", "jpeg", "png", "gif"]
  ; 
    let regEx =
      /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    let regExPass =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

      if (name.value.length < 2){
        errores.push("El campo nombre debe tener entre 2 y 50 caracteres")
      }; 

      if (!regEx.test(email.value)){
        errores.push("Debe incluir un correo valido")
      }; 

      if (!regExPass.test(pass.value)){
        errores.push("La contraseña debe tener entre 8 y 15 caracteres incluir mayuscula, minuscula, un número y al menos un caracter especial")
      }; 

      if(!extensiones.includes(image.value.split('.').pop())){
errores.push("Debes cargar un archivo .jpg, .jpeg, .png, .gif")
      }; 

      
if (errores.length > 0){ 
  errores.forEach(error => {
    listaErrores.innerHTML += "<li style= color:red>" + error +"</li>"
  })
 }; 
  
  if (errores == 0 ){
        form.submit()
       }

  })
});