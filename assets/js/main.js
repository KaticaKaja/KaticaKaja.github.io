window.onload = function() {
    $('#arrow a').offsetScroller({offsetPixels: 118,animationSpeed: 100
    });

//SEARCH display
    var flag=0;
    document.getElementById("search").addEventListener("click", function(){
        document.getElementById("inputSearch").style.width="200px";
        document.getElementById("inputSearch").focus();
        flag++;
        if(flag%2==0){
            document.getElementById("inputSearch").style.width="0px";
            document.getElementById("inputSearch").value="";
        }
    });
    document.getElementById("inputSearch").addEventListener('blur',function(){
        document.getElementById("inputSearch").style.width="0px";
        document.getElementById("inputSearch").value="";
    })
//NAVIGATION LINKS
    var menuLinks=[{name: "Home", path: "index.html"}, {name: "About Us", path: "assets/pages/aboutus.html"},{name: "About Me", path: "assets/pages/aboutme.html"}];
    var menuLinksP=[{name: "Home", path: "../../index.html"}, {name: "About Us", path: "aboutus.html"},{name: "About Me", path: "aboutme.html"}];

    renderNavigation();
    function renderNavigation() {
        var getUrl = location.pathname;
        var pathHolder = getUrl.split("/");
        var html="";
        html+="<ul id='navList' class='w-100'>";
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

//SLIDESHOW
    var imageArray=["assets/img/family_cars.jpg","assets/img/student_cars.jpg","assets/img/sport_cars.jpg","assets/img/porsche.jpg","assets/img/champagneAudi.gif"];
    var stepSlide=0;
    function slide(){
        document.getElementById("banner").style.backgroundImage='url('+imageArray[stepSlide++%imageArray.length]+')';
    }
    setInterval(slide, 3000);

// SEARCH
	document.getElementById('inputSearch').addEventListener("keyup", function(event) { //mozda cu ipak brisati, jer ima neke nuspojave!!
		event.preventDefault();
		if (event.keyCode === 13 ) {
        window.find(document.getElementById('inputSearch').value);
        document.getElementById("inputSearch").style.width="0px";
		}
	});
    

//OVERLAY
    $("#bars").click(function(){
        $("#overlay").toggleClass("h-100");
        $("#bars").toggleClass("fa-times");
        // if($("#overlay").hasClass("h-100")){
        //     $('#navList').slideUp('slow'); ZASTO NE RADI
        // }
       
    });

//SWIPER
    swiper();
    function swiper(){
        

        var swiperImg=[{path: 'assets/img/truck.png', alt: 'Toyota Tacoma'},
            {path:'assets/img/suv.png', alt: 'Honda CR-V'},{path:'assets/img/sedan.png', alt: 'Toyota Camry'},
            {path:'assets/img/coupe.png', alt: 'Mercedes Benz S-class'},{path:'assets/img/hatchback.png', alt: 'Volkswagen GTI'},
            {path:'assets/img/van.png', alt: 'Chrysler Pacifica'},{path:'assets/img/convertible.png', alt: 'Audi A3 Convertible'},
            {path:'assets/img/wagon.png', alt: 'Subaru Outback'}
        ];
        var swiperContent=[{image:'assets/img/toyotaTacoma.jpg',
            title: 'Toyota Tacoma', 
            content: 'The 2019 Toyota Tacoma is an exceptional off-roader.'
            +' It also has a high payload capacity rivaled only by the all-new Ford Ranger, and it features an easy-to-use infotainment system.'
            +' The Tacoma is a passable daily driver. If adventuring is your priority, this truck belongs to the top of your list.',
            p1:'3.5l, with 159 horsepower and 189 lb-ft of torque',
            p2:'20 mpg in the city and 23 on the highway',p3:'Starting $29,000'},
            {image:'assets/img/hondaCrv.jpg',title:'Honda CR-V', content: 'The 2018 Honda CR-V is one of the best compact SUVs you can buy.'+
            ' With an abundance of cargo room and passenger space and a quality interior, the CR-V is a great choice for both a daily driver and a utility vehicle.'+
            ' We named the CR-V our 2018 Best Compact SUV for the Money because it has the best combination of overall quality and value in its class.',
            p1:'2.4l, with 190 horsepower and 179 lb-ft of torque',p2:'27 mpg in the city and 33 mpg on the highway',
            p3:'Starting $24,250'},
            {image:'assets/img/toyotaCamry.jpg',
            title:'Toyota Camry',
            content: 'The Toyota Camry is an excellent car. It offers fuel-efficient, energetic engines;'+
            ' it rides comfortably; and it handles well, making it more fun to drive than many rivals.'+
            ' Additionally, it looks great inside, provides plenty of passenger room, and comes with a lot of standard features, including an intuitive infotainment system.'+
            ' This is one of the finest midsize sedans on the market, and any car buyer should give it a look.',
            p1:'1.8l, with 203 horsepower and 163 lb-ft of torque',p2:'29 mpg in the city and 41 mpg on the highway',
            p3:'Starting $24,000'},
            {image:'assets/img/mercedesSclass.jpg',
            title:'Mercedes Benz S-class', content: 'The Mercedes-Benz S-Class is a great car. There are several powerful engines options,'+
            ' and the S-Class also provides poised handling and a sumptuous ride. This Mercedes offers more features than almost '+
            'every other car out there, and its cabin quality stands above even other high-priced luxury vehicles.',
            p1:'6.0l, with 463 horsepower and 516 lb-ft of torque',p2:'19 mpg in the city and 28 mpg on the highway',p3:'Starting $122,750'},
            {image:'assets/img/VolkswagenGTI.jpg'
            ,title:'Volkswagen GTI',content: 'The VW GTI is an excellent compact car. This fun-to-drive hatch has dynamic handling,'+
            ' an energetic turbocharged engine, and a set of slick gearboxes. The GTI is more than just a sporty four-door,'+
            ' though. It also has a handsome interior, roomy seats, and a superb infotainment system.',
            p1:'2.0l, with 228 horsepower and 258 lbf-ft of torque',p2:'Average combined ride is 30.16 mpg',p3:'Starting $27,600'},
            {image:'assets/img/chryslerPacifica.jpg',
            title:'Chrysler Pacifica', content: 'The 2019 Chrysler Pacifica ranks in the top half of the minivan class,'+
            ' in part because of its lengthy list of tech and convenience features and its high-quality interior.'+
            ' As far as vans go, it delivers decent performance with a smooth ride and nimble handling.',
            p1:'3.6l, with 287 horsepower and 262 lb-ft of torque',p2:'Average combined ride is 32 mpg',p3:'Starting $27,000'},
            {image:'assets/img/audiA3.jpg',
            title:'Audi A3 Convertible',content: 'The A3 is a great car because it\'s sporty, '+
            'fuel-efficient, and comes loaded with technology and upscale touches. For 2018, '+
            'heated front seats and two USB ports became standard, and higher trims get extra '+
            'advanced safety features.The A3 competes well with more expensive competitors, '+
            'and it has the best combination of quality and value in the class.',
            p1:'2.0l, with 186 horsepower and 221 lb-ft of torque',p2:'26 mpg in the city and 35 mpg on the highway',p3:'Starting $32,000'},
            {image:'assets/img/subaruOutback.jpg',
            title:'Subaru Outback', content: 'Yes, the Subaru Outback is a very nice wagon. It offers the cargo space and ride'+
            'height of an SUV and the easy handling of a car. A substantial number of features come with the Outback,'+
            ' including all-wheel drive, a robust set of entertainment apps (Apple CarPlay and Pandora among them), '+
            'and a newly standard suite of safety systems. The Outback has superb crash test ratings, and the current '+
            'generation earns average or above-average predicted reliability scores',
            p1:'2.5l, with 175 horsepower and 174 lb-ft of torque',p2:'20 mpg in the city and 27 mpg on the highway',p3:'Starting $22,000'}
        ];
    
        var putin = '';

        $.each(swiperImg,function(e){
            putin+='<img class="swiperImg" src="'+swiperImg[e].path+'" alt="'+swiperImg[e].alt+'"/>';
            
        });
        $('#swipe').html(putin);
        
        $('.swiperImg').click(function(x){
            var putinContent='';
            var putinImage='';
            var putinTab1='';
            var putinTab2='';
            var putinTab3='';
           $('.dispIcons').css('display','block');
            $.each(swiperContent,function(m){
                if(swiperContent[m].title==x.currentTarget.alt){
                    
                    putinTab1+='<img class="imgtabs move" src="assets/img/engine.png" alt="engine"/><p class="font-weight-bold mt-3">'+swiperContent[m].p1+'</p>';
                    putinTab2+='<img class="imgtabs move" src="assets/img/fuel.png" alt="fuel"/><p class="font-weight-bold mt-3">'+swiperContent[m].p2+'</p>';
                    putinTab3+='<img class="imgtabs move" src="assets/img/price.png" alt="price"/><p class="font-weight-bold mt-3">'+swiperContent[m].p3+'</p>';
                    putinContent+= 
                        '<h2>'+swiperContent[m].title+'</h2>'+
                        '<p class="text-left">'+swiperContent[m].content+'</p>';
                    putinImage+='<img class="w-100 h-100" src="'+swiperContent[m].image+'" alt="automobile"/>';
                }
            });
            
            $("#movingContent").fadeOut(function(){
                $("#swipImage").html(putinImage);
                $(".dispIcons:eq(0)").html(putinTab1);
                $(".dispIcons:eq(1)").html(putinTab2);
                $(".dispIcons:eq(2)").html(putinTab3);
                $("#swipContent").html(putinContent);
            });
            $("#movingContent").fadeIn('slow');
            
        
        });


    }
    var step=0;
    var move=-224;
    var windowSize = $(window).width();

    $('#right').click(function(){
        if(step<7 && windowSize<576){
            step++;
        }
        else if(step<6 && windowSize<768){
            step++;
        }
        else if(step<5 && windowSize<992){
            step++;
        }
        else if(step<4 && windowSize<1200){
            step++;
        }
        else if(step<3){
            step++;
        }
        $('#swipe').css({'margin-left':step*move});

    });

    $('#left').click(function(){
        
        if(step>0){
            step--;
        }
        $('#swipe').css({'margin-left':step*move});

    });
//END OF SWIPER

//CONTACT FORM OVERLAY
    
    $('#contactForm').click(function(){
        if($('#envel').hasClass('fa-times')){
            $('#overlayContact').css({'width':'0%','height':'0%'});
            $('#envel').toggleClass('fa-times');
        }
        else{
            $('#overlayContact').css({'width':'100%','height':'100%'});
            $('#envel').toggleClass('fa-times');
        }
        
    });







}