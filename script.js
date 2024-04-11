function locomotieAnime(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

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

tl.from("#head h1, #head h2, #head3-left, #head3-right" ,{
    y:120,
    stagger:0.1,
},"-=1");

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

    var videoContain = document.querySelector("#video-contain");
    videoContain.addEventListener("mouseenter",function(){
        videoContain.addEventListener("mousemove",function(dets){
            gsap.to(".mousefollower",{
                display:"none"
            });
            gsap.to("#play-button",{
                left:dets.x - 500,
                y:dets.y - 300
            });
        });
    });

    videoContain.addEventListener("mouseleave", function(){
        gsap.to(".mousefollower",{
            display: "initial",
        });
        gsap.to("#play-button",{
            top: "-8%",
            left: "69%",
        });
    });

    var video = document.querySelector("#video1");
    var flag = true;

    videoContain.addEventListener("click",function(){
        if(flag == true){
            video.play()
            video.style.opacity = 1
            document.querySelector("#play-button").innerHTML = `<i class="ri-pause-fill"></i>`
            gsap.to("#play-button",{
                scale:0.5
            })
            flag = false
        }
        else{
            video.pause()
            video.style.opacity = 0
            document.querySelector("#play-button").innerHTML = `<i class="ri-play-fill"></i>`
            gsap.to("#play-button",{
                scale:1
            })
            flag = true
        }
    })

    document.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x:dets.x - 160,
            y:dets.y - 220
        })
    })

    document.querySelector("#head3").addEventListener("mouseenter" , function (){
        gsap.to("#flag",{
            opacity:1,
        })
    })

    document.querySelector("#head3").addEventListener("mouseleave", function(){
        gsap.to("#flag",{
            opacity:0,
        })
    })
}

function guui(){
    Shery.imageEffect(".layer3-images", {
        style:5,
        // debug:true,
        gooey:true,
        config:{"a":{"value":1.6,"range":[0,30]},"b":{"value":0.77,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8175614444135799},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.51,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":7.2,"range":[1,15]},"durationOut":{"value":2.27,"range":[0.1,5]},"durationIn":{"value":3.32,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":1.07,"range":[0,10]},"metaball":{"value":0.38,"range":[0,2]},"discard_threshold":{"value":0.51,"range":[0,1]},"antialias_threshold":{"value":0.02,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":9.16,"range":[0,100]}},
    })
}

function magnet(){
    Shery.makeMagnet("#nav-right h4", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });

    Shery.makeMagnet(".menu-opener__square" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
}


magnet();

locomotieAnime();

loaderAnimation();

cursAnime();

var screenWidth = window.innerWidth;

if (screenWidth > 600) {
    guui();
}