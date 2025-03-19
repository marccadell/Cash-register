# Cash Register

Este proyecto es una simulación de una caja registradora que calcula el cambio a devolver al cliente. El usuario ingresa el dinero con el que desea pagar un artículo y la aplicación calcula cuánto cambio debe recibir, considerando el dinero disponible en la caja. Si no hay suficiente dinero para devolver el cambio, muestra un mensaje de error. Si el cliente paga el precio exacto, también muestra un mensaje adecuado.

## Estructura del Proyecto

### Archivos principales:
- **index.html**: Contiene la estructura básica de la interfaz de usuario. Incluye un campo para ingresar la cantidad de dinero que el cliente desea pagar, un botón para realizar la compra y un lugar para mostrar el cambio que debe devolver. También muestra el precio del artículo.
  
- **script.js**: Contiene la lógica de la caja registradora. Al ingresar el monto y hacer clic en el botón de compra, se calcula el cambio que debe devolverse. También maneja los casos cuando el cliente paga el precio exacto o cuando no hay suficiente dinero en la caja para devolver el cambio.

- **styles.css**: Define los estilos visuales de la interfaz, asegurando que sea clara y fácil de usar. La interfaz es limpia y presenta el diseño de forma ordenada y accesible.

### Funcionalidad

1. **Entrada de pago**: El usuario ingresa el monto con el que desea pagar el artículo.
2. **Cálculo del cambio**: Al hacer clic en el botón de compra, la aplicación calcula el cambio que debe devolverse, basándose en el precio del artículo y el dinero ingresado.
3. **Mostrar el cambio**: Si hay suficiente dinero en la caja, se muestra el cambio que debe devolverse, indicando las monedas y billetes que se entregarán.
4. **Manejo de pago exacto**: Si el cliente paga el precio exacto, se muestra un mensaje que indica que no hay cambio.
5. **Manejo de fondos insuficientes**: Si no hay suficiente dinero en la caja para devolver el cambio, se muestra un mensaje indicando "INSUFFICIENT_FUNDS".

### Estilo y Diseño

- El proyecto utiliza un diseño centrado y simple, con un contenedor de fondo blanco que contiene todos los elementos.
- Los botones tienen un efecto de hover para mejorar la experiencia del usuario.
- La información del cambio se muestra de manera destacada, en un formato claro y fácil de entender.

### Requisitos

- Navegador web moderno.
- Funciona completamente en el lado del cliente, sin necesidad de backend.

<br>

---
<br>

This project is a simulation of a cash register that calculates the change to be given back to the customer. The user enters the amount of money they want to pay for an item, and the app calculates how much change should be returned, considering the money available in the cash register. If there is not enough money to return the change, an error message is shown. If the customer pays the exact price, a suitable message is displayed.

## Project Structure

### Main Files:
- **index.html**: Contains the basic structure of the user interface. It includes a field to enter the amount of money the customer wants to pay, a button to make the purchase, and a place to display the change to be given back. It also shows the price of the item.
  
- **script.js**: Contains the logic of the cash register. When the amount is entered and the purchase button is clicked, the change to be returned is calculated. It also handles cases when the customer pays the exact price or when there is not enough money in the register to return the change.

- **styles.css**: Defines the visual styles of the interface, ensuring it is clear and easy to use. The interface is clean and presents the design in an orderly and accessible way.

### Functionality

1. **Payment Input**: The user enters the amount they want to pay for the item.
2. **Change Calculation**: When the purchase button is clicked, the app calculates the change to be returned, based on the price of the item and the money entered.
3. **Display Change**: If there is enough money in the cash register, the change to be given back is displayed, indicating the coins and bills that will be returned.
4. **Exact Payment Handling**: If the customer pays the exact price, a message is shown indicating there is no change.
5. **Insufficient Funds Handling**: If there is not enough money in the register to return the change, a message saying "INSUFFICIENT_FUNDS" is displayed.

### Style and Design

- The project uses a simple, centered design with a white container that holds all the elements.
- The buttons have a hover effect to enhance the user experience.
- The change information is displayed prominently in a clear and easy-to-understand format.

### Requirements

- Modern web browser.
- Fully works on the client-side, no backend required.
