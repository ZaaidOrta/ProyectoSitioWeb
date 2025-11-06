 <?php 

    $host = "localhost";
    $db = "Icomp";
    $user = "root";
    $pass = "";


    $conn = new mysqli($host, $user, $pass, $db);

    if($conn -> connect_error) {

        die("conexion Fallida: ". $conn->connect_error);
    }

    $usuario = $_POST['usuario'];
    $pass = $_POST['pass'];


    $sql = "SELECT * FROM usuarios WHERE usuario='$usuario' AND pass = '$pass'";
    $result = $conn->query($sql);


    if($result->num_rows > 0){
        header("Location: admin.html");
        exit();
    }else {
        echo "Usuario o pasword incorrecto";
    }
    $conn->close();
 ?>