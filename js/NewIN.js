fetch('/js/products.json')
  .then(response => response.json())
  .then(products => {
    let output = '';
    for (let item of products) {
      output += `
        <div class="swiper-slide">
            <img src="${item.image}" alt="${item.image}">
            <p class="title">${item.title}</p>
            <p class="description">${item.description}</p>
            <p class="category">${item.category}</p>
            <p class="price">
              <span>${item.price}</span>
              <span>&euro;</span>
            </p>
        </div>
      `;
    }
    document.querySelector(".swiper-wrapper").innerHTML = output;
    
    const swiper = new Swiper(".new-swiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });

})
.catch(error => console.log(error));