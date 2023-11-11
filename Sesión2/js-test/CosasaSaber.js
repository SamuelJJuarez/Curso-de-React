const obj = {a:1, b:2, c:3}; //Una constante no puede cambiar su valor
typeof obj; //Arroja que es tipo objeto (todas las variables y constantes son objetos)
obj.a = "uno"; //Cambia el valor de a en la constante obj
var num = 2; //Es una variable cuyo valor si puede cambiar
const f = () => {return 1}; //Función en js
let number = 0; //Variable que puede ser usada igual que var

//Primera prueba (variables)
    let text = "Hola"; //Es una variable let
    //Las variables var siempre sobreescriben a la variable, las let las mantienen en el propio
    //bloque en el que se usan

    if(true){
        let text = "Mundo"; //Es otra variable diferente al primer text
        console.log(text);
    }

    console.log(text);

//Segunda prueba (variables)
    const container = document.getElementById("container");

    //Este ciclo imprime en todos los casos 5 ya que var se sobreescribe cada vez
    for(var i = 0; i < 5; i++){
        var div = document.createElement("div");
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.margin = "10px";
        div.style.backgroundColor = "green";
        container.appendChild(div);
        div.addEventListener("click", () => {
            alert("Soy el div número " + i);
        });
    }

//Tercera prueba (variables)
    const container2 = document.getElementById("container");

    //Este ciclo imprime del 0 al 4 porque la variable let no se reescribe, solo cambia su valor en cada impresión
    for(let i = 0; i < 5; i++){
        const div = document.createElement("div");
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.margin = "10px";
        div.style.backgroundColor = "green";
        container.appendChild(div);
        div.addEventListener("click", () => {
            alert("Soy el div número " + i);
        });
    }

//Cuarta prueba (Escritura de strings largos)
    const template = `Hola,
    Este es un mensaje largo
    `;
    let contador = 6;
    const templateContador = `El contador es: ${contador}`;
    
//Quinta prueba (Funciones declarativas (Hoisting))
    holaMundo("Samuel");

    function holaMundo(nombre){
        alert(`Hola, ${nombre}`);
    }
    
//Sexta prueba (Funciones expresivas) 
    const holaMundo = function (nombre) {
        alert(`Hola, ${nombre}`);
    };

    holaMundo("Samuel");
    
//Séptima prueba (Funciones arrow)
    const holaMundo = (nombre) => alert(`Hola, ${nombre}`);
    holaMundo("Samuel");

//Octava prueba (Función arrow con contexto)
    const tahoe = {
        name: "Montañas",
        getFormattedTitle: function () {
            console.log(this);
            alert(this.name.toUpperCase());
        },
        getFormattedTitleDelay: function () {
            setTimeout(() => {
                console.log(this);
                alert(this.name.toUpperCase());
            }, 3000);
        },
    };

    tahoe.getFormattedTitle();
    tahoe.getFormattedTitleDelay();

//Novena prueba (Desestructuración)
    const person = {
        name: "Samuel",
        age: 19,
        address:{
            street: "Calle inventada",
            number: 126,
            city: "León",
        },
    };

    const {
        address: {city}, 
    } = person;
    alert(city);
    const printAddress = ({address:{street,number,city}}) => {
        alert(`Tu dirección es: ${street} ${number}, ${city})`);
    }
    printAddress(person);

//Décima prueba (Operador de propagación)
    const arr1 = [1,2,3];
    const arr2 = [4,5,6];
    const arrCompleto = [...arr1, ...arr2];
    console.log(arrCompleto);
    const personalData = {
        name2 : "Samuel",
        age2: 19. 
    };
    const contactData = {
        email: "hola@gmail.com",
        phone : "4772805546"
    };
    const completeData = {
        ...personalData,
        ...contactData,
    };
    console.log(completeData);
    const completeData2 = completeData;
    console.log(completeData2);

//Onceava prueba (Promesas y fetch)
    fetch("https://api.randomuser.me/?nat=US&results=1").then((response)=>{
        response.json().then((data)=>{
            console.log(data);
        });
    });

    const frase = fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
    .then((response) => response.json())
    .then((data) => {
       const p = document.getElementById("quote");
       p.innerText = data.data[0].quoteText;
    })
    .catch((error) => {
        alert("Ocurrió un error al traer la frase");
    })
    .finally(()=>{
        console.log("Ejecución completada");
    });

//Doceava prueba (Async/Await)    
    const getQuote = async() =>{
        try{
            const res = await fetch(
                "https://quote-garden.onrender.com/api/v3/quotes/random"
            );
            const data = await res.json();
            const p = document.getElementById("quote");
            p.innerText = data.data[0].quoteText;
        } catch(e){
            alert(errorMessage);
            console.log(e);
        } finally{
            console.log("Ejecución completada");
        }
    }

//Ejercicio 11: Filter
    const names = ["José", "Christian", "Eduardo", "Jaime", "Uriel"];
    const namesWhitJ = names.filter((name3) => name3[0] === "J");
    const namesWhitJ2 = names.filter((name3) => name3[0].toUpperCase().includes("J"));
    const namesWhitJ3 = names.filter((name3) => {
        console.log(name3, name3.toUpperCase().includes("J"));
        return names.toUpperCase().includes("J")
    });
    console.log(namesWithJ);

//Ejercicio 12: Map
const users =[
    {
        name: "José",
        age: 25,
    },
    {
        name: "Christian",
        age: 18,
    },
    {
        nem:"Eduardo",
        age: 21,
    }
]
    const ages = users.map((user)=> user.age);
    console.log(ages);
    const container3 = document.getElementById("container");
    const elements = user.map((user)=>{
        const div = document.createElement(div);
        div.innerText = `Nombre: ${user.name}, Edad: ${user.age}`;
        return div;
    })

    container.append(...elements);

//Ejercicio 13: Reduce
const agess = [25, 18, 29, 23, 30, 35, 50, 19, 25, 31];
const maxAge = agess.reduce((prev, current) =>{
    console.log(`Prev: ${prev}, Current: ${current}`);
    if(current > prev){
        return current;
    } else {
        return prev;
    }
}, 0);
console.log(maxAge);

const sumAges = agess.reduce((prev, current) => {
    console.log(`${prev} + ${current} = ${prev + current}`);
    return prev + current;
}, 0);
console.log(sumAges);

const names2 = ["José", "Christian", "Eduardo"];
const allNames = names2.reduce((prev, current)=>{

})

//Ejercicio 14: Higher Order Functions

const invokeIf = (condition, fnTrue, fnFalse) =>{
    if(condition){
        fnTrue();
    } else {
        fnFalse();
    }
};

const success = () => alert("La condición se cumplió");
const fail = () => alert("La condición falló");

const is2023 = new Date().getFullYear() === 2023;
const isFebruary = new Date().getMonth() === 1;
invokeIf(isFebruary, success, fail);