function inserirNotas() { 
    let quantidadeDeAvaliacoes = Number(document.getElementById('quantidadeDeAvaliacoes').value);//pegando o elemento input quantidadeDeAvaliacoes, o seu valor e tranformando em um tipo numérico 

    let mediaOuMediaPonderada = document.getElementsByName('media-ou-media-ponderada')//pegando o elemento input type radio com os valores média ou média ponddera

    let divNotas = document.getElementById('notas');//pegando o elemento div que vai receber os inputs que vão receber as notas

    if (mediaOuMediaPonderada[0].checked) {//se o input type radio for igual a média

        let btnCalcular = document.getElementById('btn-calcular');//pegando a div que vai receber o botão para calcular a média

        let i = 1 

        while (i <= quantidadeDeAvaliacoes) {
            divNotas.innerHTML += `<div class='caixa-notas'>
            <label for="nota${i}">Nota da Avaliação ${i}</label>
            <input type="number" id="nota${i}" class="notas" min='0' max='10'></div>`
            //inserindo a div, label e input que vão receber as notas 

            i++
        }//laço enquanto para adicionar automaticamete a quantidade de notas

        btnCalcular.innerHTML = `<button type="submit" onclick="calcular()">Calcular Média</button>`//adicionando o botão calcular com o evento onclick 

    }else if(mediaOuMediaPonderada[1].checked){//se o input type radio for igual a média ponderada

        let btnCalcular = document.getElementById('btn-calcular');//pegando a div que vai receber o botão para calcular a média ponderada

        let i = 1 

        while (i <= quantidadeDeAvaliacoes) {
            divNotas.innerHTML += `<div class='caixa-notas'>
            <label for="nota${i}">Nota da Avaliação ${i}</label>
            <input type="number" id="nota${i}" class="notas" min='0' max='10'>
            <label for="peso${i}">Peso da Avaliação ${i}</label>
            <input type="number" id="peso${i}" class="notas" min='0' max='10'></div>`//inserindo a div, label e input que vão receber as notas e pesos 

            i++
        }//laço enquanto para adicionar automaticamete a quantidade de notas e pesos

        btnCalcular.innerHTML = `<button type="submit" id="media-ponderada"onclick="calcular()">Calcular Média Ponderada</button>`//adicionando o botão calcular com o evento onclick

    }else{
        let divResultado = document.getElementById('resultado');

        divResultado.innerHTML = `<p id='msg-erro'>Erro, preencher os campos.</p>`

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
function calcular() {//função do botão calcular
    
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