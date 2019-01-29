//ok("http://52.233.199.97:1488/get_problems")

function ok(url){
    var xhr = new XMLHttpRequest
    xhr.open("GET", url)
    xhr.send()
    xhr.onload = function() {
        alert(xhr.responseText)
        var problems = JSON.parse(xhr.responseText)
        fill(problems)
    }
}

function fill(problems) {
    var list = document.getElementById("wishList")
    var card = document.getElementById("wish").cloneNode(true)
    problems.forEach(element => {
        console.log(element._id)
        card.getElementsByClassName("card-title")[0].innerHTML = element.problem_title
        card.getElementsByClassName("card-text")[0].innerHTML = element.problem_description
        card.getElementById("cardBtn").innerHTML = "Carma: " + element.coins
        list.appendChild(card.cloneNode(true))
    });
}

function cardClick(id) {
    
}

document.getElementById("cardContainer").onclick = function(event) 
{
    var target = event.target

    while (target != this) {
        if (target.tagName == 'DIV') {
            cardClick(target.id)
            return;
        }
        target = target.parentNode;
    }
}
