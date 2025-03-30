export default function glitchText(textRef) {
  textRef.current.classList.add('glitch-button-text');
  setTimeout(() => {
    textRef.current.classList.remove('glitch-button-text');
  }, 400);
}