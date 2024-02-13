function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base')
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    console.log(base);

    const triangleHeightInput = document.getElementById('triangle-height')
    const triangleHeightText = triangleHeightInput.value;
    const Height = parseFloat(triangleHeightText);
    console.log(Height);

    const area = 0.5 * base * Height;
    console.log("area of the triangle is:", area);

    const triangleAreaSpan = document.getElementById("triangle-area");
    triangleAreaSpan.innerText = area;
}
