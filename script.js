var inputs = []
var BadApple = {
    frame:0
}

for (let i = 0; i < 100; i++) {
    inputs.push(document.querySelector("#input" + (i+1)))
}
document.getElementById(".data-loading").style.display = "none"