
let countEl = document.getElementById("count-el");
let count = 0;
function increment(){
  count = count + 1;
  countEl.innerText = count;
 // document.getElementById("count-el").innerText = count;
  console.log(count);
 
}