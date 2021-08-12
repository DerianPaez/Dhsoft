const descriptionContainer = document.getElementById('description-container')
const buttonsContainer = document.getElementById('buttons-container')
const imgContainer = document.getElementById('img-container')
const button1 = document.getElementById('button-1')
const button2 = document.getElementById('button-2')
const button3 = document.getElementById('button-3')

const webDevelopment = {
  description: 'Desarrollo Web Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam harum quae at voluptates autem fugiat soluta, tempore dignissimos fuga nemo. Nulla autem itaque iste, qui suscipit nemo fugit dicta!',
  img: 'images/offer-web-development.png',
  alt: 'Imagen de desarrollo web'
}

const responsiveDesign = {
  description: 'Diseño responsivo Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam harum quae at voluptates autem fugiat soluta, tempore dignissimos fuga nemo. Nulla autem itaque iste, qui suscipit nemo fugit dicta!',
  img: 'images/offer-responsive-design.svg',
  alt: 'Imagen de diseño responsivo'
}

const seo = {
  description: 'SEO Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam harum quae at voluptates autem fugiat soluta, tempore dignissimos fuga nemo. Nulla autem itaque iste, qui suscipit nemo fugit dicta!',
  img: 'images/offer-seo.svg',
  alt: 'Imagen de SEO'
}

let description = document.createElement('p')
let img = document.createElement('img')

function changeValues(value){
  description.innerHTML = value.description
  descriptionContainer.appendChild(description)
  img.setAttribute('src', value.img)
  img.setAttribute('alt', value.alt)
  imgContainer.appendChild(img)
}

function cleanContainers(){
  descriptionContainer.innerHTML = ''
  imgContainer.innerHTML = ''
}

buttonsContainer.addEventListener('click', (event) => {
  let buttonPressed = event.target
  switch (buttonPressed) {
    case button1:
      cleanContainers()
      changeValues(webDevelopment)
    break;
    case button2:
      cleanContainers()
      changeValues(responsiveDesign)
    break;
    case button3:
      cleanContainers()
      changeValues(seo)
    break;

    default:
      break;
  }
})