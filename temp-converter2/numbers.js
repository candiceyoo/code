document.getElementById('check').onclick = changeTemp;

function changeTemp() {
  var cel = document.getElementById('celsius').value;
  var far = document.getElementById('farenheight').value;
  
  document.getElementById('farenheight').value = cel * 9/5 +32;
  }




 
