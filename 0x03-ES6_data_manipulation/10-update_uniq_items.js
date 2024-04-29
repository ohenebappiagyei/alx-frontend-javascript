export default function updateUniqueItems(map) {
    if (!Map.prototype.isPrototypeOf(map)) {
        throw new Error("Cannot process");
    }

    return new Map([...map].map((entry) => {
        const [key, quantity] = entry;
        return [key, quantity === 1 ? 100 : quantity];
    }));
}
