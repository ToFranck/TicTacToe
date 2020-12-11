function estValide(button) {
  return button.innerHTML.length == 0;
}

function setSymbol(btn, symbole) {
  btn.innerHTML = symbole;
}



// Comment ez win??
function rechercherVainqueur(pions, joueurs, tour) {
  if (
    pions[0].innerHTML == joueurs[tour] &&
    pions[1].innerHTML == joueurs[tour] &&
    pions[2].innerHTML == joueurs[tour]
  ) {
    pions[0].style.backgroundColor = "#83ff40";
    pions[1].style.backgroundColor = "#83ff40";
    pions[2].style.backgroundColor = "#83ff40";
    return true;
  }

  if (
    pions[3].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == joueurs[tour] &&
    pions[5].innerHTML == joueurs[tour]
  ) {
    pions[3].style.backgroundColor = "#83ff40";
    pions[4].style.backgroundColor = "#83ff40";
    pions[5].style.backgroundColor = "#83ff40";
    return true;
  }

  if (
    pions[6].innerHTML == joueurs[tour] &&
    pions[7].innerHTML == joueurs[tour] &&
    pions[8].innerHTML == joueurs[tour]
  ) {
    pions[6].style.backgroundColor = "#83ff40";
    pions[7].style.backgroundColor = "#83ff40";
    pions[8].style.backgroundColor = "#83ff40";
    return true;
  }

  if (
    pions[0].innerHTML == joueurs[tour] &&
    pions[3].innerHTML == joueurs[tour] &&
    pions[6].innerHTML == joueurs[tour]
  ) {
    pions[0].style.backgroundColor = "#83ff40";
    pions[3].style.backgroundColor = "#83ff40";
    pions[6].style.backgroundColor = "#83ff40";
    return true;
  }

  if (
    pions[1].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == joueurs[tour] &&
    pions[7].innerHTML == joueurs[tour]
  ) {
    pions[1].style.backgroundColor = "#83ff40";
    pions[4].style.backgroundColor = "#83ff40";
    pions[7].style.backgroundColor = "#83ff40";
    return true;
  }

  if (
    pions[2].innerHTML == joueurs[tour] &&
    pions[5].innerHTML == joueurs[tour] &&
    pions[8].innerHTML == joueurs[tour]
  ) {
    pions[2].style.backgroundColor = "#83ff40";
    pions[5].style.backgroundColor = "#83ff40";
    pions[8].style.backgroundColor = "#83ff40";
    return true;
  }

  if (
    pions[0].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == joueurs[tour] &&
    pions[8].innerHTML == joueurs[tour]
  ) {
    pions[0].style.backgroundColor = "#83ff40";
    pions[4].style.backgroundColor = "#83ff40";
    pions[8].style.backgroundColor = "#83ff40";
    return true;
  }

  if (
    pions[2].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == joueurs[tour] &&
    pions[6].innerHTML == joueurs[tour]
  ) {
    pions[2].style.backgroundColor = "#83ff40";
    pions[4].style.backgroundColor = "#83ff40";
    pions[6].style.backgroundColor = "#83ff40";
    return true;
  }
}
// Fin de Comment win


// Comment perdre??
function matchNul(pions) {
  for (var i = 0, len = pions.length; i < len; i++) {
    if (pions[i].innerHTML.length == 0) return false;
  }

  return true;
}

var Afficheur = function(element) {
  var affichage = element;

  function setText(message) {
    affichage.innerHTML = message;
  }

  return { sendMessage: setText };
};


function main() {
  var myWindow;
  var pions = document.querySelectorAll("#Jeu button");
  var joueurs = ["X", "O"];
  var tour = 0;
  var jeuEstFini = false;
  var afficheur = new Afficheur(document.querySelector("#Statutdujeu"));
  afficheur.sendMessage(
    "Le jeu peut commencer ! <br /> Joueur " +
      joueurs[tour] +
      " c'est votre tour. "
      
  );
  for (var i = 0, len = pions.length; i < len; i++) {
    pions[i].addEventListener("click", function() {
      if (jeuEstFini) return;

      if (!estValide(this)) {
        afficheur.sendMessage(
          "Case occupée ! <br />Joueur " +
            joueurs[tour] +
            " c'est toujours à vous !"
        );
      } else {
        setSymbol(this, joueurs[tour]);
        jeuEstFini = rechercherVainqueur(pions, joueurs, tour);

        if (jeuEstFini) {
          afficheur.sendMessage(
            "Le joueur " +
              joueurs[tour] +
              ' a gagné ! <br /> <a href="Tictactoe.html">Rejouer</a>'
          );
          myWindow=window.open("", "myWindow", "width=100%");
          myWindow.document.write("<img src=https://ih1.redbubble.net/image.604706444.0279/pp,840x830-pad,1000x1000,f8f8f8.jpg>");
          return;
        }

        if (matchNul(pions)) {
          afficheur.sendMessage(
            'Match Nul ! <br/> <a href="Tictactoe.html">Rejouer</a>'
          );
          myWindow=window.open("", "myWindow", "width=100%");
          myWindow.document.write("<img src=https://static.cnews.fr/sites/default/files/pepe_the_frog_sad.jpg> ");
          return;
        }

        tour++;
        tour = tour % 2;
        afficheur.sendMessage("Joueur " + joueurs[tour] + " c'est à vous !");
      }
    });
  }
}

main();


