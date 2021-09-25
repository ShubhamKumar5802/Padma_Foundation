// header 

navItems.forEach((e) => {

  e.addEventListener("mouseover", () => {
    e.classList.add('active');
  });
  e.addEventListener("mouseout", () => {
    e.classList.remove('active');
  });
});

btnHome.addEventListener('click', () => {
  location.href = ('../index.html');
});
btnDonors.addEventListener('click', () => {
  location.href = ('donors.html');
});
btnVolenteers.addEventListener('click', () => {
  location.href = ('volunteer.html')
});
btnGallery.addEventListener('click', () => {
  location.href = ('gallery.html')
});


////////volenteer//////////////////
all__volunteerbtn.forEach((e)=>{
  let num = e.getAttribute("card");
  e.addEventListener('click', ()=>{
    location.href =(`../views/volunteer/${num}.html`)
  });
});