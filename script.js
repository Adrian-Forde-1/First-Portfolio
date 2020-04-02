AOS.init();

const spans = document.querySelectorAll('h1 span');
spans.forEach(span =>
  span.addEventListener('mouseover', e => {
    span.classList.add('animated', 'rubberBand');
  })
);

spans.forEach(span =>
  span.addEventListener('mouseout', e => {
    span.classList.remove('animated', 'rubberBand');
  })
);

// const controller = new ScrollMagic.controller();
// const scene = new ScrollMagic.Scene({
//     triggerElement: '.skills',
//     triggerHook: 0
// }).setTween

const showRequiredCategory = event => {
  const getId = event.id;
  const links = document.querySelectorAll('.project-category button');
  for (let i = 0; i < links.length; i++) {
    if (links[i].hasAttribute('class')) {
      links[i].classList.remove('active');
    }
  }
  event.classList.add('active');

  const getCategory = document.querySelector(`.category-${getId}`);
  const categories = document.querySelectorAll('div[class^="category-"]');
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].hasAttribute('class')) {
      categories[i].classList.remove('showCategory');
      categories[i].classList.add('hideCategory');
    }
  }

  getCategory.classList.remove('hideCategory');
  getCategory.classList.add('showCategory');
};

const getInitialCategory = () => {
  const buttons = document.querySelectorAll('.project-category button');
  buttons.forEach(button => {
    if (button.classList.contains('active')) {
      const categories = document.querySelectorAll('div[class^="category-"]');
      categories.forEach(category => {
        if (category.classList.contains(`category-${button.id}`)) {
          category.classList.add('showCategory');
          category.classList.remove('hideCategory');
        } else {
          category.classList.remove('showCategory');
          category.classList.add('hideCategory');
        }
      });
    }
  });
};

const clothingWebsiteInfo = {
  name: 'Appear: Clothing Website',
  img: 'img/Clothing Website Picture.PNG',
  information:
    'This webiste was a great learning experience for me. Using the React framework / library with Javascript and bootstrap, I was able to create a responsive and interactive clothing website with advance features such as sorting, filtering and real time cart calculations',
  liveLink: 'https://dawnofhopee.github.io/Clothing-Website/#/',
  githubLink: 'https://github.com/DawnOfHopee/Clothing-Website'
};

const RestaurantWebsiteInfo = {
  name: 'Exquis: Restaurant Website',
  img: 'img/Restaurant Website Picture.PNG',
  information:
    "Attempting to create a webiste, tutorial free and completely on my own. Through many stuggles and learning experiences, this website, Exquis: Cuisine like you've never tasted before, was born",
  liveLink: 'https://dawnofhopee.github.io/Restaurant-Website/#/',
  githubLink: 'https://github.com/DawnOfHopee/Restaurant-Website'
};

const SortingAlgoWebsiteInfo = {
  name: 'Sorthing Algorithm Visualizer',
  img: 'img/Sorting Algorithm Visualizer Picture.PNG',
  information:
    'By following a youtube tutorial by Clement Mihailescu, I was able to built the foundation for this single page application and then using the concepts I learnt, I was able to expand upon what was taught to then transform the website into a sleak, feature packed, ease to use, sorthing algorithm visualizer',
  liveLink: 'https://dawnofhopee.github.io/Sorting-Algorithm-Visualizer/',
  githubLink: 'https://github.com/DawnOfHopee/Sorting-Algorithm-Visualizer'
};

document.querySelector('.modal-close').addEventListener('click', () => {
  document.querySelector('.modal-bg').classList.remove('active-modal');
});

const openModal = event => {
  const modalImg = document.querySelector('.modal-img');
  const modalName = document.querySelector('.modal-name');
  const modalInfo = document.querySelector('.information');
  const modalLinkLive = document.querySelector('.modal-link-live');
  const modalLinkGithub = document.querySelector('.modal-link-github');

  if (event.id === 'clothing-website-btn') {
    modalImg.src = clothingWebsiteInfo.img;
    modalName.innerHTML = clothingWebsiteInfo.name;
    modalInfo.innerHTML = clothingWebsiteInfo.information;
    modalLinkLive.href = clothingWebsiteInfo.liveLink;
    modalLinkGithub.href = clothingWebsiteInfo.githubLink;
  }
  if (event.id === 'restaurant-website-btn') {
    modalImg.src = RestaurantWebsiteInfo.img;
    modalName.innerHTML = RestaurantWebsiteInfo.name;
    modalInfo.innerHTML = RestaurantWebsiteInfo.information;
    modalLinkLive.href = RestaurantWebsiteInfo.liveLink;
    modalLinkGithub.href = RestaurantWebsiteInfo.githubLink;
  }
  if (event.id === 'sorting-algo-btn') {
    modalImg.src = SortingAlgoWebsiteInfo.img;
    modalName.innerHTML = SortingAlgoWebsiteInfo.name;
    modalInfo.innerHTML = SortingAlgoWebsiteInfo.information;
    modalLinkLive.href = SortingAlgoWebsiteInfo.liveLink;
    modalLinkGithub.href = SortingAlgoWebsiteInfo.githubLink;
  }

  document.querySelector('.modal-bg').classList.add('active-modal');
};

window.onload = getInitialCategory;

const navbarLinks = document.querySelector('.navbar-links');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

const headerSpans = document.querySelectorAll('.section-container div h1 span');

headerSpans.forEach((span, index) => {
  setTimeout(() => {
    if (!span.classList.contains('name')) span.style.color = '#48cfad';
    span.style.transform = 'translateY(-5px)';
    setTimeout(() => {
      if (span.classList.contains('name')) {
        span.style.color = '#ed5565';
        span.style.transform = 'translateY(0px)';
      } else {
        span.style.color = 'white';
        span.style.transform = 'translateY(0px)';
      }
    }, 400);
  }, 100 * index);
});

setInterval(() => {
  headerSpans.forEach((span, index) => {
    setTimeout(() => {
      if (!span.classList.contains('name')) span.style.color = '#48cfad';
      span.style.transform = 'translateY(-5px)';
      setTimeout(() => {
        if (span.classList.contains('name')) {
          span.style.color = '#ed5565';
          span.style.transform = 'translateY(0px)';
        } else {
          span.style.color = 'white';
          span.style.transform = 'translateY(0px)';
        }
      }, 400);
    }, 100 * index);
  });
}, spans.length * 100);
