const images=[ "bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg","bg5.jpg"];
const chosenImage=images[Math.floor(Math.random()*images.length)];

const body=document.querySelector("body");
const bgImage=document.createElement("img");
bgImage.src=`img/${chosenImage}`;
bgImage.classList.add("bgImage");
document.body.appendChild(bgImage);

