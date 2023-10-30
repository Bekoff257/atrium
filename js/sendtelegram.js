var telegram_bot_id = "5891482673:AAFixISqWcxYTGRILOj6T49mfr37JVjZsyY"; 
var chat_id =  -1001986990721; 
var surname, email, message,phone,fullname;
var ready = function() {
    surname = document.getElementById("surname").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    fullname = document.getElementById("fullname").value;
    message = "ismi: " + surname +"\nfamiliyasi: " + fullname + "\nEmaili: " + email  + "\nTelfon nomeri: " + phone  ;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
        if(response.ok ){
            Toastify({
                text: 'Successfully',
                duration: 3000,
                destination: 'https://github.com/apvarun/toastify-js',
                newWindow: true,
                close: true,
                gravity: 'top', // `top` or `bottom`
                position: 'left', // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: 'green',
                },
                onClick: function () {}, // Callback after click
            }).showToast();
        }
    });
    document.getElementById("surname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("fullname").value = "";
    document.getElementById("phone").value = "";
    return false;
};


