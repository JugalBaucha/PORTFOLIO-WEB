
function navOpen(){
  const questionIcon = document.getElementById('questId')
  const nav = document.getElementById('navId')
  const overlay = document.getElementById('overlay1')
  
  nav.classList.add('active')
  overlay.classList.add('active')
}
function navClose(){
  const nav = document.getElementById('navId')
  const overlay = document.getElementById('overlay1')

  nav.classList.remove('active')
  overlay.classList.remove('active')
}

function openAboutOl(){
  const overlay = document.getElementById('aboutOl')

  overlay.classList.add('active')
}
function closeAboutOl(){
  const overlay = document.getElementById('aboutOl')

  overlay.classList.remove('active')
}

function openContactOl(){
  const overlay = document.getElementById('contactOl')

  overlay.classList.add('active')
}
function closeContactOl(){
  const overlay = document.getElementById('contactOl')

  overlay.classList.remove('active')
}
