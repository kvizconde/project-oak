/** 
scripts.js
*/


function welcome() {
  var ouput = document.getElementById('display');
  ouput.innerHTML = document.getElementById('user-input').value;
}

function clearField() {
  document.getElementById('user-input').value = '';
}