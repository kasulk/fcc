function addTogether(...arr) {
  const [x, y] = arr;

  if (arr.every((element) => typeof element === "number")) {
    if (arr.length === 1)
      return (y) => (Number.isInteger(y) ? x + y : undefined);

    return x + y;
  }

  return undefined;
}
