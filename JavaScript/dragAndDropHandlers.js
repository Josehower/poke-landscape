function dragStart(e) {
  e.currentTarget.classList.add('taken');
}
function dragEnd(e) {
  e.currentTarget.classList.remove('taken');
}

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
}
function onDrop() {
  const pokemonName = document.querySelector('.taken').classList[0];
  console.log(`${pokemonName} i choose you!`);
  this.append(document.querySelector('.taken'));
}

function mouseIn(e) {
  e.currentTarget
    .querySelectorAll('button')
    .forEach(button => button.classList.remove('oculto'));
}
function mouseOut(e) {
  e.currentTarget
    .querySelectorAll('button')
    .forEach(button => button.classList.add('oculto'));
}

export { dragStart, dragEnd, dragOver, dragEnter, onDrop, mouseIn, mouseOut };
