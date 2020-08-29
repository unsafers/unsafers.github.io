function addScript(filename) {
  let script = document.createElement("script");

  script.src = filename;

  document.body.appendChild(script);
}

addScript('canvas-focus.js')

function addCss(filename) {
  let link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = filename;

  document.head.appendChild(link);
}

addCss('game-screen.css');