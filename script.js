console.log("🧠🧠🧠 thinking hard 🧠🧠🧠");

let allButtons = document.getElementsByTagName('button');

let operator = new Array('+', '-', '*', '/', '=');

for (i = 0; i < allButtons.length; i++) {
  // console.log(allInput[i].innerHTML);
  allButtons[i].addEventListener("click", test, false);
} 

function test(){
  // alert(this.innerHTML);
  txt = document.getElementById('calc-display');
  if (this.className.includes('digit')) {
    txt.innerHTML = txt.innerHTML + this.innerHTML;
  }
  if (this.className.includes('operator')) {
    if (this.className.includes('button-ce')) {
      txt.innerHTML = '';
    } else {
      txt.innerHTML = txt.innerHTML + this.innerHTML;
    }
  }
  if (this.className.includes('button-submit')) {
    console.log(escapeRegExp(txt.innerHTML));
    txt.innerHTML = eval(escapeRegExp(txt.innerHTML));  
  }
}

function escapeRegExp(string) {
  return string.replace(/[^\d+-\/*]*/g, '');
}
