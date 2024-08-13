// let nama = "Maju Setia Jadi";
// let age = 24;
// let isMerried = false;

// console.log(nama, age, isMerried)

// console.log('Maju setia Jadi');
// console.log(24);
// console.log(true);
// console.log(false)


// let idResult = document.getElementById('result');
// idResult.value = '';

function clearResult(){
    // idResult.value = "";
    // console.log('function ini sudah terpanggil')
    // idResult.value = '';

    idResult.value = eval(idResult.value);
    // console.log(idResult.value)
}

function setNumber1(){
    idResult.value += 1;
    // kasi onclick="setNumber1()"
}

function setActionPlus(){
    idResult.value += '+';
    // onclick="setActionPlus()"
}

function setNumber2(){
    idResult.value += 2;
    // kasi onclick="setNumber1()"
}


let bilanganPertama = 10;
let bilanganKedua = 20;

// let result = bilanganPertama + bilanganKedua;
// console.log(result)

let result = eval("bilanganPertama + bilanganKedua");
console.log eval("bilanganPertama + bilanganKedua");