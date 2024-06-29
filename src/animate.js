import { TweenMax, Linear } from 'gsap';

function animateWithRandomNumber(myClass, from, to) {
    console.log(`Animating ${myClass} from ${from} to ${to}`);
  
    TweenMax.fromTo(
      myClass,
      Math.floor(Math.random() * (80 - 2 + 1) + 2) * 0.5 + 0.5,
      { y: from },
      { y: to, onComplete: () => animateWithRandomNumber(myClass, from, to), ease: Linear.easeNone }
    );
  }
  

export function animateLines() {
  const itemsDown = ['.light4', '.light5', '.light6', '.light7', '.light8', '.light11', '.light12', '.light13', '.light14', '.light15', '.light16'];
  const itemsUp = ['.light1', '.light2', '.light3', '.light9', '.light10', '.light17'];

  itemsDown.forEach(light => {
    animateWithRandomNumber(light, -1080, 1080);
  });

  itemsUp.forEach(light => {
    animateWithRandomNumber(light, 1080, -1080);
  });
}
