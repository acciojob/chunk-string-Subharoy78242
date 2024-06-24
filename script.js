function stringChop(str, size) {
  if (str === null || str === '' || size <= 0) {
    return [];
  }

  if (size >= str.length) {
    return [str];
  }

  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(JSON.stringify(stringChop(str, size)));