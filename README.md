# 2D-pltfrmr-prjct

README - Player Class for 2D Platformer
Project Overview
This project implements a Player class for a 2D platformer game. The player can jump, run, and interact with the environment, including platforms and obstacles. The Player class includes basic physics (gravity, collision detection) and animation logic.

Features of the Player Class

1. Movement:

- Player can move left (A) and right (D).
- Jumping with configurable jump power (W).

2. Gravity:

-Gravity continuously pulls the player down unless they are on a platform.

3. Collision Detection:

- Horizontal: Player collides with obstacles when moving left or right.
- Vertical: Player cannot fall through platforms or the ground and lands smoothly.

4. Animation:

- The player image switches frames automatically to simulate movement.
- Animation is frame-based with a configurable time interval.

5. Platform Interaction:

- The player detects platforms and stays on them when they collide.
______________________________________

Configurable Constants

- X_VELOCITY: Horizontal movement speed (pixels per second).
- JUMP_POWER: Jump power (pixels per second upwards).
- GRAVITY: Gravity acceleration (pixels per second²).
______________________________________

Class Methods

Constructor

constructor({ x, y, size, velocity = { x: 0, y: 0 } })

- Initializes the player's position, size, and velocity.
- Loads the player image and prepares animation logic.

Drawing

draw(c)

Draws the player:

- Debug: Semi-transparent red box for collision visualization.
- Player image: Uses a spritesheet for animation.

Update

update(deltaTime, collisionBlocks)

Physics:

- Applies gravity to the velocity.
- Updates the player's position.

Collisions:

- The player interacts with obstacles and platforms.

Animation:

- Switches the animation frame every 0.1 seconds.
_________________

Movement

handleInput(keys)

- Handles input and controls horizontal movement (A, D).

jump()

- Makes the player jump by setting the vertical velocity to the defined JUMP_POWER.
________________

Physics

applyGravity(deltaTime)

- Applies gravity to the player's vertical velocity.

updateHorizontalPosition(deltaTime)
updateVerticalPosition(deltaTime)

- Updates the player's position based on the current velocity.
___________________

Collision Detection

checkForHorizontalCollisions(collisionBlocks)
checkForVerticalCollisions(collisionBlocks)
checkPlatformCollisions(platforms, deltaTime)

Checks horizontal and vertical collisions and adjusts the player's position:
- The player cannot pass through obstacles.
- The player correctly lands on platforms or the ground.
_____________________

File Structure

- Player.js: Contains all the logic for the Player class.
- images/idle.png: Spritesheet for the player animation.
- collisionBlocks: Array of obstacles with { x, y, width, height }.
- platforms: List of platform objects.
_______________________

Integration Example

js code:

// Create an instance
const player = new Player({ x: 100, y: 100, size: 50 });

// Control input
const keys = {
a: { pressed: false },
d: { pressed: false },
};

window.addEventListener("keydown", ({ key }) => {
if (key === "a") keys.a.pressed = true;
if (key === "d") keys.d.pressed = true;
});

window.addEventListener("keyup", ({ key }) => {
if (key === "a") keys.a.pressed = false;
if (key === "d") keys.d.pressed = false;
});

// Game loop for drawing and updating
function gameLoop(deltaTime) {
player.handleInput(keys);
player.update(deltaTime, collisionBlocks);
player.draw(context);
}

requestAnimationFrame(gameLoop);

___________________

To-Do
Fix Bugs
Add enemies
Add more animations (e.g., jumping or running animations).
Support for different types of platform objects.
Testing and optimization for various screen sizes.