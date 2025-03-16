# Cash Register

Este proyecto simula una caja registradora que calcula el cambio que debe devolver al cliente basado en el dinero ingresado y el precio de un artículo. La aplicación también maneja el caso cuando el cliente paga el precio exacto o cuando no hay suficientes fondos en la caja para dar el cambio.

## Estructura del Proyecto

### Archivos principales:
- **index.html**: Contiene la estructura básica de la interfaz de usuario. Incluye un campo de entrada para que el usuario ingrese el dinero que está pagando, un botón para iniciar la compra y una sección para mostrar el cambio que debe recibir. También se muestra el precio del artículo.
  
- **script.js**: Contiene la lógica que maneja la interacción con el usuario y el cálculo del cambio. Al ingresar el dinero y hacer clic en el botón de compra, la aplicación calcula si el cliente tiene suficiente dinero para cubrir el precio del artículo y devuelve el cambio correspondiente. Si el cliente paga el precio exacto, se muestra un mensaje indicando que no hay cambio. Si no hay suficiente dinero en la caja para dar el cambio, se muestra un mensaje de error.

### Funcionalidad

1. **Ingreso del pago**: El usuario ingresa el dinero que está pagando por el artículo.
2. **Cálculo del cambio**: Al hacer clic en el botón de compra, la aplicación calcula el cambio que debe recibir el cliente, basándose en el dinero ingresado y el precio del artículo.
3. **Manejo de fondos insuficientes**: Si no hay suficiente dinero en la caja para devolver el cambio, se muestra un mensaje indicando "INSUFFICIENT_FUNDS".
4. **Manejo de pago exacto**: Si el cliente paga el precio exacto, se muestra un mensaje indicando que no hay cambio.
5. **Manejo de cambio exacto**: Si la caja tiene exactamente el monto necesario para devolver el cambio, se muestra un mensaje indicando que la caja se cierra con el cambio exacto disponible.

<br>

---

<br>

This project simulates a cash register that calculates the change to be returned to the customer based on the money entered and the price of an item. The app also handles the case when the customer pays the exact price or when there are insufficient funds in the register to give the change.

## Project Structure

### Main Files:
- **index.html**: Contains the basic structure of the user interface. It includes an input field where the user enters the money they are paying, a button to initiate the purchase, and a section to display the change to be received. The price of the item is also displayed.
  
- **script.js**: Contains the logic that handles user interaction and the calculation of change. After entering the money and clicking the purchase button, the app calculates whether the customer has enough money to cover the price of the item and returns the appropriate change. If the customer pays the exact price, a message is shown indicating no change. If there is not enough money in the register to give change, an error message is displayed.

### Functionality

1. **Payment Input**: The user enters the money they are paying for the item.
2. **Change Calculation**: When the purchase button is clicked, the app calculates the change the customer should receive, based on the money entered and the price of the item.
3. **Insufficient Funds Handling**: If there is not enough money in the register to return the change, a message saying "INSUFFICIENT_FUNDS" is displayed.
4. **Exact Payment Handling**: If the customer pays the exact price, a message is shown indicating that there is no change.
5. **Exact Change Handling**: If the register has exactly the needed amount to return the change, a message is displayed indicating that the register is closed with the exact change available.
