import { Image, ImageButton} from "../classes/classes"
import startButton from '../../assets/images/start_button.svg';
import introImage from '../../assets/images/start_overlay-box-large-wout-button.svg';

export function mainIntro() {
  // bring the intro image
  let condition = false
  
  let intro = new Image('intro-img', 'app-container', introImage,
  {top: '15%', left : '20%', width: '60%', opacity: 0.1}, 'entrance')

  let introButton = new ImageButton('intro-button', 'app-container', startButton, {top: '70%', left : '38%', width: '10%'}, 'entrance', () => buttonClick(intro,introButton))
  
  return new Promise((resolve, reject) => {
    let intervalID = setInterval(() => {
      if (document.getElementById('intro-button') === null){
        clearInterval(intervalID)
        resolve('Success')
      }
    },100)
  })
}

const buttonClick = (intro, introButton) => {
  intro.remove('entrance', 'out', 1000)
  introButton.remove('entrance', 'out', 1000)
  return true
}



