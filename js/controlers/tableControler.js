var functiona = true;

    for(let i = 0; i<recetas.length; i++) {
        let style;
    
        if(i%2 == 1){
            style = "sp2"
        }else if (i%2 == 0){
            style = "sp1"
        }
            
        document.getElementById('tbody').innerHTML += `<tr class="${style}">
        <td>${recetas[i].nombre}</td>
        <td>${getPrecioProduccion(i)} Bs.S</td>
        <td>${getPrecioXUnidad(i)} Bs.S</td>
        <td>${getPrecioXPaquete(i)} Bs.S</td>
        <td>${getPrecioXUnidadVenta(i)} Bs.S</td>
        <td>${getPrecioXPaqueteVenta(i)} Bs.S</td>
        </tr>`
    }
