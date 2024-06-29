
function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value) / 100; // 
    if (!/^\d+(\.\d+)?$/.test(peso) || !/^\d+(\.\d+)?$/.test(altura)) {
        exibirMensagemErro("Digite somente números.");
        return;
    }

    const imc = peso / (altura * altura);


    document.getElementById("resultado-modal").textContent = `Seu IMC é de ${imc.toFixed(2)}`;

  
    exibirModal(imc);
}

function exibirModal(imc) {
    const modal = document.getElementById("modal");
    const resultadoModal = document.getElementById("resultado-modal");
    resultadoModal.textContent = imc.toFixed(2);
    modal.style.display = "block"; 
}


function fecharModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; 
}
function exibirMensagemErro(mensagem) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = mensagem;
    errorMessage.style.display = "block";
    setTimeout(() => {
        errorMessage.style.display = "none";
    }, 3000); 
}

document.getElementById("botao-calcula").addEventListener("click", calcularIMC);


document.getElementById("close-modal").addEventListener("click", fecharModal);
