window.onload = function() {
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

    var menuLinks=[{name: "Home", path: "index.html"}, {name: "About Us", path: "assets/pages/aboutus.html"},{name: "About Me", path: "assets/pages/aboutme.html"}];
    var menuLinksP=[{name: "Home", path: "../../index.html"}, {name: "About Us", path: "aboutus.html"},{name: "About Me", path: "aboutme.html"}];

    
    renderNavigation();
    function renderNavigation() {
        var getUrl = location.pathname;
        var pathHolder = getUrl.split("/");
        var html="";
        html+="<ul class='w-100'>";
        if(pathHolder[pathHolder.length-1] == "index.html"){
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
    var imageArray=["assets/img/family_cars.jpg","assets/img/slika3.jpg","assets/img/familycar1.jpg","assets/img/student_cars.jpg","assets/img/sport_cars.jpg","assets/img/champagneAudi.gif"];
    var step=0;
    function slide(){
        document.getElementById("banner").style.backgroundImage='url('+imageArray[step++%imageArray.length]+')';
    }
    
    setInterval(slide, 3000);
	
	document.getElementById('inputSearch').addEventListener("keyup", function(event) { //mozda cu ipak brisati, jer ima neke nuspojave!!
		event.preventDefault();
		if (event.keyCode === 13) {
		window.find(document.getElementById('inputSearch').value);
		}
	});
    
}