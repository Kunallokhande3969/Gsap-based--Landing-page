var tl = gsap.timeline();
tl.from("#nav h3 , #nav h4", {
  y: -40,
  duration: 0.5,
  opacity: 0,
  stagger: 0.2,
  delay: 0.2,
});
tl.from("#left h2", {
  opacity: 0,
  x: -200,
  delay: 0.1,
  duration: 1,

});
tl.from("#left button", {
  opacity: 0,
    scale  : .7,
});
tl.from("#right img", {
  opacity: 0,
    scale  : .5,
    duration :.5    ,
    delay : .2,
});
