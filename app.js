// PUT YOUR CODE HERE
const animation = gsap.timeline();

animation
  .from(".red", { x: "-100vw", y: "-100vh", duration: 1.5 })
  .from(".green", { x: "100vw", y: "-100vh", duration: 1.5 }, "-=1")
  .from(".blue", { x: "100vw", y: "100vh", duration: 1.5 }, "-=1")
  .from(".yellow", { x: "-100vw", y: "100vh", duration: 1.5 }, "-=1")
  .to(".red", {
    left: "calc(100vw - 200px)",
    borderRadius: "50%",
    backgroundColor: "green",
  })
  .to(
    ".green",
    {
      top: "calc(100vh - 200px)",
      borderRadius: "50%",
      backgroundColor: "blue",
    },
    "<",
  )
  .to(
    ".blue",
    {
      right: "calc(100vw - 200px)",
      borderRadius: "50%",
      backgroundColor: "yellow",
    },
    "<",
  )
  .to(
    ".yellow",
    {
      bottom: "calc(100vh - 200px)",
      borderRadius: "50%",
      backgroundColor: "red",
    },
    "<",
  )
  .to(".red", { x: "100vw", duration: 1 })
  .to(".green", { x: "100vw", duration: 1 }, "<")
  .to(".blue", { x: "-100vw", duration: 1 }, "<")
  .to(".yellow", { x: "-100vw", duration: 1 }, "<");
