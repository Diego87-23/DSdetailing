// WhatsApp formulario
document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;
    const phone = "2804855430";
    const url = `https://wa.me/${phone}?text=Nombre:%20${encodeURIComponent(name)}%0ACorreo:%20${encodeURIComponent(email)}%0AMensaje:%20${encodeURIComponent(message)}`;
    window.open(url, "_blank");
});

// Galería automática
const galleryContainer = document.querySelector('.gallery-container');
const totalFotos = 10; // Número máximo de fotos esperadas
for(let i = 1; i <= totalFotos; i++){
    const img = document.createElement('img');
    const ruta = `gallery/foto${i}.jpg`;
    img.src = ruta;
    img.alt = `Foto ${i}`;
    img.onerror = function(){ this.style.display = 'none'; }
    galleryContainer.appendChild(img);
}