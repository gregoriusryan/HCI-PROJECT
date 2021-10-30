var Name;
var PhoneNumber;
var Email;
var ManyPeople;
var Gender = false;
var checkGender;
var ReserveDate;
var TimeReserve;

function authenticate()
{
    Name = document.getElementById("Name").value;
    Email = document.getElementById("Email").value;
    Gender = document.getElementsByName("Gender");
    ReserveDate = document.getElementById("ReserveDate").value;
    ManyPeople = document.getElementById("ManyPeople").value;
    TimeReserve = document.getElementById("TimeReserve").value;
    if (Name == "")
    {
        document.getElementById("Error").innerHTML = " <b>Name can not be Empty  </b>";
        return false;
    }
    if (Name.length > 20)
    {
        document.getElementById("Error").innerHTML = "<b>Name can not be more than 20 character </b>";
        return false;
    }
    if (!(Email.includes("@") && Email.includes(".com")))
    {
        document.getElementById("Error").innerHTML = "<b>Email must contain @ and .com </b>";
        return false;
    }
    let date = new Date(ReserveDate).getTime();
    if (date < Date.now())
    {
        document.getElementById("Error").innerHTML = "<b>You can't reserve before or at this date</b>";
        return false; 
    }
    if (ReserveDate == "")
    {
        document.getElementById("Error").innerHTML = "<b>Please enter the reservation date</b>";
        return false;    
    }
    if (TimeReserve < "08:00" || TimeReserve > "22:00")
    {
        document.getElementById("Error").innerHTML = "<b>Restaurant is open from 08:00 - 22:00</b>";
            return false; 
    }
    for (let i = 0 ; i < Gender.length ; i++)
    {
        if (Gender[i].checked)
        {
            checkGender = true;
        }
    }
    if (!checkGender)
    {
        document.getElementById("Error").innerHTML = "<b>Please check one of the gender box</b>";
        return false; 
    }
    if (ManyPeople > 10)
    {
        document.getElementById("Error").innerHTML = "<b>Can not Reserve for more than 10 people</b>";
        return false; 
    }
    if (ManyPeople <= 0)
    {
        document.getElementById("Error").innerHTML = "<b>Can not Reserve for less than 1 people</b>";
        return false; 
    }
    if (date > date.now())
    {
        return true;
    }
}

var index = 1;
var slides = $('.slide');

function plusMinSlider(n)
{
    slides[index-1].classList.remove('active')
    slider(index += n)
}

function slider(n)
{
    if(n > slides.length) index = 1;
    if(n < 1) index = slides.length;

    slides[index - 1].classList.add('active');
}