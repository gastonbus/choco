var ingredientes = [
    {
        nombre: "Azúcar",
        gramos: "1300",
    },
    {
        nombre: "Manteca",
        gramos: "1100",
    },
    {
        nombre: "Esencia de vainilla",
        gramos: "500",
    },
    {
        nombre: "Gelatina",
        gramos: "200",
    },
    {
        nombre: "Colorante",
        gramos: "20",
    }
];

/*console.log(ingredientes[1].nombre);*/

for (let i = 0; i < ingredientes.length; i++) {
    if (ingredientes[i].gramos > 1000) {
            document.getElementById("js-container").innerHTML += "<p>Ingrediente pesado, nombre: " + ingredientes[i].nombre + " | Peso: " + ingredientes[i].gramos / 1000 + " kg.</p>";
    } else {
        document.getElementById("js-container").innerHTML += "<p>Ingrediente ligero, nombre: " + ingredientes[i].nombre + " | Peso: " + ingredientes[i].gramos / 1000 + " kg.</p>";
    }
    

}

