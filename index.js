function deleteDups(array) {
  const result = [];
  const map = {};

  for (let i = 0; i < array.length; i++) {
    if (map[array[i]]) {
      continue;
    } else {
      result.push(array[i]);
      map[array[i]] = true;
    }
  }
  return result;
}

function dupsTests() {
  console.log(deleteDups(['a', 'a', 'a', 'a', 'a']), ' -> [a]');
  console.log(deleteDups(['a', 'b', 'c', 'd']), ' -> [a, b, c, d]');
  console.log(deleteDups(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']), ' -> [a, b, c, d]');
}

dupsTests() // Uncomment to check code!