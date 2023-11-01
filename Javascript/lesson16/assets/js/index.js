let iHeight = window.innerHeight;
console.log(iHeight);

let iWidth = window.innerWidth;
console.log(iWidth);

var myWindow;

const openWindow = () => {
  myWindow = window.open("", "", "width=300px, height=300px");
};

const resizeWindow = () => {
  myWindow.resizeTo(800, 900);
};

window.document
  .querySelector(".open-wdw")
  .addEventListener("click", openWindow);
window.document
  .querySelector(".rsz-wdw")
  .addEventListener("click", resizeWindow);

const scrollFunc = () => {
  window.scrollTo(0, 0);
  window.location.reload();
};

location.replace('www.google.com')

document.querySelector(".scroll").addEventListener("click", scrollFunc);

const getData = async () => {
  try {
    let response = await fetch("url");
    let data = await response.json();
  } catch (e) {
    console.log(e);
  }
};


// buton olsun sehifenin sag asagi kuncunde ve klik edende en yuxari
// buton yaradin butona klik edende basqa sehifeye atsin 