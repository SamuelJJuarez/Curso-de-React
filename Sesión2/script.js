document.addEventListener("DOMContentLoaded", () => {
    //Se crean todas las constantes vinculadas al html
    const input = document.querySelector("#input");
    const button = document.querySelector("#button");
    const list = document.querySelector("#list");
    const pares = document.querySelector("#pares");
    const impares = document.querySelector("#impares");

    //Variables de los contadores (los tipo let se usan en ciclos o como contadores)
    let par = 0;
    let impar = 0;

    button.addEventListener("click", () => {
        //Se agregan los valores a la lista
        const li = document.createElement("li");
        li.textContent = input.value;
        list.appendChild(li);

        //Se verifica si es par o impar
        const num = parseInt(input.value);
        if(num%2 == 0){
            par += 1;
            pares.innerHTML = par;
        }
        else {
            impar += 1;
            impares.innerHTML = impar;
        }
    })
})