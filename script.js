"use strict";

$(".txt").on("keyup", function (e) {
  if (e.keyCode == 13 && $(".txt").val() !== "") {
    const task = $("<div class='task'></div>").text($(".txt").val());
    const del = $("<i class='fas fa-trash-alt'></i>").on("click", function () {
      //The delete button***
      const p = $(this).parent();
      p.fadeOut(function () {
        p.remove();
      });
    });
    //The check button***
    const check = $(" <i class='fas fa-check'></i>").on("click", function () {
      const pp = $(this).parent();
      pp.fadeOut(function () {
        $(".comp").append(pp);
        pp.fadeIn();
      });
      $(this).remove();
    });
    // Task will be with the buttons del and check
    task.append(del, check);
    //Add the task to the not completed list
    $(".notcomp").append(task);
    $(".txt").val("");
  }
});
