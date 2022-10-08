let carritoArray = [];


function subtotal(id, cost){
    let cant = parseInt(document.getElementById(`cantProd${id}`).value);
    console.log(cant)
    let total = (cant*cost)
    document.getElementById(`subProd${id}`).innerHTML = total;
}



function mostrarDatosCarrito(array){


    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let item = array[i];
        htmlContentToAppend += `

        <div class="row">
            <div class="col">
            <img src="img/prod${item.id}_1.jpg" id="nombreProd" alt="imagenItem"></p>
            </div>
            <div class="col">
            <p id="nombreProd">${item.name}</p>
            </div>
            <div class="col">
            <p id="costoProd${item.id}">${item.currency} ${item.unitCost}</p>
            </div>
            <div class="col">
                <input class="form-control-price" type="number" onchange="subtotal(${item.id}, ${item.unitCost})" id="cantProd${item.id}" value=${item.count} w="75px";> 
            </div>
            <div class="col">
                <p id="subProd${item.id}">${item.unitCost*item.count}</p>
            </div>

            </div>
        </div>
        
        `
        document.getElementById("carrito-list-container").innerHTML = htmlContentToAppend;
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
