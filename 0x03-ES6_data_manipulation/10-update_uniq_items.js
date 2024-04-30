export default function updateUniqueItems(groceriesMap) {
  for (const [key, value] of groceriesMap.entries()) {
    if (value === 1) {
      groceriesMap.set(key, 100);
    }
  }
}
