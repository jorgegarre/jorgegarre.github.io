document.getElementById("scrollDownBtn").addEventListener("click", function () {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  });
  
  const contactoBtn = document.querySelector('.cta-button .boton');
  contactoBtn.addEventListener("click", function (e) {
    const confirmacion = confirm("¿Quieres enviarme un correo?");
    if (!confirmacion) {
      e.preventDefault();
    }
  });
  
  const titulo = document.querySelector("header h1");
  const texto = "Desarrollador Web";
  let index = 0;
  
  function escribir() {
    if (index < texto.length) {
      titulo.textContent += texto.charAt(index);
      index++;
      setTimeout(escribir, 100);
    }
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    titulo.textContent = "";
    escribir();
  });
  
  window.addEventListener("scroll", () => {
    const mensaje = document.getElementById("mensajeScroll");
    const mitad = document.body.scrollHeight / 2;
  
    if (window.scrollY >= mitad) {
      mensaje.style.display = "block";
    } else {
      mensaje.style.display = "none";
    }
  });
  

  window.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("welcomeModal");
    if (typeof modal.showModal === "function") {
      modal.showModal();
    }
  });
  
  function cerrarModal() {
    document.getElementById("welcomeModal").close();
  }