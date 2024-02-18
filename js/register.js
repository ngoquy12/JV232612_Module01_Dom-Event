// Lấy ra các element trong form
let formElement = document.querySelector("#formRegister");
let userNameElement = document.querySelector("#userName");
let genderElements = document.querySelectorAll("input[name='gender']");
let emailElement = document.querySelector("#email");
let passwordElement = document.querySelector("#password");
let genderValue = "Khác";

// Lấy dữ liệu từ localStorage về (Giá trị của nó phải là mảng rỗng)
// Trước khi thao tác, chúng ta phải ép kiểu dữ liệu từ JSON sang JS
const listUser = JSON.parse(localStorage.getItem("users")) || [];
// let userJs = JSON.parse(listUser);

console.log(listUser);

// Lắng nghe sự kiện thay đổi giá trị trong input type radio
for (let i = 0; i < genderElements.length; i++) {
  // Lắng nghe sự kiện của từng phần tử input
  genderElements[i].addEventListener("change", function (event) {
    // Kiểm tra ô input nào đang được checked
    if (event.target.checked) {
      // Gán lại giá trị của ô input đó cho biến genderValue
      genderValue = event.target.value;
    }
  });
}

// Lắng nghe sự kiện submit form
formElement.addEventListener("submit", function (event) {
  // Ngăn chặn sự kiện mặc định của form
  event.preventDefault();

  // Tạo đối tượng user
  const user = {
    id: Math.ceil(Math.random() * 1000000000000),
    userName: userNameElement.value,
    gender: genderValue,
    email: emailElement.value,
    password: passwordElement.value,
  };

  // Lưu dữ liệu lên localStorage => Lưu trữ với kiểu dữ liệu JSON
  // 1. Thêm và cập nhật dữ liệu lên local
  // Chuyển đổi kiểu của JS sang JSON
  //  let userJson = JSON.stringify(user);

  // Push đối tượng user vào cuối mảng listUser
  listUser.push(user);

  console.log(listUser);

  // Lưu mảng listUser lên localStorage
  localStorage.setItem("users", JSON.stringify(listUser));
});

// 2. Cách xóa dữ liệu khỏi localStorage
// localStorage.removeItem("users");

// Cách chuyển đổi từ kiểu JS sang JSON
// let employee = {
//   id: 1,
//   employeeName: "A",
// };

// let convertJsToJson = JSON.stringify(employee);
// console.log("Sau khi chuyển đổi sang JSON: ", convertJsToJson);

// // Chuyển đổi từ JSON sang JS
// let convertJsonToJs = JSON.parse(convertJsToJson);
// console.log("Sau khi chuyển đổi sang JS: ", convertJsonToJs);

// Lưu thông tin của user đăng nhập
const userLogined = {
  userName: "Đăng Nguyễn",
  email: "dang@gmail.com",
};

localStorage.setItem("userLogin", JSON.stringify(userLogined));

// Thực hiện chức năng đăng xuất
let btnLogout = document.querySelector("#btnLogout");

// Bắt sự kiện click vào button
btnLogout.addEventListener("click", function () {
  localStorage.removeItem("userLogin");
});
