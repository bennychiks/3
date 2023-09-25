// select the wrapper
const wrapper = document.querySelector(".sliderWrapper")
// wrapper.style.transform = "translateX(-100vw)"

// click menu items to change position
const menuItems = document.querySelectorAll(".menuItem")

// using eventListeners
menuItems.forEach((item,index)=>{
    item.addEventListener("click", () => {
       wrapper.style.transform = `translateX(${-100 * index}vw)`
    });
});