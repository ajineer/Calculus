var coll = document.getElementsByClassName("solButton");
var i;

for(i = 0; i<coll.length; i++){
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var Two_3_1sol = this.nextElementSibling;
        if (SVGTextContentElement.style,display === "block"){
            SVGTextContentElement.style.display = "none"
        } else{
            Two_3_1sol.style.display = "block";
        }
    });

}