let calendar = document.getElementById("calendar");

let days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

for(let i=1;i<=30;i++){
    let div = document.createElement("div");
    div.className = "day";
    div.innerText = i;
    calendar.appendChild(div);
}
