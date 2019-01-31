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
    xhr.onerror = function() {
        console.log(Error)
    }
}

//emulate server
problems = [
    {
        _id:"12131",
        problem_title:"ddd",
        problem_descrition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sequi officiis asperiores sed quas fugit cum vero, quia odio perspiciatis rerum repellat hic earum repudiandae, necessitatibus quis consectetur fuga voluptatem!",
        coins:"23"
    },
    {
        _id:"12314",
        problem_title:"ddaad",
        problem_descrition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sequi officiis asperiores sed quas fugit cum vero, quia odio perspiciatis rerum repellat hic earum repudiandae, necessitatibus quis consectetur fuga voluptatem!",
        coins:"34"
    },
    {
        _id:"12145",
        problem_title:"ddfd",
        problem_descrition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sequi officiis asperiores sed quas fugit cum vero, quia odio perspiciatis rerum repellat hic earum repudiandae, necessitatibus quis consectetur fuga voluptatem!",
        coins:  "12"
    }
]

fill(problems)

function fill(problems) {
    var list = document.getElementById("cardContainer")
    problems.forEach(element => {
        var card = document.getElementById("card").cloneNode(true)
        console.log(element.problem_title)
        card.className = "card text-left m-2 shadow custom-card custom-card"
        card.getElementsByClassName("card-title")[0].innerHTML = element.problem_title
        card.getElementsByClassName("card-text")[0].innerHTML = element.problem_descrition
        card.getElementsByClassName("btn")[0].innerHTML = "Carma: " + element.coins
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
