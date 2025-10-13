// Floating hearts background
function createFloatingHearts() {
  const heartsContainer = document.getElementById("floatingHearts")
  const heartEmojis = ["💕", "💖", "💗", "💓", "💝", "💞"]

  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div")
    heart.className = "heart"
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)]
    heart.style.left = Math.random() * 100 + "%"
    heart.style.animationDelay = Math.random() * 6 + "s"
    heart.style.fontSize = Math.random() * 20 + 20 + "px"
    heartsContainer.appendChild(heart)
  }
}

// No button behavior
const noBtn = document.getElementById("noBtn")
let noClickCount = 0
const noTexts = ["💔 No", "Are you sure? 🥺", "Really? 😢", "Think again! 💭", "Please? 🙏", "One more chance? 💝"]

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * (window.innerWidth - 200)
  const y = Math.random() * (window.innerHeight - 100)

  noBtn.style.position = "fixed"
  noBtn.style.left = x + "px"
  noBtn.style.top = y + "px"
  noBtn.style.transition = "all 0.3s ease"
})

noBtn.addEventListener("click", () => {
  noClickCount++

  if (noClickCount < noTexts.length) {
    noBtn.textContent = noTexts[noClickCount]
  } else {
    // Show sad GIF
    document.getElementById("sadGif").style.display = "block"

    setTimeout(() => {
      document.getElementById("sadGif").style.display = "none"
      noClickCount = 0
      noBtn.textContent = noTexts[0]
      noBtn.style.position = "relative"
      noBtn.style.left = "auto"
      noBtn.style.top = "auto"
    }, 2000)
  }
})

// Yes button behavior
const yesBtn = document.getElementById("yesBtn")
yesBtn.addEventListener("click", () => {
  // Hide question screen
  document.getElementById("questionScreen").style.display = "none"

  // Show celebration screen
  const celebrationScreen = document.getElementById("celebrationScreen")
  celebrationScreen.style.display = "block"

  // Create confetti
  createConfetti()

  // Create balloons
  createBalloons()

  // Set certificate date
  const today = new Date()
  const dateString = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  document.getElementById("certificateDate").textContent = dateString

  // Play celebration animation
  celebrationScreen.style.animation = "fadeIn 1s"
})

// Create confetti
function createConfetti() {
  const confettiContainer = document.getElementById("confetti")
  const colors = ["#FF6F91", "#FFC0CB", "#E6B0FF", "#FFD700", "#FF69B4"]

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div")
    confetti.className = "confetti-piece"
    confetti.style.left = Math.random() * 100 + "%"
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    confetti.style.animationDelay = Math.random() * 2 + "s"
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s"
    confettiContainer.appendChild(confetti)
  }
}

// Create balloons
function createBalloons() {
  const balloonsContainer = document.getElementById("balloons")
  const balloonEmojis = ["🎈", "🎈", "🎈", "🎈", "🎈"]
  const colors = ["red", "pink", "purple", "blue", "yellow"]

  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement("div")
    balloon.className = "balloon"
    balloon.textContent = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)]
    balloon.style.left = Math.random() * 100 + "%"
    balloon.style.animationDelay = Math.random() * 3 + "s"
    balloon.style.animationDuration = Math.random() * 3 + 4 + "s"
    balloonsContainer.appendChild(balloon)
  }
}

// Download certificate
const downloadBtn = document.getElementById("downloadBtn")
downloadBtn.addEventListener("click", () => {
  // Create a simple text version for download
  const certificateText = `
🎉 OFFICIAL CERTIFICATE 🎉

This certifies that

UGOCHI

has been awarded

THE BEST MAN IN THE WORLD

as her boyfriend

💕 💖 💕

Date: ${document.getElementById("certificateDate").textContent}
    `

  const blob = new Blob([certificateText], { type: "text/plain" })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "Certificate_Best_Boyfriend.txt"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  window.URL.revokeObjectURL(url)

  // Show success message
  alert("🎉 Certificate downloaded! You can now print or share it! 💖")
})

// Initialize floating hearts on page load
window.addEventListener("load", () => {
  createFloatingHearts()
})
