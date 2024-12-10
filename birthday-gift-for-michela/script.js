// Array of Paul Mescal images
const images = [
    "https://variety.com/wp-content/uploads/2024/07/GettyImages-2018422111.jpg?w=681&h=454&crop=1",
    "https://voguesg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2024/01/30170559/featured-062_S_00810-680x1020.jpg",
    "https://media.vanityfair.com/photos/659c7437ffde61bdc279e215/master/w_2560%2Cc_limit/GettyImages-1716998000.jpeg",
    "https://cdn.britannica.com/00/250500-050-47CB256E/Paul-Mescal-2022.jpg",
    "https://media.gq.com/photos/5f8882376ece7793e0eae912/master/pass/paul-mescal-gq-november-2020-02.jpg",
    "https://images.mubicdn.net/images/cast_member/739930/cache-543010-1673512468/image-w856.jpg",
    "https://www.themoviedb.org/t/p/original/wtiLlC4wo4KYEPrKCgAwt2hakhR.jpg",
    "https://media.cnn.com/api/v1/images/stellar/prod/230223124849-03-paul-mescal-es-magazine-photoshoot.jpg?c=original&q=w_1280%2Cc_fill",
    "https://www.hollywoodreporter.com/wp-content/uploads/2023/02/PaulFinal2_SplashB-2023.jpg?w=2000&h=1126&crop=1",
    "https://media.gqitalia.it/photos/6735fcc3e2656b0d482c57b2/master/w_1600%2Cc_limit/Paul_Mescal_Gladiator_Fitness_diary__0003_MCDGLAD_PA020.jpeg",
    "https://images.squarespace-cdn.com/content/v1/56c346b607eaa09d9189a870/c1a19345-6c14-4104-a70d-b3528c5a33cf/220913_FLAUNT_PAUL_MESCAL_S6_103_R2_V3.jpg",
    "https://media.gq-magazine.co.uk/photos/670c3d909970f5d7ac131061/master/w_1600%2Cc_limit/GQ_NOV_SOCIAL_ONLINE_COVER.jpg",
    "https://www.irishtimes.com/resizer/v2/GH7Z6KKRZNEENGYVQ66FHCOVAU.png?smart=true&auth=ccb08ce71d3dc037559025b2e0e8d91bda3eed031317fb1ad603dadf6295e057&width=800&height=1440",
    "https://media-assets.vanityfair.it/photos/652e43ed09d0eb4b55779f48/master/w_1600%2Cc_limit/OFFICIAL%2520CROP_SHOT%25205.jpg",
    "https://media-assets.vanityfair.it/photos/652e44186ef5c056a642e5ec/16:9/w_3027,h_1703,c_limit/OFFICIAL%20CROP_SHOT%201.jpg",
    "https://media.gucci.com/content/DiaryHeroArticle_Standard_3200x1624/1697454906/DiaryHeroArticle_HorsebitLoafer-Paul-Oct2023-03_001_Default.jpg",
    "https://media.gq.com/photos/6528553dcc40e49751f3ad3e/3:4/w_3750,h_5000,c_limit/paul%20crop%201717026993.jpeg",
    "https://tomandlorenzo.com/wp-content/uploads/2024/11/Paul-Mescal-GLADIATOR-II-Los-Angeles-Premiere-Red-Carpet-Fashion-Style-Gucci-Tom-Lorenzo-Site-1.jpg",
    "https://i.pinimg.com/736x/61/14/3a/61143ae1cc107d9b4e0b0b40d5761878.jpg",
    "https://hollywoodauthentic.com/wp-content/uploads/2024/11/paul-mescal-ha7-21.jpg",
    "https://media.gq-magazine.co.uk/photos/5f3d3a0b503430459301bcdb/16:9/w_1280,c_limit/20200819-stones-03.jpg",
    "https://variety.com/wp-content/uploads/2024/11/Paul-Mescal-Variety-Cover-FORWEB.jpg?w=792",
    "https://pbs.twimg.com/media/GcNQbMyWYAIV3f2.jpg:large",
    "https://pbs.twimg.com/media/GcchLsTaMAMQvhF?format=jpg&name=large",
    "https://e3.365dm.com/24/01/768x432/skynews-paul-mescal-all-of-us-strangers_6430892.jpg?20240123165300",
    "https://media.vanityfair.com/photos/6753309e88703cccc12d2e75/master/w_2560%2Cc_limit/Screen%2520Shot%25202024-12-06%2520at%252012.12.32%2520PM.png",
    "https://hips.hearstapps.com/hmg-prod/images/4-64da00b67fefe.png?resize=980:*"
];

// Array of inspirational quotes
const quotes = [
    "Believe in yourself and all that you are.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Act as if what you do makes a difference. It does.",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "Don’t watch the clock; do what it does. Keep going.",
    "You are never too old to set another goal or to dream a new dream.",
    "Happiness is not by chance, but by choice.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    "The key to success is to focus on goals, not obstacles.",
    "Dream it. Believe it. Build it.",
    "Every journey begins with a single step.",
    "You are stronger than you know, braver than you believe, and smarter than you think.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Challenges are what make life interesting, and overcoming them is what makes life meaningful.",
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.",
    "Rise above the storm, and you will find the sunshine.",
    "Success is stumbling from failure to failure with no loss of enthusiasm.",
    "If you’re going through hell, keep going.",
    "You don’t have to control your thoughts. You just have to stop letting them control you.",
    "The pain you feel today will be the strength you feel tomorrow.",
    "Don’t limit your challenges. Challenge your limits.",
    "The comeback is always stronger than the setback.",
    "Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’",
    "Stop being afraid of what could go wrong and start being excited about what could go right.",
    "Believe in your infinite potential. Your only limitations are those you set upon yourself."
];

// Select elements
const imageElement = document.getElementById("image");
const quoteElement = document.getElementById("quote");

// Generate random indices and display content
function displayContent() {
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    imageElement.src = images[randomImageIndex];
    quoteElement.textContent = quotes[randomQuoteIndex];
}

// Expand image to fullscreen
function expandImage() {
    const modal = document.getElementById("image-modal");
    const fullImage = document.getElementById("full-image");
    fullImage.src = imageElement.src;
    modal.style.display = "flex";
}

// Close fullscreen image
function closeImage(event) {
    const modal = document.getElementById("image-modal");
    if (event.target.id === "image-modal" || event.target.id === "close-btn") {
        modal.style.display = "none";
    }
}

// Refresh page content
function refreshPage() {
    displayContent();
}

// Initialize content
displayContent();