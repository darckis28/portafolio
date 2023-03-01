
//navegador
const list = document.querySelectorAll('.nav-mobile__list');
        function active(){
            list.forEach((item)=>
                item.classList.remove("active"));
                this.classList.add("active");
        }
list.forEach((item)=> 
item.addEventListener('click',active))
//formulario
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const form = document.getElementById("form");
const parrafo = document.getElementById("msj");
 form.addEventListener("submit", e=>{
        let warnings=""
        let entrar = false;
        let val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        if(nombre.value.length <= 6){
                warnings += `El nombre no es valido<br>`
                entrar= true;
                e.preventDefault();
        }else{
                warnings=""    
        }
        console.log(!val.test(email.value))
        if(!val.test(email.value)){
                warnings+= `El email no es valido<br>`
                entrar= true;
                e.preventDefault();
        }else{
                warnings=""
        }
        parrafo.value=warnings;
        if(entrar){
                parrafo.innerHTML = warnings
        }
 })
