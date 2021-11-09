
let audioSet = document.querySelector("audio");

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

/* btn.addEventListener('mouseenter',()=>{
    btn.style.backgroundColor=`rgb(${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)})`;
}); */




const divan = document.querySelector("div");

divan.addEventListener('touchmove',(e)=>{
       
        let aud = new Audio();
        aud.src=`${getRandomIntInclusive(1, 11)}.mp3`;
        aud.play(); 
        e.target.style.backgroundImage=`url("${getRandomIntInclusive(1, 11)}.jpg")`;
        console.log(12);
        
        
    });
        

/* btn.forEach(item=>{
    item.addEventListener('mouseenter',(e)=>{
      /*   e.target.style.backgroundColor=`rgb(${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)})`; */
       /*  let aud = new Audio();
        aud.src=`${getRandomIntInclusive(1, 5)}.mp3`;
        aud.play(); */ 
        
        
        
/*     });
        
}); */