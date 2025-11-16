// تأكد الصفحة اتحملت
window.onload = () => {
  console.log("مرحبا بك في متجر Hozayen!");
};

// اختار الـ lightbox الموجود في HTML
const lightbox = document.getElementById('lightbox');

// اختار كل الصور اللي عليها class zoom-img
const images = document.querySelectorAll('.zoom-img');

images.forEach(img => {
  img.addEventListener('click', () => {
    // اعرض الصورة في الـ lightbox
    lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    lightbox.classList.add('show');
  });
});

// إغلاق الـ lightbox عند الضغط على الخلفية
lightbox.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) return; // لو ضغطت على الصورة نفسها، متقفلش
  lightbox.classList.remove('show');
  lightbox.innerHTML = '';
});
