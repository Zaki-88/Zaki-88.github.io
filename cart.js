// define data in JSON array
var products = [
    {
        name: "TCL QLED 4k TV",
        quantity: 1,
        ppu: 200000
    },
    {
        name: "HuaWei P50",
        quantity: 3,
        ppu: 30000
    },
    {
        name: "iPhone 14 Pro Max",
        quantity: 1,
        ppu: 70000
    },
    {
        name: "PS5",
        quantity: 1,
        ppu: 19000
    }
]


// This function will pick the value from the <selet>
// and add to the table
function addToCart() {
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
        ppu: $('#ppu').val()
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

function loadData() {
    let allRows = ""
    let gross = 0
    for (let p in products) {
        let cellName = `<td><img class='icon' src='icon-delete.png' onclick='deleteProduct("${p}")'> ` + products[p].name + "</td>"
        let cellQuantity = '<td class="text-right">' + products[p].quantity + "</td>"
        let cellPPU = '<td class="text-right">' + products[p].ppu + "</td>"
        let total = products[p].ppu * products[p].quantity
        gross += total
        let cellTotal = '<td class="text-right">' + total + "</td>"
        let row = `<tr>${cellName}${cellQuantity}${cellPPU}${cellTotal}</tr>`
        allRows += row
    }
    $('#productBody').html(allRows)

    $("#gross").html(gross)

    let vat = gross * 0.07
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

    let vat = gross * 0.07
    let net = gross + vat
    document.getElementById("vat").innerHTML = vat.toFixed(2)
    document.getElementById("net").innerHTML = net.toFixed(2)



}