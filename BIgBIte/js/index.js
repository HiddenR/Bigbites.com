// manual radio button
const activeradio = () => {
  if (document.getElementById("radio1").checked == true) {
    document.getElementById("first").style.marginLeft = "0%";
  }
  if (document.getElementById("radio2").checked == true) {
    document.getElementById("first").style.marginLeft = "-20%";
  }
  if (document.getElementById("radio3").checked == true) {
    document.getElementById("first").style.marginLeft = "-40%";
  }
  if (document.getElementById("radio4").checked == true) {
    document.getElementById("first").style.marginLeft = "-60%";
  }
  if (document.getElementById("radio5").checked == true) {
    document.getElementById("first").style.marginLeft = "-80%";
  }
};

// automatic radio button
let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
  activeradio();
}, 2000);

const btnshow = () => {
  const navbar = document.getElementById("nav-btn");
  navbar.classList.toggle("show");

  console.log(navbar);
};
