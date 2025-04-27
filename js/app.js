

const Counter = function(selector){
    const container = document.querySelector(selector)
    if(!container) throw new Error('Container element not found')

    this.container = container    
    this.selector = selector
    this.number = 0
}

Counter.prototype.init = function(){
    this.render()
}

Counter.prototype.render = function(){
    this.container.innerText = ''

    const h1 = document.createElement('h1')
    const button = document.createElement('button')

    h1.innerText = this.number

    this.container.appendChild(h1)
 }

Counter.prototype.inc = function(){
    this.number++
}
Counter.prototype.status = function(){
    console.log('Current number is: ' + this.number);
    return this.number
}

const counter1 = new Counter('.counter-1')
counter1.init()
