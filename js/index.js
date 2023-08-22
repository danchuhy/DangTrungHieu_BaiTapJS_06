// BÀI TẬP VỀ NHÀ 01 - TÌM SÓ NGUYÊN DƯƠNG NHỎ NHẤT
function Submit_01(){

    // B1: Xác định đầu vào
    // - Không có đầu vào
    
    // B2: Chạy vòng lặp while, khi nào thoả điều kiện >10000 thì dừng lại
    var i=0;
    var sum =0;

    while (sum < 10000){
        i++;
        sum += i;
    }


    // B3: In kết quả đầu ra
    document.getElementById('result_01').innerHTML = `
    <div class ="result">
        n =  <b>${i}</b>; <br>
        Tổng = <b>${sum}</b>;
    </div>`

};


// BÀI TẬP VỀ NHÀ 02 - TÍNH TỔNG LUỸ THỪA

function Submit_02(){
    // B1: Xác định đầu vào
    var x02 = +document.getElementById('x02').value;
    var n02 = +document.getElementById('n02').value;
    var error2 = false;

    // Đảm bảo x và n >= 0
    if (x02 < 0 || n02 < 0){
        error2 = true;
    }

    // B2: Tính tổng bằng đệ quy: x^n + x^(n-1) + x^(n-2) + .... x^1
    function tongLuyThua(x02,n02){
        if (n02 <= 1){
            return x02;
        } else {
            return Math.pow(x02,n02) + tongLuyThua(x02,n02-1);
        }
    }


    // B3: In kết quả đầu ra
    if (error2 == true){
        document.getElementById('result_02').innerHTML = `
        <div class ="result error">
            Số không thể là số âm. Vui lòng nhập lại!
        </div>`
    } else {
        document.getElementById('result_02').innerHTML = `
        <div class ="result">
            Kết quả: <b>${tongLuyThua(x02,n02)}</b>
        </div>`
    }

}



// BÀI TẬP VỀ NHÀ 03 - TÍNH GIAI THỪA
function Submit_03(){

    // B1: Xác định đầu vào
    var n03 = +document.getElementById('n03').value;
    var error3 = false;

    // Đảm bảo n >= 0
    if (n03 < 0){
        error3 = true;
    }

    // B2: Tính tích bằng đệ quy: n*(n-1)*(n-2)*...*(1)   
    function giaiThua(n03){
        if (n03<=1){
            return 1;
        } else {
            return n03*giaiThua(n03-1);
        }
    }

    // B3: In kết quả đầu ra
    if (error3 == true){
        document.getElementById('result_03').innerHTML = `
        <div class ="result error">
            Số không thể là số âm. Vui lòng nhập lại!
        </div>`
    } else {
        document.getElementById('result_03').innerHTML = `
        <div class ="result">
            Kết quả: <b>${giaiThua(n03)}</b>
        </div>`
    }

};


// BÀI TẬP VỀ NHÀ 04 - XÁC ĐỊNH TAM GIÁC
function doiLoaiKhach(){
    var loaiKhach = document.querySelector('input[name="loaiKhach"]:checked').value;
    var blockSoKetNoi = document.getElementById('blockSoKetNoi');
    var result_04 = document.getElementById('result_04');

    if (loaiKhach==="doanhNghiep"){
        blockSoKetNoi.classList.remove("d-none");
        result_04.classList.add("d-none")
    } else {
        blockSoKetNoi.classList.remove("d-none");
        blockSoKetNoi.classList.add("d-none");
        result_04.classList.add("d-none")
    }
}

function Submit_04(){
    // B1: Không có đầu vào
    // B2: Tạo vòng lập từ 1-10
    // - Chẵn: màu đỏ
    // - Lẻ: màu xanh
    var taoDiv = "";
    for (var i = 1; i<=10; i++){
        if (i%2 ==0){
            taoDiv += `<div class="bg-primary"> div ${i} </div> <br>`
        } else{
            taoDiv += `<div class="bg-danger"> div ${i} </div> <br>`
        }
    }


    // B3: In kết quả đầu ra
    document.getElementById('result_04').innerHTML = taoDiv;


}


// BÀI TẬP VỀ NHÀ 05 - LIỆT KÊ SÔ NGUYÊN TỐ BÉ HƠN N
function Submit_05(){

    // B1: Xác định đầu vào
    var n05 = +document.getElementById('n05').value;
    var error5 = false;
    var cacSoNguyenTo = "";

    // đảm bảo n >= 0
    if (n05 < 0){
        error5 = true;
    }

    // B2: Cách làm
    // - 1: Viết hàm Xác định 1 số có phải là số nguyên tố hay không?
    //      cho i chạy từ 1 -> số đó, kiểm xem số đó có chia hết cho bất kì số i nà không?
    //      Nếu không => số đó là số Nguyên tố

    // - 2: Cho vòng lặp chạy từ 1 đến n, dùng hàm trên kiểm tra số đó có phải số nguyên tố hay không?
    function xacDinhSoNguyenTo(x){
        if (x==2){
            return true;
        }

        for (var i = 2; i < x; i++){
            if (x%i == 0){
                return false;
            } else {
                return true;
            }
        }
    }

    for (var i = 0; i <= n05; i++){
        if (xacDinhSoNguyenTo(i)){
            cacSoNguyenTo += `${i}, `
        }
    }


    // B3: In kết quả đầu ra
    document.getElementById('result_05').innerHTML = "Các số nguyên tố: " + cacSoNguyenTo;


};

