console.log('bonjour')

let test = 1 
console.log(test)
test = 1 + 2 * 3/4  
console.log(test)

console.log(test != 2.5)
if (test==2.5) {console.log('yes')}
else{console.log('no')}

let button = document.querySelector('button')

console.log(button)
 

button.addEventListener('click', ()=>{
    button.style.background = 'green'
})
