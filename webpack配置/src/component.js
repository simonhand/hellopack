// 原始的写法
// import 'css-loader!./css/index.css'

import './css/index.css'


function comp(params) {
  const element = document.createElement('div');

  element.innerHTML = ['hello','zhangle'].join(' ');
  element.className = 'content'
  return element;
}

document.body.appendChild(comp())