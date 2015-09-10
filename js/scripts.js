function WordOrder(input) {
  var inputNew = input.replace(/\W+/g, ' ').toLowerCase().split(" ");
  // var inputNew = ("hello HelLo, yOU!! YOU?...").replace(/\W+/g, ' ').toLowerCase().split(" ");
  var word_array = [];
  var counter_array = [];
  var result_array = [];

  inputNew.forEach(function(word){
      if (word_array.indexOf(word) === -1 ){
        word_array.push(word);
        counter_array.push(1);
      } else {
        counter_array[word_array.indexOf(word)]++;
      }
  });

  var index = 0;
  counter_array.forEach(function(counter){
    result_array.push(word_array[index] + ": " + counter_array[index] + " times" );
    index++;
  });

  return result_array;

}


$(document).ready(function()  {
  $("form#word_order").submit(function(event) {
    var text = ($("input#text").val());
    var result = WordOrder(text);

    $(".word_order").append("<ul></ul>");
    for(var i in result) {
      var li = "<li>";
      $("ul").append(li.concat(result[i]))
    }

    // $(".word_order").text(result);

    $("#result").show();
    event.preventDefault();

  });

});
