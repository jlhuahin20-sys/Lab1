let CupSize: string = "S";
let ownCup: boolean = true;
let price: number = 0;
let finalPrice: number = 0;
if (CupSize == "S") {
    price = 60;
} else if (CupSize == "M") {
    price = 80;
} else if (CupSize == "L") {
    price = 100;
}
if (ownCup) {
    finalPrice = price - (price * 5 / 100);
} else {
    finalPrice = price;
}
console.log("กาแฟขนาด " + CupSize + " ราคาปกติ " + price + " บาท");
if (ownCup) {
    console.log("ได้รับส่วนลด 5% ราคาสุทธิ " + finalPrice + " บาท");
} else {
    console.log("ราคาสุทธิ " + finalPrice + " บาท");
}