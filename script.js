
let activeDiv = null;
let offsetX, offsetY;
let isDragging = false;

function Games() {
  const Window = document.getElementById('fileexplorer');
  if (Window.style.display === 'none' || Window.style.display === '') {
    Window.style.display = 'block';
  } else {
    Window.style.display = 'none';
  }
}

document.querySelectorAll('.header').forEach(div => {
  div.addEventListener('mousedown', (e) => {
    isDragging = true;
    activeDiv = div.parentElement;
    offsetX = e.clientX - div.getBoundingClientRect().left;
    offsetY = e.clientY - div.getBoundingClientRect().top;
  });
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging || !activeDiv) return;
  activeDiv.style.left = (e.clientX - offsetX) + 'px';
  activeDiv.style.top = (e.clientY - offsetY) + 'px';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  activeDiv = null;
});





