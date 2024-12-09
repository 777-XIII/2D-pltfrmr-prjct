const canvas = document.querySelector("canvas"); // Get the canvas from the HTML
const c = canvas.getContext("2d"); // Get the 2D context from the canvas 
const dpr = window.devicePixelRatio || 1; // Get the device pixel ratio

// set the canvas pixel ratio to the device pixel ratio
// dpr = device pixel ratio
canvas.width = 1024 * dpr;
canvas.height = 576 * dpr;

// contains the layer data
const layersData = {
  l_Sky_Ocean: l_Sky_Ocean,
  l_Bramble: l_Bramble,
  l_Back_Tiles: l_Back_Tiles,
  l_Front_Tiles: l_Front_Tiles,
  l_Decorations: l_Decorations,
  l_Front_Tiles_2: l_Front_Tiles_2,
  l_Gems: l_Gems,
  l_Collisions: l_Collisions,
};

// contains the tileset data (image, saurce and tile size)
const tilesets = {
  l_Sky_Ocean: { imageUrl: "./images/decorations.png", tileSize: 16 },
  l_Bramble: { imageUrl: "./images/decorations.png", tileSize: 16 },
  l_Back_Tiles: { imageUrl: "./images/tileset.png", tileSize: 16 },
  l_Front_Tiles: { imageUrl: "./images/tileset.png", tileSize: 16 },
  l_Decorations: { imageUrl: "./images/decorations.png", tileSize: 16 },
  l_Front_Tiles_2: { imageUrl: "./images/tileset.png", tileSize: 16 },
  l_Gems: { imageUrl: "./images/decorations.png", tileSize: 16 },
  l_Collisions: { imageUrl: "./images/decorations.png", tileSize: 16 },
};

// Tile setup
const collisionBlocks = [];
const platforms = [];
const blockSize = 16; // Assuming each tile is 16x16 pixels

collisions.forEach((row, y) => {
  row.forEach((symbol, x) => {
    if (symbol === 1) {
      collisionBlocks.push(
        new CollisionBlock({
          x: x * blockSize,
          y: y * blockSize,
          size: blockSize,
        })
      );
    } else if (symbol === 2) {
      platforms.push(
        new Platform({
          x: x * blockSize,
          y: y * blockSize + blockSize,
          width: 16,
          height: 4,
        })
      );
    }
  });
});

const renderLayer = (tilesData, tilesetImage, tileSize, context) => {
  tilesData.forEach((row, y) => {
    row.forEach((symbol, x) => {
      if (symbol !== 0) {
        const srcX =
          ((symbol - 1) % (tilesetImage.width / tileSize)) * tileSize;
        const srcY =
          Math.floor((symbol - 1) / (tilesetImage.width / tileSize)) * tileSize;

        context.drawImage(
          tilesetImage, // source image
          srcX,
          srcY, // source x, y
          tileSize,
          tileSize, // source width, height
          x * 16,
          y * 16, // destination x, y
          16,
          16 // destination width, height
        );
      }
    });
  });
};

const renderStaticLayers = async () => {
  const offscreenCanvas = document.createElement("canvas");
  offscreenCanvas.width = canvas.width;
  offscreenCanvas.height = canvas.height;
  const offscreenContext = offscreenCanvas.getContext("2d");

  for (const [layerName, tilesData] of Object.entries(layersData)) {
    const tilesetInfo = tilesets[layerName];
    if (tilesetInfo) {
      try {
        const tilesetImage = await loadImage(tilesetInfo.imageUrl);
        renderLayer(
          tilesData,
          tilesetImage,
          tilesetInfo.tileSize,
          offscreenContext
        );
      } catch (error) {
        console.error(`Failed to load image for layer ${layerName}:`, error);
      }
    }
  }

  // Optionally draw collision blocks and platforms for debugging
  // collisionBlocks.forEach(block => block.draw(offscreenContext));
  // platforms.forEach((platform) => platform.draw(offscreenContext))

  return offscreenCanvas;
};
// END - Tile setup

// Change xy coordinates to move player's default position
const player = new Player({
  x: 100,
  y: 100,
  size: 32,
  velocity: { x: 0, y: 0 },
});

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

let lastTime = performance.now();
const pov = {
  x: 0,
  y: 0,
};

// point of scroll -> right
const pos_right = 500;
const pos_top = 100;
const pos_bottom = 280;

function animate(backgroundCanvas) {
  // Calculate delta time
  const currentTime = performance.now();
  const deltaTime = (currentTime - lastTime) / 1000;
  lastTime = currentTime;

  // Update player position = Move player
  player.handleInput(keys);
  player.update(deltaTime, collisionBlocks);

  // Update point of view
  if (player.x > pos_right) {
    const posDistance = player.x - pos_right;
    pov.x = posDistance;
  }

  if (player.y < pos_top && pov.y > 0) {
    const posDistance = pos_top - player.y;
    pov.y = posDistance;
  }

  if (player.y < pos_top) {
    const posDistance = player.y - pos_bottom;
    pov.y = -posDistance;
  }

  // Render scene
  c.save();
  c.scale(dpr, dpr);

  c.translate(-pov.x, pov.y);

  c.clearRect(0, 0, canvas.width, canvas.height);
  c.drawImage(backgroundCanvas, 0, 0);
  player.draw(c);
  // c.fillRect(pos_right, 100, 10, 100);
  // c.fillRect(300, pos_top, 100, 10);
  // c.fillRect(300, pos_bottom, 100, 10);
  c.restore();

  requestAnimationFrame(() => animate(backgroundCanvas));
}

const startRendering = async () => {
  try {
    const backgroundCanvas = await renderStaticLayers();
    if (!backgroundCanvas) {
      console.error("Failed to create the background canvas");
      return;
    }

    animate(backgroundCanvas);
  } catch (error) {
    console.error("Error during rendering:", error);
  }
};

startRendering();
