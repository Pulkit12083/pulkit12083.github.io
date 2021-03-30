var potatoCounter = 0;
var buyCounter = 0;

var aMemeQuotes = [
    "Hippos are fundamentall good beings",
    "Shut up don't interrupt me you narcissist. It's all about me, me, me",
    "I should probably report you to the authorities",
    "Who likes potatoes, you sick fuck",
    "Just pay me 30000 per day",
    "I think I'm great, just great",
    "Btw, I'm a scam artist",
    "Did anybody ever love you so much that they switched off their fan to talk to you",
    "who do you think you are",
    "I'm freaking out because I missed my assignment deadline",
    "I could be a radio jockey"
];

function potatoClicked()
{
    console.log("potato clicked");
    potatoCounter=potatoCounter+1;
    document.getElementById("potatoCountPrint").innerHTML=potatoCounter+" customized potatoes";
    document.getElementById("aMemeWisdom").innerHTML=aMemeQuotes[potatoCounter%aMemeQuotes.length];
    document.getElementById("potatoCountPrice").innerHTML= " " + (potatoCounter*1000 + 10);
}


function buyButtonClicked()
{
    console.log("buy button clicked");
    buyCounter = buyCounter+1;
    if (buyCounter%2 ==1)
    {
	document.getElementById("buyButtonText").innerHTML= "Kthx. Your bank account has been debited. Customized potatoes will arrive to you shortly.";
	
    }
    else
    {
	document.getElementById("buyButtonText").innerHTML= "Buy again";
    }
    
}

