type Product = [string, number, boolean];
let product1: Product = ["Laptop", 15, true];
let product2: Product = ["Desk", 50, false];
let product3: Product = ["Glass Vase", 5, true];
let product4: Product = ["Monitor", 10, true];
let product5: Product = ["Chair", 100, false];
let products: Product[] = [
    product1,
];
for (let product of products) {
    if (product[2] === true) {
        console.log(product[0] + ": จำนวน " + product[1] + " เครื่อง แตกหักง่าย");
    } else {
        console.log(product[0] + ": จำนวน " + product[1] + " ชิ้น ไม่แตกหักง่าย");
    }
}