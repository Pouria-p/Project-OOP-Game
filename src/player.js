const board = document.querySelector("#board");
class Player {
  constructor() {
    this.position = {
      x: 30,
      y: 85,
    };
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.playerWidth = 1;
    this.playerHeight = 4;
    this.playerElem = null;
    this.isJumping = false;
    this.createPlayerElem();
  }
  createPlayerElem() {
    this.playerElem = document.createElement("div");
    this.playerElem.setAttribute("id", "player");

    board.appendChild(this.playerElem);
    this.playerElem.style.width = this.playerWidth + "vw";
    this.playerElem.style.height = this.playerHeight + "vh";
    this.playerElem.style.bottom = this.position.y + "vh";
    this.playerElem.style.left = this.position.x + "vw";
  }
  moveLeft() {
    this.position.x -= 2;
    this.playerElem.style.left = this.position.x + "vw";
  }
  moveRight() {
    this.position.x += 2;
    this.playerElem.style.left = this.position.x + "vw";
  }
  jump() {
    if (!this.isJumping) {
      this.isJumping = true;
      this.position.y += 23;
      this.playerElem.style.bottom = this.position.y + "vh";
      //set timeOut so jump methods applies once every 650ms
      setTimeout(() => {
        this.isJumping = false;
      }, 650);
    }
  }
  fall() {
    this.position.y -= this.velocity.y;
    this.playerElem.style.bottom = this.position.y + "vh";
  }
}
