
// ---  modal --- //
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return 
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// --- search box ---//

// products json
fetch('/js/products.json') 
.then(response => response.json()) 
.then(products =>
   { 
    // show all products
    displayProducts(products);
    //


    // category btn
     document.querySelectorAll('.button-value').forEach( button => { 
        button.addEventListener('click', function() { 
          const category = this.textContent.trim(); 
          const filteredProducts = products.filter(product => product.category === category);
            displayProducts(filteredProducts);
          });
        });
        // search input
        document.getElementById('search-input').addEventListener('input', function() {
          const searchValue = this.value.trim().toLowerCase();
          const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchValue));
          displayProducts(filteredProducts);
        })


      }) 
      .catch(error => console.log(error)); 

      // products json
      function displayProducts(products) { 
            let output = ''; 
            for (let item of products) {
               output += `
               <div class="product">
               <img src="${item.image}" alt="${item.image}">
               <p class="title">${item.title}</p>
               <p class="description">${item.description}</p>
               <p class="category"> ${item.category} </p>
               </div>
               `;
           }
           document.querySelector(".products").innerHTML = output;
} 

// hiden product< 4
const productContainer = document.querySelector('.products');
const products = Array.from(productContainer.querySelectorAll('.product'));

if (products.lenght > 4 ) {
  for (let i = 4; i < products.lenght; i++ ) {
    products[i].style.display = 'none'
  }
}
