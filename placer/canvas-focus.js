function addRefocus(node) {
  node.addEventListener('blur', (e) => {
    setTimeout(() => node.focus(), 1);
  });
}

let observer = new MutationObserver((mutationList, observer) => {
  mutationList.forEach((mutation) => {
    if (mutation.type === 'childList') {
      for (const node of mutation.addedNodes) {
        if (node.nodeName.toLowerCase() == 'canvas') {
          addRefocus(node);
        }
      }
    }
  });
});

observer.observe(document.body, { childList: true });

//fsdgsdfg

function addText(text) {
  let tag = document.createElement("p");

  tag.innerHTML = text;

  document.body.appendChild(tag);
}

addText("press f");