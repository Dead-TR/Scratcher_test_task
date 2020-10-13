const cardArrowCreator = (unit) => {
  const result = [];
  let items = ['tent', 'rope', 'leaf', 'bow', 'bonfire'];
  const itemsRepeat = {};

  items = items.filter(item => {
    if (item !== unit) {

      return item;
    }
  });

  for (let i = 0; i < 6; i++) {
    if (i < 3 && unit !== 'lose') {
      result.push(unit);
    }
    else {
      const randomCard = items[Math.floor(Math.random()*items.length)];
      itemsRepeat[randomCard] = itemsRepeat[randomCard] + 1 || 0;

      if (itemsRepeat[randomCard] < 2) {
        result.push(randomCard);
      } else {
        i--;
      }
    }
  }

  return arrayRandomizer(result)
}

export default cardArrowCreator;

function arrayRandomizer(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array
}
