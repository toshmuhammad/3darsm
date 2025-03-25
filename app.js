const elToggle = document.querySelector("#toggle");
const elFlashlight = document.querySelector("#flashlight")
document.addEventListener("mousemove", (e) => {
    const { x, y } = e;
    console.log("X: ", x);
    console.log("Y: ", y);
    elFlashlight.style.cssText = `
    top: ${y - 250}px;
    left: ${x - 250}px;
    `;
});

elToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});