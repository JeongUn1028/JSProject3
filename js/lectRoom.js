const lectRoomNum = ["55501", "55101", "55102"];
const lectRoom = document.getElementById("lectRoom");
lectRoom.required;

for(var i =0; i<lectRoomNum.length;i++) {
    const createOpt = document.createElement("option");
    createOpt.value=lectRoomNum[i];
    createOpt.innerText=lectRoomNum[i];
    lectRoom.appendChild(createOpt);
}
