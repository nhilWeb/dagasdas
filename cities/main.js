document.getElementById("button1").onclick = function(){
    document.getElementById("pic").src = "../cities/images/philippines.png";
    document.getElementById("country2").innerHTML = "Philippines";
    document.getElementById("text1").innerHTML = "Officially the Republic of the Philippines, is an island country in Southeast Asia. It is an archipelago consisting of more than 7,000 islands and islets lying about 500 miles (800 kilometers) off the coast of Vietnam. Manila is the capital, but nearby Quezon City is the country's most populous city.";
    document.getElementById("text2").innerHTML = "The Philippines is a beautiful country with a rich history and culture. It is known for its stunning beaches, lush rainforests, and friendly people. The Philippines is also a popular tourist destination, with millions of visitors coming to the country each year to experience its many attractions.";
};

document.getElementById("button2").onclick = function(){
    document.getElementById("pic").src = "../cities/images/singapore.png";
    document.getElementById("country2").innerHTML = "Singapore";
    document.getElementById("text1").innerHTML = "Officially the Republic of Singapore, is an island country and city-state in maritime Southeast Asia. It is known for its modern city center, efficiency, and cleanliness.";
    document.getElementById("text2").innerHTML = "Singapore's history is a fascinating blend of Malay, Chinese, Indian, and European influences. This is reflected in its architecture, cuisine, and festivals.";
};

document.getElementById("button3").onclick = function(){
    document.getElementById("pic").src = "../cities/images/japan.png";
    document.getElementById("country2").innerHTML = "Japan";
    document.getElementById("text1").innerHTML = "Is an island country in East Asia. It is located in the northwest Pacific Ocean, and is bordered on the west by the Sea of Japan, extending from the Sea of Okhotsk in the north towards the East China Sea, Philippine Sea, and Taiwan in the south. Tokyo is the capital and largest city, followed by Yokohama, Osaka, Nagoya, Sapporo, Fukuoka, Kobe, and Kyoto.";
    document.getElementById("text2").innerHTML = "Japan is a fascinating country with a rich history and culture. It is known for its stunning scenery, from snow-capped mountains to tropical beaches, its delicious cuisine, and its unique and polite people. Japan is also a popular tourist destination, with millions of visitors coming to the country each year to experience its many attractions.";
};

document.getElementById("button4").onclick = function(){
    document.getElementById("pic").src = "../cities/images/italy.png";
    document.getElementById("country2").innerHTML = "Italy";
    document.getElementById("text1").innerHTML = "Officially the Italian Republic, is a beautiful country located in Southern Europe. It is an elongated, boot-shaped peninsula that juts out into the Mediterranean Sea. Italy also includes a number of islands, including Sicily and Sardinia.";
    document.getElementById("text2").innerHTML = "Italy has a long and rich history, dating back to the Etruscan civilization in the 8th century BC. The Roman Empire, one of the most powerful empires in history, originated in Italy. Italy is also the birthplace of the Renaissance, a period of great cultural and artistic rebirth.";
};

document.getElementById("dark").onclick = function(){
    document.querySelector(".header").style.backgroundColor = "#171717";

    document.querySelector(".side-bar").style.backgroundColor = "#262525";
    var countries = document.getElementById("countries");
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var button4 = document.getElementById("button4");
    countries.style.color = "Beige";
    button1.style.color = "Beige";
    button2.style.color = "Beige";
    button3.style.color = "Beige";
    button4.style.color = "Beige";

    document.querySelector(".content").style.backgroundColor = "#363636";
    var country2 = document.getElementById("country2");
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    country2.style.color = "Beige";
    text1.style.color = "Beige";
    text2.style.color = "Beige";

    document.querySelector(".footer").style.backgroundColor = "#171717";
    var footer_text = document.getElementById("footer-text");
    footer_text.style.color = "Beige";

    var dark = document.getElementById("dark");
    dark.style.backgroundColor = "#363636";
    dark.style.color = "Beige";

    var light = document.getElementById("light");
    light.style.backgroundColor = "#363636";
    light.style.color = "Beige";
};

document.getElementById("light").onclick = function(){
    document.querySelector(".header").style.backgroundColor = "Beige";
    
    document.querySelector(".side-bar").style.backgroundColor = "rgb(195, 195, 161)";
    var countries = document.getElementById("countries");
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var button3 = document.getElementById("button3");
    var button4 = document.getElementById("button4");
    countries.style.color = "Black";
    button1.style.color = "Black";
    button2.style.color = "Black";
    button3.style.color = "Black";
    button4.style.color = "Black";

    document.querySelector(".content").style.backgroundColor = "rgb(212, 212, 192)";
    var country2 = document.getElementById("country2");
    var text1 = document.getElementById("text1");
    var text2 = document.getElementById("text2");
    country2.style.color = "Black";
    text1.style.color = "Black";
    text2.style.color = "Black";

    document.querySelector(".footer").style.backgroundColor = "Beige";
    var footer_text = document.getElementById("footer-text");
    footer_text.style.color = "Black";

    var dark = document.getElementById("dark");
    dark.style.backgroundColor = "rgb(212, 212, 192)";
    dark.style.color = "Black";

    var light = document.getElementById("light");
    light.style.backgroundColor = "rgb(212, 212, 192)";
    light.style.color = "Black";
};