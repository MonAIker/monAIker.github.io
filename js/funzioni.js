/*
|*
|* MonAIker JS
|*
|*
*/

$(document).ready(function () {
  var galleria_elemento_bottone_lista = document.querySelectorAll(
    ".galleria_elemento_bottone"
  );

  var galleria_elemento_descrittore_cornice_lista = document.querySelectorAll(
    ".galleria_elemento_descrittore_cornice"
  );

  for (let i = 0; i < galleria_elemento_bottone_lista.length; i++) {
    galleria_elemento_bottone_lista[i].addEventListener("click", function () {
      $(galleria_elemento_descrittore_cornice_lista[i]).toggleClass(
        "galleria_elemento_descrittore_cornice_attivo"
      );
      $(galleria_elemento_bottone_lista[i]).toggleClass(
        "galleria_elemento_bottone_attivo"
      );
    });
  }

  /** Scroll */

  var scrollPos = window.pageYOffset;

  /** Header a scomparsa */

  function headerGhost() {
    var currentScrollPos = window.pageYOffset;
    var x_mobile = window.matchMedia("(max-width: 912px)");
    if (x_mobile.matches) {
      if (scrollPos >= currentScrollPos) {
        if (currentScrollPos < 70) {
          $("#header_box").removeClass(
            "header_box_scrollato",
            "sfondo_offuscato"
          );
        } else {
          document.getElementById("header_box").style.top = "0";
          $("#header_box").addClass("header_box_scrollato", "sfondo_offuscato");
        }
      } else {
        document.getElementById("header_box").style.top = "-70px";
        $("#header_box").removeClass(
          "header_box_scrollato",
          "sfondo_offuscato"
        );
      }
      scrollPos = currentScrollPos;
    }
  }

  function arrowTop() {
    /** Arrow Top */

    var arrowPos = window.pageYOffset;

    if (arrowPos >= 3700) {
      $("#top_box").addClass("drjekyll");
    } else {
      $("#top_box").removeClass("drjekyll");
    }
  }



  window.onscroll = function () {
    headerGhost();
    arrowTop();
  };
});
