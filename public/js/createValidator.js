window.addEventListener('load', ()=>{

    const name = document.getElementById("nameCreate")
    const img = document.getElementById("imageCreate")
    const form = document.getElementById("formCreate")
    const errorCreate = document.querySelector("section.errores ul")

    form.addEventListener("submit", (e)=>{
        e.preventDefault()

        let errores= []; 

        let extensiones = ["jpg", "jpeg", "png", "gif"]

        if(name.value.length == 0){
            errores.push("El nombre del album es obligatorio")
        };

        if(!extensiones.includes(img.value.split(".").pop())){
            errores.push("Debes cargar un archivo .jpg, .jpeg, .png, .gif")
        }; 

        if(errores.length > 0){
            errores.forEach(error => {
                errorCreate.innerHTML += "<li style=color:red>"+ error +"</li>"
            })
          }

        if( errores.length == 0){
            form.submit()
        }

    })
})