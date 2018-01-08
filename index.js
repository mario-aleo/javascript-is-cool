// Function possui escopo proprio this
// Arrow Function não possui escopo proprio this, portanto não cria objeto

let varSoma = function (val1, val2) {
    return val1 + val2;
}

function funSoma (val1, val2) {
    return val1 + val2;
}

let varSoma2 = funSoma;


let arrowSoma = (val1, val2) => { return val1 + val2 };}}

let vrb = () => {
    return null;
}
let vrb = () => null;

let vrb = param => {
    return param;
};
let vrb = param => param;

let vrb = (param1, param2) => {
    return { param1, param2 }
};
let vrb = (param1, param2) => { param1, param2 };

(param => param)(12); //12


//////////////////////////////////////////////////////

function Carro (placa, modelo) {
    this.placa = placa;
    this.modelo = modelo;
    
    this.acelerar = function () {
        return "acelerando";
    }
}
var carro = new Carro("axz0000", "Uno");


class Carro {
    constructor (placa, modelo) {
        this.placa = placa;
        this.modelo = modelo;
    }

    acelerar () {
        return "acelerando";
    }
}

class Uno extends Carro {
    constructor (placa) {
        super(placa, "Uno");
        this.trancado = false;
    }

    destrancar () {
        this.trancado = false;
    }

    trancar () {
        this.trancado = true;
    }
}

[1, 2, 3] => [4, 5, 6]
[4, 5, 6] => [5, 6, 7]
let x = ele => ele + 3;
let y = ele => ele + 1;
let z = ele => y(x(ele));

let z = compose(fun(1), x);
let fun = curry((a, b) => a + b);




// let const

/////////////////////////////////////////////////////

fetch("http://httpbin.org/post", {
    method: "POST",
    headers: {
        "Accept": "application/json, application/xml, text/plain, text/html, *.*",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: JSON.stringify({ a: 1, b: 2 }),
    mode: "cors"
}).then((response) => {
    console.log(response);
    if (response.status != 200)
        throw new Error(`Server Status ${ response.status }`);
    return response.json();
}).then(reponseJson => {
    console.log(reponseJson);
}).catch(e => console.error(e));
