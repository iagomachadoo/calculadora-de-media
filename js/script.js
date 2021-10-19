let inputQuantidadeAvaliacoes = document.getElementById('quantidadeDeAvaliacoes');

let inputRadioMediaMediaPonderada = document.getElementsByName('media-ou-media-ponderada');

let divNotas = document.getElementById('notas');

let btnCalcular = document.getElementById('btn-calcular');

let divResultado = document.getElementById('resultado');

let listaQuantidadeAvaliacoes = [];

function inserirNotas() { 

    if (inputRadioMediaMediaPonderada[0].checked){
        
        for(let i = 1; i <= inputQuantidadeAvaliacoes.value; i++){
            
            let elementoLabel = document.createElement('label');

            elementoLabel.setAttribute('id', `label-nota${i}`);

            elementoLabel.textContent = `Avaliação ${i}`;

            let elementoInput = document.createElement('input');

            elementoInput.setAttribute('type', 'number');

            elementoInput.setAttribute('id', `input-nota${i}`);

            divNotas.appendChild(elementoLabel);

            divNotas.appendChild(elementoInput);
            
        }

        let elementoBtnCalcular = document.createElement('input');
        elementoBtnCalcular.setAttribute('type', 'button');
        elementoBtnCalcular.setAttribute('value', 'Calcular Média');
        btnCalcular.appendChild(elementoBtnCalcular);

        
    }else if(inputRadioMediaMediaPonderada[1].checked){

        for(let i = 1; i <= inputQuantidadeAvaliacoes.value; i++){
            
            let elementoLabel = document.createElement('label');

            elementoLabel.setAttribute('id', `label-nota${i}`);

            elementoLabel.textContent = `Avaliação ${i}`;

            let elementoInput = document.createElement('input');

            elementoInput.setAttribute('type', 'number');

            elementoInput.setAttribute('id', `input-nota${i}`);

            divNotas.appendChild(elementoLabel);

            divNotas.appendChild(elementoInput);
            
        }

        let elementoBtnCalcular = document.createElement('input');
        elementoBtnCalcular.setAttribute('type', 'button');
        elementoBtnCalcular.setAttribute('value', 'Calcular Média Ponderada');
        btnCalcular.appendChild(elementoBtnCalcular);

    }else{
        
        let elementoParagrafo = document.createElement('p');

        elementoParagrafo.textContent = 'Erro, preencher os campos.';

        divResultado.appendChild(elementoParagrafo);
    }
}
function calcular() {
    
    let quantidadeDeAvaliacoes = Number(document.getElementById('quantidadeDeAvaliacoes').value);

    let mediaOuMediaPonderada = document.getElementsByName('media-ou-media-ponderada')

    if (quantidadeDeAvaliacoes == 2 && mediaOuMediaPonderada[0].checked) {
        let nota1 = Number(document.querySelector('#nota1').value);

        let nota2 = Number(document.querySelector('#nota2').value);

        let resultadoDaMedia = (nota1 + nota2) / quantidadeDeAvaliacoes

        let divResultado = document.getElementById('resultado');

        divResultado.innerHTML = `<p>Média: ${resultadoDaMedia.toFixed(2)}</p>`

        divResultado.style.background= 'var(--cor1)'
        divResultado.style.width= '300px'
        divResultado.style.height= '50px'
        divResultado.style.margin= 'auto'
        divResultado.style.display= 'flex'
        divResultado.style.borderRadius= '10px'
        divResultado.style.border= '1px solid black'
        divResultado.style.boxShadow= '5px 2px 7px rgba(0, 0, 0, 0.300)'
        
    }else if (quantidadeDeAvaliacoes == 3 && mediaOuMediaPonderada[0].checked) {
        let nota1 = Number(document.querySelector('#nota1').value);

        let nota2 = Number(document.querySelector('#nota2').value);

        let nota3 = Number(document.querySelector('#nota3').value);

        let resultadoDaMedia = (nota1 + nota2 + nota3) / quantidadeDeAvaliacoes

        let divResultado = document.getElementById('resultado');

        divResultado.innerHTML = `<p>Média: ${resultadoDaMedia.toFixed(2)}</p>`

        divResultado.style.background= 'var(--cor1)'
        divResultado.style.width= '300px'
        divResultado.style.height= '50px'
        divResultado.style.margin= 'auto'
        divResultado.style.display= 'flex'
        divResultado.style.borderRadius= '10px'
        divResultado.style.border= '1px solid black'
        divResultado.style.boxShadow= '5px 2px 7px rgba(0, 0, 0, 0.300)'
        
    }else if (quantidadeDeAvaliacoes == 4 && mediaOuMediaPonderada[0].checked) {
        let nota1 = Number(document.querySelector('#nota1').value);

        let nota2 = Number(document.querySelector('#nota2').value);

        let nota3 = Number(document.querySelector('#nota3').value);

        let nota4 = Number(document.querySelector('#nota4').value);

        let resultadoDaMedia = (nota1 + nota2 + nota3 + nota4) / quantidadeDeAvaliacoes

        let divResultado = document.getElementById('resultado');

        divResultado.innerHTML = `<p>Média: ${resultadoDaMedia.toFixed(2)}</p>`

        divResultado.style.background= 'var(--cor1)'
        divResultado.style.width= '300px'
        divResultado.style.height= '50px'
        divResultado.style.margin= 'auto'
        divResultado.style.display= 'flex'
        divResultado.style.borderRadius= '10px'
        divResultado.style.border= '1px solid black'
        divResultado.style.boxShadow= '5px 2px 7px rgba(0, 0, 0, 0.300)'
        
    }else if (quantidadeDeAvaliacoes == 5 && mediaOuMediaPonderada[0].checked) {
        let nota1 = Number(document.querySelector('#nota1').value);

        let nota2 = Number(document.querySelector('#nota2').value);

        let nota3 = Number(document.querySelector('#nota3').value);

        let nota4 = Number(document.querySelector('#nota4').value);

        let nota5 = Number(document.querySelector('#nota5').value);

        let resultadoDaMedia = (nota1 + nota2 + nota3 + nota4 + nota5) / quantidadeDeAvaliacoes

        let divResultado = document.getElementById('resultado');

        divResultado.innerHTML = `<p>Média: ${resultadoDaMedia.toFixed(2)}</p>`

        divResultado.style.background= 'var(--cor1)'
        divResultado.style.width= '300px'
        divResultado.style.height= '50px'
        divResultado.style.margin= 'auto'
        divResultado.style.display= 'flex'
        divResultado.style.borderRadius= '10px'
        divResultado.style.border= '1px solid black'
        divResultado.style.boxShadow= '5px 2px 7px rgba(0, 0, 0, 0.300)'
        
    }else if (quantidadeDeAvaliacoes == 2 && mediaOuMediaPonderada[1].checked) {
        let nota1 = Number(document.querySelector('#nota1').value);

        let nota2 = Number(document.querySelector('#nota2').value);

        let peso1 = Number(document.querySelector('#peso1').value);

        let peso2 = Number(document.querySelector('#peso2').value);

        let somaDosPesos = peso1 + peso2

        let resultadoDaMedia = ((nota1 * peso1) + (nota2 * peso2)) / somaDosPesos

        let divResultado = document.getElementById('resultado');

        divResultado.innerHTML = `<p>Média Ponderada: ${resultadoDaMedia.toFixed(2)}</p>`

        divResultado.style.background= 'var(--cor1)'
        divResultado.style.width= '450px'
        divResultado.style.height= '50px'
        divResultado.style.margin= 'auto'
        divResultado.style.display= 'flex'
        divResultado.style.borderRadius= '10px'
        divResultado.style.border= '1px solid black'
        divResultado.style.boxShadow= '5px 2px 7px rgba(0, 0, 0, 0.300)'

    }else if (quantidadeDeAvaliacoes == 3 && mediaOuMediaPonderada[1].checked) {
        let nota1 = Number(document.querySelector('#nota1').value);

        let nota2 = Number(document.querySelector('#nota2').value);

        let nota3 = Number(document.querySelector('#nota3').value);

        let peso1 = Number(document.querySelector('#peso1').value);

        let peso2 = Number(document.querySelector('#peso2').value);

        let peso3 = Number(document.querySelector('#peso3').value);

        let somaDosPesos = peso1 + peso2 + peso3

        let resultadoDaMedia = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / somaDosPesos

        let divResultado = document.getElementById('resultado');

        divResultado.innerHTML = `<p>Média Ponderada: ${resultadoDaMedia.toFixed(2)}</p>`

        divResultado.style.background= 'var(--cor1)'
        divResultado.style.width= '450px'
        divResultado.style.height= '50px'
        divResultado.style.margin= 'auto'
        divResultado.style.display= 'flex'
        divResultado.style.borderRadius= '10px'
        divResultado.style.border= '1px solid black'
        divResultado.style.boxShadow= '5px 2px 7px rgba(0, 0, 0, 0.300)'

    }else if (quantidadeDeAvaliacoes == 4 && mediaOuMediaPonderada[1].checked) {
        let nota1 = Number(document.querySelector('#nota1').value);

        let nota2 = Number(document.querySelector('#nota2').value);

        let nota3 = Number(document.querySelector('#nota3').value);

        let nota4 = Number(document.querySelector('#nota4').value);

        let peso1 = Number(document.querySelector('#peso1').value);

        let peso2 = Number(document.querySelector('#peso2').value);

        let peso3 = Number(document.querySelector('#peso3').value);

        let peso4 = Number(document.querySelector('#peso4').value);

        let somaDosPesos = peso1 + peso2 + peso3 + peso4

        let resultadoDaMedia = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4)) / somaDosPesos

        let divResultado = document.getElementById('resultado');

        divResultado.innerHTML = `<p>Média Ponderada: ${resultadoDaMedia.toFixed(2)}</p>`

        divResultado.style.background= 'var(--cor1)'
        divResultado.style.width= '450px'
        divResultado.style.height= '50px'
        divResultado.style.margin= 'auto'
        divResultado.style.display= 'flex'
        divResultado.style.borderRadius= '10px'
        divResultado.style.border= '1px solid black'
        divResultado.style.boxShadow= '5px 2px 7px rgba(0, 0, 0, 0.300)'

    }else if (quantidadeDeAvaliacoes == 5 && mediaOuMediaPonderada[1].checked) {
        let nota1 = Number(document.querySelector('#nota1').value);

        let nota2 = Number(document.querySelector('#nota2').value);

        let nota3 = Number(document.querySelector('#nota3').value);

        let nota4 = Number(document.querySelector('#nota4').value);

        let nota5 = Number(document.querySelector('#nota5').value);

        let peso1 = Number(document.querySelector('#peso1').value);

        let peso2 = Number(document.querySelector('#peso2').value);

        let peso3 = Number(document.querySelector('#peso3').value);

        let peso4 = Number(document.querySelector('#peso4').value);

        let peso5 = Number(document.querySelector('#peso5').value);

        let somaDosPesos = peso1 + peso2 + peso3 + peso4 + peso5

        let resultadoDaMedia = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4) + (nota5 * peso5)) / somaDosPesos

        let divResultado = document.getElementById('resultado');

        divResultado.innerHTML = `<p>Média Ponderada: ${resultadoDaMedia.toFixed(2)}</p>`

        divResultado.style.background= 'var(--cor1)'
        divResultado.style.width= '450px'
        divResultado.style.height= '50px'
        divResultado.style.margin= 'auto'
        divResultado.style.display= 'flex'
        divResultado.style.borderRadius= '10px'
        divResultado.style.border= '1px solid black'
        divResultado.style.boxShadow= '5px 2px 7px rgba(0, 0, 0, 0.300)'

    }else{
        let divResultado = document.getElementById('resultado');
    
        divResultado.innerHTML = `<p>Erro, preencher os campos.</p>`
        divResultado.style.background= 'var(--cor1)'
        divResultado.style.width= '300px'
        divResultado.style.height= '50px'
        divResultado.style.margin= 'auto'
        divResultado.style.display= 'flex'
        divResultado.style.borderRadius= '10px'
        divResultado.style.border= '1px solid black'
        divResultado.style.boxShadow= '5px 2px 7px rgba(0, 0, 0, 0.300)'
    }
}