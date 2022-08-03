import { ImageButton } from "../classes/classes";
import restartButton from '../../assets/images/restart_button.svg'

export function restart(){
  let restartButtonImg = new ImageButton('intro-button', 'app-container', restartButton, {top: '45%', left : '68%', width: '14%', zIndex: 1}, 'entrance', () => {
    location.reload()
})
}

