var materiales = [
    {
        id : 0,
        nombre : "Azucar",
        precio : 8000
    },
    {
        id : 1,
        nombre : "Huevos",
        precio : 35000
    },
    {
        id : 2,
        nombre : "Harina",
        precio : 15000
    },
    {
        id : 3,
        nombre : "Mantequilla",
        precio : 42000
    },
]

var recetas = [
    {
        id : 0,
        nombre : "Suspiros",
        composicion : [{id : 0, cant : 0.8 }, {id : 1, cant : 0.33 }],
        cantXLote : 180,
        cantXPaquete: 7
    },
    {
        id : 1,
        nombre : "Galletas",
        composicion : [{id : 0, cant : 0.3 }, {id : 1, cant : 0.07 }, {id : 2, cant : 0.35 }, {id : 3, cant : 0.15 }],
        cantXLote : 160,
        cantXPaquete: 10
    },
    {
        id : 1,
        nombre : "Galletas",
        composicion : [{id : 0, cant : 0.3 }, {id : 1, cant : 0.07 }, {id : 2, cant : 0.35 }, {id : 3, cant : 0.15 }],
        cantXLote : 160,
        cantXPaquete: 10
    }
]

function getPrecioProduccion (idReceta) {
    var idMaterial, cantMaterial, precioMaterial, acum = 0, precioReceta;    

    for (let i = 0; i<recetas[idReceta].composicion.length ;i++){
        idMaterial= recetas[idReceta].composicion[i].id;
        cantMaterial = recetas[idReceta].composicion[i].cant;
        precioMaterial = materiales[idMaterial].precio;
        acum += cantMaterial * precioMaterial
    }
    acum = acum.toFixed(2)

    return acum
}

function getPrecioXUnidad (idReceta){
    let precioUnidad = getPrecioProduccion(idReceta) / recetas[idReceta].cantXLote;
    precioUnidad = precioUnidad.toFixed(2)

    return precioUnidad
}

function getPrecioXPaquete (idReceta){
    let precioPaquete = getPrecioXUnidad(idReceta) * recetas[idReceta].cantXPaquete;
    precioPaquete = precioPaquete.toFixed(2);

    return precioPaquete
}

function getPrecioXUnidadVenta(idReceta){
    let precioUnidad = (getPrecioProduccion(idReceta) / recetas[idReceta].cantXLote) * 2;
    precioUnidad = precioUnidad.toFixed(2)

    return precioUnidad
}
 
function getPrecioXPaqueteVenta(idReceta){
    let precioPaquete = (getPrecioXUnidad(idReceta) * recetas[idReceta].cantXPaquete) * 2;
    precioPaquete = precioPaquete.toFixed(2);

    return precioPaquete
}

function getLenghtRecetas(){
    return recetas.length
}
// console.log(`Precio de Produccion: ${getPrecioProduccion(0)}
// Precio en Bruto de las Unidades: ${getPrecioXUnidad(0)}
// Precio en Bruto de los Paquetes: ${getPrecioXPaquete(0)}
// Precio de Venta de las Unidades: ${getPrecioXUnidadVenta(0)}
// Precio de Venta de los Paquetes: ${getPrecioXPaqueteVenta(0)}
// `);

// console.log(`Precio de Produccion: ${getPrecioProduccion(1)}
// Precio en Bruto de las Unidades: ${getPrecioXUnidad(1)}
// Precio en Bruto de los Paquetes: ${getPrecioXPaquete(1)}
// Precio de Venta de las Unidades: ${getPrecioXUnidadVenta(1)}
// Precio de Venta de los Paquetes: ${getPrecioXPaqueteVenta(1)}`);
