const barria = () => {
  document.getElementById("barria-display").style.display = "block";

  document.getElementById("display-tacos").style.display = "none";
  document.getElementById("burger-display").style.display = "none";
  document.getElementById("side-dish-display").style.display = "none";
  document.getElementById("drinks-display").style.display = "none";
  document.getElementById("dessert-display").style.display = "none";
};

const tacos = () => {
  document.getElementById("display-tacos").style.display = "block";

  document.getElementById("barria-display").style.display = "none";
  document.getElementById("burger-display").style.display = "none";
  document.getElementById("side-dish-display").style.display = "none";
  document.getElementById("drinks-display").style.display = "none";
  document.getElementById("dessert-display").style.display = "none";
};
const burger = () => {
  document.getElementById("burger-display").style.display = "block";

  document.getElementById("barria-display").style.display = "none";
  document.getElementById("display-tacos").style.display = "none";
  document.getElementById("side-dish-display").style.display = "none";
  document.getElementById("drinks-display").style.display = "none";
  document.getElementById("dessert-display").style.display = "none";
};
const side = () => {
  document.getElementById("side-dish-display").style.display = "block";

  document.getElementById("burger-display").style.display = "none";
  document.getElementById("barria-display").style.display = "none";
  document.getElementById("display-tacos").style.display = "none";
  document.getElementById("drinks-display").style.display = "none";
  document.getElementById("dessert-display").style.display = "none";
};
const drinks = () => {
  document.getElementById("drinks-display").style.display = "block";
  document.getElementById("side-dish-display").style.display = "none";
  document.getElementById("burger-display").style.display = "none";
  document.getElementById("barria-display").style.display = "none";
  document.getElementById("display-tacos").style.display = "none";
  document.getElementById("dessert-display").style.display = "none";
};
const dessert = () => {
  document.getElementById("dessert-display").style.display = "block";

  document.getElementById("drinks-display").style.display = "none";
  document.getElementById("side-dish-display").style.display = "none";
  document.getElementById("burger-display").style.display = "none";
  document.getElementById("barria-display").style.display = "none";
  document.getElementById("display-tacos").style.display = "none";
};
