gsap.from(".page1",{
    opecity:1,
    scale:0,
    delay:1,
    duration:1,

});
gsap.from(".page2",{
    scale:0,
    opacity:1,
    duration:1,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 27%",
        // markers:true,

    }

});

gsap.from(".page3",{

    scale:0,
    opacity:1,
    duration:2,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        start:"top 80%",
        // markers:true,
        // scrub:true,
    }
    
});
gsap.from(".page4",{
x:-500,
    scale:0,
    opacity:1,
    duration:2,
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        start:"top 80%",
        // markers:true,
        // scrub:true,
    }
    
});