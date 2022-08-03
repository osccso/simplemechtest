import { Image } from "../classes/classes"
import background from '../../assets/images/hanger_background.svg';

export function loadBackground(){
  const backGround = new Image('background-image', 'app-container', background,
  {top: '0%', left : '0%', width: '100%'});
}