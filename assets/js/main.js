window.onload = function() {
    // var basePath = window.location;
    // console.log(basePath);
    document.getElementById("bars").addEventListener("click", function(){
        document.getElementById("overlay").classList.toggle("h-100");
        document.getElementById("bars").classList.toggle( "fa-times");
    });
    var flag=0;
    document.getElementById("search").addEventListener("click", function(){
        document.getElementById("inputSearch").style.width="200px";
        document.getElementById("inputSearch").focus();
        flag++;
        if(flag%2==0){
            document.getElementById("inputSearch").style.width="0px";
        }
    });

    var menuLinks=[{name: "Home", path: "index.html"}, {name: "Reviews", path: "assets/pages/reviews.html"}, {name: "About Us", path: "assets/pages/aboutus.html"},{name: "About Me", path: "assets/pages/aboutme.html"}];
    var menuLinksP=[{name: "Home", path: "../../index.html"}, {name: "Reviews", path: "reviews.html"}, {name: "About Us", path: "aboutus.html"},{name: "About Me", path: "aboutme.html"}];

    
    renderNavigation();
    function renderNavigation() {
        var getUrl = location.pathname;
        var pathHolder = getUrl.split("/");
        console.log(pathHolder[pathHolder.length-1]);
        var html="";
        html+="<ul>";
        if(pathHolder[6] == "index.html"){
        for(index in menuLinks){ 
            html+="<li><a href='"+menuLinks[index].path+"'>"+menuLinks[index].name+"</a></li>";
        }}
        else{
            for(index in menuLinksP){
                html+="<li><a href='"+menuLinksP[index].path+"'>"+menuLinksP[index].name+"</a></li>";
            }
        }
        html+="</ul>";
        document.getElementById("overlay").innerHTML=html;
    }
}