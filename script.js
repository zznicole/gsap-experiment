// let heroBg = new TimelineMax({repeat:-1}); 
// gsap.to(".container", {
//     duration: 40, 
//     rotation: 360,
//     ease: "elastic",
//     backgroundPosition: "-2247px 0px" 
// });


// gsap.from(".rubberband", {
//     duration: 6, 
//     opacity: 0,
//     background: "#560563",
//     borderRadius: "20%",
//     border: "5px solid white",
//     padding: ".4",
//     });

gsap.from(".rubberband", {
    duration: 2, 
    opacity: 0,
    stagger: 0.3
    });

gsap.to(".rubberband", {
    duration: 2, 
    // borderBottomStyle:"solid",
    // borderBottomColor:"#F03613",
    backgroundColor: "#EDC02C",
    // opacity: 0.8,
    
    stagger: 0.3,
});

gsap.from(".watersplash", {
    duration: 20,
    opacity: 0,
})

gsap.to(".waterdrop1", {
    duration: 3, 
    x: 150,
    y: -150,
    rotation: 90,
    opacity:0,
})



gsap.to(".waterdrop2", {
    duration: 2, 
    x: -150,
    y: -150,
    rotation: 90,
    opacity:0,
})

gsap.to(".waterdrop3", {
    duration: 2, 
    y: 300,
    rotation: 360,
    opacity:0,
})