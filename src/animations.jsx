export function makeTextWavy(text, animatedElement) {
  let delay = 200;

  //   animatedElement.classList.add("animated-gradient");
  animatedElement.innerHTML = text
    .split("")
    .map((letter) => {
      return letter === "\n" ? "<br />" : `<span>` + letter + `</span>`;
    })
    .join("");

  Array.from(animatedElement.querySelectorAll("span")).forEach((span, index) => {
    setTimeout(() => {
      span.classList.add("wavy");
    }, index * 100 + delay);
  });
}
