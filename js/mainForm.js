const mainForm = document.getElementById("mainForm");

subBtn.innerText="제출";
canBtn.innerHTML="취소";

subBtn.addEventListener('click', () => {
    if(manyStudent.value !== null){
        alert(`강의실: ${lectRoom.value}, 인원: ${manyStudent.value} 입니다.`);
    }
})
canBtn.addEventListener('click', () => {
    alert("취소합니다.");
    window.close();
})