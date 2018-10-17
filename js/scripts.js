$(function() {
  $("#appointment").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var type = $("#type").val();
    var date = $("#date").val();
    var time = $("#time").val();

    console.log(name + " " + type + " " + date + " " + time);
    $(".name").text(name);
    $(".type").text(type);
    $(".date").text(date);
    $(".time").text(time);
    $("#appointment-modal").show();
  });
});
