
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

form.addEventListener("submit",(e) =>{
    e.preventDefault()

    const Permt = Number(form.inPerm.value)
    const Cond = Number(form.inCond.value)
    
    const resul = Permt - Cond
    

        if (resul >= 0){
        resp2.innerText = `A velocidade está acima da permitida`
    
    }   else {
        resp2.innerText = `A velocidade está permitida`
    }
})
