console.log("Hello Dojo");

let allInput = document.querySelectorAll("input[type=button]");
for(i = 0; i < allInput.length; i++){
  console.log(allInput[i].value);
  allInput[i].addEventListener("click", test, false);
} 

function test(){
  //alert(this.value);
  txt = document.getElementById('zoneTxt');
  txt.value = txt.value + ' ' + this.value;
}
