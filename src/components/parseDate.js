export default function parseDate(input) {
    const year = input.slice(0, 4);
    const month = input.slice(5, 7);
    const day = input.slice(8);
    const id = year + month + day;
    return Number.parseInt(id, 10);
}