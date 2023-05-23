// Write your code here!

//remove the main div
document.getElementById('main').remove()

// add new header element

const newHeader = document.createElement('h1') 
newHeader.id = 'victory'
newHeader.textContent = `Mordechai is the champion`
document.body.appendChild(newHeader) 









