       //form 1

        function Tamil(){
            var uname=document.forms["from"]["uname"].value;
            var upswd=document.forms["from"]["upswd"].value;

        if(uname==null || uname=="" ){
                  document.getElementById("errorBox").innerHTML =
                   "enter the user name";
                 return false;
        }

        if(upswd==null || upswd==""){
                  document.getElementById("errorBox").innerHTML =
                   "enter the password";
                 return false;
        }

        if (uname != '' && upswd != '' ){
         alert("Login successfully");
                         }

        }

 //form 2

  function Tamil1(){
            var uname1=document.forms["from1"]["uname1"].value;
            var email1=document.forms["from1"]["email1"].value;
            var upswd1=document.forms["from1"]["upswd1"].value;
            var upswd2=document.forms["from1"]["upswd2"].value;


        if(uname1==null || uname1=="" ){
                  document.getElementById("errorBox").innerHTML =
                   "enter the user name";
                 return false;
        }

        if(email1==null || email1==""){
                  document.getElementById("errorBox").innerHTML =
                   "enter the email";
                 return false;
        }

        if(upswd1==null || upswd1=="" ){
                  document.getElementById("errorBox").innerHTML =
                   "enter the password";
                 return false;
        }

        if(upswd2==null || upswd2==""){
                  document.getElementById("errorBox").innerHTML =
                   "enter the password";
                 return false;}

 		if(upswd1 != upswd2){
                  document.getElementById("errorBox").innerHTML =
                   "password dont match";
                 return false;}

        

        if (uname1 != '' && upswd1 != '' && upswd2 != '' && email1 != '' && upswd1 == upswd2)


          alert("Register successfull");
                         

        }