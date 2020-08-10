let tl = gsap.timeline();

tl.from(".rubberband", {
    duration: 1, 
    opacity: 0,
    stagger: 0.3
});

tl.to(".rubberband", {
    duration: 1, 
    backgroundColor: "#EDC02C",
    stagger: 0.2,
});

tl.to(".glasswater", {
    duration: 2,
    y: -20,
    opacity: 0,
    ease: "bounce",
})

tl.to(".waterdrop1", {
    duration: 4, 
    x: 150,
    y: -150,
    rotation: 90,
    opacity:0,
})

tl.to(".waterdrop2", {
    duration: 3, 
    x: -150,
    y: -150,
    rotation: -90,
    opacity:0,
})

tl.to(".waterdrop3", {
    duration: 3, 
    y: 300,
    rotation: 360,
    opacity:0,
})


gsap.from(".watersplash", {
   
    opacity: 0,
})

tl.to(".watersplash", {
    duration: 5,
    delay: 5,
    opacity: 0.5,
})




