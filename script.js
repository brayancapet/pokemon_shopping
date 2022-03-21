"use strict";

var container = document.querySelector(".display-pokemon");
var info_budget = document.getElementById("info_budget");
var liste = document.querySelector(".list-group");
var info_budget_container = document.querySelector(".info_budget_container");

var display_stock = [
  {
    src: "./images/pokemon0.jpg",
    alt: "display pokemon épée et bouclier",
    titre: "Pokemon épée et bouclier",
    prix: "250",
  },
  {
    src: "./images/pokemon1.jpg",
    alt: "display pokemon épée et bouclier",
    titre: "Pokemon ténèbres embrasées",
    prix: "300",
  },
  {
    src: "./images/pokemon2.jpg",
    alt: "display pokemon épée et bouclier",
    titre: "Pokemon japanese edition",
    prix: "250",
  },
  {
    src: "./images/pokemon3.jpg",
    alt: "display pokemon épée et bouclier",
    titre: "Pokemon ombres ardentes",
    prix: "180",
  },
  {
    src: "./images/pokemon4.jpg",
    alt: "display pokemon épée et bouclier",
    titre: "Pokemon évolution célèste",
    prix: "230",
  },
  {
    src: "./images/pokemon5.jpg",
    alt: "display pokemon épée et bouclier",
    titre: "Pokemon ultra prisme",
    prix: "250",
  },
  {
    src: "./images/pokemon6.jpg",
    alt: "display pokemon épée et bouclier",
    titre: "Pokemon règne de glace",
    prix: "280",
  },
  {
    src: "./images/pokemon7.jpg",
    alt: "display pokemon épée et bouclier",
    titre: "Pokemon évolutions",
    prix: "280",
  },
  {
    src: "./images/pokemon8.jpg",
    alt: "display pokemon épée et bouclier",
    titre: "Pokemon poing de fusion",
    prix: "230",
  },
  {
    src: "./images/pokemon9.jpg",
    alt: "display pokemon épée et bouclier",
    titre: "Pokemon lumière interdite",
    prix: "270",
  },
];

var panier_str = localStorage.getItem("panier_str", "UTF-8");
if (panier_str) {
  var panier = JSON.parse(panier_str);
} else {
  panier = [];
}

var total_prix = localStorage.getItem("total_price");
if (total_prix) {
  total_prix = JSON.parse(total_prix, "UTF-8");
} else {
  total_prix = 0;
}

info_budget.textContent = `Total : ${total_prix}€`;
function afficher_stock(array) {
  for (let i = 0; i < array.length; i++) {
    var my_div = document.createElement("div");
    my_div.classList.add("card");
    my_div.style.width = "18rem";
    my_div.innerHTML = ` <img
    src="./images/pokemon${i}.jpg"
    class="card-img-top"
    alt="${array[i].alt}"
  />
  <div class="card-body">
    <h5 class="card-title">${array[i].titre}</h5>
    <h6>${array[i].prix}€</h6>
    <a  class="btn btn-primary" onclick="ajouter_article(${i})">Ajouter au panier</a>
  </div>`;
    container.appendChild(my_div);
  }
}

afficher_stock(display_stock);

function ajouter_article(i) {
  var prix_article = Number(display_stock[i].prix);
  total_prix += prix_article;
  info_budget.textContent = `Total : ${total_prix}€`;
  var total_price = JSON.stringify(total_prix);
  localStorage.setItem("total_price", total_price);
  panier.push(display_stock[i]);
  var panier_str = JSON.stringify(panier);
  localStorage.setItem("panier_str", panier_str);
}
