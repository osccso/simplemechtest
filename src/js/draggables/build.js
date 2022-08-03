import { chestImg, headImg, leftArmImg, leftLegImg, rightArmImg, rightLegImg } from "./loadResources";

let listDraggables

export function buildRobot(){
  return new Promise((resolve, reject) => {
    let solved = false
    let intervalID = setInterval(() => {
      if (chestImg !== "undefined"){
        listDraggables = [chestImg, headImg, leftArmImg, leftLegImg, rightArmImg, rightLegImg]
        solved = true
        listDraggables.forEach(draggable => solved = solved && draggable.dropped)
        if (solved) {
          clearInterval(intervalID)
          resolve('Success')
        }
      }}    
    ,1000)
  })
}