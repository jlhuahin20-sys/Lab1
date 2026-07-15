let totalBonus: number = 0;

for (let year = 1; year <= 20; year++) {
    let bonus: number = year * 5000;

    console.log("ปีที่ " + year + ": โบนัส = " + bonus + " บาท");

    totalBonus = totalBonus + bonus;
}
console.log("ขอแสดงความยินดี คุณทำงานครบ 20 ปี คุณได้รับโบนัส " + totalBonus + " บาท");