import {Human} from "./Human.js";

class Apartment {
    constructor() {
        this.residents = [];
    }

    addResident(human) {
        if (human instanceof Human) {
            this.residents.push(human);
        } else {
            console.log("Тільки люди класу Human можуть бути жителями");
        }
    }
}

export default Apartment;