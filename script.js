function salvarCarro(event) {
    event.preventDefault();

    let titulo = documento.getElementById('title').value;
    let preco = documento.getElementById('preco').value;
    let marca = documento.getElementById('marca').value;
    let modelo = documento.getElementById('modelo').value;

    let cambioSelecionado = document.querySelector('input[name="marcha"]:checked');

    let cambio = cambioSelecionado ? cambioSelecionado.id : "Não informado";

    let carro = {
        titulo,
        preco,
        marca,
        modelo,
        cambio
    };

    let carros = JSON.parse(localStorage.getItems("carros")) || [];
    carros.push(carro);
    localStorage.setItem("carros", JSON.stringify(carros));

    adicionarNaTela(carro);

    document.querySelector("form").reset();
}

function adicionarNaTela(carro) {
    let lista = document.getElementById('listarCarros');
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <h3>${carro.titulo}</h3>
    <p><strong>Preço:</strong> R$ ${carro.preco}</p>
    <p><strong>Marca:</strong> R$ ${carro.marca}</p>
    <p><strong>Modelo:</strong> R$ ${carro.modelo}</p>
    <p><strong>Câmbio:</strong> R$ ${carro.cambio}</p>
    `

    lista.appendChild(card);
}

window.onload = function () {
    let carros = JSON.parse(localStorage.getItem ('carros')) || [];

    carros.forEach(carro => {
        adicionarNaTela(carro);
    });
}