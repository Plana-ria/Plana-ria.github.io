$(function () {
  var a=0, b=0;
  var c = 0; /*入場制限*/
  var x = document.getElementById("konzatu");
  var pass;

  function load() {
    $.ajaxSetup({async: false});//同期通信(json取ってくるまで待つ)
    $.getJSON(pass + "load.php",function(j){
      a = j.ninzu;
    });
    $.ajaxSetup({async: true});
    check();
    $("#ninzu").html(a);
    $("#konzatu").html(b);
    $("#max").html(c);
  }

  function check() {
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
  }
 
  window.onload= function() {
    $.ajaxSetup({async: false});//同期通信(json取ってくるまで待つ)
    $.getJSON("setting.json",function(j){
      console.log(j.max);
      c = j.max;
      pass = j.APIPass;
    });
    $.ajaxSetup({async: true});
    load();
  };

    async function onload() {
    while (true) {
      await new Promise(ms => setTimeout(ms, 30000))
    load();
    }
  }

  onload();

});