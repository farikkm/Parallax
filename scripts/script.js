window.addEventListener("scroll", (e) => {
  document.body.style.cssText += `--scroll-top: ${window.scrollY}px`
})