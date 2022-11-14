//disabled textbox
const checkbox = document.querySelectorAll("input[type=text]");
for (var i = 0; i < checkbox.length; i++) {
  //disabled text box
  checkbox[i].disabled = true;
}
let checkboxesattr = document.querySelectorAll("input[type=checkbox]");
for (let i = 0; i < checkboxesattr.length; i++) {
  // set class in every checkboxs
  checkboxesattr[i].setAttribute("class", "checkbox");
}

//   checkbox function & enable btn
let checkboxes = document.querySelectorAll(".checkbox");
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", (e) => {
    let btnchecked = e.target;
    let checkboxenable = btnchecked.parentElement.children[5];
    let add = btnchecked.parentElement.children[6];

    if (checkboxesattr[i].checked) {
      checkboxenable.children[0].disabled = false;
      checkboxenable.children[1].disabled = false;
      checkboxenable.children[2].disabled = false;
      add.disabled = false;
      add.setAttribute("class", "add");
    } else {
      checkboxenable.children[0].disabled = true;
      checkboxenable.children[1].disabled = true;
      checkboxenable.children[2].disabled = true;
      add.disabled = true;
      add.setAttribute("class", "");
    }
  });
}

let decrementbtn = document.getElementsByClassName("decrement");
for (let i = 0; i < decrementbtn.length; i++) {
  decrementbtn[i].addEventListener("click", (e) => {
    let btnClicked = e.target;

    let getterValue = btnClicked.parentElement.children[1];

    // get value inside this element
    let getValue = getterValue.value;
    let newValue;
    //value setter
    if (getValue > 0) {
      newValue = parseInt(getValue) - 1;
      getterValue.value = newValue;
    } else {
      getterValue.value = 0;
    }
  });
}

// increment
let incrementbtn = document.getElementsByClassName("increment");
for (let i = 0; i < incrementbtn.length; i++) {
  incrementbtn[i].addEventListener("click", (e) => {
    let btnClicked = e.target;

    let getterValue = btnClicked.parentElement.children[1];

    let getValue = getterValue.value;

    let newValue = parseInt(getValue) + 1;

    getterValue.value = newValue;
  });
}

//  disabled button
const btn = document.querySelectorAll("button");
for (var i = 0; i < btn.length; i++) {
  //disabled every button
  btn[i].disabled = true;
}

let addbtn = document.querySelectorAll(".btnAdd");

for (let i = 0; i < addbtn.length; i++) {
  addbtn[i].addEventListener("click", (e) => {
    let btn = e.target;

    let productimage = btn.parentElement.children[1].src;
    let productname = btn.parentElement.children[3].innerHTML;
    let productprice = btn.parentElement.children[4].innerHTML;
    let productquantity = btn.parentElement.children[5].children[1].value;

    chart(productimage, productname, productprice, productquantity);
    total(productprice, productquantity);

    btn.setAttribute("class", "");
    btn.disabled = true;
  });
}

// add to chart
const chart = (productimage, productname, productprice, productquantity) => {
  let borderWrapper = document.querySelector(".order-list-wrapper");
  let chartItem = document.createElement("div");
  let divContent = ` <div class = "orderList">
            <img src="${productimage}" alt="" class="chartImage" />
            <span id="name"> ${productname}</span>
            <span id="price">${productprice}</span>
            <span id="quantity"> ${productquantity}</span>
          </div>`;
  chartItem.innerHTML = divContent;
  borderWrapper.insertAdjacentElement("afterend", chartItem);
};

// TOTAL
const total = (productprice, productquantity) => {
  let price = productprice;
  let quantity = productquantity;

  let Price = parseFloat(price.slice(`1`, "4"));
  let total = Price * quantity;

  updateTotal(total);
};
const updateTotal = (total) => {
  this.total = total;

  newtotal.push(total);
  let sum = 0;
  newtotal.forEach((item) => {
    sum += item;
    document.getElementById("Newtotal").innerText = "₱ " + sum;
  });

  if (sum > 0) {
    document.getElementById("Confirmed").disabled = false;
  }
};

let newtotal = [];
// Confirmed btn

const Confirmed = () => {
  alert("Transaction Done");
};
// open order wrapper
const order = () => {
  document.getElementById("order-wrapper").style.display = "block";
  document.getElementById("overlay").style.display = "block";
};
// closed order wrapper
const closed = () => {
  document.getElementById("order-wrapper").style.display = "none";
  document.getElementById("overlay").style.display = "none";
};
