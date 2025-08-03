window.addEventListener("scroll", (e) => {
  document.body.style.cssText += `--scroll-top: ${window.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".container"
})