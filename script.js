const images = document.querySelectorAll('.images img');
const resultDiv = document.createElement('div');
resultDiv.classList.add('result');

document.querySelector('.container').appendChild(resultDiv);

images.forEach(image => {
  image.addEventListener('click', () => {
    const selectedImage = image.getAttribute('src');
    resultDiv.innerHTML = `Seleccionaste la imagen ${selectedImage}`;
  });
});
