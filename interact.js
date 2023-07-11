// intersection observer

const elementsToObserve = [
    { selector: '.title', effect: 'Title' },
    { selector: '.para', effect: 'para_slide' },
    { selector: '.hero_image', effect: 'hero_img_appearence' },
    { selector: '.team', effect: 'left_side_effect' },
    { selector: '.team_img', effect: 'right_side_effect' },
    { selector: '.record_img', effect: 'left_side_effect' },
    { selector: '.record', effect: 'right_side_effect' },
    { selector: '.solution', effect: 'left_side_effect' },
    { selector: '.solution_img', effect: 'right_side_effect' },
    { selector: '.services', effect: 'services_effect' },
    { selector: '.set1', effect: 'set_effect' },
    { selector: '.set2', effect: 'set_effect' },
    {selector: '.type1', effect: 'front_end_offer_effect'},
    {selector: '.type2', effect: 'back_end_offer_effect'},
    {selector: '.full_stack',effect: 'full_stack_offer_effect'},
    {selector: '.circle', effect: 'circle_effect'}
  ];
  
  const observeTheElements=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting) {
      
        let getEffect=entry.target.getAttribute('data-effect');
        entry.target.classList.add(getEffect);
        observeTheElements.unobserve(entry.target)
      }
    })
  })
  elementsToObserve.forEach(element=>{
    document.querySelectorAll(element.selector).forEach(el=>{
      el.setAttribute('data-effect',element.effect)
      observeTheElements.observe(el)
    })
})
  

// Projects effects

const projectSelection=document.querySelectorAll('.project')
projectSelection.forEach((project,index)=>{
    project.addEventListener('mouseenter',function () {
        document.querySelectorAll(".project_name")[index].classList.add('project_name_up')
    })

    project.addEventListener('mouseleave',function () {
        document.querySelectorAll(".project_name")[index].classList.remove('project_name_up')
    })
})

// Contact effect
const fields = document.querySelectorAll('input, textarea');
const labels = document.querySelectorAll('label');

fields.forEach((field, index) => {
  field.addEventListener('focus', function() {
    labels[index].classList.add('label_effect');
  });

  field.addEventListener('blur', function() {
    if (field.value === '') {
      labels[index].classList.remove('label_effect');
    }
  });
});


// scroll button

const sectionsList=document.querySelectorAll('section');
sectionsList.forEach(section=>{
  const observeSections=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if (section!==sectionsList[0]) {
        if (entry.isIntersecting) {
          document.querySelector('.scroll_up').classList.add('scroll_up_effect')
        }
      }
      else {
        document.querySelector('.scroll_up').classList.remove('scroll_up_effect')
      }
    })
  },{threshold:0.4})

  observeSections.observe(section)
})

document.querySelector('.scroll_up').addEventListener('click',goToTheTop)
function goToTheTop() {
  window.scrollTo({
    top:0,
    behavior:"smooth",
  })
}


// menu effect 

const menuAiming=document.querySelector('.menu_query')
const header=document.querySelector('.header')
const body=document.querySelector('body')
const menuItems=document.querySelectorAll('.menu_item')

menuAiming.addEventListener('click',slideMenu)

function slideMenu() {
  header.classList.toggle('header_effect');
  if (header.classList.contains('header_effect')) {
    body.style.overflow='hidden'
  }
  else{
    body.style.overflow='auto'
  }
}

menuItems.forEach(item=>{
  item.addEventListener('click',function () {
    body.style.overflowY='auto';
    header.classList.remove("header_effect")
  })
})









