// Đồng hồ live
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = "Giờ hiện tại: " + timeString;
}
setInterval(updateClock, 1000);
updateClock();

// Hiển thị message với animation
function showMessage() {
    const name = document.getElementById("nameInput").value.trim();
    const color = document.getElementById("colorInput").value;
    const msgDiv = document.getElementById("message");

    if(!name) {
        alert("Vui lòng nhập tên!");
        return;
    }

    msgDiv.textContent = `Xin chào, ${name}! Chúc bạn một ngày tuyệt vời!`;
    msgDiv.style.backgroundColor = color;
    msgDiv.style.opacity = "1";
    msgDiv.style.transform = "translateY(0)";

    // Tự ẩn sau 5s
    setTimeout(() => {
        msgDiv.style.opacity = "0";
        msgDiv.style.transform = "translateY(-20px)";
    }, 5000);
}
