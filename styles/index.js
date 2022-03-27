function changeBg()
{
    switch(document.getElementById("themes").value)
    {
        case "white": document.getElementById("body").style.backgroundColor="white"; break;
        case "beige": document.getElementById("body").style.backgroundColor="beige"; break;
        case "yellow": document.getElementById("body").style.backgroundColor="yellow"; break;
        case "blue": document.getElementById("body").style.backgroundColor="blue"; break;
        case "red": document.getElementById("body").style.backgroundColor="red"; break;
        case "brown": document.getElementById("body").style.backgroundColor="brown"; break;
    }
    }
