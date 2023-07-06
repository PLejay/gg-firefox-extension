document.addEventListener("keydown", event => {
  if (!event.isComposing && event.keyCode === 32) {
    event.preventDefault();
    document.getElementById("bottomnext").click();
  }
});
