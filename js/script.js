// Note that the following is a shorthand for the DOMReady event
$(function() {

});

$("#prepend button").click(function() {
	$("#prepend p").prepend("Yo! ");
});

$("#before button").click(function() {
	$("#before p").before("Yo!");
});

$("#css1 button").click(function() {
  $("#css1 p").css("font-size", "50px");

});

$("#css2 button").click(function() {
  $("#css2 p").css({"font-size":"50px", "color":"yellow"});

});

$("#attr1 button").click(function() {
  var des = $("#attr1 p a").attr("href");
  $("#attr1 button").after(des);
});

$("#attr2 button").click(function() {
  $("#attr2 p a").attr("href", "http://www.youtube.com");

});

$("#class1 button").click(function() {
  $("#class1 p").addClass("bg-primary");
});

$("#class2 button").click(function() {
  var result = $("#class2 p").hasClass("lead");
  console.log(result);
  $("#class2 button").after(result);
});

$("#form1 button").click(function() {
  var value = $("#exampleInputEmail1").val();
  console.log(value);
  $("#exampleInputEmail1").after(value);
});

$("#form2 button").click(function() {
  $("#exampleInputName2").val('Chris');
});

// handle the mouseover event here

$("#mouse img").mouseover(function() {
  $("#mouse img").css("width", "40%");
});

$("#mouse img").mouseout(function() {
  $("#mouse img").css("width", "20%");
});


// handle the form events here

$("#formEvents form").submit(function(event) {
   event.preventDefault();
   console.log($("#inputEmail3").val());
   console.log($("#inputPassword3").val());
   console.log($("#formEvents input[type=checkbox]").prop("checked"));

});

$("#animate1 img").mouseover(function() {
  $("#animate1 img").animate({
    width:"40%"
  });
});

$("#animate2 img").dblclick(function() {
  //console.log(typeof $("#animate2 img").css("margin-left"));
  if($("#animate2 img").css("margin-left") === "750px"){
    $("#animate2 img").animate({
    "margin-left":"0"
    });
  }else {
    $("#animate2 img").animate({
    "margin-left":"750px"
    });
  }
});

$("#animate3 img:first").dblclick(function() {
  $("#animate3 img:first").fadeOut(function() {
    $("#animate3 img:last").fadeIn();
  });
  // $("#animate3 img").animate({
  //   opacity: 0
  // }, 1000, function() {
  //   $(this).attr("src", "images/cat.jpg");
  //   $(this).animate({ opacity: 1});
  // })
});