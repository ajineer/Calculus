var btn = document.getElementsByClassName("problems");
    
for(var i = 0; i<btn.length; i++){
    btn[i].addEventListener("click", function () {
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

var btn = document.getElementsByClassName("Two_4");
    
for(var i = 0; i<btn.length; i++){
    btn[i].addEventListener("click", function () {
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}