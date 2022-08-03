import { Element} from '../classes/classes';


export function loadDropZones(){
  let dropHead = new Element('head-drop', 'app-container', {top: '17%', left: '32.2%',width: '6%', opacity: 0.4, borderRadius: '100% 100% 0 0', zIndex: 1}, 'div' ,'zone')
  let dropRightArm = new Element('rightarm-drop', 'app-container', {top: '27%', left: '26%',width: '4%', opacity: 0.4, borderRadius: '100% 0 0 100%', zIndex: 1}, 'div', 'zone')
  let dropLeftArm = new Element('leftarm-drop', 'app-container', {top: '27%', left: '40.5%',width: '4%', opacity: 0.4, borderRadius: '0 100% 100% 0', zIndex: 1}, 'div', 'zone')
  let dropChest = new Element('chest-drop', 'app-container', {top: '28%', left: '32.3%',width: '6%', opacity: 0.4, borderRadius: '100% 100% 100% 100%', zIndex: 1}, 'div', 'zone')
  let dropRightLeg = new Element('rightleg-drop', 'app-container', {top: '45%', left: '29.5%',width: '4%', opacity: 0.4, borderRadius: '0 0 0 100%', zIndex: 1}, 'div', 'zone')
  let dropLeftLeg = new Element('leftleg-drop', 'app-container', {top: '45%', left: '37%',width: '4%', opacity: 0.4, borderRadius: '0 0 100% 0', zIndex: 1}, 'div', 'zone')
}
