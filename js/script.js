var link = document.querySelector(".write_techmomart");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content__close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    console.log("Нужно ввести логин и сообщение");
    popup.classList.add("modal-error"); 
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});

var mapOpen = document.querySelector(".js-open-map");

var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-map__close");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-map-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-map-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-map-show")) {
      mapPopup.classList.remove("modal-content-map-show");
    }
  }
});


var goodsOpen = document.querySelector(".js-open-map-goods");

var goodsPopup = document.querySelector(".modal-content-add-goods");
var goodsClose = goodsPopup.querySelector(".modal-content-add-goods__close");
var goodsReturn = goodsPopup.querySelector(".add-goods__second");
var goodsPay = goodsPopup.querySelector(".add-goods__first");


goodsOpen.addEventListener("click", function(event) {
  event.preventDefault();
  goodsPopup.classList.add("modal-content-goods-show");
});

goodsClose.addEventListener("click", function(event) {
  event.preventDefault();
  goodsPopup.classList.remove("modal-content-goods-show");
});

goodsReturn.addEventListener("click", function(event) {
  event.preventDefault();
  goodsPopup.classList.remove("modal-content-goods-show");
});

goodsPay.addEventListener("click", function(event) {
  event.preventDefault();
  goodsPopup.classList.remove("modal-content-goods-show");
  popup.classList.add("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (goodsPopup.classList.contains("modal-content-goods-show")) {
      goodsPopup.classList.remove("modal-content-goods-show");
    }
  }
});