var inputs = []
var BadApple = {
    frame:1,
    items:{
        _1:[
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ]
    }
}

for (let i = 0; i < 100; i++) {
    inputs.push(document.querySelector("#input" + (i+1)))
}

document.querySelector(".data-loading").style.display = "none"

setInterval(() => {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.opacity = BadApple.items["_" + BadApple.frame][i]
    }
    BadApple.frame += 1
}, 50);