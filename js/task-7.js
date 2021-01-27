const orders = [
    { email: 'solomon@topmail.ua', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'jacob@mail.com', dish: 'Taco' },
];
  
// Пиши код ниже этой строки
function composeMessage(position) {

    return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position + 1}-й в очереди.`;
}

  
const messages = orders.map((order, position) => {
    return composeMessage.call(order, position);
});

console.log(messages);


// ------------------------------------------------------------------------

// Сервису приготовления и доставки еды требуется функция генерации сообщений о статусе заказа.

// Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.' Позиция это значение параметра position - позиция элемента в массиве (на единицу больше чем индекс).

// Не объявляй дополнительные параметры функции composeMessage(position).
// Используй call для вызова функции в контексте одного объекта-заказа.
// Используй this в теле функции для доступа к свойствам объекта-заказа в контексте которого она была вызывана.
// Дополни код так, чтобы в переменной messages, с помощью метода map, получился массив сообщений о статусе заказов из массива orders.


// VARIAN 1 ------------------------------------------------------------

// function composeMessage(position) {

//     return `Готовим ${this[position].dish} для ${this[position].email}. Ваш заказ ${position + 1}-й в очереди.`;
// }

  
// const messages = []; 

// orders.map((order, position) => {
//     messages.push(composeMessage.call(orders, position));
// });

// console.log(messages);


// VARIANT 2 -------------------------------------------------------------

// const messages = [];

// function composeMessage(position) {
//     for (let i = 0; i < this.length; i += 1) {
//         console.log(i);
//         console.log(this.length);
//         console.log(this[i]);
//         messages.push(`Готовим ${this[i].dish} для ${this[i].email}. Ваш заказ ${i + 1}-й в очереди.`);
//     }
//     return messages;
// }

// console.log(composeMessage.call(orders));