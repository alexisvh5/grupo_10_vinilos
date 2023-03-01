window.addEventListener('load', ()=>{

    const name = document.getElementById("nameCreate")
    const img = document.getElementById("imageCreate")
    const form = document.getElementById("formCreate")
    const errorCreate = document.querySelector("section.errores ul")

    form.addEventListener("submit", (e)=>{
        e.preventDefault()

        let errores= []; 

        let extensiones = ["jpg", "jpeg", "png", "gif"]

        if(name.value.length === 0){
            errores.push("El nombre del album es obligatorio")
        };

        if (img.value ===""){
            errores.push("Debes incluir una imagen")
        } else if(!extensiones.includes(img.value.split(".").pop())){
            errores.push("Debes cargar un archivo .jpg, .jpeg, .png, .gif")
        }; 

        if (errores.value > 0){
            errores.forEach( error => {
                errorCreate.innerHTML += "<li style= color: red>"+ error+"</li>"
            })
        }

        if( errores == 0){
            form.submit()
        }

    })
})