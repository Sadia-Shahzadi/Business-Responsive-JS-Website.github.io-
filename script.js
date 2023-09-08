let slides = document.querySelectorAll('.slide-container');
let index = 0;

// Slides Container 
function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function previous(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


// Filter Gallery
const filterbuttons = document.querySelectorAll('.filter-gallery button');
const gallery = document.querySelectorAll('.gallery .gallery-sides');

filterbuttons.forEach(option => {
  option.addEventListener('click', () => {
    filterbuttons.forEach(o => o.classList.remove('active'));
    option.classList.add('active');
    const filterCategory = option.getAttribute('data-name');
    gallery.forEach(item => {
      if (filterCategory === 'all' || item.getAttribute('data-name') === filterCategory) {
        item.style.display = 'flex'; 
      } else {
        item.style.display = 'none'; 
      }
    });
  });
});

