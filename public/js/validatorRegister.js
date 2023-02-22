window.addEventListener("load", () => {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const address = document.getElementById("address");
    const pass = document.getElementById("password");
    const configpass = document.getElementById("confPass");
    const form = document.getElementById("formulario");
    const errorText = document.getElementById("parrafoError");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      let regEx =
        /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
   let regExPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
      textoError = [];
  
      if (name.value.length < 8) {
        textoError.push("El nombre debe tener al menos 8 caracteres");
        
      }
  
      if (!regEx.test(email.value)) {
          textoError.push("debe introducir un correo valido");
        
      };
      if(address.value.length < 1){
          textoError.push("debe introducir una direccion")
      }; 
  
      if(!regExPass.test(pass.value)){
          textoError.push("La contraseña debe tener de 8 a 15 caracteres incluir mayuscula, minuscula, numeros y al menos un caracter especial")
      }
  
      if(!regExPass.test(configpass.value)){
          textoError.push("debes repetir el password")
      }
  
  
  
      errorText.innerHTML = textoError.join()
      errorText.style.color = "red"; 
    });
    
   /* if(textoError.length > 0) {
  
      let listaError = document.querySelector("parrafoError")
      for (let i = 0; i <textoError.length; i++){
          listaError.innerHTML += "<li>+ errores[i] +</li>"
      }
    }*/
    
  });