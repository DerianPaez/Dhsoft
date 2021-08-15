const descriptionContainer = document.getElementById('description-container')
const buttonsContainer = document.getElementById('buttons-container')
const imgContainer = document.getElementById('img-container')
const button1 = document.getElementById('button-1')
const button2 = document.getElementById('button-2')
const button3 = document.getElementById('button-3')

const webDevelopment = {
  description: 'Desarrollo Web Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam harum quae at voluptates autem fugiat soluta, tempore dignissimos fuga nemo. Nulla autem itaque iste, qui suscipit nemo fugit dicta!',
  img: 'images/offer-web-development.png',
  alt: 'Imagen de desarrollo web',
  buttonId: button1
}

const responsiveDesign = {
  description: 'Diseño responsivo Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam harum quae at voluptates autem fugiat soluta, tempore dignissimos fuga nemo. Nulla autem itaque iste, qui suscipit nemo fugit dicta!',
  img: 'images/offer-responsive-design.svg',
  alt: 'Imagen de diseño responsivo',
  buttonId: button2
}

const seo = {
  description: 'SEO Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam harum quae at voluptates autem fugiat soluta, tempore dignissimos fuga nemo. Nulla autem itaque iste, qui suscipit nemo fugit dicta!',
  img: 'images/offer-seo.svg',
  alt: 'Imagen de SEO',
  buttonId: button3
}

let description = document.createElement('p')
let img = document.createElement('img')

function changeValues(value){
  cleanContainers()
  description.innerHTML = value.description
  descriptionContainer.appendChild(description)
  img.setAttribute('src', value.img)
  img.setAttribute('alt', value.alt)
  imgContainer.appendChild(img)
  value.buttonId.classList.add('offer-button-color')
}

function cleanContainers(){
  descriptionContainer.innerHTML = ''
  imgContainer.innerHTML = ''
  button1.classList.remove('offer-button-color')
  button2.classList.remove('offer-button-color')
  button3.classList.remove('offer-button-color')
}

buttonsContainer.addEventListener('click', (event) => {
  let buttonPressed = event.target
  switch (buttonPressed) {
    case button1:
      changeValues(webDevelopment)
    break;
    case button2:
      changeValues(responsiveDesign)
    break;
    case button3:
      changeValues(seo)
    break;

    default:
      break;
  }
})