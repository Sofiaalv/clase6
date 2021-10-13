class Producto{
    constructor (precio,nombre,stock){
        this.precio = precio;
        this.nombre = nombre;
        this.stock = stock;
    }
}

let producto1 = new Producto (550, "tazon", 10);
let producto2 = new Producto (1500, "combo estantes", 4);
let producto3 = new Producto (2000, "figura ceramica", 3);

let galeria = [producto1, producto2, producto3];

let carrito = [];
let suma = 0;


function principal(){
    let opcion = mostrarProductos()

    while(opcion !=0){
        switch(opcion){
            case 1:
                alert("Agregaste " + galeria[0].nombre);
                agregarProducto(galeria[0]);
                suma = suma + galeria[0].precio;
                
                break;
            case 2: 
                alert("Agregaste " + galeria[1].nombre);
                agregarProducto(galeria[1]);
                suma = suma + galeria[1].precio;
                
                break;
            
            case 3: 
                alert("Agregaste " + galeria[2].nombre);
                agregarProducto(galeria[2]);
                suma = suma + galeria[2].precio;
                
                break;

            default:
                alert("Ingreso rechazado")
        }
        opcion = mostrarProductos();
    }

    console.log(carrito);
    console.log(suma);
    
}



function mostrarProductos(){
    let opcion = parseInt(prompt("Seleccionar producto, 0- para salir \n\n 1- tazon, ingrese 1 \n\n 2- combo estantes, ingrese 2\n\n 3- figura ceramica, ingrese 3"))
    return opcion;
}

function agregarProducto(producto){
    carrito.push(producto);

}


principal();