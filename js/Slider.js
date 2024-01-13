export function Slider() { 
  let $ = document
  let sliderImgElem = document.querySelector('.img-slider')
  let prevBtn = document.querySelector('.prev')
  let nextBtn = document.querySelector('.next')
  let dots = document.getElementsByClassName("dot")
  
  let imgSrcArray = ['/images/BannerImage1.png', '/images/BannerImage2.png', '/images/BannerImage3.png']
  let imgTextArray = ["Unlock Your Natural Glow 1", "Unlock Your Natural Glow 2","Unlock Your Natural Glow 3"];
  let imgBtnArray = ["Know More 1","Know More 2","Know More 3" ]
  let imgIndex = 0
  
  function showImage(index) {
  imgIndex = index;
  sliderImgElem.setAttribute("src" , `image/${imgIndex + 1}.jpg`);
  document.getElementById("slider_text").textContent = imgTextArray[imgIndex];
  document.getElementById("slider_btn").textContent = imgBtnArray[imgIndex];

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  dots[imgIndex].classList.add("active");
  }
  function currentSlide(index) {
  showImage(index -1)
  }
  function prevImage() {
  imgIndex--
  if (imgIndex < 0) {
    imgIndex = imgSrcArray.length - 1
  }
  showImage(imgIndex)
  sliderImgElem.setAttribute('src', imgSrcArray[imgIndex])
  //console.log(imgIndex, imgSrcArray[imgIndex]);

 }
 function nextImage() {
  imgIndex++
  if (imgIndex > imgSrcArray.length - 1) {
    imgIndex = 0
  }
  showImage(imgIndex)
  sliderImgElem.setAttribute('src', imgSrcArray[imgIndex])
  //console.log(imgIndex, imgSrcArray[imgIndex]);
 }

 setInterval(nextImage, 5000);


 prevBtn.addEventListener('click', prevImage)
 nextBtn.addEventListener('click', nextImage)
}