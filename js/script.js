const inputQuantidadeAvaliacoes = document.getElementById('quantidadeDeAvaliacoes');

let inputRadioMediaMediaPonderada = document.getElementsByName('media-ou-media-ponderada');

let divNotas = document.getElementById('notas');

let btnCalcular = document.getElementById('btn-calcular');

let divResultado = document.getElementById('resultado');

let elementoBtnCalcular = document.createElement('input');

elementoBtnCalcular.setAttribute('type', 'button');

elementoBtnCalcular.setAttribute('onclick', 'calcular()');

let listaNotas = [];

let listaPesos = [];

function inserirNotas() {
    
    divResultado.innerHTML = '';
    
    if (inputRadioMediaMediaPonderada[0].checked){

        divNotas.innerHTML = '';

        for(let i = 1; i <= inputQuantidadeAvaliacoes.value; i++){
            
            let elementoLabel = document.createElement('label');

            elementoLabel.setAttribute('for', `input-nota${i}`);

            elementoLabel.textContent = `Avaliação ${i}`;

            let elementoInput = document.createElement('input');

            elementoInput.setAttribute('type', 'number');

            elementoInput.setAttribute('id', `input-nota${i}`);

            divNotas.appendChild(elementoLabel);

            divNotas.appendChild(elementoInput);
            
        }

        btnCalcular.innerHTML = '';
        
        elementoBtnCalcular.setAttribute('value', 'Calcular Média');
        
        btnCalcular.appendChild(elementoBtnCalcular);
 
    }else if(inputRadioMediaMediaPonderada[1].checked){

        divNotas.innerHTML = ''

        for(let i = 1; i <= inputQuantidadeAvaliacoes.value; i++){
            
            let elementoLabel = document.createElement('label');

            elementoLabel.setAttribute('for', `input-nota${i}`);

            elementoLabel.textContent = `Avaliação ${i}`;

            let elementoInput = document.createElement('input');

            elementoInput.setAttribute('type', 'number');

            elementoInput.setAttribute('id', `input-nota${i}`);

            let elementoLabelPeso = document.createElement('label');

            elementoLabelPeso.setAttribute('for', `input-peso${i}`);

            elementoLabelPeso.textContent = 'Peso';

            let elementoInputPeso = document.createElement('input');

            elementoInputPeso.setAttribute('type', 'number');

            elementoInputPeso.setAttribute('id', `input-peso${i}`);

            divNotas.appendChild(elementoLabel);

            divNotas.appendChild(elementoInput);

            divNotas.appendChild(elementoLabelPeso);

            divNotas.appendChild(elementoInputPeso);
            
        }

        btnCalcular.innerHTML = '';

        elementoBtnCalcular.setAttribute('value', 'Calcular Média Ponderada');

        btnCalcular.appendChild(elementoBtnCalcular);

    }else{
        
        let elementoParagrafo = document.createElement('p');

        elementoParagrafo.textContent = 'Erro, preencher os campos.';

        divResultado.appendChild(elementoParagrafo);
    }
}

function calcular() {

    let somaNotas = 0;/*inicializando a soma das notas*/

    let somaPesos = 0;/*inicializando a soma dos pesos*/

    let produtoNotaPeso = 0;

    let media = 0;/*inicializando a media*/

    let mediaPonderada = 0;

    listaNotas.length = 0;/*zerando a array*/

    listaPesos.length = 0;/*zerando a array*/

    for(let j = 1; j <= inputQuantidadeAvaliacoes.value; j++){

        let valorNotas = document.getElementById(`input-nota${j}`);

        let valorPesos = document.getElementById(`input-peso${j}`);

        listaNotas.push(Number(valorNotas.value));

        listaPesos.push(Number(valorPesos.value));
        
    }/*laço para pegar os inputs que vão receber as notas e jogar dentro da array listaNotas. Vai realizar o mesmo procedimento para os pesos*/
    
    for(let x in listaNotas){
        somaNotas += listaNotas[x]
    }/*laço que vai percorrer a array listaNotas e somar todos os seus valores*/

    for(let y in listaPesos){
        somaPesos += listaPesos[y]
    }/*laço que vai percorrer a array listaPesos e somar todos os seus valores*/

    for (let z in listaNotas, listaPesos){
        produtoNotaPeso += listaNotas[z] * listaPesos[z]
    }
    
    media = somaNotas / listaNotas.length;

    mediaPonderada = produtoNotaPeso / somaPesos;

    /*
    console.log(listaNotas);
    console.log(listaPesos);
    console.log(somaNotas);
    console.log(somaPesos);
    */
    console.log(media);
    console.log(mediaPonderada);
}