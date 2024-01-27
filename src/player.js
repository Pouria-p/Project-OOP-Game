class Player {
  constructor() {
    this.position = {
      x: 30,
      y: 1,
    };
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.playerWidth = 5;
    this.playerHeight = 5;
    this.playerElem = null;
  }
  createPlayerElem() {
    this.playerElem = document.createElement("div");
    this.playerElem.setAttribute("id", "player");
    const board = document.querySelector("#board");
    board.appendChild(this.playerElem);
    this.playerElem.style.width = this.playerWidth + "vw";
    this.playerElem.style.height = this.playerHeight + "vh";
    this.playerElem.style.bottom = this.position.y + "vh";
    this.playerElem.style.left = this.position.x + "vw";
  }
  moveLeft() {
    this.position.x -= 1;
    this.playerElem.style.left = this.position.x + "vw";
  }
  moveRight() {
    this.position.x += 1;
    this.playerElem.style.left = this.position.x + "vw";
  }
  jump() {
    this.position.y += 15;
    this.playerElem.style.bottom = this.position.y + "vh";
  }
  fall() {
    this.position.y -= this.velocity.y;
    this.playerElem.style.bottom = this.position.y + "vh";
  }
}
