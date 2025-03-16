// Establece el precio del artículo.
// Sets the price of the item.
let price = 19.5;

// Guarda las monedas y billetes disponibles en la caja.
// Stores the available coins and bills in the cash register.
let cid = [
    ["PENNY", 1.01],  // Moneda de 1 centavo con su cantidad disponible. // 1 cent coin with its available amount.
    ["NICKEL", 2.05], // Moneda de 5 centavos con su cantidad disponible. // 5 cent coin with its available amount.
    ["DIME", 3.1],    // Moneda de 10 centavos con su cantidad disponible. // 10 cent coin with its available amount.
    ["QUARTER", 4.25], // Moneda de 25 centavos con su cantidad disponible. // 25 cent coin with its available amount.
    ["ONE", 90],      // Billete de 1 dólar con su cantidad disponible. // 1 dollar bill with its available amount.
    ["FIVE", 55],     // Billete de 5 dólares con su cantidad disponible. // 5 dollar bill with its available amount.
    ["TEN", 20],      // Billete de 10 dólares con su cantidad disponible. // 10 dollar bill with its available amount.
    ["TWENTY", 60],   // Billete de 20 dólares con su cantidad disponible. // 20 dollar bill with its available amount.
    ["ONE HUNDRED", 100] // Billete de 100 dólares con su cantidad disponible. // 100 dollar bill with its available amount.
];

// Muestra el precio en la página formateado a dos decimales.
// Displays the price on the page formatted to two decimal places.
document.getElementById("price-display").textContent = price.toFixed(2);

// Agrega un evento al botón de compra para ejecutar la lógica cuando se hace clic.
// Adds an event to the purchase button to execute the logic when clicked.
document.getElementById("purchase-btn").addEventListener("click", function() {
    
    // Obtiene el valor del dinero ingresado por el cliente.
    // Gets the amount of money entered by the customer.
    let cash = parseFloat(document.getElementById("cash").value); 
    
    // Referencia el lugar donde se mostrará el cambio a devolver.
    // References the place where the change to be given will be displayed.
    let changeDue = document.getElementById("change-due");

    // Verifica si el valor ingresado no es un número o si el cliente no tiene suficiente dinero.
    // Checks if the entered value is not a number or if the customer does not have enough money.
    if (isNaN(cash) || cash < price) { 
        alert("Customer does not have enough money to purchase the item"); // Muestra un mensaje de error. // Displays an error message.
        return; // Detiene la ejecución si no hay suficiente dinero. // Stops execution if there is not enough money.
    }

    // Verifica si el cliente paga el precio exacto.
    // Checks if the customer pays the exact price.
    if (cash === price) { 
        changeDue.textContent = "No change due - customer paid with exact cash"; // Indica que no hay cambio. // Indicates that there is no change.
        return; // Sale de la función ya que no se necesita calcular el cambio. // Exits the function as no change calculation is needed.
    }

    // Calcula cuánto cambio debe recibir el cliente.
    // Calculates how much change the customer should receive.
    let change = cash - price; 

    // Suma todo el dinero disponible en la caja para verificar si se puede dar el cambio.
    // Adds up all the money available in the cash register to check if change can be given.
    let totalCID = cid.reduce((sum, curr) => sum + curr[1], 0).toFixed(2);

    // Verifica si no hay suficiente dinero en la caja para devolver el cambio.
    // Checks if there is not enough money in the cash register to give change.
    if (totalCID < change) { 
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS"; // Muestra un mensaje de fondos insuficientes. // Displays an insufficient funds message.
        return; // Sale de la función si no es posible devolver el cambio. // Exits the function if it is not possible to return change.
    }

    // Verifica si la caja tiene exactamente la cantidad necesaria para dar el cambio.
    // Checks if the cash register has exactly the amount needed to give change.
    if (totalCID == change) { 
        changeDue.textContent = "Status: CLOSED " + cid
            .filter(c => c[1] > 0) // Filtra las monedas y billetes con valor positivo. // Filters the coins and bills with a positive value.
            .map(c => `${c[0]}: $${c[1].toFixed(2)}`) // Muestra cada tipo de billete/moneda restante. // Displays each remaining bill/coin type.
            .join(" "); // Une la información en un solo string. // Joins the information into a single string.
        return; // Sale de la función ya que la caja se cierra sin dinero sobrante. // Exits the function as the cash register closes with no remaining money.
    }

    // Define las monedas y billetes disponibles en orden de mayor a menor valor.
    // Defines the available coins and bills in descending order of value.
    let currencyUnits = [
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
    ];

    // Crea un array donde se guardará el cambio a devolver.
    // Creates an array where the change to be given will be stored.
    let changeArray = [];
    
    // Guarda la cantidad de cambio que falta devolver.
    // Stores the amount of change that still needs to be given.
    let remainingChange = change; 

    // Recorre cada tipo de moneda y billete disponible.
    // Iterates through each available coin and bill type.
    for (let [unit, value] of currencyUnits) { 
        let available = cid.find(c => c[0] === unit)[1]; // Obtiene la cantidad disponible de cada tipo. // Gets the available amount of each type.
        let amountToGive = 0; // Variable que acumula el monto a devolver. // Variable that accumulates the amount to be returned.

        // Mientras el cambio restante sea suficiente y haya disponibilidad en caja.
        // While the remaining change is sufficient and there is availability in the cash register.
        while (remainingChange >= value && available > 0) { 
            remainingChange -= value; // Reduce el cambio restante. // Reduces the remaining change.
            remainingChange = Math.round(remainingChange * 100) / 100; // Redondea a dos decimales. // Rounds to two decimal places.
            available -= value; // Reduce la cantidad disponible. // Reduces the available amount.
            amountToGive += value; // Acumula la cantidad a devolver. // Accumulates the amount to be returned.
        }

        // Si se ha acumulado una cantidad a devolver, se almacena en el array.
        // If an amount to be returned has been accumulated, it is stored in the array.
        if (amountToGive > 0) { 
            changeArray.push([unit, amountToGive]); 
        }
    }

    // Si no se puede dar todo el cambio, se muestra un mensaje de error.
    // If not all change can be given, an error message is displayed.
    if (remainingChange > 0) { 
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS"; 
        return;
    }

    // Muestra el cambio que se devolverá con el nombre de la moneda/billete y la cantidad.
    // Displays the change to be given with the name of the coin/bill and the amount.
    changeDue.textContent = "Status: OPEN " + changeArray.map(c => `${c[0]}: $${c[1].toFixed(2)}`).join(" "); 
});
