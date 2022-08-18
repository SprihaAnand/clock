setInterval(showTime, 1000);

function showTime() {
    var current = new Date();
    var hours = current.getHours();
    var minutes = current.getMinutes();
    var seconds = current.getSeconds();
    const time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerHTML = time;
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    const Todaydate = date + "-" + month + "-" + year;
    document.getElementById("date").innerHTML = Todaydate;
}
showTime();