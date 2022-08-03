import { Image, ImageButton } from '../classes/classes';
import successScreen from '../../assets/images/feedback_overlay-box-wo-x.svg';
import close from '../../assets/images/x.svg'

export function solved(){
  const closingImg = new Image('out-img', 'app-container', successScreen, {top: '15%', left : '20%', width: '60%', opacity: 1, zIndex: 2}, 'entrance')

  let closeButton = new ImageButton('close-button', 'app-container', close, {top: '30%', left : '74%', width: '3%', zIndex: 3}, 'entrance', () => buttonClick(closingImg,closeButton))

  return new Promise((resolve, reject) => {
    let intervalID = setInterval(() => {
      if (document.getElementById('out-img') === null){
        clearInterval(intervalID)
        resolve('Success')
      }
    },100)
  })
}

const buttonClick = (closingImg, closeButton) => {
  closingImg.remove('entrance', 'out', 1000)
  closeButton.remove('entrance', 'out', 1000)
  return true
}