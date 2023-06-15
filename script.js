function appendCharacter(character) {
    document.getElementById("operation").value += character;
}

function clearInput() {
    document.getElementById("operation").value = "";
}

function calculate() {
    var operation = document.getElementById("operation").value;

    // Validar la operación matemática
    if (operation.match(/^[0-9+\-*/. ]+$/)) {
        // Realizar la solicitud al archivo PHP utilizando AJAX
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "calculate.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var result = xhr.responseText;
                alert(result);
            }
        };
        xhr.send("operation=" + encodeURIComponent(operation));
    } else {
        alert("Ingrese una operación matemática válida.");
    }
}

// Manejo de eventos para tecla Enter y Esc
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evitar el envío del formulario
        calculate();
    } else if (event.key === "Escape") {
        event.preventDefault(); // Evitar acciones por defecto
        clearInput();
    }
});