var authcode1 = [0, 0]
        var authcode2 = ["", 0]
        var authcode3 = ["", ""]
        var authcode4 = ["", ""]
        var authcode5 = ["", ""]
        function authenticate() {
            var code = prompt("please enter the 6 digit invitation code.")
            var fb = new Firebase("https://ccim.firebaseio.com/");

            if (code === authcode1[1] || code === authcode2[1]) {
                var accept = prompt("Hi," + authcode1[0] + ". Do you accept or deny the invitation?").toLowerCase();
                if (accept === "y" || accept === "yes" || accept === "sure" || accept === "okay" || accept === "accept") {
                    var email = prompt("Hi, " + authcode1[0] + " We are glad you accepted, please check your email for more information which will be provided soon. BTW, what is your email?");
                    var reason = "No reason avaliable.";
            //send1(reason, accept, email);
            var year = new Date();
            var month = new Date();
            var day = new Date();
            var hour = new Date();
            var minute = new Date();
            var fulltime = month.getMonth()+1 + "/" + day.getDate() + "/" + year.getFullYear() + "  " + hour.getHours() + ":" + minute.getMinutes() + " ";
            var topush = "connor accepted at " + fulltime + " and his email is " + email;
            fb.push(topush)
        } else if (accept === "no" || accept === "n" || accept === "never" || accept === "decline" || accept === "deny") {
            var reason = prompt("Hi, " + authcode1[0] + " We are glad you took the time to enter the code, we are sorry you don't want to join. Please state the reason below.");
            //send1(reason, accept, "");
            var year = new Date();
            var month = new Date();
            var day = new Date();
            var hour = new Date();
            var minute = new Date();
            var fulltime = month.getMonth()+1 + "/" + day.getDate() + "/" + year.getFullYear() + "  " + hour.getHours() + ":" + minute.getMinutes() + " ";
            var topush = "connor denied at " + fulltime + " because " + reason;
            fb.push(topush)
        }
    } else {
        alert("Please try again")
    }

    }