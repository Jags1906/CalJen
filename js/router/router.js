page('/', index)
page('/precios', precios)
page('*', nf)
page()

function index(){
  $("#view").load("/js/router/routes/tableRoutes.html")    
}

function precios(){
    document.getElementById('view').innerHTML = ``
}

function nf() {
    document.getElementById('view').innerHTML = `<h1><span class="sp1">4</span><span class="sp2">0</span><span class="sp1">4</span></h1>`  
}









/*<div class="container text-center content-center">
<h1><span class="sp1">Lista de Precios</span></h1>

<div class="table-responsive ">
    <div  class="justify-content-center">
        <table class="table">
            <thead>
              <tr>
                <th scope="col"><span class="sp2">Recetas de Produccion</span></th>
                <th scope="col"><span class="sp1">Precio de produccion</span></th>
                <th scope="col"><span class="sp2">Precio unitario (Sin Ganancia)</span></th>
                <th scope="col"><span class="sp1">Precio por paquete (Sin Ganancia)</span></th>
                <th scope="col"><span class="sp2">Precio unitario (Con Ganancia)</span></th>
                <th scope="col"><span class="sp1">Precio por paquetes (Cin Ganancia)</span></th>
              </tr>
            </thead>
            <tbody>
                <script src="js/controlers/tableControler.js"></script>
            </tbody>
          </table>
    </div>
</div>
</div>*/


















// var position = 0;

// function changePosition(pos) {
//     position = pos;
    
//     loadRouter()
// }

// function loadRouter(){
//     switch(position){
//         case 0: 
//             document.write(`
//             <div class="table-responsive ">
//                 <div  class="justify-content-center">
//                     <table class="table">
//                         <thead>
//                             <tr>
//                                 <th scope="col"><span class="sp2">Recetas de Produccion</span></th>
//                                 <th scope="col"><span class="sp1">Precio de produccion</span></th>
//                                 <th scope="col"><span class="sp2">Precio unitario (Sin Ganancia)</span></th>
//                                 <th scope="col"><span class="sp1">Precio por paquete (Sin Ganancia)</span></th>
//                                 <th scope="col"><span class="sp2">Precio unitario (Con Ganancia)</span></th>
//                                 <th scope="col"><span class="sp1">Precio por paquetes (Cin Ganancia)</span></th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <script src="js/controlers/tableControler.js"></script>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>`)
//             break;
    
//         case 1:
//             document.write(`<nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
//             <img src="assets/img/Gusticos Jensa/LOGO FUCSIA Y AZUL PNG.png" height="48px" width="48px" style="margin-right: 10px; margin-bottom: 5px;" alt=""> <a class="navbar-brand" href="#"> <span class="sp2">Gusticos</span> <span class="sp1">Jensa</span></a>
//             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//               <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarNavDropdown">
//               <ul class="navbar-nav">
//                 <li class="nav-item active">
//                   <a class="nav-link" href="#" onclick="changePosition(0)">Inicio<span class="sr-only">(current)</span></a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#" onclick="changePosition(1)">Precios<span class="sr-only">(current)</span></a>
//                 </li>
//               </ul>
//             </div>
//           </nav>`)
//             break;  
//     }
// }