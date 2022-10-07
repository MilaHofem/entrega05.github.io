let carritoArray = [];

let precio = parseInt(document.getElementById("costoProd"));
let cantidad = parseInt(document.getElementById("cantProd"));
let subtotal = 0;


function mostrarDatosCarrito(array){


    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let item = array[i];
        htmlContentToAppend += `
        
        </div>
        <div class="col">
        <img src="`+ item.image +`" id="nombreProd" alt="imagenItem"></p>
        </div>
        <div class="col">
          <p id="nombreProd">`+ item.name +`</p>
        </div>
        <div class="col">
          <p id="costoProd">`+ item.currency +` `+ item.unitCost +`</p>
        </div>
          <div class="col">
            <input class="form-control" type="number" id="cantProd" value=`+ item.count +`> 
          </div>
          <div class="col">
            <p id="subProd"></p>
          </div>

        </div>
         
        
        `
        document.getElementById("carrito-list-container").innerHTML = htmlContentToAppend;
        document.getElementById("subProd").innerHTML += subtotal;
    }
}


document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(carrito).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            carritoArray = resultObj.data.articles;
            mostrarDatosCarrito(carritoArray);
        }

    });
 });
