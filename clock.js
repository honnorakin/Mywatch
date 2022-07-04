document.getElementById("Adım").innerHTML = prompt("Adınızı Girin").trim()
function showtime() {
    let date = new Date();
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let clock = document.getElementById('myclock')
    clock.innerHTML = '${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)} ${days[date.getUTCDay()]}`
    setTimeout(showTime, 1);
}
showtime();
