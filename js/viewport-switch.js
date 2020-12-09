  $(document).ready(function () {
      $("#viewport_box").load("/pages/ability.html");

  });


  jQuery(document).ajaxComplete(function () {

      $("#ability_button").click(function () {
          $("#viewport_box").html("");
          $("#viewport_box").load("/pages/ability.html");
      });
      
      

      $(".cover_card").click(function () {
          $("#viewport_box").html("");
          var classStr = $(this).attr('class'),
              lastClass = classStr.substr(classStr.lastIndexOf(' ') + 1);
          $("#viewport_box").load("/pages/" + lastClass + ".html");
      });

  });