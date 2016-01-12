$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#cat").append("<li>Meow...</li>");
    $("ul#dog").append("<li>Woof!</li>");

    $("ul#cat").children("li").first().click(function() {
        $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });

  });

  $("button#goodbye").click(function() {
      $("ul#dog").append("<li>Meow...</li>");
      $("ul#cat").append("<li>Arf!</li>");

      $("ul#cat").children("li").first().click(function() {
          $(this).remove();
      });
      $("ul#dog").children("li").first().click(function() {
        $(this).remove();
      });
  });





});
