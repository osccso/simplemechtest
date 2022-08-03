export class Element{
  constructor(id, parent, stylesObj , tag = 'div', classAdd = ''){
    // instance attributes
    this.parent = parent
    this.html = document.createElement(tag)
    this.html.setAttribute('id',id)
    //adding the class
    if (classAdd !== '') {
      this.html.classList.add(classAdd)
    }
    // setting up css
    this.html.style.position = 'absolute'
    //assigning styles to html
    Object.assign(this.html.style, stylesObj)
    // attach to the parent
    document.getElementById(parent).appendChild(this.html)
  }

  remove(removeClass, addClass, timeout) {
    this.html.classList.remove(removeClass)
    this.html.classList.add(addClass)
    setTimeout(() => {
      document.getElementById(this.parent).removeChild(this.html)
    }, timeout)
  }
}

export class Draggable extends Element{
  constructor(id, idDrop, parent, image, stylesObj, stylesObjDrop , classAdd = ''){
    super(id, parent, stylesObj, 'img', classAdd)
    // setting up
    this.dropped = false
    this.idDrop = idDrop
    this.stylesObjDrop = stylesObjDrop
    this.html.setAttribute('src',`${image}`)
    // adding event listeners
    this.html.classList.add('draggable')
    this.html.addEventListener('dragstart', () => {
      document.getElementById(idDrop).addEventListener('dragover',
       (e) => {
        e.preventDefault()
        Object.assign(this.html.style, this.stylesObjDrop)
        this.dropped = true
        let objectAnim = document.getElementById('sign-img')
        if (objectAnim !== null && !objectAnim.classList.contains('shake')) {
          objectAnim.classList.remove('entrance')
          objectAnim.classList.add('shake')
          setTimeout(() => objectAnim.classList.remove('shake'),1200)
        }
      })
    })
  }
}

export class ImageButton extends Element {
  constructor(id, parent, image, stylesObj, classAdd, fnc){
    super(id, parent, stylesObj, 'img', classAdd)
    this.html.setAttribute('src',`${image}`)
    this.html.addEventListener('click', fnc)
    this.html.classList.add('button')
  }
}

export class Image extends Element {
  constructor(id, parent, image, stylesObj, classAdd = ''){
    super(id, parent, stylesObj, 'img', classAdd)
    this.html.setAttribute('src',`${image}`)
  }
}