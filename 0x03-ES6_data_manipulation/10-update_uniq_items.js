export default function updateUniqueItems(groceriesMap) {
    for (let [key, value] of groceriesMap.entries()) {
        if (value === 1) {
            groceriesMap.set(key, 100);
        }
    }
}
