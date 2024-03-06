function info1() {
    var peso = window.document.getElementById('n1');
    peso = Number.parseFloat(peso.value);
    var alt = window.document.getElementById('n2');
    alt = Number.parseFloat(alt.value);
    var altquad = alt * alt;
    var calc = peso / altquad;
    var res = window.document.getElementById('res1');
    res.innerHTML = ("Seu IMC é de " + calc.toFixed(2));
    var res2 = window.document.getElementById('res2');

    if (calc < 16) {
        res2.innerHTML = ("Magreza grave!");
        res2.style.color = 'red';
    }

    else if (calc >= 16 && calc < 17) {
        res2.innerHTML = ("Magreza moderada!");
        res2.style.color = 'yellow';
    }

    else if (calc >= 17 && calc < 18.5) {
        res2.innerHTML = ("Magreza Leve!");
        res2.style.color = 'lightblue';
    }

    else if (calc >= 18.5 && calc < 25) {
        res2.innerHTML = ("Saudável!");
        res2.style.color = 'green';
    }

    else if (calc >= 25 && calc < 30) {
        res2.innerHTML = ("Sobrepeso!");
        res2.style.color = 'yellow';
    }

    else if (calc >= 30 && calc < 35) {
        res2.innerHTML = ("Obesidade Grau I");
        res2.style.color = 'red';
    }

    else if (calc >= 35 && calc < 40) {
        res2.innerHTML = ("Obesidade Grau II");
        res2.style.color = 'red';
    }

    else if (calc >= 40) {
        res2.innerHTML = ("Obesidade Grau III");
        res2.style.color = 'red';
    }

    else {
        res2.innerHTML = ("Digite um valor válido!");
        res2.style.color = 'red';
        res1.innerHTML = ("");
    }
    window.document.getElementById('res3').innerHTML = ("<input type='button' value='RESET' onclick='reset1()' id='btn'>")
    window.document.getElementById('btn1').innerHTML = ("");
}

function reset1() {
    window.document.getElementById('res1').innerHTML = ("");
    window.document.getElementById('res2').innerHTML = ("");
    window.document.getElementById('n1').value = ("");
    window.document.getElementById('n2').value = ("");
    window.document.getElementById('res3').innerHTML = ("");
}