
window.onload = () => {
  const header = document.getElementsByClassName("page__hero--overlay")[0]
  header.setAttribute("id", "particles-js")
  const headerStyle = header.getAttribute("style")
  header.setAttribute("style", headerStyle  + " overflow-y:hidden;")
  particlesJS.load('particles-js', 'https://dalgolab.github.io/assets/js/particles.json', function() {
      const cvs = document.getElementsByClassName("particles-js-canvas-el")[0]
      const css = cvs.getAttribute("style")
      cvs.setAttribute("style", "width: 100%; position: absolute; top: -100px;")
  });
}
