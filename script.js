var table = document.getElementById("store");
var row = table.insertRow(0);
var row2 = table.insertRow(1);

//*/**
* @brief Item Constructor
    * @
    return item.*/< A brief description.

function item(name, quantity) {
    this.name = name;
    this.quantity = parseInt(quantity);
}

/**
 * @brief the rray that will contain item
 */
var items = [];

/**
 * @brief test if the input is numeric
 * @return true or false
 */
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * @brief function that update the table
 * @return nothing
 */
function add(name, quantity) {
    var flag = false;
    var size = document.getElementById("size").value;
    var sum = 0;

    for (var i = 0; i < items.length; i++) {
        sum += items[i].quantity;
    }
    if ((parseInt(sum) + parseInt(quantity)) >= size) {
        alert("WARNING ! You have exceeded the maximum storage amount.")
    }
    for (var i = items.length - 1; i >= 0; i--) {
        if (items[i].name === name) {
            items[i].quantity += parseInt(quantity);
            table.rows[1].cells[i].innerHTML = items[i].quantity;
            flag = true;
            break;
        }
    }
    if (flag === false) {
        var e = new item(name, parseInt(quantity));
        items.unshift(e);
        var cel1 = row.insertCell(0);
        var cel2 = row2.insertCell(0);
        cel1.innerHTML = e.name;
        cel2.innerHTML = e.quantity;
    }
    return flag;
}

/**
 * @brief add an event that fires when the button is pressed. It shows the menu
 */
var buttonUpdate = document.getElementById("update");
buttonUpdate.onclick = function () {
    var menu = document.getElementById("insert");
    menu.style.visibility = "visible"
};

/**
 * @brief function that update item with new values
 */
var updateItem = document.getElementById("set");
updateItem.onclick = function () {
    var name = document.getElementById("name").value;
    var quantity = document.getElementById("quantity").value;
    if (isNumeric(quantity)) {
        add(name, quantity);
    } else {
        alert("quantity must be a integer number!!");
    }
};

/**
 * @brief function that updates the table sorting in base of the name of item
 */
var sort = document.getElementById("sort");
sort.onclick = function () {
    items.sort(function (a, b) {
        return a.name > b.name;
    });
    for (var i = 0; i < items.length; i++) {
        table.rows[0].cells[i].innerHTML = items[i].name;
        table.rows[1].cells[i].innerHTML = items[i].quantity;
    }
}