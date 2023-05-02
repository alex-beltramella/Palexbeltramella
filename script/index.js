//FUNCION 
const pedirProducto = () => {
    let producto = parseInt(prompt(`
    1 - Gibson Stratocaster
    2 - Aston Reed EGS111
    3 - Fender Stratocaster
    
    Ingrese el numero del producto que quiera comprar: 
    `));

    while ( isNaN(producto) === true || producto <= 0 || producto > 3) {
        producto = parseInt(prompt(`
        1 - Gibson Stratocaster
        2 - Aston Reed EGS111
        3 - Fender Stratocaster
        Error, ingrese un numero valido:`));
    }

    return producto;
}

const cant = (p) => {
    let cant = parseInt(prompt(`Ingrese la cantidad de productos que desee de ${p}`));

    while ( isNaN(cant) || cant <= 0 ) {
        cant = parseInt(prompt(`Error, ingrese la cantidad de productos que desee de ${p}`));
    }
    
    return cant;
}

const calcularPrecio = (p,c) =>  p * c;

const q = () => {
    let p = parseInt(prompt(`
    Desea realizar otra compra? 
    
    Presione 1 para SI
    Presione 2 para NO
    `));
                            //Retorna true si NO es un numero
    while (p < 1 || p > 2 || isNaN(p) == true) {
    
        p =  parseInt(prompt(`
            Error. Ingrese nuevamente
            si desea realizar nuevas compras?
            
            Presione 1 para SI
            Presione 2 para NO
        `));
    
    }

    return p;
}

//Creación de clase 
class Guitarra {

    constructor(producto,precio,microfonos,puente) {
        this.producto = producto;
        this.precio = precio;
        this.microfonos = microfonos;
        this.puente = puente; 
    
    }
    //Método para mostras info
    mostrarInfo() {
        return alert(`Producto: ${this.producto} 
            Precio: ${this.precio}
            microfonos: ${this.microfonos}     
            puente: ${this.puente}
            Total: ${this.total}`);
    }
}

const Guitarras = [

    ["Gibson Stratocaster",78000,"3 microfonos",`calificacion del tipo de puente: Synch tremolo`,1,"img/celu-01.avif"],
    
    ["Aston Reed",54000,"3 microfonos",`calificacion del tipo de puente: Synch tremolo`,2,"img/celu-02.png"],
    
    ["Fender Stratocaster",610000,"3 microfonos","con palanca", `calificacion del tipo de puente: Synch tremolo`,3,"img/celu-03.png"],


]

const productos = [];


for ( let cel in Guitarras) {
    let datos = Guitarras[cel];
    let nombre = datos[0];
    let precio = datos[1];
    let url = datos[5];
    let id = datos[4];
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card__container");
    const cards = document.querySelector(".cards");
    const fragmento = document.createDocumentFragment();
    let textHtml = `
            <div class="card__img__container"> <img src="${url}" alt="${nombre}" class="card__img"> </div>
            <h2 class="card__name">${nombre}</h2>
            <p class="card__precio">$${precio}</p>
            <p class="card__id">${id}</p>
    `;
    cardContainer.innerHTML += textHtml;
    fragmento.append(cardContainer);
    cards.append(fragmento);
}



for ( const i in Guitarras ) {

    productos[i] = new Guitarra( Guitarras[i][0],Guitarras[i][1],Guitarras[i][2],Guitarras[i][3] );

}

const productosComprados = []; 



let v = 1; 

while ( v == 1 ) {
    let producto = pedirProducto(); 
    let precioProducto = productos[producto-1].precio; 
    let canti = cant(productos[producto-1].producto); 
    let mt = calcularMonto(precioProducto,canti); 
    productos[producto-1].total = mt;
    productosComprados.push(productos[producto-1]); 
    productos[producto-1].mostrarInfo(); 
    v = q(); 
}


let totales = productosComprados.map((producto) => producto.total);

let sumaTotales = totales.reduce((acum,t) => acum + t, 0);

alert(`La suma total es de $${sumaTotales}`);


alert("Muchas Gracias por su compra, Vuelva pronto:)");
