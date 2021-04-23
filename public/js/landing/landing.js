gsap.registerPlugin(ScrollTrigger)
let sections = gsap.utils.toArray('section'),
    currentSection = sections[0]

gsap.defaults({ overwrite: 'auto', duration: 0.2, ease: 'Power0.easeOut' })

// stretch out the body height according to however many sections there are.
gsap.set('body', { height: sections.length * 100 + '%' })

// create a ScrollTrigger for each section
sections.forEach((section, i) => {
    ScrollTrigger.create({
        // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
        start: () => (i - 0.5) * innerHeight,
        end: () => (i + 0.5) * innerHeight,
        // when a new section activates (from either direction), set the section accordinglyl.
        onToggle: (self) => self.isActive && setSection(section),
    })
})

function setSection(newSection) {
    if (newSection !== currentSection) {
        gsap.to(currentSection, { autoAlpha: 0 })
        gsap.to(newSection, { scale: 1, autoAlpha: 1 })
        currentSection = newSection
    }
}

// handles the infinite part, wrapping around at either end....
// ScrollTrigger.create({
//     start: 1,
//     end: () => ScrollTrigger.maxScroll(window) - 1,
//     onLeaveBack: (self) => self.scroll(ScrollTrigger.maxScroll(window) - 2),
//     onLeave: (self) => self.scroll(2),
// }).scroll(2)

gsap.to("#third", {
    yPercent: -125,
    ease: "none",
    scrollTrigger: {
      trigger: "#virusHolder",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
  });

gsap.to("#first", {
    yPercent: -165,
    ease: "none",
    scrollTrigger: {
      trigger: "#virusHolder",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
  });

gsap.to("#second", {
    yPercent: -80,
    ease: "none",
    scrollTrigger: {
      trigger: "#virusHolder",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
  });

  gsap.to(".background", {
    yPercent: -60,
    ease: "none",
    scrollTrigger: {
      trigger: "#virusHolder",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
  });

  window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

$(document).ready(function(){
  $("#loader").show();
});


