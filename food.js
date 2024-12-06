const slide = document.querySelectorAll(".slide");

let counter = 0;

slide.forEach((slide, index)=>{
           slide.style.left =` ${index * 100}%`
})

const goprev = () =>{
    counter--
   slideImage()
}

const gonew = () =>{
       counter++
      slideImage()
}

const slideImage = () => {
             slide.forEach((slide)=>{
                    slide.style.transform =`translateX(-${counter * 100}%)`
             })
}
