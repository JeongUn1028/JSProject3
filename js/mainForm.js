const mainForm = document.getElementById("mainForm");
const manyStudent = document.getElementById("manyStudent"); 
manyStudent.type="number";
manyStudent.min="1";
manyStudent.value="1";
manyStudent.onchange="handleChange()";

subBtn.innerText="제출";
canBtn.innerHTML="취소";

subBtn.addEventListener('click', () => {
    alert(`
    강의실: ${lectRoom.value}
    예약시간: ${reservTime.value}
    학생수: ${manyStudent.value}
    로 예약됩니다.`
    );
    window.close();
})
canBtn.addEventListener('click', () => {
    alert("취소합니다.");
    window.close();
})