(function () {
  console.log("🔧 Zoom Video Helper activated");

  const video = document.querySelector('video.vjs-tech');
  if (video?.src) {
    const info = document.createElement('p');
    info.innerText = '👉 Right-click the link below and choose "Save link as..." to download.';
    info.style.fontWeight = 'bold';
    info.style.color = 'red';
    info.style.fontSize = '16px';
    document.body.insertBefore(info, document.body.firstChild);

    const link = document.createElement('a');
    link.href = video.src;
    link.innerText = '⬇ Download me';
    link.style.display = 'block';
    link.style.fontSize = '16px';
    link.style.fontWeight = 'bold';
    link.style.marginBottom = '1em';
    link.style.color = '#007bff';
    link.style.textDecoration = 'underline';
    document.body.insertBefore(link, info.nextSibling);
  }

  // Unblock right-click
  document.oncontextmenu = null;
  window.oncontextmenu = null;
  document.querySelectorAll('*').forEach(el => el.oncontextmenu = null);
  document.addEventListener('contextmenu', e => e.stopImmediatePropagation(), true);
  const origAdd = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function (type, listener, options) {
    if (type === 'contextmenu') return;
    return origAdd.call(this, type, listener, options);
  };

  console.log("✅ Zoom Video Helper completed.");
})();
