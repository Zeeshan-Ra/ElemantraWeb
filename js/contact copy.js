function emailSend() {

    var userName = document.getElementById('cname').value;
    var phone = document.getElementById('cphone').value;
    var email = document.getElementById('cemail').value;
    var projectLocation = document.getElementById('cmessage').value;

    var messageBody = "Name: " + userName +
        "<br/> Phone: " + phone +
        "<br/> Email: " + email +
        "<br/> Project Location: " + projectLocation;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "it@elemantra.in",
        Password: "D9BFD2C65BF9CA1E81297CF19670EF6DF545",
        To: 'support@elemantra.in',
        From: "it@elemantra.in",
        Subject: "User Data",
        Body: messageBody
    }).then(
        message => {
            if (message == 'OK') {
                swal("Seccussful", "You clicked the button!", "success");
            }
            else {
                swal("Error", "You clicked the button!", "error");
            }
        }
    );
}