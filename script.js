const START_INPUT_WIDTH = 50;
const MAX_INPUT_WIDTH = 250;
const ANIMATION_SPEED = 5;
const START_BTN_POS = 0;
const MAX_BTN_POS = 200;

document.addEventListener("click", handleSearchButtonClick);

function handleSearchButtonClick(e) {
  if (e.target.classList.contains("search-btn")) {
    const $input = e.target.previousElementSibling;
    const $btn = e.target;
    if ($input.classList.contains("active")) {
      $input.classList.remove("active");

      inputStep(MAX_INPUT_WIDTH, START_INPUT_WIDTH, -1, $input);
      btnStep(MAX_BTN_POS, START_BTN_POS, -1, $btn);
    } else {
      $input.classList.add("active");
      inputStep(START_INPUT_WIDTH, MAX_INPUT_WIDTH, 1, $input);
      btnStep(START_BTN_POS, MAX_BTN_POS, 1, $btn);
    }
  }
}

handleSearchButtonClick();

function inputStep(start, end, direction, $input) {
  setTimeout(() => {
    start += direction;
    $input.style.width = `${start}px`;
    if (Math.abs(start - end) > 0) {
      inputStep(start, end, direction, $input);
    }
  }, ANIMATION_SPEED);
}

function btnStep(start, end, direction, $btn) {
  setTimeout(() => {
    start += direction;
    $btn.style.left = `${start}px`;
    if (Math.abs(start - end) > 0) {
      btnStep(start, end, direction, $btn);
    }
  }, ANIMATION_SPEED);
}
