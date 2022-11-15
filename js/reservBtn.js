const reservBtn = document.getElementById("reservButton");
reservBtn.innerText = "강의실 예약";

reservBtn.addEventListener('click', () => {
    console.log('click event');
    window.open("/popupPage.html","_blank","./css/popupPage.css");
})