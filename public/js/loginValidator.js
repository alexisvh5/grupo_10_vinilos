window.addEventListener("load", ()=>{

    const form = document.getElementById("formularioLog")
    const email = document.getElementById("emailLog")
    const pass = document.getElementById("passLog")
    const listErrorLog = document.querySelector("section.errores ul")

    form.addEventListener("submit", (e)=> {
       e.preventDefault()

        let errores =[]

        let regEx =
      /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    
      let regExPass =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

      if(!regEx.test(email.value)){
        errores.push("Debes ingresar un correo valido") 
      }; 

      if (!regExPass.test(pass.value)){
        errores.push("La contraseña debe tener entre 8 y 15 caracteres incluir mayuscula, minuscula, un número y al menos un caracter especial")
      }; 

      if(errores.length > 0){
        errores.forEach(error => {
            listErrorLog.innerHTML += "<li style=color:red>"+ error +"</li>"
        })
      }

      if (errores.length == 0 ){
        form.submit()
      }

    })

})