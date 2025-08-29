let activeDiv = null;
let offsetX, offsetY;
let isDragging = false;


function toggleBrowser() {
  const Window = document.getElementById('window2');

  if (Window.style.display === 'none') {
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
        div.style.cursor = 'grabbing';
    });
});


document.addEventListener('mousemove', (e) => {
    if (!isDragging || !activeDiv) return;
    activeDiv.style.left = e.clientX - offsetX + 'px';
    activeDiv.style.top = e.clientY - offsetY + 'px';
});

document.addEventListener('mouseup', () => {
    if (activeDiv) {
        activeDiv.style.cursor = 'grab';
    }
    isDragging = false;
    activeDiv = null;
});
function showBrowser() {
}

