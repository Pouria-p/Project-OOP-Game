class Platform {
  constructor() {
    this.position = {
      x: 30,
      y: 20,
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
    this.platformElem.style.bottom = this.position.y + "vw";
    this.platformElem.style.left = this.position.x + "vh";
  }
}

const NEW_PLATFORM = new Platform();
addEventListener("load", () => {
  NEW_PLATFORM.createPlatformElem();
});
