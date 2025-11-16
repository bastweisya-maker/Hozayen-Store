console.log("Hozayen store loaded");

window.onload = () => {
  console.log("مرحبا بك في متجر Hozayen!");
};

// مثال: يمكن إضافة وظائف مثل عرض سريع للمنتجات لاحقاً
// إنشاء Lightbox عند الضغط على أي صورة
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('.zoom-img');
images.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
    lightbox.classList.add('show');
  });
});

// إغلاق الـ Lightbox عند الضغط على الخلفية
lightbox.addEventListener('click', (e) => {
  if(e.target !== e.currentTarget) return;
  lightbox.classList.remove('show');
});
