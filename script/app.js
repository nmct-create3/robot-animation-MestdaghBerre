let speed
let aanuit =0

let tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: 'power1.inOut',
    },
    repeat: -1,
    yoyo: true,
  })
  tl.set('#Shadow', {
    transformOrigin: '50% 100%',
  })
  tl.set('#Fire', {
    transformOrigin: '50% 100%',
  })
  .fromTo('#Robot',{
    y: 2.5,
  },{
    y: -2.5,
  })
  .fromTo('#Signal',{
    x:2.5
  },{
    x:-2.5
  },'<',)
  .fromTo('#Arm-right',{
    rotate:0
  },{
    rotate:-30
  },'<',)
  .to('#Fire',{
    scale: 0.75,
  },
    '<',
  )
  .to('#Shadow',{
    scale: 0.75,
  },
    '<',
  )

const btnFast = document.querySelector('.js-fast')
btnFast.addEventListener('click', function () {
  speed = "fast"
  tl.duration(0.5)
});
const btnNormal = document.querySelector('.js-normal')
btnNormal.addEventListener('click', function () {
  speed = "normal"
  tl.duration(1)
});

const btnSlow = document.querySelector('.js-slow')
btnSlow.addEventListener('click', function () {
  speed = "slow"
  tl.duration(2)
});
const btnPause = document.querySelector('.js-pause')
btnPause.addEventListener('click', function () {
  if(aanuit == 0){
    tl.pause()
    aanuit = 1
    btnPause.innerHTML= `<svg class="c-play-icon c-play-icon--play" width="15" height="15" viewBox="0 0 15 15" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 12.5v-10l7 5-7 5z" stroke="currentColor" stroke-linejoin="round"></path>
  </svg>`
  }
  else{
    tl.resume()
    aanuit = 0
    btnPause.innerHTML= `<svg class="c-play-icon c-play-icon--pause" width="15" height="15" viewBox="0 0 15 15" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 3v9m4-9v9" stroke="currentColor"></path>
  </svg>`
  }
  
});

