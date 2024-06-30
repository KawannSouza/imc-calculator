function calculate() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    const result = document.querySelector(".result");
    const imc = weight / (height ** 2);

    result.innerHTML = `<div>Seu IMC é ${imc.toFixed(4)}.<br> Estado:</div>`;
    if(imc < 18.5) {
        result.innerHTML += `<p>Abaixo do Peso</p>`;
        document.querySelectorAll('.result > p').forEach(function(element) {
            element.style.color = '#ef233c';
        });
    }else if(imc < 24.9) {
        result.innerHTML += `<p>Peso Normal</p>`;
        document.querySelectorAll('.result > p').forEach(function(element) {
            element.style.color = '#9ef01a';
        });
    }else if(imc < 29.9) {
        result.innerHTML += `<p>Sobrepeso</p>`;
        document.querySelectorAll('.result > p').forEach(function(element) {
            element.style.color = '#ffc300';
        });
    }else if(imc < 34.9) {
        result.innerHTML += `<p>Obesidade Grau 1</p>`;
        document.querySelectorAll('.result > p').forEach(function(element) {
            element.style.color = '#ef233c';
        });
    }else if(imc < 39.9) {
        result.innerHTML += `<p>Obesidade Grau 2</p>`;
        document.querySelectorAll('.result > p').forEach(function(element) {
            element.style.color = '#ef233c';
        });
    }else {
        result.innerHTML += `<p>Obesidade Grau 3</p>`;
        document.querySelectorAll('.result > p').forEach(function(element) {
            element.style.color = '#ef233c';
        });
    }
}