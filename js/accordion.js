const descriptionContainer = document.getElementById('description-container')
const buttonsContainer = document.getElementById('buttons-container')
const imgContainer = document.getElementById('img-container')
const button1 = document.getElementById('button-1')
const button2 = document.getElementById('button-2')
const button3 = document.getElementById('button-3')

const webDevelopment = {
  description: 'parrafo 1',
  img: 'images/test-services 1.png'
}

const responsiveDesign = {
  description: 'parrafo 2',
  img: 'images/test-services 1.png'
}

const seo = {
  description: 'parrafo 3',
  img: 'images/test-services 1.png'
}

let description = document.createElement('p')
let img = document.createElement('img')

function cleanContainers(){
  descriptionContainer.innerHTML = ''
  imgContainer.innerHTML = ''
}

function changeValues(value){
  description.innerHTML = value.description
  descriptionContainer.appendChild(description)
  img.setAttribute('src', value.img)
  imgContainer.appendChild(img)
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