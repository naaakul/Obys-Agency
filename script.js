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

tl.to("#loader" , {
    opacity:0,
    delay:3,
    duration:0.45,
})