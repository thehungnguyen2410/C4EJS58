// let password = prompt("Nhap mat khau");

// let doDaiMatKhau = password.length;

// if (doDaiMatKhau < 8) {
//     alert("Hay nhap mat khau co it nhat 8 ky tu");
// } else {
//     alert("Mat khau dung");
// }

let month = parseInt(prompt("Please enter the month"));

if (month === 1 
    || month === 3 
    || month === 5 
    || month === 7 
    || month === 8 
    || month === 10 
    || month === 12
    ) {
    alert("So ngay trong thang la 31 ngay");
} else if (month === 2) {
    alert("So ngay trong thang la 28 hoac 29 ngay");
} else if (month > 12) {
    alert("Thang khong hop le");
} else {
    alert("So ngay trong thang la 30 ngay");
}

// Homework: tinh so BMI: nhap chieu cao, nhap can nang, dua theo cong thuc tinh ra trang thai hien tai

