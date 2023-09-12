export function isConvertibleToInt(str: string) {
    const num = parseInt(str, 10);
    return !isNaN(num);
}