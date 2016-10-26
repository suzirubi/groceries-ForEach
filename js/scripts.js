$(document).ready(function(){

  $("form#grocery-list").submit(function(event) {

    $("ul").text("");

    var groceries = ["item1", "item2", "item3", "item4"];
    var groceryList = [];

    groceries.forEach(function(grocery){
      var userInput = $("input#" + grocery).val();
      groceryList.push(userInput.toUpperCase());
      groceryList.sort();
    });

    groceryList.forEach(function(grocery){
        $("ul").append("<li>" + grocery + "</li>");
    });

    event.preventDefault();
  });
});
