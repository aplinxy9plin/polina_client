function post() {

}

var customer = "dasha"

function buttonClick(){
    var title = document.getElementById("title").value
    var descript = document.getElementById("descript").value
    var coins = document.getElementById("karma").value
    var url = "http://52.233.199.97:1488/login?customer=" + customer + "&problem_title=" + title + "&problem_description=" + descript + "&coins=" + coins
    alert(url)
    var xhr = new XMLHttpRequest
    xhr.open("GET", url)
    xhr.send()
    xhr.onerror = function() {
        alert("error")
    }
    xhr.onload = function() {
        alert("sucsess")
    }
}