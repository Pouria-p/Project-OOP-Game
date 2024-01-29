const NEW_PLAYER = new Player();
class Platform {
  constructor() {
    this.position = {
      x: 20,
      y: 70,
    };
    this.platformWidth = 10;
    this.platformHeight = 1;
    this.platformElem = null;
    this.createPlatformElem();
  }
  createPlatformElem() {
    this.platformElem = document.createElement("div");
    this.platformElem.setAttribute("class", "platform");
    board.appendChild(this.platformElem);
    this.platformElem.style.width = this.platformWidth + "vw";
    this.platformElem.style.height = this.platformHeight + "vh";
    this.platformElem.style.bottom = this.position.y + "vh";
    this.platformElem.style.left = this.position.x + "vw";
  }
  scrollDownPlatform() {
    this.position.y -= 0.2;
    this.platformElem.style.bottom = this.position.y + "vh";
  }
  collision() {
    if (
      NEW_PLAYER.position.x + NEW_PLAYER.playerWidth >= this.position.x &&
      NEW_PLAYER.position.x <= this.position.x + this.platformWidth &&
      NEW_PLAYER.position.y <= this.position.y + this.platformHeight &&
      NEW_PLAYER.position.y + NEW_PLAYER.playerHeight >= this.position.y
    ) {
      NEW_PLAYER.playerElem.style.transitionTimingFunction = "ease-out";
      NEW_PLAYER.velocity.y = 0;
      NEW_PLAYER.position.y = this.position.y + this.platformHeight;
    } else {
      NEW_PLAYER.playerElem.style.transitionTimingFunction = "ease";
      NEW_PLAYER.velocity.y = 1;
      NEW_PLAYER.fall();
    }
  }
}

const NEW_PLATFORM = new Platform();

setInterval(() => {
  NEW_PLATFORM.scrollDownPlatform();
  NEW_PLATFORM.collision();
  if (NEW_PLAYER.position.y <= 1) {
    NEW_PLAYER.position.y = 1;
  }
  if (NEW_PLAYER.position.x <= 5) {
    NEW_PLAYER.position.x = 5;
  }
  if (NEW_PLAYER.position.x + NEW_PLAYER.playerWidth >= 55) {
    NEW_PLAYER.position.x = 55 - NEW_PLAYER.playerWidth;
  }
}, 30);

addEventListener("keydown", (e) => {
  if (e.key === "a") {
    NEW_PLAYER.moveLeft();
  } else if (e.key === "d") {
    NEW_PLAYER.moveRight();
  } else if (e.key === " ") {
    NEW_PLAYER.jump();
  }
});
