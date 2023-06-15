<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $operation = $_POST["operation"];

    // Evaluar la operación matemática
    $result = eval("return $operation;");

    echo "El resultado es: " . $result;
}
?>