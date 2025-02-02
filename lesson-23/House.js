import Apartment from "./Apartment.js";

class House {
    constructor(maxApartments) {
        this.maxApartments = maxApartments;
        this.apartments = [];
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            if (apartment instanceof Apartment) {
                this.apartments.push(apartment);
            } else {
                console.log("Тільки людину класу Apartment можна додати!");
            }
        } else {
            console.log("Перевищено максимальну кількість квартир у будинку!");
        }
    }
}

export default House;