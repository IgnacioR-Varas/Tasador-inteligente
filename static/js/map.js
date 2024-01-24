function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
    });

    const marker = new google.maps.Marker({
        map: map,
    });

    document.getElementById("ubicar-btn").addEventListener("click", function () {
        const direccion = document.getElementById("direccion").value;
        const geocoder = new google.maps.Geocoder();

        geocoder.geocode({ address: direccion }, function (results, status) {
            if (status === google.maps.GeocoderStatus.OK && results.length > 0) {
                const location = results[0].geometry.location;
                map.setCenter(location);
                marker.setPosition(location);
                document.getElementById("map").style.display = "block";
            } else {
                alert("No se pudo encontrar la dirección en el mapa.");
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el elemento del mensaje flash por su ID
    var flashMessage = document.getElementById("flash-message");

    // Si se encontró el mensaje flash
    if (flashMessage) {
        // Oculta el mensaje después de 5 segundos (5000 milisegundos)
        setTimeout(function() {
            flashMessage.style.display = "none";
        }, 5000);
    }
});



