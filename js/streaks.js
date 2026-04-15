let count = localStorage.getItem("streak") || 0;

document.getElementById("count").innerText = count + " days";

function increment(){
    count++;
    localStorage.setItem("streak", count);
    document.getElementById("count").innerText = count + " days";
}

function resetStreak(){
    count = 0;
    localStorage.setItem("streak", 0);
    document.getElementById("count").innerText = "0 days";
}
