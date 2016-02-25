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

// handle the form events here

$("#formEvents form").submit(function(event) {

});