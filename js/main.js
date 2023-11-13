const XEONGTINH_1 = 8000;
const XEONGTINH_2 = 7500;
const XEONGTINH_3 = 7000;
const XEONGTINH_WAIT = 2000;


const XETRALINH_1 = 9000;
const XETRALINH_2 = 8500;
const XETRALINH_3 = 8000;
const XETRALINH_WAIT = 3000;

const XETIENDUNG_1 = 10000;
const XETIENDUNG_2 = 9500;
const XETIENDUNG_3 = 9000;
const XETIENDUNG_WAIT = 3500;

var money_1 = 0;
var money_2 = 0;
var money_3 = 0;
var money_wait = 0;
var total = 0;

function bill_1(soKm, price) {
    return soKm * price;
}

function bill_2(soKm, price) {
    return (soKm - 1) * price;
}

function bill_3(soKm, price) {
    return (soKm - 19) * price;
}

function bill_wait(timeWait, price) {
    return Math.floor(timeWait / 3) * price;
}

function checkCarType() {
    const xeOngTinh = document.getElementById('xeOngTinh');
    const xeTraLinh = document.getElementById('xeTraLinh');
    const xeTienDung = document.getElementById('xeTienDung');
    var CarType = '';

    if (xeOngTinh.checked) {
        CarType = 'xeOngTinh';
    } else if (xeTraLinh.checked) {
        CarType = 'xeTraLinh';
    } else if (xeTienDung.checked) {
        CarType = 'xeTienDung';
    } else {
        alert('Vui lòng chọn loại xe')
    }
    return CarType;
}

function carPayment(soKm, timeWait, giaXeMoc_1, giaXeMoc_2, giaXeMoc_3, giaXe_wait) {
    if (0 < soKm && soKm <= 1) {
        money_1 = bill_1(soKm, giaXeMoc_1);
        money_wait = bill_wait(timeWait, giaXe_wait);
        total = money_1 + money_wait;
    } else if (1 < soKm && soKm <= 19) {
        money_1 = bill_1(1, giaXeMoc_1);
        money_2 = bill_2(soKm, giaXeMoc_2);
        money_wait = bill_wait(timeWait, giaXe_wait);
        total = money_1 + money_2 + money_wait;
    } else if (soKm > 19) {
        money_1 = bill_1(1, giaXeMoc_1);
        money_2 = bill_2(19, giaXeMoc_2);
        money_3 = bill_3(soKm, giaXeMoc_3);
        money_wait = bill_wait(timeWait, giaXe_wait);
        total = money_1 + money_2 + money_3 + money_wait;
    }
}

var btnTinhTien = document.getElementById('btnTinhTien');
btnTinhTien.onclick = function () {
    var soKm = document.getElementById('soKm').value * 1;
    var timeWait = document.getElementById('timeWait').value * 1;

    var CarType = checkCarType();

    switch (CarType) {
        case 'xeOngTinh':
            carPayment(soKm, timeWait, XEONGTINH_1, XEONGTINH_2, XEONGTINH_3, XEONGTINH_WAIT);
            break;
        case 'xeTraLinh':
            carPayment(soKm, timeWait, XETRALINH_1, XETRALINH_2, XETRALINH_3, XETRALINH_WAIT);
            break;
        case 'xeTienDung':
            carPayment(soKm, timeWait, XETIENDUNG_1, XETIENDUNG_2, XETIENDUNG_3, XETIENDUNG_WAIT);
            break;
        default:
            break;
    }

    const config = { style: "currency", currency: "VND" };
    const formated = new Intl.NumberFormat("vi-VN", config);

    document.getElementById('total').innerHTML = "Tiền xe : " + formated.format(total) ;

    document.getElementById('soKm').innerHTML = '1' ;
    document.getElementById('giaXeMoc_1').innerHTML = giaXeMoc_1 ;
    document.getElementById('money_1').innerHTML = money_1 ;

    document.getElementById('soKm_1').innerHTML = soKm - 1 ;
    document.getElementById('giaXeMoc_2').innerHTML = giaXeMoc_2 ;
    document.getElementById('money_2').innerHTML = money_2 ;

    document.getElementById('soKm_19').innerHTML = soKm - 19 ;
    document.getElementById('giaXeMoc_3').innerHTML = giaXeMoc_3 ;
    document.getElementById('money_3').innerHTML = money_3 ;

    document.getElementById('timeWait').innerHTML = timeWait ;
    document.getElementById('giaXe_wait').innerHTML = giaXe_wait ;
    document.getElementById('money_wait').innerHTML = money_wait ;

    document.getElementById('totalModal').innerHTML = formated.format(total) ;

}
