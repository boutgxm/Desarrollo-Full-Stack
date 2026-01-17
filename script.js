const mercurio = document.getElementById("mercurio");
const boton = document.getElementById("btnMercurio");

let colorReal = false;

boton.addEventListener("click", () => {
    if (!colorReal) {
        mercurio.style.backgroundColor = "#4b4b4b"; // gris oscuro
        boton.textContent = "Color real revelado ";
        colorReal = true;
    } else {
        mercurio.style.backgroundColor = "red";
        boton.textContent = "Click para revelar el verdadero color de Mercurio";
        colorReal = false;
    }
});
