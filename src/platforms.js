class Platform {
  constructor() {
    this.position = {
      x: 20,
      y: 30,
    };
    this.platformWidth = 20;
    this.platformHeight = 5;
    this.platformElem = null;
  }
  createPlatformElem() {
    this.platformElem = document.createElement("div");
    this.platformElem.setAttribute("class", "platform");
    const board = document.querySelector("#board");
    board.appendChild(this.platformElem);
    this.platformElem.style.width = this.platformWidth + "vw";
    this.platformElem.style.height = this.platformHeight + "vh";
    this.platformElem.style.bottom = this.position.y + "vh";
    this.platformElem.style.left = this.position.x + "vw";
  }
}

const NEW_PLATFORM = new Platform();
const NEW_PLAYER = new Player();

setInterval(() => {
  if (
    NEW_PLAYER.position.x + NEW_PLAYER.playerWidth >= NEW_PLATFORM.position.x &&
    NEW_PLAYER.position.x <=
      NEW_PLATFORM.position.x + NEW_PLATFORM.platformWidth &&
    NEW_PLAYER.position.y ===
      NEW_PLATFORM.position.y + NEW_PLATFORM.platformHeight
  ) {
    console.log(NEW_PLAYER.position.y);
    NEW_PLAYER.velocity.y = 0;
  } else {
    NEW_PLAYER.velocity.y = 1;
  }
  if (NEW_PLAYER.position.y <= 2) {
    NEW_PLAYER.position.y = 1;
  }
  NEW_PLAYER.fall();
}, 30);

addEventListener("load", () => {
  NEW_PLAYER.createPlayerElem();
  NEW_PLATFORM.createPlatformElem();
});

addEventListener("keydown", (e) => {
  if (e.key === "a") {
    NEW_PLAYER.moveLeft();
  } else if (e.key === "d") {
    NEW_PLAYER.moveRight();
  } else if (e.key === " ") {
    NEW_PLAYER.jump();
  }
});
