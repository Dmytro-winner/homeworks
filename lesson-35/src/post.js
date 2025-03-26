export default class Post {
    constructor(title) {
        this.title = title;
        this.date = new Date();
        this.content = {};
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON()
        })
    }
}

console.log('##########')
console.log(process.env.NODE_ENV);
console.log('##########')