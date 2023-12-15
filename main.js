const body = document.querySelector('body');
const button = document.querySelector('.btn');
const icon = document.querySelector('.btn-icon');

function almacenar(value){
  localStorage.setItem('darkmode', value);
}


function cargar(){
  const darkmode = localStorage.getItem('darkmode');

  if(!darkmode){
    almacenar(false);
    icon.classList.add('fa-sun');
  } else if( darkmode == 'true'){ 
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
  } else if(darkmode == 'false'){ 
    icon.classList.add('fa-sun');
  }
}

cargar();

button.addEventListener('click', () => {

  body.classList.toggle('darkmode');
  icon.classList.add('animated');

  almacenar(body.classList.contains('darkmode'));

  if(body.classList.contains('darkmode')){
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }else{
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }

  setTimeout( () => {
    icon.classList.remove('animated');
  }, 500)
})