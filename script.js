console.log("Hello Dojo");

let allInput = document.querySelectorAll("button");
for(i = 0; i < allInput.length; i++){
  console.log(allInput[i].innerHTML);
  allInput[i].addEventListener("click", test, false);
} 

function test(){
  //alert(this.value);
  txt = document.getElementById('zoneTxt');
  txt.value = txt.value + '' + this.value;
}
