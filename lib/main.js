export function sayHello (name) {
    console.log(`hello ${name}`);
}

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size)
}

export function htmlEntities(str) {
    return String(str)
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/xR0/g, "\n")
        .replace(/xR1/g, "'")
}

export { default as Size } from "./utils/Size"
export { default as number_format } from "./utils/number-format"
export { default as each_password_generator } from "./utils/each_password_generator"
export * from "./utils/misc"