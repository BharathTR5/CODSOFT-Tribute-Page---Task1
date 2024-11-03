const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  document.querySelector(".nav-links-responsive").classList.toggle("response");
})


window.addEventListener('scroll', ()=> {
  const screenPosition = window.innerHeight / 1.3;
  const aboutSection = document.querySelector('.about');
  const earlyLifeSection = document.querySelector('.early-life');
  const careerSection = document.querySelector('.career');
  const awardsSection = document.querySelector('.awards');

  const aboutSectionPosition = aboutSection.getBoundingClientRect().top;
  const earlyLifeSectionPosition = earlyLifeSection.getBoundingClientRect().top;
  const careerSectionPosition = careerSection.getBoundingClientRect().top;
  const awardsSectionPosition = awardsSection.getBoundingClientRect().top;

  if(aboutSectionPosition < screenPosition){
    aboutSection.style.opacity = '1';
    aboutSection.style.transform = 'translateY(0)';
  }

  if(earlyLifeSectionPosition < screenPosition){
    earlyLifeSection.style.opacity = '1';
    earlyLifeSection.style.transform = 'translateY(0)';
  }
  if(careerSectionPosition < screenPosition){
    careerSection.style.opacity = '1';
    careerSection.style.transform = 'translateY(0)';
  }
  if(awardsSectionPosition < screenPosition){
    awardsSection.style.opacity = '1';
    awardsSection.style.transform = 'translateY(0)';
  }
  

});