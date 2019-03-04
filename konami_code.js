const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  document.querySelector('body').addEventListener('keydown', function(e){
    const key = e.key;
    console.log(key)
  })
  
}


// init()