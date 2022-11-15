const manyStudent = document.getElementById("manyStudent");    
    manyStudent.value="manyStudent";
    manyStudent.type="number";
    manyStudent.min="1";
    manyStudent.onchange="changeValue()";

    function changeValue() {
        console.log(manyStudent.value);
    }
