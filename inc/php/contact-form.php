<?php

if (isset($_POST['submit'])) {
        $name = $_POST['nom'];
        $firstName = $_POST['prénom'];
        $phone = $_POST['phone'];
        $emailFrom = $_POST['email'];
        $message = $_POST['message'];

        $mailTo = "jimmy_henry@hotmail.fr";
        $headers = "From : ".$emailFrom;
        $txt = "Vous avez recu un e-mail de ".$name."\n".$firstName."\n"."Numéro de téléphone: ".$phone;

        header("Location : index.php?mailsend");
        mail($mailTo, $txt,$headers,$message);
}
echo "Votre message e été envoyé avec succès !";

?>
