const allButton = document.querySelectorAll('.button')
const newBody = document.querySelector("body")

allButton.forEach(function(btn){

  btn.addEventListener('click', function(e) {
    // console.log(e)
    // console.log(e.target)
    if(e.target.id==='grey') {
      newBody.style.backgroundColor = e.target.id;
    }
    if(e.target.id==='white') {
      newBody.style.backgroundColor = e.target.id;
    }
    if(e.target.id==='blue') {
      newBody.style.backgroundColor = e.target.id;
    }
    if(e.target.id==='yellow') {
      newBody.style.backgroundColor = e.target.id;
    }
  })
})