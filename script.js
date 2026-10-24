// Năm tự cập nhật theo đồng hồ của trình duyệt.
document.getElementById("year").textContent = new Date().getFullYear();

// Menu đánh dấu mục đang được chọn khi nhấn.
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav a").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});
