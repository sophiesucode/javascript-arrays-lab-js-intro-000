var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(){
  kittens.push('Ralph');
  return kittens}

function destructivelyPrependKitten(name){
  kittens.unshift('Bob');
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens

}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens
  }

  function appendKitten(Broom){
  return [...kittens, Broom]
}
function prependKitten(Broom){
  return [Broom,...kittens]
}
