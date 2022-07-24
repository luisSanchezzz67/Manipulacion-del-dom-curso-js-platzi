const h1 = document.querySelector("h1");
const form = document.querySelector("#formulario");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const pResult = document.querySelector("#result");
const btn = document.querySelector("#btnCalcular");

 form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event) {
    console.log(event);
    event.preventDefault();
   const sumaInputs = input1.value + input2.value;
   pResult.innerText = "Resultado: " + sumaInputs;
}




// console.log(input.value);

// // console.log({
// //     h1,
// //     p,
// //     parrafito,
// //     pid
// // }
    
// // );


// h1.innerHTML = "Luisito";
// h1.innerText = "Luisito2";

// // h1.setAttribute("class", "rojo");

// h1.classList.add("rojo");
// h1.classList.remove("verde")

// input.value = "22";

// const img = document.createElement("img");
// img.setAttribute("src", "https://static.dw.com/image/57436256_6.jpeg");

// pid.append(img);