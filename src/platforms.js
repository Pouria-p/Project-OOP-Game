class Platform {
  constructor(board) {
    this.position = {
      x: Math.floor(Math.random() * 50),
      y: 90,
    };
    this.platformWidth = 10;
    this.platformHeight = 1;
    this.platformElem = null;
    this.board = board;
    this.count = 0.2;
    this.createPlatformElem();
  }

  createPlatformElem() {
    this.platformElem = document.createElement("div");
    this.platformElem.setAttribute("class", "platform");
    this.board.appendChild(this.platformElem);
    this.platformElem.style.width = this.platformWidth + "vw";
    this.platformElem.style.height = this.platformHeight + "vh";
    this.platformElem.style.bottom = this.position.y + "vh";
    this.platformElem.style.left = this.position.x + "vw";
  }

  scrollDownPlatform() {
    this.position.y -= this.count;
    this.platformElem.style.bottom = this.position.y + "vh";
  }

  collision(player) {
    if (
      player.position.x + player.playerWidth > this.position.x &&
      player.position.x < this.position.x + this.platformWidth &&
      player.position.y < this.position.y + this.platformHeight &&
      player.position.y + player.playerHeight > this.position.y
    ) {
      console.log("collision");
      player.playerElem.style.transitionTimingFunction = "ease-out";
      player.velocity.y = 0;
      player.position.y = this.position.y + this.platformHeight;
    } else {
      player.playerElem.style.transitionTimingFunction = "ease";
      player.velocity.y = 1;
    }
  }
}
export default Platform;
