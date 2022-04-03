$(function () {
  var a, b;
  var c = 20;　/*入場制限*/
  var x = document.getElementById("konzatu");

  function save() {
    localStorage.setItem("Sample", JSON.stringify([a,b]));
  }

  function load() {
    var x = JSON.parse(localStorage.getItem("Sample"));
    a = x[0];
    b = x[1];
    $("#ninzu").html(a);
    $("#konzatu").html(b);
    $("#max").html(c);
  }

  $('.calbutton').click(function() {
    switch($(this).attr("id")) {
    case "plus":
      ++a;
      break;
    case "minus":
      --a;
      if (a<0) {
        a=0;
      }
      break;
    case "clear":
      a = 0;

    }
    b = Math.floor(a / c * 100);
    if(b>100){
      x.style.color = "red";
      window.alert('入場制限を超えています!!');
    }else if(b>=90){
      x.style.color = "red";
    }else if(b>=80){
      x.style.color = "orange";
    }else if(b<=30){
      x.style.color = "blue";
    }else{
      x.style.color = "black";
    }

    $("#ninzu").html(a);
    $("#konzatu").html(b);
    $("#max").html(c);
    save();
  });

  if(localStorage.getItem("Sample")) {
    load();
  }
});