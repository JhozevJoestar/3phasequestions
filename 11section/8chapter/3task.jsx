function* pseudoRandom(num) {
  let val = num;
  while (true) {
    val = (val * 16807) % 2147483647;
    yield val;
  }
}
