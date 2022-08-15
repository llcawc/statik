// main.js

import { name, version, date } from '../../../package.json'
console.log('Js code is running.\nTask name:', name, '\nVersion:', version, ' from:', date)

const btn = document.getElementById('btn')
const box = document.getElementById('box')

if (btn && box) {
  console.log('Browser find "btn" and "box" nodes\nPress the button and you will can see a miracle')
  btn.addEventListener('click', () => {
    box.classList.add('animate__backOutRight')
    box.classList.remove('animate__backInLeft')
  })
  box.addEventListener('animationend', () => {
    box.classList.add('animate__backInLeft')
    box.classList.remove('animate__backOutRight')
  })
} else {
  console.log('Browser cannot find "btn" and "box" nodes')
}
