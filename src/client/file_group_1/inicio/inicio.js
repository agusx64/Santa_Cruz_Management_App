const fullscreenBtn = document.getElementById('button_login');

// Función para alternar el modo de pantalla completa
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.log(`Error al intentar entrar en modo de pantalla completa: ${err.message}`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// Agregar evento de clic al botón para alternar el modo de pantalla completa
fullscreenBtn.addEventListener('click', toggleFullScreen);

