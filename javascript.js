function calculate()
{
    var momos= document.getElementById("momos").value;
    var type1= document.getElementsByName("mveg").value;
    var type2= document.getElementsByName("pveg").value;
    var pizza= document.getElementById("pizza").value;
    var sum= 10*momos + 100 * pizza;
    var GST= (18*sum)/100;
    var final= sum+GST;
    if(momos + pizza==0)//If user enter both momos and pizza quantity 0 the bill won't be there.
    {
        document.getElementById("output").innerHTML= "Please order atleast one item"+ "<br>";
    }
    else
    {
        document.getElementById("output").innerHTML = "BILL" + "<br>" + "Momos    = Rs " +momos*10+ "<br>" + "Pizza    = Rs "+ pizza*100+"<br>"+"Total Amount Payble:  "+ sum+  "  +" + GST +"  (Including GST)" + "    =  Rs " + final ;
    }
    document.getElementById("date").innerHTML= Date();
}
function nameverify()
{
    var name= document.getElementById("name").value;
    if(!name)
    {
        document.getElementById("outname").innerHTML= "Please Enter a name to get order complete.";
    }
    else{
        document.getElementById("outname").innerHTML= "Hey "+name+" "+" Your Order is getting ready. Please wait for 30 minutes"+ "<br>";
    }
}
