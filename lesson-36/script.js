"use strict";
const userName = 'John Doe';
console.log('Hello11, ' + userName);
function sumArray(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([]));
// 2 Завдання
function createUser(name, age, isActive = true) {
    return {
        name: name,
        age: age,
        isActive: isActive
    };
}
const newUser = createUser('Анна', 25, true);
console.log(newUser); // { name: 'Анна', age: 25, isActive: true }
// 3. Завдання
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
function getOrderStatus(status) {
    switch (status) {
        case OrderStatus.Pending:
            return "Замовлення очікує на обробку";
        case OrderStatus.Shipped:
            return "Замовлення було відправлено";
        case OrderStatus.Delivered:
            return "Замовлення доставлено";
        case OrderStatus.Cancelled:
            return "Замовлення скасовано";
        default:
            throw new Error("Невідомий статус замовлення");
    }
}
console.log(getOrderStatus(OrderStatus.Pending));
console.log(getOrderStatus(OrderStatus.Shipped));
console.log(getOrderStatus(OrderStatus.Delivered));
console.log(getOrderStatus(OrderStatus.Cancelled));
