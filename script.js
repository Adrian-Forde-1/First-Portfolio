AOS.init();

// const controller = new ScrollMagic.controller();
// const scene = new ScrollMagic.Scene({
//     triggerElement: '.skills',
//     triggerHook: 0
// }).setTween

// const showRequiredCategory = event => {
//   const getId = event.id;
//   const links = document.querySelectorAll('.project-category button');
//   for (let i = 0; i < links.length; i++) {
//     if (links[i].hasAttribute('class')) {
//       links[i].classList.remove('active');
//     }
//   }
//   event.classList.add('active');

//   const getCategory = document.querySelector(`.category-${getId}`);
//   const categories = document.querySelectorAll('div[class^="category-"]');
//   for (let i = 0; i < categories.length; i++) {
//     if (categories[i].hasAttribute('class')) {
//       categories[i].classList.remove('showCategory');
//       categories[i].classList.add('hideCategory');
//     }
//   }

//   getCategory.classList.remove('hideCategory');
//   getCategory.classList.add('showCategory');
// };

// const getInitialCategory = () => {
//   const buttons = document.querySelectorAll('.project-category button');
//   buttons.forEach(button => {
//     if (button.classList.contains('active')) {
//       const categories = document.querySelectorAll('div[class^="category-"]');
//       categories.forEach(category => {
//         if (category.classList.contains(`category-${button.id}`)) {
//           category.classList.add('showCategory');
//           category.classList.remove('hideCategory');
//         } else {
//           category.classList.remove('showCategory');
//           category.classList.add('hideCategory');
//         }
//       });
//     }
//   });
// };

const bugTrackerWebsiteInfo = {
  name: 'Bug Tracker',
  img: 'img/Bug Tracker Website Picture.PNG',
  information:
    "With the aim of improving my skills overall, both in frontend and backend, I followed the suggestion of a friend and dove right into this project. During the creation of this project I tried to implement the MVC design pattern and SRS ( Software Requirement Specifications ) to the best I currently could to aid in making this project's development cleaner and quicker than before. Using the knowledge I had before and the knowledge I gained during the creation of this project, I can say that my skills in both backend and frontend has grown.",
  liveLink: 'https://af-bug-tracker.herokuapp.com/',
  githubLink: 'https://github.com/DawnOfHopee/bug_tracker_website',
  warning:
    'This website is being hosted on heroku so it may take a few seconds to load up. Sorry in advance.',
};
const cellphoneRepairWebsiteInfo = {
  name: 'Cellphone Repair',
  img: 'img/Cellphone Repair Website Picture.PNG',
  information:
    'Into new but familiar territory is what I felt like when developing this website. Being the second full stack website I ever built, I was able to take my knowledge of front end and combine it with my backend skills that included Node Js, Express Js and MongoDB to create this amazing cellphone repair website, with both client and admin functionality. <br> Accounts are: <br> Client: maxjow@email.com password: maxjoe <br> Client: mikedowell@email.com password: dowell <br> Client: new@email.com password: qqqqqq <br> Admin: admin@email.com password: adminuser <br> Admin: moderator@email.com password: moderator',
  liveLink: 'https://afcellphonerepair.herokuapp.com/',
  githubLink: 'https://github.com/DawnOfHopee/phone_repair_website',
  warning:
    'This website is being hosted on heroku so it may take a few seconds to load up. Sorry in advance.',
};

const clothingWebsiteInfo = {
  name: 'Appear: Clothing Website',
  img: 'img/Clothing Website Picture.PNG',
  information:
    'This webiste was a great learning experience for me. Using the React framework / library with Javascript and bootstrap, I was able to create a responsive and interactive clothing website with advance features such as sorting, filtering and real time cart calculations. I was also able to implement a carousel when hovering over item previews.',
  liveLink: 'https://dawnofhopee.github.io/Clothing-Website/#/',
  githubLink: 'https://github.com/DawnOfHopee/Clothing-Website',
};

const RestaurantWebsiteInfo = {
  name: 'Exquis: Restaurant Website',
  img: 'img/Restaurant Website Picture.PNG',
  information:
    "Attempting to create a webiste, tutorial free and completely on my own. Through many stuggles and learning experiences, this website, Exquis: Cuisine like you've never tasted before, was born",
  liveLink: 'https://dawnofhopee.github.io/Restaurant-Website/#/',
  githubLink: 'https://github.com/DawnOfHopee/Restaurant-Website',
};

const SortingAlgoWebsiteInfo = {
  name: 'Sorthing Algorithm Visualizer',
  img: 'img/Sorting Algorithm Visualizer Picture.PNG',
  information:
    'By following a youtube tutorial by Clement Mihailescu, I was able to built the foundation for this single page application and then using the concepts I learnt, I expanded upon what was taught to then transform the website into a sleak, feature packed, ease to use, sorthing algorithm visualizer',
  liveLink: 'https://dawnofhopee.github.io/Sorting-Algorithm-Visualizer/',
  githubLink: 'https://github.com/DawnOfHopee/Sorting-Algorithm-Visualizer',
};

document.querySelector('.modal-close').addEventListener('click', () => {
  document.querySelector('.modal-link-github').style.display = 'block';
  document.querySelector('.modal-warning').style.display = 'block';
  document.querySelector('.modal-bg').classList.remove('active-modal');
});

const openModal = (event) => {
  const modalImg = document.querySelector('.modal-img');
  const modalName = document.querySelector('.modal-name');
  const modalInfo = document.querySelector('.modal-information');
  const modalLinkLive = document.querySelector('.modal-link-live');
  const modalLinkGithub = document.querySelector('.modal-link-github');
  const modalWarning = document.querySelector('.modal-warning');

  if (event.id === 'clothing-website-btn') {
    modalImg.src = clothingWebsiteInfo.img;
    modalName.innerHTML = clothingWebsiteInfo.name;
    modalInfo.innerHTML = clothingWebsiteInfo.information;
    modalLinkLive.href = clothingWebsiteInfo.liveLink;

    if (clothingWebsiteInfo['githubLink'])
      modalLinkGithub.href = clothingWebsiteInfo.githubLink;
    else modalLinkGithub.style.display = 'none';

    if (clothingWebsiteInfo['warning'])
      modalWarning.innerHTML = clothingWebsiteInfo.warning;
    else modalWarning.style.display = 'none';
  }
  if (event.id === 'restaurant-website-btn') {
    modalImg.src = RestaurantWebsiteInfo.img;
    modalName.innerHTML = RestaurantWebsiteInfo.name;
    modalInfo.innerHTML = RestaurantWebsiteInfo.information;
    modalLinkLive.href = RestaurantWebsiteInfo.liveLink;

    if (RestaurantWebsiteInfo['githubLink'])
      modalLinkGithub.href = RestaurantWebsiteInfo.githubLink;
    else modalLinkGithub.style.display = 'none';

    if (RestaurantWebsiteInfo['warning'])
      modalWarning.innerHTML = RestaurantWebsiteInfo.warning;
    else modalWarning.style.display = 'none';
  }
  if (event.id === 'sorting-algo-btn') {
    modalImg.src = SortingAlgoWebsiteInfo.img;
    modalName.innerHTML = SortingAlgoWebsiteInfo.name;
    modalInfo.innerHTML = SortingAlgoWebsiteInfo.information;
    modalLinkLive.href = SortingAlgoWebsiteInfo.liveLink;

    if (SortingAlgoWebsiteInfo['githubLink'])
      modalLinkGithub.href = SortingAlgoWebsiteInfo.githubLink;
    else modalLinkGithub.style.display = 'none';

    if (SortingAlgoWebsiteInfo['warning'])
      modalWarning.innerHTML = SortingAlgoWebsiteInfo.warning;
    else modalWarning.style.display = 'none';
  }

  if (event.id === 'cellphone-repair-btn') {
    modalImg.src = cellphoneRepairWebsiteInfo.img;
    modalName.innerHTML = cellphoneRepairWebsiteInfo.name;
    modalInfo.innerHTML = cellphoneRepairWebsiteInfo.information;
    modalLinkLive.href = cellphoneRepairWebsiteInfo.liveLink;

    if (cellphoneRepairWebsiteInfo['githubLink'])
      modalLinkGithub.href = cellphoneRepairWebsiteInfo.githubLink;
    else modalLinkGithub.style.display = 'none';

    if (cellphoneRepairWebsiteInfo['warning'])
      modalWarning.innerHTML = cellphoneRepairWebsiteInfo.warning;
    else modalWarning.style.display = 'none';
  }

  if (event.id === 'bug-tracker-btn') {
    modalImg.src = bugTrackerWebsiteInfo.img;
    modalName.innerHTML = bugTrackerWebsiteInfo.name;
    modalInfo.innerHTML = bugTrackerWebsiteInfo.information;
    modalLinkLive.href = bugTrackerWebsiteInfo.liveLink;

    if (bugTrackerWebsiteInfo['githubLink'])
      modalLinkGithub.href = bugTrackerWebsiteInfo.githubLink;
    else modalLinkGithub.style.display = 'none';

    if (bugTrackerWebsiteInfo['warning'])
      modalWarning.innerHTML = bugTrackerWebsiteInfo.warning;
    else modalWarning.style.display = 'none';
  }

  document.querySelector('.modal-bg').classList.add('active-modal');
};

// window.onload = getInitialCategory;

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
}, headerSpans.length * 100);
