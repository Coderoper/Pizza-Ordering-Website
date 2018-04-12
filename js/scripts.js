var cost=0;
var size;
var selectedTopping;
var toppings=[];


function Pizza(toppings, size, cost){
  this.toppings=toppings
  this.size=size
  this.cost=cost
}
Pizza.prototype.price=function(){
  var sizeCost=0;
  if (this.size==="small"){
    sizeCost=10
  } else if (this.size==="medium"){
    sizeCost=15
  } else if (this.size==="large"){
    sizeCost=20
  }
  var toppingPrice=toppings.length*2
  cost=toppingPrice+sizeCost;

  return cost
}

$(document).ready(function(){
  $("#createPizza").submit(function(event){
    event.preventDefault()
    $("input:checkbox[name=topping]:checked").each(function(){
    var selectedToppings= $(this).val();
    toppings.push(selectedToppings);
    // console.log(toppings)
  });
    var size = $("#size").val();
    console.log(size)
    $("#cost").text(cost);
    // console.log("selectedTopping "+selectedTopping+" cost "+ cost+ " size "+size)
    // console.log("constructor Pizza "+Pizza)
    newPie=new Pizza(toppings, size, cost)
    var pizzaOrder=newPie.price();
    // console.log(pizzaOrder)
    $("#cost").text(cost);
    });
  })
