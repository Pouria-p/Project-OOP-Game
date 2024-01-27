class Player {
  constructor() {
    this.position = {
      x: 30,
      y: 0,
    };
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.playerWidth = 10;
    this.playerHeight = 10;
    this.playerElem;
  }
  createPlayerElem() {
    this.playerElem = document.createElement("div");
    this.playerElem.setAttribute("id", "player");
    const board = document.querySelector("#board");
    board.appendChild(this.playerElem);
    this.playerElem.style.width = this.playerWidth + "vw";
    this.playerElem.style.height = this.playerHeight + "vh";
    this.playerElem.style.bottom = this.position.y + "vw";
    this.playerElem.style.left = this.position.x + "vh";
  }
  moveLeft() {
    this.position.x -= 10;
    this.playerElem.style.left = this.position.x + "vw";
  }
  moveRight() {
    this.position.x += 10;
    this.playerElem.style.left = this.position.x + "vw";
  }
  jump() {
    this.position.y += 20;
    this.playerElem.style.bottom = this.position.y + "vh";
  }
  fall() {
    this.position.y -= this.velocity.y;
    this.playerElem.style.bottom = this.position.y + "vh";
  }
}
const newPlayer = new Player();

const FALL_INTERVAL = setInterval(() => {
  newPlayer.fall();
  if (newPlayer.position.y <= 2) {
    newPlayer.position.y = 0;
  }
}, 30);
addEventListener("load", () => {
  newPlayer.createPlayerElem();
});
addEventListener("keydown", (e) => {
  if (e.key === "a") {
    newPlayer.moveLeft();
  } else if (e.key === "d") {
    newPlayer.moveRight();
  } else if (e.key === " ") {
    newPlayer.jump();
  }
});
