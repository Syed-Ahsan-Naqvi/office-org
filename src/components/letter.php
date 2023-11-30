<?php


$clientEmail = $_POST['email'];




echo "$startAirport";


// Connect to MySQL database
$host = 'localhost';
$db = 'u577021018_newHash';
$user = 'u577021018_newHashstack';
$password = 'Hashstack12345';

$conn = new mysqli($host, $user, $password, $db);
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}


$sql = "INSERT INTO subscribtion (clientEmail) VALUES ('$clientEmail')";


if ($conn->query($sql) === TRUE) {
    // echo "Form submitted successfully!";
    // header('Location: '."https://accounts.o2.co.uk");
    // header("Location: accounts.o2.co.uk/signin");
    echo '<script type="text/javascript">
           window.location = "https://hashstackdevelopers.com"
      </script>';
die();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>