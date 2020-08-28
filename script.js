console.log("🧠🧠🧠 thinking hard 🧠🧠🧠");

let allInput = document.getElementsByTagName('button');
for(i = 0; i < allInput.length; i++){
  // console.log(allInput[i].innerHTML);
  allInput[i].addEventListener("click", test, false);
} 

function test(){
  // alert(this.innerHTML);
  txt = document.getElementById('calc-display1');
  if (this.className.includes('digit')) {
   txt.innerHTML = txt.innerHTML + this.innerHTML;
  }
  if (this.className.includes('operator')) {
    if (this.className.includes('button-ce')) {
      txt.innerHTML = '';
    } else {
      // Le "+" ne fonctionne pas
      txt.innerHTML = txt.innerHTML + this.innerHTML;
    }
  }
  if (this.className.includes('button-submit')) {
    txt.innerHTML = "🧠THINK🧠";
  }
}
