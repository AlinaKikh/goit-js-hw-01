function getElementWidth(content, padding, border) {
    const contentWidth = parceFloat(content);
    const paddingWidth = parceFloat(padding);
    const borderWidth = parceFloat(border);
    const width = contentWidth + paddingWidth * 2 + borderWidth * 2;
    return width;
}


console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
