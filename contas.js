const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let numContas = 0
let valtotal = 0
let resposta = " "

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const descricao = frm.inDescri.value
    const valor = Number(frm.inValor.value)

    numContas++
    valtotal = valtotal + valor

    resposta = resposta + descricao + " - R$:" + valor.toFixed(2) + "\n"

    resp1.innerText = `${resposta}-------------------------`
    resp2.innerText = `${numContas} Conta(s) = total R$: ${valtotal.toFixed(2)}`

    frm.inDescri.value = ""
    frm.inValor.value = ""
    frm.inDescri.focus()

})