// Cách truy xuất các phần tử trong DOM
let headingElement = document.getElementById("heading-1");
console.log(headingElement);
// Đối với getElementById: Trả về phần tử đầu tiên có id được tìm thấy, nếu không tìm thấy thì trả về null
// getElementById hay sử dụng trong trường hợp element đó là duy nhất

// Cách 2: sử dụng cú pháp querySelector: Tên thẻ, id, class, attribute
// Trả về phần tử đầu tiên có selector được tìm thấy
let pElement = document.querySelector("#paragraph");
console.log(pElement);

let divElement = document.querySelector(".number");
console.log(divElement);

// Cách 3: sử dụng cú pháp querySelectorAll
// Trả về dạng NodeList (Bản chất giống với mảng, tuy nhiên, nó không thể sử dụng được các phương thức làm việc
// với mảng như push, pop, ...)
let pElements = document.querySelectorAll("p");
for (let i = 0; i < pElements.length; i++) {
  console.log(pElements[i]);
}

let genderElements = document.querySelectorAll("input[name='gender']");
console.log(genderElements);

// Tương tác với nội dung của Element trong DOM
// Bước 1: Lấy ra Element trong DOM
let boxElement = document.querySelector(".box");
// Bước 2: Gán nội dung cho phần tử đó
boxElement.innerHTML = "Đây là box";

// Lấy ra nội dung (text) của một phần tử
let boxContent = boxElement.innerText;
console.log(boxContent);

// 3. Cách style cho một phần tử trong DOM => Dùng trong trường hợp phần tử có ít style
boxElement.style.color = "blue";
boxElement.style.backgroundColor = "#dadada";

// Cách thêm class vào trong một phần tử HTML => Dùng trong trường hợp phần tử có nhiều style
// boxElement.classList.add("box1");

// Cách xóa một class của element
boxElement.classList.remove("box");

// 4. Cách để tạo ra một element bằng JS
let h3Element = document.createElement("h3");
h3Element.innerHTML = "Heading 3";
// Gán thẻ h3 vào trong trình duyệt
document.body.append(h3Element);

let h4Element = document.createElement("h4");
h4Element.innerHTML = "Heading 4";

// Thêm thẻ h4 với nội dung Heading 4 vào trong thẻ div có class là box
boxElement.appendChild(h4Element);

let h1Element = document.querySelector("#heading");
console.log(h1Element.textContent);

// 5. Event trong DOM
let btnClick = document.querySelector("#btnClick");
let btnRemove = document.querySelector("#btnRemove");
let btnToggle = document.querySelector("#btnToggle");

// Khi click vào thì add class box1
btnClick.addEventListener("click", function () {
  boxElement.classList.add("box1");
});

// Khi click vào thì remove class box1
btnRemove.addEventListener("click", function () {
  boxElement.classList.remove("box1");
});

// Khi click vào thì remove class box1
// btnToggle.addEventListener("click", function () {
//   boxElement.classList.toggle("box1");
// });

// Lấy ra element body
let bodyElement = document.querySelector("body");
btnToggle.addEventListener("click", function () {
  bodyElement.classList.toggle("dark");
});

// Lấy ra giá trị từ input
// Lưu ý: Khi một sự kiện được tạo ra thì DOM trả về cho function một tham số mặc định (Nhưng không bắt buộc) là event
// event: là tất cả thông tin của sự kiện đó
let emailElement = document.querySelector("#email");
emailElement.addEventListener("input", function (event) {
  console.log("Event: ", event.target.value);
});
