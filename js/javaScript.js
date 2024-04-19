var heroes = ["ancient","bane", "crystal","dark","earth","grim","jakiro","lich","lina","lion","medusa", "pudge","pugna","queen","razor","sand",
"shadowD","shadowS","spirit","undying","veng","veno","witch"]

for(let i=0; i<heroes.length; i++){
    console.log(heroes[i])
    document.getElementById(heroes[i]).addEventListener("click", function() {
        // Navigate to another HTML page
        window.location.href = heroes[i]+".html";
    });
    console.log(heroes[i]+ "is finished")
};


