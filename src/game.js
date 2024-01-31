import Platform from "./platforms.js";
import Player from "./player.js";

class Game {
  constructor() {
    this.board = document.querySelector("#board");
    this.player = this.createPlayer();
    this.platforms = [];
    this.speed = 0.2;
    this.timer = 0;
    this.intervalId = null;
    this.elapsedTime = 0;
    this.setupPlatforms();
    this.setupEventListeners();
    this.setupTimeDisplay();
    this.startGameLoop();
  }

  createPlayer() {
    const player = new Player(this.board);
    return player;
  }

  createPlatform() {
    const platform = new Platform(this.board, this.speed);

    return platform;
  }

  setupPlatforms() {
    setInterval(() => {
      this.timer++;
      if (this.timer % 5 === 0) {
        this.speed += 0.1;
      }
      const platform = this.createPlatform();
      this.platforms.push(platform);
    }, 2 * 1000);
  }

  setupEventListeners() {
    addEventListener("keydown", (e) => {
      if (e.key === "a") {
        this.player.moveLeft();
      } else if (e.key === "d") {
        this.player.moveRight();
      } else if (e.key === " ") {
        this.player.jump();
      }
    });
  }

  setupTimeDisplay() {
    const displayContainer = document.querySelector(".timeContainer");
    const timeDisplay = displayContainer.querySelector(".timeDisplay");
    let startTime = 0;
    let paused = true;
    let hrs = 0;
    let min = 0;
    let sec = 0;

    if (paused) {
      paused = false;
      startTime = Date.now() - this.elapsedTime;
      this.intervalId = setInterval(() => {
        this.elapsedTime = Date.now() - startTime;
        sec = Math.floor((this.elapsedTime / 1000) % 60);
        min = Math.floor((this.elapsedTime / 1000 / 60) % 60);
        hrs = Math.floor((this.elapsedTime / 1000 / 60 / 60) % 60);

        timeDisplay.textContent = `${hrs < 10 ? "0" : ""}${hrs}:${
          min < 10 ? "0" : ""
        }${min}:${sec < 10 ? "0" : ""}${sec} ⏳`;
      }, 1000);
    }
  }

  startGameLoop() {
    setInterval(() => {
      setTimeout(() => {
        this.player.fall();
      }, 2 * 1000);

      this.platforms.forEach((platform) => {
        platform.scrollDownPlatform();
        platform.collision(this.player);
      });

      if (this.player.position.y <= 20) {
        this.player.position.y = 1;
        clearInterval(this.intervalId);
        localStorage.setItem("myRecord", JSON.stringify(this.elapsedTime));
        location.href = "gameOver.html";
      }

      if (this.player.position.x <= 5) {
        this.player.position.x = 5;
      }

      if (this.player.position.x + this.player.playerWidth >= 55) {
        this.player.position.x = 55 - this.player.playerWidth;
      }
    }, 30);
  }
}

export default Game;
