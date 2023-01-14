// define data in JSON array
var products = [
    {
        quantity: 1,
        name: "TCL QLED 4k TV",
        ppu: 200000,
        discount: 5000
    },
    {
        quantity: 3,
        name: "HuaWei P50",
        ppu: 30000,
        discount: 800
        
    },
    {
        quantity: 1,
        name: "iPhone 14 Pro Max",
        ppu: 70000,
        discount: 2000
    },
    {
        quantity: 1,
        name: "PS5",
        ppu: 19000,
        discount: 200
        
    }
]


// This function will pick the value from the <selet>
// and add to the table
function addToList() {
    /*let elProdct = document.getElementById("products")
    let pVal = elProdct.value
    console.log(pVal)
    let productObj = {
        name: pVal,
        quantity: 1,
        ppu: 1
        */
    let productObj = {
        name: $('#products').val(),
        quantity: $('#qty').val(),
        ppu: $('#ppu').val(),
        discount: $('#discount').val() * 1,
        
    }

    

    // Clear existing items in the table
        /*let productList = document.getElementById("productList")
        for (let x = 0; x < products.length; x++) {
            productList.deleteRow(1)
        }*/
    $(`#productBody`).html("")

    products.push(productObj)
    loadData()
}

// TODO Should use product ID instead of name
function deleteProduct(index) {
    console.log("DELETE",index)
    delete products[index]  // delete the element from array
    $('#productBody').html("")
    loadData()
}

function clearAllData(){
    products.splice(0,products.length) 
    console.log(products)
    loadData()
}

function loadData() {
    let allRows = ""
    let gross = 0
    let totalDiscount = 0
    for (let p in products) {
        let cellnull = `<td class="text-center"> <img class='icon' src='icon-delete.png' onclick='deleteProduct("${p}")'>`
        let cellName = '<td class="text-left">' + products[p].name + "</td>"
        let cellQuantity = '<td class="text-right">' + products[p].quantity + "</td>"
        let cellPPU = '<td class="text-right">' + products[p].ppu + "</td>"
        let cellDiscount = '<td class="text-right">' + products[p].discount + "</td>"
        let total = products[p].ppu * products[p].quantity - products[p].discount
        gross += total
        totalDiscount += products[p].discount
        let cellTotal = '<td class="text-right">' + total + "</td>"
        let row = `<tr>${cellnull}${cellQuantity}${cellName}${cellPPU}${cellDiscount}${cellTotal}</tr>`
        allRows += row

        
    }

    /*var e1 = document.getElementById('totalDsicount').Value;
    var e2 = document.getElementById('discount').Value;
    document.getElementById("#totalDiscount").Value = parseInt(e1) + parseInt(e2);*/
    $('#productBody').html(allRows)
    $("#totalDiscount").html(totalDiscount)
    $("#gross").html(gross)

    let vat = gross * 0.03
    let net = gross + vat
    $("#vat").html(vat.toFixed(2))
    $("#net").html(net.toFixed(2))

}

function loadDataOld() {

    // $('#productBody').html('<tr><td>xxx</td><td>xxx</td><td>xxx</td><td>xxx</td></tr>')
    
    let productList = document.getElementById("productList")
    let gross = 0
    for (let p in products) {
        let row = document.createElement("tr")
        let productName = document.createElement("td")
        productName.innerHTML = products[p].name

        let quantity = document.createElement("td")
        quantity.innerHTML = products[p].quantity
        quantity.classList.add("text-right")

        let ppu = document.createElement("td")
        ppu.innerHTML = products[p].ppu
        ppu.classList.add("text-right")

        let total = document.createElement("td")
        total.innerHTML = products[p].ppu * products[p].quantity
        total.classList.add("text-right")
        gross += products[p].ppu * products[p].quantity

        row.appendChild(productName)
        row.appendChild(quantity)
        row.appendChild(ppu)
        row.appendChild(total)
        productList.appendChild(row)
    }

    let grossElem = document.getElementById("gross")
    grossElem.innerHTML = gross

    let vat = gross * 0.03
    let net = gross + vat
    document.getElementById("vat").innerHTML = vat.toFixed(2)
    document.getElementById("net").innerHTML = net.toFixed(2)



}