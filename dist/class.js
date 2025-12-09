"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    name; // どこからでもアクセス可能
    price; // 同じクラス内からのみアクセス可能
    category; // 同じクラス内およびサブクラス（継承先のクラス）からのみアクセス可能
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    // 同じクラス内からはすべてのプロパティにアクセス可能
    describe() {
        console.log('----同じクラス内からのアクセス----');
        console.log(`商品名：${this.name}`);
        console.log(`価格:${this.price}`);
        console.log(`カテゴリ:${this.category}`);
    }
}
class Drink extends Product {
    describe() {
        console.log('----サブクラスからのアクセス----');
        console.log(`商品名:${this.name}`);
        // console.log(`価格:${this.price}`);
        console.log(`カテゴリ:${this.category}`);
    }
}
const shampoo = new Product('シャンプー', 500, '生活雑貨');
shampoo.describe();
const coffee = new Drink('コーヒー', 1500, '飲料');
coffee.describe();
console.log('----外部からのアクセス----');
console.log(`商品名:${shampoo.name}`);
// console.log(`価格:${shampoo.price}`);
// console.log(`カテゴリ:${shampoo.category}`);
//# sourceMappingURL=class.js.map