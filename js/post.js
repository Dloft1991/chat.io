
// ADD CHALLENGE
$("#add-chall").on("click", function(event) {
    event.preventDefault();
  var alias = $("#aliasname").val().trim();
  var sport = $("#sport").val().trim();
  var location = $("#location").val().trim();
  var time = $("#time").val().trim();
  console.log(
    alias);

    const chall = ["<h2>" + alias+ "<h2>" +"<p>" +sport+"<p>" +"<p>" +location +"<p>"+"<p>"+ time+"<p>"];

    $("#bad-section").prepend(chall);
   
    
    $("#aliasname").val("");
    $("#sport").val("");
    $("#location").val("");
    $("#time").val("");
  
    
  }); 



// ADD PLAYER
$("#add-btn").on("click", function(event) {
    event.preventDefault();
  var name = $("#name").val().trim();
  var city = $("#city").val().trim();
  var park = $("#park").val().trim();
  var age = $("#age").val().trim();
  console.log(
    name);

    const play = ["<h2>" + name+ "<h2>" +"<p>" +city+"<p>" +"<p>" +park +"<p>"+"<p>"+ age+"<p>"];

    $("#newplayers").prepend(play);
   
    
    $("#name").val("");
    $("#city").val("");
    $("#park").val("");
    $("#age").val("");
  
    
  }); 