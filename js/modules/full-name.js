/*
 * Marketo: Full Name into First and Last Names
 * Written by Edward Unthank
 */

window.onload = function(){
    String.prototype.capitalize = function(){
        return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
    };
    function splitFullName(a,b,c){
        document.getElementById(c).oninput=function(){
            fullName = document.getElementById(c).value;
            if((fullName.match(/ /g) || []).length ===0 || fullName.substring(fullName.indexOf(" ")+1,fullName.length) === ""){
                first = fullName.capitalize();;
                last = "null";
            }else if(fullName.substring(0,fullName.indexOf(" ")).indexOf(".")>-1){
                first = fullName.substring(0,fullName.indexOf(" ")).capitalize() + " " + fullName.substring(fullName.indexOf(" ")+1,fullName.length).substring(0,fullName.substring(fullName.indexOf(" ")+1,fullName.length).indexOf(" ")).capitalize();
                last = fullName.substring(first.length +1,fullName.length).capitalize();
            }else{
                first = fullName.substring(0,fullName.indexOf(" ")).capitalize();
                last = fullName.substring(fullName.indexOf(" ")+1,fullName.length).capitalize();
            }
            document.getElementsByName(a)[0].value = first;
            document.getElementsByName(b)[0].value = last;
        };
        // Initial Values
        if(document.getElementById(c).value.length !== 0){
            first = document.getElementsByName(a)[0].value.capitalize();
            last = document.getElementsByName(b)[0].value.capitalize();

            if(document.getElementsByName(a)[0].value.length === 0 && document.getElementsByName(b)[0].value.length === 0) {
                fullName = fullName ;
            }
            else if (document.getElementsByName(a)[0].value.length === 0) {
                fullName = last ;
            }
            else if (document.getElementsByName(b)[0].value.length === 0) {
                fullName = first ;
            }
            else{
                fullName = first + " " + last ;
            }

            console.log(fullName);
            document.getElementById(c).value = fullName;
        }
    }

    splitFullName("FirstName","LastName","Dev_FullName");

};