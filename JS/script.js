const hamburger = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.mobile-nav');
const rootServices = document.getElementById('cards');

const services = [
  {
    title: "Re-upholstery",
    image: "./images/serve1.jpg",
    altText: "sofa",
    description: "Our re-upholstery services will give your furniture a new look and feel."
  }
]

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.page-links').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));



const generateCards = (arr, box) => {
  for(let i = 0; i < arr.length; i++) {
    box.innerHTML += `
      <div class="offered">
        <h3>${arr[i].title}</h3>
        <img src="${arr[i].image}" alt="${arr[i].altText}" />
        <p>${arr[i].description}</p>
      </div>
    `
  }
}

generateCards(services, rootServices);