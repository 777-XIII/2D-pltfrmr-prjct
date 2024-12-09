const X_VELOCITY = 200; // velocity - player speed x axis
const JUMP_POWER = 250; // velocity - player jump power
const GRAVITY = 580; // gravity - pulls player down

class Player {
  constructor({ x, y, size, velocity = { x: 0, y: 0 } }) {
    this.x = x;
    this.y = y;
    this.width = size; // size - player width
    this.height = size; // size - player height
    this.velocity = velocity; // velocity - player speed (x & y direction)
    this.isOnGround = false; // check if player is on ground
    this.isImageLoaded = false; // check if player image is loaded -> switches to true
    this.image = new Image(); // new image object to load player image (sprite)
    this.image.onload = () => {
      // when image is loaded...
      this.isImageLoaded = true; // set isImageLoaded to true
    };
    this.image.src = "./images/idle.png";
    this.elapsedTime = 0; // elapsed time for animation
    this.currentFrame = 0; // current frame for animation player sprite
  }

  draw(c) {
    // Red square debug code for player hitbox/collision/position
    c.fillStyle = "rgba(255, 0, 0, 0.5)";
    c.fillRect(this.x, this.y, this.width, this.height);

    if (this.isImageLoaded === true) {
      const cropbox = {
        // cropbox/surface for player sprite
        x: 30, // x - player sprite x position
        y: 10, // y - player sprite y position
        width: 48, // width of frame
        height: 48, // height of frame
      };
      c.drawImage(
        // draw player on right position
        this.image,
        cropbox.x + cropbox.width * this.currentFrame, // x - player sprite x position
        cropbox.y, // y - player sprite y position
        cropbox.width,
        cropbox.height,
        this.x, // x - position of player on canvas
        this.y, // y - position of player on canvas
        this.width, // width of player
        this.height // height of player
      );
    }
  }

  update(deltaTime, collisionBlocks) {
    if (!deltaTime) return; // if no deltaTime, do nothing

    // updating animation frames
    this.elapsedTime += deltaTime; // add deltaTime to elapsedTime
    const secondsInterval = 0.1; // interval for animation frames
    if (this.elapsedTime > secondsInterval) {
      // if elapsedTime is greater than secondsInterval
      this.currentFrame = (this.currentFrame + 1) % 5; // switch to next frame
      this.elapsedTime -= secondsInterval; // reduce elapsedTime by secondsInterval
    }

    this.applyGravity(deltaTime); // apply gravity to player

    // Update horizontal position and check collisions
    this.updateHorizontalPosition(deltaTime);
    this.checkForHorizontalCollisions(collisionBlocks);

    // Check for any platform collisions
    this.checkPlatformCollisions(platforms, deltaTime);

    // Update vertical position and check collisions
    this.updateVerticalPosition(deltaTime);
    this.checkForVerticalCollisions(collisionBlocks);
  }

  jump() {
    this.velocity.y = -JUMP_POWER; // set player velocity y to negative jump power
    this.isOnGround = false; // player is not on ground
  }
  // move player on x-axis based on X_VELOCITY
  updateHorizontalPosition(deltaTime) {
    this.x += this.velocity.x * deltaTime;
  }
  // move player on y-axis based on GRAVITY
  updateVerticalPosition(deltaTime) {
    this.y += this.velocity.y * deltaTime;
  }
  // incraese vertical velocity based on GRAVITY
  applyGravity(deltaTime) {
    this.velocity.y += GRAVITY * deltaTime;
  }

  // handle player input based on keys
  handleInput(keys) {
    this.velocity.x = 0; // set player velocity x to 0

    // if key is pressed, set player velocity x to X_VELOCITY
    if (keys.d.pressed) {
      this.velocity.x = X_VELOCITY; // move player right
    } else if (keys.a.pressed) {
      this.velocity.x = -X_VELOCITY; // move player left
    }
  }

  checkForHorizontalCollisions(collisionBlocks) {
    const buffer = 0.0001; // buffer for collision recognition
    for (let i = 0; i < collisionBlocks.length; i++) {
      // loop through collision blocks
      const collisionBlock = collisionBlocks[i];

      // Check if a collision exists on all axes
      if (
        this.x <= collisionBlock.x + collisionBlock.width &&
        this.x + this.width >= collisionBlock.x &&
        this.y + this.height >= collisionBlock.y &&
        this.y <= collisionBlock.y + collisionBlock.height
      ) {
        // Check collision while player is going left
        if (this.velocity.x < -0) {
          this.x = collisionBlock.x + collisionBlock.width + buffer;
          break;
        }

        // Check collision while player is going right
        if (this.velocity.x > 0) {
          this.x = collisionBlock.x - this.width - buffer;
          break;
        }
      }
    }
  }

  checkForVerticalCollisions(collisionBlocks) {
    const buffer = 0.0001;
    for (let i = 0; i < collisionBlocks.length; i++) {
      const collisionBlock = collisionBlocks[i];

      // If a collision exists
      if (
        this.x <= collisionBlock.x + collisionBlock.width &&
        this.x + this.width >= collisionBlock.x &&
        this.y + this.height >= collisionBlock.y &&
        this.y <= collisionBlock.y + collisionBlock.height
      ) {
        // Check collision while player is going up
        if (this.velocity.y < 0) {
          this.velocity.y = 0;
          this.y = collisionBlock.y + collisionBlock.height + buffer;
          break;
        }

        // Check collision while player is going down
        if (this.velocity.y > 0) {
          this.velocity.y = 0;
          this.y = collisionBlock.y - this.height - buffer;
          this.isOnGround = true;
          break;
        }
      }
    }
  }

  checkPlatformCollisions(platforms, deltaTime) {
    const buffer = 0.0001;
    for (let platform of platforms) {
      // loop through all platforms
      if (platform.checkCollision(this, deltaTime)) {
        // check for collision
        this.velocity.y = 0; // set player velocity y to 0 (stop player from falling)
        this.y = platform.y - this.height - buffer; // set player y position to platform y position
        this.isOnGround = true; // player is on platform
        return;
      }
    }
    this.isOnGround = false; // player is not on platform
  }
}
