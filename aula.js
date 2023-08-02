async function getAulas(ano, mes) {
    const resp = await fetch("./aulas.json");
    let aulas = await resp.json();
    
}
getAulas();

async function getTodosOsDias(ano) {
    let meses = ["01", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
    const dias = meses.map(async (mes) => {
        return await getAulas(ano,mes);
    })
    return dias;
}
const dias = getTodosOsDias("2023")

function criarTD() {
    let trs = ["seg", "ter", "qua", "qui", "sex", "sab", "dom"]
    
    trs.forEach((tr) => {
        const elemTR = document.querySelector("."+tr)
        for (let i = 0; i <= 53; i++){
            elemTR.innerHTML += `<td class="dia">${i}</td>`
        }
    })
}

criarTD();
