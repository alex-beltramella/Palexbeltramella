//PRODUCTOS
const productos = [
    //INSTRUMENTOS DE PERCUSION
    {
        id: "Bateria",
        titulo: "Bateria Mapex Prodigy",
        imagen: "../img/inst-percusion/bateria-mapex-prodigy.webp",
        categoria: {
            nombre: "percusion",
            id: "percusion"
        },
        precio: 10000

    },
    {
        id: "hang",
        titulo: "Hang",
        imagen: "../img/inst-percusion/hang.webp",
        categoria: {
            nombre: "percusion",
            id: "percusion"
        },
        precio: 10000

    },
    {
        id: "tambor",
        titulo: "Tambor Bombo Surdo",
        imagen: "../img/inst-percusion/tambor.webp",
        categoria: {
            nombre: "percusion",
            id: "percusion"
        },
        precio: 10000
    },
    {
        id: "timbaleta",
        titulo: "Timbaleta",
        imagen: "../img/inst-percusion/timbal.webp",
        categoria: {
            nombre: "percusion",
            id: "percusion",
        },
        precio: 10000
    },
    {
        id: "pandereta",
        titulo: "Pandereta",
        imagen: "../img/inst-percusion/pandereta.webp",
        categoria: {
            nombre: "percusion",
            id: "percusion",
        },
        precio: 10000
    },

    //INSTRUMENTOS DE CUERDA
    {
        id: "arpa",
        titulo: "Arpa Walet Profesional",
        imagen: "../img/inst-cuerda/arpa.webp",
        categoria: {
            nombre: "cuerda",
            id: "cuerda",
        },
        precio: 10000
    },
    {
        id: "cello",
        titulo: "Cello",
        imagen: "../img/inst-cuerda/chelo.webp",
        categoria: {
            nombre: "cuerda",
            id: "cuerda",
        },
        precio: 10000
    },
    {
        id: "contrabajo",
        titulo: "Contrabajo",
        imagen: "../img/inst-cuerda/contrabajo.webp",
        categoria: {
            nombre: "cuerda",
            id: "cuerda",
        },
        precio: 10000
    },
    {
        id: "guitarra-acustica",
        titulo: "Guitarra Acustica Parquer",
        imagen: "../img/inst-cuerda/guitarra-acustica.webp",
        categoria: {
            nombre: "cuerda",
            id: "cuerda",
        },
        precio: 10000
    },
    {
        id: "violin",
        titulo: "Violin",
        imagen: "../img/inst-cuerda/violin.webp",
        categoria: {
            nombre: "cuerda",
            id: "cuerda",
        },
        precio: 10000
    },

    //INSTRUMENTOS DE VIENTO
    {
        id: "clarinete",
        titulo: "Clarinete Knight",
        imagen: "../img/inst-viento/clarinete.webp",
        categoria: {
            nombre: "viento",
            id: "viento",
        },
        precio: 10000
    },
    {
        id: "flauta",
        titulo: "Flauta Dulce Yamaha",
        imagen: "../img/inst-viento/flauta.webp",
        categoria: {
            nombre: "viento",
            id: "viento",
        },
        precio: 10000
    },
    {
        id: "trombon",
        titulo: "Trombon Knight",
        imagen: "../img/inst-viento/trombon.webp",
        categoria: {
            nombre: "viento",
            id: "viento",
        },
        precio: 10000
    },
    {
        id: "trompeta",
        titulo: "Trompeta Knight",
        imagen: "../img/inst-viento/trompeta.webp",
        categoria: {
            nombre: "viento",
            id: "viento",
        },
        precio: 10000
    },

    //INSTRUMENTOS IDIOFONOS
    {
        id: "acordeon",
        titulo: "Acordeon Corelli",
        imagen: "../img/inst-idiofonos/acordeon.webp",
        categoria: {
            nombre: "idiofono",
            id: "idiofono",
        },
        precio: 10000
    },
    {
        id: "maracas",
        titulo: "Maracas Lp Macho",
        imagen: "../img/inst-idiofonos/maracas.webp",
        categoria: {
            nombre: "idiofono",
            id: "idiofono",
        },
        precio: 10000
    },
    {
        id: "triangulo",
        titulo: "Triangulo",
        imagen: "../img/inst-idiofonos/triangulo.webp",
        categoria: {
            nombre: "idiofono",
            id: "idiofono",
        },
        precio: 10000
    },

    //INSTRUMENTOS ELECTROFONOS
    {
        id: "batería-electrica",
        titulo: "Bateria Electrica",
        imagen: "../img/inst-electrofonos/bateria-electrica.webp",
        categoria: {
            nombre: "electrofono",
            id: "electrofono",
        },
        precio: 10000
    },
    {
        id: "guitarra-electrica",
        titulo: "Bateria Electrica",
        imagen: "../img/inst-electrofonos/guitarra-electrica.webp",
        categoria: {
            nombre: "electrofono",
            id: "electrofono",
        },
        precio: 10000
    },
    {
        id: "teclado",
        titulo: "Teclado Parquer",
        imagen: "../img/inst-electrofonos/teclado.webp",
        categoria: {
            nombre: "electrofono",
            id: "electrofono",
        },
        precio: 10000
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {

    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${producto.imagen}" class="img card-img-top p-3 producto-imagen" alt="${producto.titulo}">
            <div class="card-body producto-detalles">
                <h5 class="card-title card-nombres producto-titulo">${producto.titulo}</h5>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="a-inst-percusion producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

}

cargarProductos();