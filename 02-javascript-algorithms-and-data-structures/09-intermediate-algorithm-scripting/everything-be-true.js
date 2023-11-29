function truthCheck(collection, pre) {
  // loop through the collection
  // if the property pre is truthy for all elements
  // return true, else false

  return collection.every((element) => element[pre]);
}

truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot"
);
