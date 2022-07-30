<!-- <?php
    $email=$_POST['email'];
    $PhoneNo=$_POST['Phone No'];

    $conn= new mysqli('localhost','root','!password','database_name')
    if($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
            $stmt =$conn->prepare("insert(email,Phone No)
            values(?,?)");
            $stmt->bind_param("si",$email,$PhoneNo);
            $stmt->execute();
            echo "I'll contact you as soon as possible!";
            $stmt->close();
            $conn->close();
        }
?> -->