"use strict";

var total = document.getElementById("total");
var my_total = document.querySelector(".my_total");

var total_price = localStorage.getItem("total_price");
var total_prix = JSON.parse(total_price, "UTF-8");
total.textContent = `Votre total est de ${total_prix}€`;

var panier_str = localStorage.getItem("panier_str", "UTF-8");
if (panier_str) {
  var panier = JSON.parse(panier_str);
} else {
  panier = [];
}

function show_total(arr) {
  for (let i = 0; i < arr.length; i++) {
    my_total.innerHTML += `<li>${arr[i].titre} - ${arr[i].prix}€ - <span onclick="supprimer_article(${i})">🐱‍👤</span>`;
  }
}
show_total(panier);

function supprimer_article(i) {
  var prix_article = Number(panier[i].prix);
  panier.splice(i, 1);
  total_prix -= prix_article;
  var total_price = JSON.stringify(total_prix);
  localStorage.setItem("total_price", total_price);
  var panier_str = JSON.stringify(panier);
  localStorage.setItem("panier_str", panier_str);
  document.location.reload();
}

function effacer_panier() {
  total.textContent = "Votre panier est vide.";
  total_prix = 0;
  panier = [];
  var panier_str = JSON.stringify(panier);
  localStorage.setItem("panier_str", panier_str);
  var total_price = JSON.stringify(total_prix);
  localStorage.setItem("total_price", total_price);
  my_total.innerHTML = "";
}
