console.log("connection test");

// CONTROLS


// CONTROLS
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") moveRight();
  if (event.key === "ArrowLeft") moveLeft();
  if (event.key === " " && !isJumping) jump(); // Springen
});

let playerPosition = {
  left: 50, 
  bottom: 10, 
};

// Bewegung nach rechts
function moveRight() {
  playerPosition.left += 10; 
  updatePlayerPosition(); 
}

function moveRight() {
  if (playerPosition.left < 760) {
    // Begrenzung: Spielfeldbreite (800px) - Spielerbreite (40px)
    playerPosition.left += 10;
    updatePlayerPosition();
  }
}

// Bewegung nach links
function moveLeft() {
  playerPosition.left -= 10; 
  updatePlayerPosition(); 
}

function moveLeft() {
  if (playerPosition.left > 0) {
    playerPosition.left -= 10;
    updatePlayerPosition();
  }
}


function updatePlayerPosition() {
  const player = document.getElementById("player");
  player.style.left = `${playerPosition.left}px`;
  player.style.bottom = `${playerPosition.bottom}px`;
}

// JUMPING

let isJumping = false; 

function jump() {
  if (isJumping) return;
  isJumping = true; 

  let jumpHeight = 150; 

  const jumpUp = setInterval(() => {
    if (playerPosition.bottom >= jumpHeight) {
      clearInterval(jumpUp); 
      fallDown(); 
    }
    playerPosition.bottom += 10; 
    updatePlayerPosition();
  }, 20);

  function fallDown() {
    const fall = setInterval(() => {
      if (playerPosition.bottom <= 10) {
        clearInterval(fall); 
        playerPosition.bottom = 10; 
        isJumping = false; 
      }
      playerPosition.bottom -= 10; 
      updatePlayerPosition();
    }, 20);
  }
}

// PLATFORMS

const platforms = [
  { left: 200, bottom: 100, width: 120, color: "blue" },
  { left: 400, bottom: 200, width: 150, color: "green" },
];

function createPlatforms() {
  const gameArea = document.getElementById("game");
  platforms.forEach((platform) => {
    const platformElement = document.createElement("div");
    platformElement.classList.add("platform");
    platformElement.style.left = `${platform.left}px`;
    platformElement.style.bottom = `${platform.bottom}px`;
    platformElement.style.width = `${platform.width}px`;
    platformElement.style.backgroundColor = platform.color;
    gameArea.appendChild(platformElement);
  });
}

createPlatforms();

function checkPlatformCollision() {
  let isOnPlatform = false;

  platforms.forEach((platform) => {
    const platformTop = platform.bottom + platform.height;
    const platformLeft = platform.left;
    const platformRight = platform.left + platform.width;

    // Prüfen, ob der Spieler auf der Plattform steht
    if (
      playerPosition.bottom <= platformTop + 5 && 
      playerPosition.bottom >= platformTop - 5 && 
      playerPosition.left + 40 > platformLeft && 
      playerPosition.left < platformRight
    ) {
      isOnPlatform = true;
      playerPosition.bottom = platformTop; 
    }
  });

  return isOnPlatform;
}
function checkGroundCollision() {
  if (playerPosition.bottom <= 10) {
    playerPosition.bottom = 10; 
    return true;
  }
  return false;
}

function applyGravity() {
  const isOnPlatform = checkPlatformCollision();
  const isOnGround = checkGroundCollision();

  if (!isOnPlatform && !isOnGround) {
    playerPosition.bottom -= 5; 
  } else {
    isJumping = false; 
  }

  updatePlayerPosition();
}

function jump() {
  if (!isJumping) {
    isJumping = true;
    let jumpHeight = 0;
    const jumpInterval = setInterval(() => {
      if (jumpHeight >= 50) {
        clearInterval(jumpInterval); 
      } else {
        playerPosition.bottom += 5; 
        jumpHeight += 5;
        updatePlayerPosition();
      }
    }, 20);
  }
}

function gameLoop() {
  applyGravity(); // Schwerkraft anwenden
  requestAnimationFrame(gameLoop); // Schleife fortsetzen
}
gameLoop();
