const COLORS = [
  "pink", "dodgerblue", "crimson", "purple", "violet", "skyblue"
]

//initially colorize each box and position in a row
const itemHeight = 298
const totalItems = 8
const distance = totalItems * itemHeight + (totalItems * 20)

gsap.set(
  ".box",
  {
    backgroundColor: (i) => COLORS[i % COLORS.length],
    y: (i) => i * itemHeight + (i * 20)
  }
)

gsap.to(
  ".box",
  {
    duration: 30,
    ease: "none",
    y: `+=${distance}`,
    modifiers: {
      y: gsap.utils.unitize(x => parseFloat(x) % distance)
    },
    repeat: -1
  }
)