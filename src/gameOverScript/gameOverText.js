let myRecord = localStorage.getItem("myRecord");
console.log(myRecord);
let setupTimeDisplayGOver = (myRecord) => {
  const displayContainer = document.querySelector(".timeContainer2");
  const timeDisplay = displayContainer.querySelector(".timeDisplay2");
  let hrs = 0;
  let min = 0;
  let sec = 0;

  sec = Math.floor((myRecord / 1000) % 60);
  min = Math.floor((myRecord / 1000 / 60) % 60);
  hrs = Math.floor((myRecord / 1000 / 60 / 60) % 60);

  timeDisplay.textContent = `${hrs < 10 ? "0" : ""}${hrs}:${
    min < 10 ? "0" : ""
  }${min}:${sec < 10 ? "0" : ""}${sec} ☠`;
};
setupTimeDisplayGOver(myRecord);
