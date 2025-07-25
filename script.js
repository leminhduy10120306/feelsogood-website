// Danh sách các file GIF (tên file bên trong thư mục gifs/)
const gifList = [
  "dragon1.gif",
  "pixelGodzilla.gif",
  "pokemon1.gif",
  "pokemon2.gif"
];

let currentIndex = 0;

const gifDisplay = document.getElementById("gifDisplay");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Cập nhật ảnh GIF hiển thị
function updateGif() {
  gifDisplay.src = `gifs/${gifList[currentIndex]}`;
}

// Xử lý nút "←"
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + gifList.length) % gifList.length;
  updateGif();
});

// Xử lý nút "→"
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % gifList.length;
  updateGif();
});
