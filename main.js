// BT Quản lí tuyển sinh
/**
 * INPUT:
 * điểm chuẩn:
 * điểm 3 môn:M1,M2,M3
 * khu vuc:X,A,B,C
 * đối tượng:DT0,DT1,DT2,DT3
 *
 * PROGRAMMING:
 * 
 * Dom nút ketQua xuất Output:
 * tạo biến chứa điểm,doituong,khuvuc 
 * TẠo hàm tinhTong3Mon tính tổng 3 môn
 * tao hàm tinhTongSoDiem tính thêm điểm ưu tiên nếu có
 * gán tongDiem cho hàm tinhTongSoDiem
 * if (tongDiem >= diemChuan && !M1 && !M2 && !M3) =>đậu
 * else rớt
 * 
 
 * OUTPUT:
 * đậu hay rớt
 * tổng điểm
 */
var T3 = 0;
var tongDiem = 0;
document.getElementById("ketqua").onclick = function (event) {
  event.preventDefault();
  var M1 = document.getElementById("mon_1").value;
  var M2 = document.getElementById("mon_2").value;
  var M3 = document.getElementById("mon_3").value;
  var diemChuan = document.getElementById("diemChuan").value;
  var diemKhuVuc = document.getElementById("Area").value * 1;
  var diemDoiTuong = document.getElementById("Object").value * 1;

  if (!M1 || !M2 || !M3 || !diemChuan) {
    alert("Chưa nhập đủ điểm");
    return;
  }
  tinhTong3Mon(M1, M2, M3);
  tinhTongSoDiem(T3, diemKhuVuc, diemDoiTuong);
  console.log(tongDiem);
  console.log(T3);
  console.log(diemKhuVuc);
  console.log(diemDoiTuong);

  document.getElementById("ShowtongDiem").innerHTML =
    "Tổng điểm là:  " + tongDiem;
  if (tongDiem >= diemChuan * 1 && !M1 && !M2 && !M3) {
    document.getElementById("trungTuyen").innerHTML =
      "kết quả tuyển sinh : " + "đậu";
  } else {
    document.getElementById("trungTuyen").innerHTML =
      "kết quả tuyển sinh : " + "rớt";
  }
};

function tinhTong3Mon(M1, M2, M3) {
  T3 = M1 * 1 + M2 * 1 + M3 * 1;
}
function tinhTongSoDiem(T3, diemKhuVuc, diemDoiTuong) {
  tongDiem = T3 + diemKhuVuc + diemDoiTuong;
}

/**BÀI TẬP TÍNH THUẾ
 * INPUT:
 * HỌ TÊN
 * TỔNG THU NHẬP
 * SỐ NGƯỜI PHỤ THUỘC
 * PROGRAMMING:
 * 1.TÍNH THU NHẬP CHỊU THUẾ
 *    -TẠO HÀM thuNhapChiuThue:tongThu -4 -soNguoi*1.6
 *    -
 *    -
 *    -
 *    -
 * 2.Hàm TÍNH THUẾ Suất :
 *    -var thueSuat =5
 *    -gán income = thuNhapChiuThue
 *
 *    -if income<=60 thueSuat +=5
 *    -else if 60<income && income <=120
 *    -else if 120 <income && income <=216
 *    -else if 216<income && income <=384
 *    -else if 384<income && income <=624
 *    -else if 624<income && income <=960
 *      -ELSE
 * 3.Dom nút tính tiền thuế
 *    -tienThue =income*thueSuat/100;
 * OUTPUT:
 * TIỀN THUẾ PHẢI TRẢ
 */
var thueSuat = 1;
document.getElementById("Tax").onclick = function (event) {
  event.preventDefault();
  var hoTen = document.getElementById("name").value;
  var soNguoi = document.getElementById("soNguoi").value;
  var tongThuNhap = document.getElementById("thunhap").value;
  var income = thuNhapChiuThue(tongThuNhap, soNguoi);
  if (income <= 0) {
    document.getElementById("showTax").innerHTML =
      "Bạn không đử diều kien nop thue";
    return;
  }
  tinhThueSuat(thueSuat, income);

  var tienThue = (income * thueSuat) / 100;
  document.getElementById("showTax").innerHTML =
    "Số tiền nộp thuế thu nhập cá nhân của " +
    hoTen +
    " là " +
    tienThue +
    "triệu đồng";
};
function thuNhapChiuThue(thu, nguoi) {
  return thu - 4 - nguoi * 1.6;
}
function tinhThueSuat(thueSuat, income) {
  if (income <= 60) {
    thueSuat = 5;
  } else if (60 < income && income <= 120) {
    thueSuat = 10;
  } else if (120 < income && income <= 216) {
    thueSuat = 15;
  } else if (216 < income && income <= 384) {
    thueSuat = 20;
  } else if (384 < income && income <= 624) {
    thueSuat = 25;
  } else if (624 < income && income <= 960) {
    thueSuat = 30;
  } else {
    thueSuat = 35;
  }
}
/**
 * INPUT:
 * TÊN
 * SỐ KW
 * PROGRAMMING:
 * 0.TẠO const chưa các mốc và giá tiền theo mốc
 * 1. DOM NÚT
 *    -TẠO BIẾN soKW
 *    -TẠO BIẾN ten
 *    -Goi ham tongTienDien()
 * 2.TẠO CÁC HÀM THEO MỐC
 *  -tinhMoc_1(){
 *                   return    soKw*A
 * }
 *  -tinhMoc_2(){
 *                  return   (soKw-M1)*B
 * }
 *  -tinhMoc_3(){
 *                  return   (soKw-M2)*C
 * }
 *  -tinhMoc_4(){
 *                  return   (soKw-M3)*D
 * }
 *  -tinhMoc_5(){
 *                   return  (soKw-M4)*E
 * }
 *
 * 3.TẠO HÀM TÍNH TỔNG TIỀN
 * -if soKw <=M1: tongTienDien = tinhMoc_1
 * -if soKw <=M2: tongTienDien = tinhMoc_1+tinhMoc_2
 * -if soKw <=M3: tongTienDien = tinhMoc_1+tinhMoc_2+tinhMoc_3
 * -if soKw <=M4: tongTienDien = tinhMoc_1+tinhMoc_2+tinhMoc_3+tinhMoc_4
 * -if soKw > M4: tongTienDien = tinhMoc_1+tinhMoc_2+tinhMoc_3+tinhMoc_4+tinhMoc_5
 * OUTPUT: TIỀN ĐIỆN
 */
const M1 = 50;
const M2 = 100;
const M3 = 200;
const M4 = 350;
const giaM1 = 500;
const giaM2 = 650;
const giaM3 = 850;
const giaM4 = 1100;
const giaM5 = 1300;
var tongTienDien = 0;
document.getElementById("tienDien").onclick = function (event) {
  event.preventDefault();
  var ten = document.getElementById("ten").value;
  var soKw = document.getElementById("soKy").value;
  tinhTongTien(giaM1, giaM2, giaM3, giaM4, giaM5, soKw, M1, M2, M3, M4);
  document.getElementById("showTienDien").innerHTML =
    "Tiền điện của " + ten + " : " + tongTienDien + " vnd";
};
function tinhMoc_1(soKw, gia) {
  return soKw * gia;
}
function tinhMoc_2(soKw, gia, M1) {
  return (soKw - M1) * gia;
}
function tinhMoc_3(soKw, gia, M2) {
  return (soKw - M2) * gia;
}
function tinhMoc_4(soKw, M3, gia) {
  return (soKw - M3) * gia;
}
function tinhMoc_5(soKw, M4, gia) {
  return (soKw - M4) * gia;
}
function tinhTongTien(giaM1, giaM2, giaM3, giaM4, giaM5, soKw, M1, M2, M3, M4) {
  if (soKw <= M1) {
    tongTienDien = tinhMoc_1(soKw, giaM1);
    return;
  }
  if (soKw <= M2) {
    tongTienDien = tinhMoc_1(soKw, giaM1) + tinhMoc_2(soKw, giaM2, M1);
    return;
  }
  if (soKw <= M3) {
    tongTienDien =
      tinhMoc_1(soKw, giaM1) +
      tinhMoc_2(soKw, giaM2, M1) +
      tinhMoc_3(soKw, giaM3, M2);
    return;
  }
  if (soKw <= M4) {
    tongTienDien =
      tinhMoc_1(soKw, giaM1) +
      tinhMoc_2(soKw, giaM2, M1) +
      tinhMoc_3(soKw, giaM3, M2) +
      tinhMoc_4(soKw, M3, giaM4);
    return;
  }
  if (soKw > M4) {
    tongTienDien =
      tinhMoc_1(soKw, giaM1) +
      tinhMoc_2(soKw, giaM2, M1) +
      tinhMoc_3(soKw, giaM3, M2) +
      tinhMoc_4(soKw, M3, giaM4) +
      tinhMoc_5(soKw, M4, giaM5);
    return;
  }
}
/**
 bài tập tính tiền cáp
 * INPUT:
 MÃ KHÁCH HÀNG: 1||2
 STK:
 SỐ KÊNH CAO CẤP
 SỐ KẾT NÓI THÊM ĐỐI VỚI DOANH NGHIỆP
 * PROGRAMMING:
 1.TẠO CONST 
    -const xuLy_1
    -const xuLy_2
    -const dichVu_1
    -const dichVu_2
    -const kenh_1
    -const kenh_2
 2.DOM nút
    -var khach =
    -var taiKhoan =
    -var soKenh =
    -var soKetnoi =
    if khach=1{
      tinhHoaDon=tinhTong() truyền param
    }else{
      tinhHoaDon=tinhTong() truyền param
    }
 3.Tạo hàm tinhTong(){
    -tinhHoaDon = xuLy +tinhDichVu() +tinhKenh()
 }   
 4.Tạo hàm tinhDichVu(){
   - return dichVu + soKetnoi*5
 }
 5.tạo hàm tinhKenh
  -return kenh*soKenh
 * OUTPUT:Xuất đơn
 */

const xuLy_1 = 4.5;
const xuLy_2 = 15;
const dichVu_1 = 20.5;
const dichVu_2 = 75;
const kenh_1 = 7.5;
const kenh_2 = 50;
document.getElementById("xuatHoaDon").onclick = function (event) {
  event.preventDefault();
  var khach = document.getElementById("maKH").value;
  var taiKhoan = document.getElementById("stk").value;
  var soKenh = document.getElementById("channel").value;
  var soKetnoi = document.getElementById("ketNoiThem").value;
  var tinhHoaDon = 0;
  if (!khach) {
    alert("Nhập mã KH");
    return;
  }
  if (khach == 1) {
    tinhHoaDon = tinhTong(xuLy_1, dichVu_1, 0, kenh_1, soKenh);
  } else {
    tinhHoaDon = tinhTong(xuLy_2, dichVu_2, soKetnoi, kenh_2, soKenh);
  }
  document.getElementById("showHoaDon").innerHTML =
    "Tài Khoản  " + taiKhoan + "có hóa đơn tổng cộng là " + tinhHoaDon;
};
function tinhDichVu(dichVu, soKetnoi) {
  if (soKetnoi > 10) {
    return dichVu + (soKetnoi - 10) * 5;
  } else {
    return dichVu;
  }
}
function tinhKenh(kenh, soKenh) {
  return kenh * soKenh;
}
function tinhTong(xuLy, dichVu, soKetnoi, kenh, soKenh) {
  return xuLy + tinhDichVu(dichVu, soKetnoi) + tinhKenh(kenh, soKenh);
}
