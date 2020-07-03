import { blackDiv } from './Selectors';

export default function textToBlackDiv(text) {
  blackDiv.innerHTML = `<p>${text}</p>`;
}
