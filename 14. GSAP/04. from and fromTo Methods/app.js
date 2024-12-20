// from & fromTo

// from: in from method you don't have to specify the initial state. (It will figure out by itself)

// fromTo: in fromTo method you HAVE to specify the default value, and also the new animation state.

gsap.from(".box1", {
  y: -200,
  duration: 3,
  ease: "linear",
  repeat: -1,
  yoyo: true,
});

gsap.fromTo(".box2", {
    y: 200,
    opacity: 0
}, {
    opacity: 1,
    y: -200,
    duration: 3,
    ease: "linear",
    borderRadius: 0,
    repeat: -1,
    yoyo: true
});
