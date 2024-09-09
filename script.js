var tl = gsap.timeline()

tl.from("h2",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.35

})
tl.from("h4",{
    y:-30,
    opacity:0,
    stagger:0.3
})

tl.from("h1",{
    y:30,
    opacity:0,
    duration:0.5,
    color:"yellow",
    scale:0.2,
    stagger:0.2
    
})

gsap.to("#page2 h3",{
    transform:"translateX(-170%)",
    scrollTrigger:{
        trigger:"#page2",
        markings:true,
        scroller:"body",
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }

})

