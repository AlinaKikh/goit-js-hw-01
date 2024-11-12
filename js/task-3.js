function getElementWidth(content, padding, border) {
    const width = content + padding + border;
    return width;
}
console.log(Number.parseFloat(content));
console.log(Number.parseFloat(padding));
console.log(Number.parseFloat(border));


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
