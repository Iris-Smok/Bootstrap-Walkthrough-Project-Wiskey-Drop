$(document).ready(function () {
  $("#toggleRows").click(function () {
    $(".grid .row").toggle();
    $(this).toggleClass("active");
  });
  $("#toggleColumns").click(function () {
    $(".grid .row > div").toggle();
    $(this).toggleClass("active");
  });
  $("#toggleNumbers").click(function () {
    $(".grid .grid-element span").toggle();
    $(this).toggleClass("active");
  });
  $("#toggleContainer").click(function () {
    $(".header > div, .grid > div")
      .toggleClass("container")
      .toggleClass("container-fluid");
    $(this).toggleClass("active");
  });
});
