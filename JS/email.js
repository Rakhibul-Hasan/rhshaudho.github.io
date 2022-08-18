function sendEmail(){
    Email.send({
        SecureToken : "11057212-562a-4632-97ad-21cfa68f417e",
        To : 'badskull24@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Name : " + document.getElementById("name").value
        + "<br> Email : " + document.getElementById("email").value
        +"<br> Message : " + document.getElementById("message").value
    }).then(
      message => alert("Message sent successfully.")
    );
}