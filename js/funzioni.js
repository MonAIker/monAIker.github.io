/*
|*
|* MonAIker JS
|*
|*
*/

/**
 *
 * Elementi Galleria
 *
 **/

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

  /**
   *
   *  Scroll
   *
   **/

  var scrollPos = window.scrollY;

  /** Header a scomparsa */

  function headerGhost() {
    var currentScrollPos = window.scrollY;
    var x_mobile = window.matchMedia("(max-width: 912px)");
    if (x_mobile.matches) {
      if (scrollPos >= currentScrollPos) {
        if (currentScrollPos < 70) {
          $("#header_box").removeClass("header_box_scrollato");
        } else {
          document.getElementById("header_box").style.top = "0";
          $("#header_box").addClass("header_box_scrollato");
        }
      } else {
        document.getElementById("header_box").style.top = "-70px";
        $("#header_box").removeClass("header_box_scrollato");
      }
      scrollPos = currentScrollPos;
    }
  }

  function arrowTop() {
    /** Arrow Top */

    var arrowPos = window.scrollY;

    if (arrowPos >= 3700) {
      $("#top_box").addClass("drjekyll");
    } else {
      $("#top_box").removeClass("drjekyll");
    }
  }

  /**
   *
   * Lazy
   *
   **/

  $(".lazy").lazy({
    scrollDirection: "vertical",
    effect: "fadeIn",
    effectTime: 2000,
    visibleOnly: true,
    onError: function (element) {
      console.log("error loading " + element.data("src"));
    },
  });

  /**
   *
   * Menu
   *
   **/

  $("#menu_hamburger_box").on("click", function () {
    $("#menu_hamburger_box").toggleClass("menu_hamburger_attivo");
    $("#menu_cornice").toggleClass("menu_cornice_attivo");
  });

  $("#menu_cornice").click(function (e) {
    if (e.target !== e.currentTarget) return;
    $("#menu_hamburger_box").toggleClass("menu_hamburger_attivo");
    $("#menu_cornice").toggleClass("menu_cornice_attivo");
  });

  window.onscroll = function () {
    headerGhost();
    arrowTop();
  };
});
