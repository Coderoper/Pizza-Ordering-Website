//backend
var topping;

$("document").ready(function(){
  $("#createPizza").submit(function(event){
    event.preventDefault()
    $("input:checkbox[name=topping]:checked").each(function(){
    var topping = $("input").val();
    var size = $("#size").val()
    console.log(topping, size)
    });
  })
});
