
const divs = document.querySelectorAll('small');

let num = 1;
divs.forEach(function(small) {
  small.innerHTML = num;
  num++;
});
