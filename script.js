// Danh sách các file GIF (tên file bên trong thư mục gifs/)
const gifList = [
  "dragon1.gif",
  "dragon2.gif",
  "pokemon1.gif",
  "pokemon2.gif",
  "pokemon3.gif"
];

let nameList = [];
let statList = [];
let currentIndex = 0;

const gifDisplay = document.getElementById("gifDisplay");
const gifName = document.getElementById("gifName");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Load danh sách tên từ file names.json
Promise.all([
  fetch("json/names.json").then(res => res.json()),
  fetch("json/stats.json").then(res => res.json())
]).then(([names, stats]) => {
  nameList = names;
  statList = stats;
  updateDisplay();
});


// Cập nhật ảnh GIF hiển thị
function updateDisplay() {
  gifDisplay.src = `gifs/${gifList[currentIndex]}`;
  gifName.textContent = nameList[currentIndex] || "Unidentified";

  const stat = statList[currentIndex] || {};
  document.getElementById("stat-hp").textContent = stat.hp ?? "-";
  document.getElementById("stat-armor").textContent = stat.armor ?? "-";
  document.getElementById("stat-damage").textContent = stat.damage ?? "-";
  document.getElementById("stat-speed").textContent = stat.speed ?? "-";
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

const darkModeBtn = document.getElementById("darkModeToggle");

// Kiểm tra dark mode từ localStorage
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
}

// Xử lý khi click nút
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Lưu trạng thái vào localStorage
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("dark-mode", isDark);
});
