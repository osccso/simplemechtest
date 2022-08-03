
import { Draggable, Image } from '../classes/classes';
/* bring all the images that you are going to be needing */


import chest from '../../assets/images/simplemech-chest.svg';
import torso from '../../assets/images/simplemech-torso.svg';
import head from '../../assets/images/simplemech-head.svg';
import armRight from '../../assets/images/simplemech-arm_1.svg';
import armLeft from '../../assets/images/simplemech-arm_2.svg';
import legRight from '../../assets/images/simplemech-leg1.svg';
import legLeft from '../../assets/images/simplemech-leg2.svg';
import sign from '../../assets/images/instruction_box.svg';

export let headImg
export let rightArmImg
export let leftArmImg
export let rightLegImg
export let leftLegImg
export let chestImg

export function loadRobot() {
  // initializing draggables and static images

  const torsoImg = new Image('torso-img', 'app-container', torso,{top: '26.5%', left : '28.5%', width: '13.5%', opacity: 1},'entrance')
  headImg = new Draggable('head-img','head-drop', 'app-container', head,{top: '53%', left : '68%', width: '6.2%', opacity: 1}, {top: '12%', left : '32.2%', width: '6.2%', opacity: 1},'entrance')
  rightArmImg = new Draggable('rightarm-img','rightarm-drop','app-container',armRight,{top: '25.5%', left : '78%', width: '6.7%', opacity: 1},{top: '21.5%', left : '23.2%', width: '6.7%', opacity: 1} , 'entrance')
  leftArmImg = new Draggable('leftarm-img','leftarm-drop','app-container',armLeft, {top: '25.5%', left : '85.5%', width: '6.7%', opacity: 1}, {top: '21.5%', left : '40.5%', width: '6.7%', opacity: 1}, 'entrance')
  rightLegImg = new Draggable('rightleg-img','rightleg-drop','app-container',legRight, {top: '33.5%', left : '52%', width: '6.3%', opacity: 1},{top: '45%', left : '28%', width: '6.3%', opacity: 1}, 'entrance')
  leftLegImg = new Draggable('leftleg-img','leftleg-drop','app-container',legLeft, {top: '33.5%', left : '59%', width: '6.3%', opacity: 1}, {top: '45%', left : '36.3%', width: '6.3%', opacity: 1},'entrance')
  chestImg = new Draggable('chest-img','chest-drop','app-container',chest, {top: '28.5%', left : '64%', width: '14.5%', opacity: 1}, {top: '22.5%', left : '28%', width: '14.5%', opacity: 1}, 'entrance')
  const signImg = new Image('sign-img', 'app-container', sign,{top: '7%', left : '48.5%', width: '45%', opacity: 1},'entrance')
}
