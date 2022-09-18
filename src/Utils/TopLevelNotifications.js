import {makeid} from "./RandomId"
import {store,decremented,incremented} from "./../Store"


export function push(type, cornerChoice, content){
  let cornerStyle = {}
  let cornerPosition = {}
  switch (cornerChoice) {
    case 'top-right':
      cornerStyle = {
        top: "50px",
        right: "50px",
        bottom: "unset",
        left: "unset",
      }
      break
    case 'top-left':
      cornerStyle = {
        top: "50px",
        left: "50px",
        bottom: "unset",
        right: "unset",
      }
      break
    case 'bottom-left':
      cornerStyle = {
        bottom: "50px",
        left: "50px",
        right: "unset",
        top: "unset",
      }
      break
    case 'bottom-right':
      cornerStyle = {
        bottom: "50px",
        right: "50px",
        top: "unset",
        left: "unset",
      }
      break
    default:
      cornerStyle = {
        bottom: "50px",
        right: "50px",
        top: "unset",
        left: "unset",
      }
  }

  const rootEl = document.querySelector('#notifications-bundle')
  const elToAppend = document.createElement('div')
  Object.entries(cornerStyle).forEach((value, index) => {
    if(value[0] === "right" || value[0] === "left"){
      if(value[1] === "50px"){
        elToAppend.style[value[0]] = "-500px"
      }
    }
  })
  let randomId = makeid(16)
  randomId = `notif-${randomId}`
  elToAppend.setAttribute("id", randomId)
  elToAppend.setAttribute("class", `top-level-notifications top-level-notifications_${type}`)
  elToAppend.append(content)
  const img = document.createElement("img");
  img.src = "Assets/Images/close2.png"
  img.style.width = "24px"
  img.style.position = "absolute"
  img.style.right = "3px"
  img.style.top = "3px"
  img.setAttribute("id", `img_${randomId}`)
  rootEl.prepend(elToAppend)
  elToAppend.append(img)
  img.addEventListener('click', (e) => {
    elToAppend.remove()
  })
  Object.entries(cornerStyle).forEach((value, index) => {
    rootEl.style[value[0]] = value[1]
    if(value[0] === "right" || value[0] === "left"){
      if(value[1] === "50px"){
        setTimeout(() => {
          elToAppend.style[value[0]] = "0px"
        }, 0);
      }
    }
  })
  setTimeout(() => {
    remove(elToAppend)
  }, 5000)
  store.dispatch(incremented())
}

export function remove(el){
  store.dispatch(decremented())
  el.style.opacity = 0
  setTimeout(() => {
    el.remove()
  }, 500)
}