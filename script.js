function loaderAnimation(){
    var loadCount = document.querySelector("#line1-part1 h5");
var tl = gsap.timeline();
var c = 0;

tl.from(".line h1" , {
    y: 150,
    stagger: 0.2,
    duration:0.5,
});

tl.from("#line1-part1, #h2",{
    opacity:0,
    onStart: function () {
        var load = setInterval(function(){
            c++;
            if(c < 101){
                loadCount.textContent = c;
            }
            else clearInterval(load);
        }, 25)
    },
});

tl.to("#loader h1, #loader h5, #loader h6" , {
    opacity:0,
    delay:3,
    duration:0.45,
    stagger:0.2,
})

tl.to("#loader",{
    y:-1200,
    duration:0.7,
})

tl.to("#loader" , {
    display:"none",
})

tl.from("#head h1, #head3-left, #head3-right" ,{
    y:120,
    stagger:0.1,
});

}

function cursAnime(){
    // document.addEventListener("mousemove",function(dets){
    //     gsap.to("#curs",{
    //         left:dets.x,
    //         top:dets.y,
    //     })
    // })

    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
    
    Shery.makeMagnet(".menu-opener__square" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
    
    Shery.makeMagnet("#nav-right h4" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
}

loaderAnimation();

cursAnime();