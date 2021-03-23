// https://www.w3schools.com/howto/howto_js_accordion.asp

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }

    // Arrow element
    var arrow = this.childNodes[1].childNodes[1];

    /* Reverse arrow when panel is displayed */
    arrow.classList.toggle("reverse-arrow");
  });
}
