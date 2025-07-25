// Danh sách các file GIF (tên file bên trong thư mục gifs/)
const gifList = [
  "dragon1.gif",
  "dragon2.gif",
  "pokemon1.gif",
  "pokemon2.gif",
  "pokemon3.gif"
];

let nameList = [];
let currentIndex = 0;

const gifDisplay = document.getElementById("gifDisplay");
const gifName = document.getElementById("gifName");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Load danh sách tên từ file names.json
fetch("json/names.json")
  .then(res => res.json())
  .then(names => {
    nameList = names;
    updateDisplay();
  });

// Cập nhật ảnh GIF hiển thị
function updateDisplay() {
  gifDisplay.src = `gifs/${gifList[currentIndex]}`;
  gifName.textContent = nameList[currentIndex] || "Unidentified";
}

// Xử lý nút "←"
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + gifList.length) % gifList.length;
  updateDisplay();
});

// Xử lý nút "→"
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % gifList.length;
  updateDisplay();
});
