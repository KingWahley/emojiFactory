//catching the dom
let rotate = [-90, -10, -50];
let shape = [0, 40, 10, 30, 50, 20];
let eyes = document.querySelector(".eyes");
let eyebrows = document.querySelector(".eyebrows");
let mouth = document.querySelector(".mouth");
let emoji = document.querySelector(".emoji");
const element = document.getElementById("emoji-container");
let colorBtn = document.getElementById("color");
let eyesBtn = document.getElementById("eyes");
let eyebrowsBtn = document.getElementById("eyebrows");
let mouthBtn = document.getElementById("mouth");
let rotateBtn = document.getElementById("rotate");
let shapeBtn = document.getElementById("shape");
let SaveBtn = document.getElementById("save");

//initializing colors
const colors = [
  "#FFA07A", // Light Salmon
  "#FFC0CB", // Pink
  "#FFD700", // Gold
  "#00BFFF", // Deep Sky Blue
  "#7FFFD4", // Aquamarine
  "#DA70D6", // Orchid
  "#FF6347", // Tomato
  "#32CD32", // Lime Green
];
//setting up Counters
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

//Setting up total counts for different images
let totalCounts = {
  eyeCount: 5,
  eyebrowsCount: 4,
  mouthCount: 5,
};

//adding Event listeners
colorBtn.addEventListener("click", () => {
  emoji.style.backgroundColor = colors[counter1];
  counter1 = counter1 < colors.length - 1 ? counter1 + 1 : 0;
  console.log(counter1);
});

eyesBtn.addEventListener("click", () => {
  eyes.setAttribute("src", `images/eye-${counter2}.svg`);
  counter2 = counter2 < totalCounts.eyeCount - 1 ? counter2 + 1 : 0;
});

eyebrowsBtn.addEventListener("click", () => {
  eyebrows.setAttribute("src", `images/eyebrow-${counter3}.svg`);
  counter3 = counter3 < totalCounts.eyebrowsCount - 1 ? counter3 + 1 : 0;
});

mouthBtn.addEventListener("click", () => {
  mouth.setAttribute("src", `images/mouth-${counter4}.svg`);
  counter4 = counter4 < totalCounts.mouthCount - 1 ? counter4 + 1 : 0;
});

//adding rotating effect
let i = 0;
rotateBtn.addEventListener("click", function () {
  if (i <= rotate.length - 2) {
    i += 1;
  } else i = 0;

  // console.log(i);
  eyes.style.transform = `translateX(${rotate[i]}%)`;
  eyebrows.style.transform = `translateX(${rotate[i]}%)`;
  mouth.style.transform = `translateX(${rotate[i]}%)`;
  // console.log(rotate[i]);
});

//face shapes
let j = 0;
shapeBtn.addEventListener("click", function () {
  if (j <= shape.length - 2) {
    j += 1;
  } else j = 0;
  emoji.style.borderRadius = `${shape[j]}%`;
  // console.log(shape[j]);
});

// save option undergoing testing
SaveBtn.addEventListener("click", function () {
  const element = document.getElementById("emoji-container");

  // Use html2canvas to capture the element as an image
  html2canvas(element).then((canvas) => {
    canvas.style.height = "100%";
    canvas.style.width = "100%";
    // canvas.style.padding = "25px";
    canvas.style.top = "105%";
    canvas.style.position = "absolute";
    canvas.style.borderRadius = "15px";

    html = canvas;
    element.insertAdjacentElement("afterend", html);
    // Append the canvas to the document body
    // document.body.appendChild(canvas);
  });
});
