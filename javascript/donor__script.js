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
  location.href = ('donors.html')
});
btnVolenteers.addEventListener('click', () => {
  location.href = ('volunteer.html')
});
btnGallery.addEventListener('click', () => {
  location.href = ('gallery.html')
});