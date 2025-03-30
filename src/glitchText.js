export default function glitchText(textRef) {
  textRef.current.classList.add('glitch-button-text');
  textRef.current.classList.add('after-hover');
  setTimeout(() => {
    textRef.current.classList.remove('glitch-button-text');
  }, 400);
}