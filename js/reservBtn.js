const reservBtn = document.getElementById("reservButton");
reservBtn.innerText = "강의실 예약";

reservBtn.addEventListener('click', () => {
    window.open("/popupPage.html","_blank","./css/popupPage.css");
})