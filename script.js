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

locomotieAnime();

loaderAnimation();

cursAnime();