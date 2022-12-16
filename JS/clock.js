let userInfo = prompt("Please enter your name")
let user = document.querySelector("#user")

user.innerHTML = `${userInfo[0].toUpperCase()+ userInfo.slice(1).toLowerCase()}!`

function showTime() {
    console.log('qweqwe');
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes()
    let s = date.getSeconds()


    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s

    let time = h + ":" + m + ':' + s;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    setTimeout(showTime, 1000);
}
showTime()


let today = new Date();
let dd = today.getDate();

let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

today = dd + '/' + mm + '/' + yyyy;

document.getElementById("date").innerHTML = today;

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("day").innerHTML = day;