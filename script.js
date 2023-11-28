const colorArr = ["white", "blue", "orange", "purple", "whitesmoke", "black", "yellow", "green", "blueviolet"];


let changeBackground;
document.querySelector("#start").addEventListener("click", function(){
    document.querySelector("h1").innerHTML = "Press 'Stop' to stop changing the background color"
    
    const backgroundChanger = function(){
        let randomColor = colorArr[Math.floor(Math.random()*colorArr.length)];
        document.querySelector("body").style.backgroundColor = randomColor;
        if(randomColor === "white" || randomColor === "whitesmoke" || randomColor === "yellow") {
            document.querySelector("body").style.color = "black";
        } else {
            document.querySelector("body").style.color = "white";
        }
    }

    changeBackground = setInterval(backgroundChanger, 1000);
})
        
document.querySelector("#stop").addEventListener("click", function(){
    clearInterval(changeBackground);
})