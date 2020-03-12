document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!
  const moves = [];
  const button = document.getElementById('move-button')

  button.addEventListener('click',function(){
    const direction = moves.shift()
    if (direction){
      move(direction)
      const moveList = document.getElementById('move-container')
      moveList.firstElementChild.remove()
    }
    else {
      console.log('finished!')
    }
  })

  document.addEventListener('keydown', function(event){
    event.preventDefault()
    if (event.which === 37){
      moves.push('left')
      let task = "Move Left!"
      const node = document.createElement("li");
      const textnode = document.createTextNode(task);
      node.appendChild(textnode);
      moveList.appendChild(node)
    }
    else if (event.which === 39){
      moves.push('right')
      let task = "Move Right!"
      const node = document.createElement("li");
      const textnode = document.createTextNode(task);
      node.appendChild(textnode);
      moveList.appendChild(node)
    }
    else if (event.which === 38){
      moves.push('up')
      let task = "Move Up!"
      const node = document.createElement("li");
      const textnode = document.createTextNode(task);
      node.appendChild(textnode);
      moveList.appendChild(node)
    }
    else if (event.which === 40){
      moves.push('down')
      let task = "Move Down!"
      const node = document.createElement("li");
      const textnode = document.createTextNode(task);
      node.appendChild(textnode);
      moveList.appendChild(node)
    }
    else if (event.which === 8){
      moves.pop()
      moveList.lastElementChild.remove()
    }
  })
})
