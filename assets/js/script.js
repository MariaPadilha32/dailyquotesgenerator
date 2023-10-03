//Variable for quotes
let quotes = [
    '"The journey of a thousand miles begins with one step." - Lao Tzu',
    '"Happiness is not something ready-made. It comes from your own actions." - Dalai Lama',
    '"Love yourself first, and everything else falls in line." - Lucille Ball',
    '"To love oneself is the beginning of a lifelong romance." - Oscar Wilde',
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"Harmony makes small things grow; lack of it makes great things decay." - Sallust',
    '"Life is really simple, but we insist on making it complicated." - Confucius',
    '"You are never too old to set another goal or to dream a new dream." - C.S.Lewis',
    '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
    '"The best way to predict the future is to create it." - Abraham Lincoln',
    '"The purpose of our lives is to be happy." - Dalai Lama',
    '"Joy is not in things; it is in us." - Richard Wagner',
    '"Happiness is when what you think, what you say, and what you do are in harmony." - Mahatma Gandhi',
    '"Happiness is a direction, not a place." - Sydney J.Harris',
    '"The secret of happiness is not in doing what one likes, but in liking what one does." - James M.Barrie',
    '"Happiness is a journey, not a destination." - Ben Sweetland',
    '"Happiness is a warm kitten." - Unknown',
    '"Happiness is the natural flower of duty." - Phillips Brooks ',
    '"If you want to be happy, be." - Leo Tolstoy ',
    '"The secret to happiness is freedom. And the secret to freedom is courage." - Thucydides',
    '"The greatest happiness you can have is knowing that you do not necessarily require happiness." - William Saroyan ',
    '"The best way to cheer yourself up is to try to cheer somebody else up." - Mark Twain ',
    '"Count your age by friends, not years. Count your life by smiles, not tears." - John Lennon',
    '"The happiness of your life depends upon the quality of your thoughts." - Marcus Aurelius',
    '" Don\'t cry because it\'s over, smile because it happened." - Dr.Seuss',
    '"Be happy for this moment. This moment is your life." - Omar Khayyam',
    '"Happiness is not a goal; it is a by-product." - Eleanor Roosevelt',
    '"The most important thing is to enjoy your life—to be happy—it\'s all that matters." - Audrey Hepburn',
    '"The key to being happy is knowing you have the power to choose what to accept and what to let go." - Dodinsky',
    '"All our dreams can come true, if we have the courage to pursue them." — Walt Disney',
    '"The secret of getting ahead is getting started." — Mark Twain',
    '"The best time to plant a tree was 20 years ago. The second best time is now." ― Chinese Proverb',
    '"It\’s hard to beat a person who never gives up." — Babe Ruth',
    '"Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE." — Joss Whedon',
    '"If people are doubting how far you can go, go so far that you can\’t hear them anymore." — Michele Ruiz',
    '"Everything you can imagine is real."―Pablo Picasso',
    '"It\’s no use going back to yesterday, because I was a different person then." ― Lewis Carroll',
    '"Do what you feel in your heart to be right―for you\’ll be criticized anyway." ― Eleanor Roosevelt',
    '" Whatever you are, be a good one.” ― Abraham Lincoln',
    '"The same boiling water that softens the potato hardens the egg. It\’s what you\’re made of. Not the circumstances." — Unknown',
    '"If we have the attitude that it\’s going to be a great day it usually is." — Catherine Pulsifier',
    '"You can either experience the pain of discipline or the pain of regret. The choice is yours." — Unknown',
    '"Impossible is just an opinion." — Paulo Coelho',
    '"Your passion is waiting for your courage to catch up." — Isabelle Lafleche',
    '"If something is important enough, even if the odds are stacked against you, you should still do it." — Elon Musk',
    '"Hold the vision, trust the process." — Unknown',
    '"Don\’t be afraid to give up the good to go for the great." — John D. Rockefeller',
    '"People who wonder if the glass is half empty or full miss the point. The glass is refillable." - Unknown',
    '"When life gives you Monday, dip it in glitter and sparkle all day." —Ella Woodword',
    '"All Motivation Mondays need are a little more coffee and a lot more mascara." — Unknown',
    '"One day or day one. You decide." — Unknown',
    '"I challenge you to let every day be a Friday. Permit your self to be happy every day." — Joel Osteen',
    '"Everything comes to him who hustles while he waits." ―Thomas Edison',
    '"We are what we repeatedly do. Excellence, then, is not an act, but a habit.|" ― Aristotle',
    '"How wonderful it is that nobody need wait a single moment before starting to improve the world.|" ― Anne Frank',
    '"Some people want it to happen, some wish it would happen, others make it happen." ― Michael Jordan',
    '"Great things are done by a series of small things brought together." ― Vincent Van Gogh',
    '"Leaders can let you fail and yet not let you be a failure." ― Stanley McChrystal',
    '"If you\’re offered a seat on a rocket ship, don\’t ask what seat! Just get on." ― Sheryl Sandberg',
    '"The hard days are what make you stronger." ― Aly Raisman',
    '"Keep your eyes on the stars, and your feet on the ground." ― Theodore Roosevelt',
    '"You can waste your lives drawing lines. Or you can live your life crossing them." ― Shonda Rhimes',
    '"In a gentle way, you can shake the world." ―Mahatma Gandhi',
    '"If opportunity doesn\’t knock, build a door." ―Kurt Cobain',
    '"Don\’t be pushed around by the fears in your mind. Be led by the dreams in your heart." ― Roy T. Bennett',
    '"Work hard in silence, let your success be the noise." ― Frank Ocean',
    '"Hard work beats talent when talent doesn\’t work hard." ― Tim Notke',
    '"If everything seems to be under control, you\’re not going fast enough." ― Mario Andretti',
    '"Opportunity is missed by most people because it is dressed in overalls and looks like work." ― Thomas Edison',
    '"The only difference between ordinary and extraordinary is that little extra." ― Jimmy Johnson',
    '"Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway." ― Earl Nightingale',
    '"If you work on something a little bit every day, you end up with something that is massive." ― Kenneth Goldsmith',
    '"Amateurs sit around and wait for inspiration. The rest of us just get up and go to work." - Stephen King',
    '"At any given moment you have the power to say: This is not how the story is going to end." - Unknown',
    '"Never allow a person to tell you no who doesn\’t have the power to say yes." - Eleanor Roosevelt',
    '"If you cannot do great things, do small things in a great way." - Napoleon Hill',
    '"Nothing will work unless you do." - Maya Angelo',
    '"Sometimes when you\’re in a dark place you think you\’ve been buried but you\’ve actually been planted." - Christine Caine',
    '"Don\’t limit your challenges. Challenge your limits." - Unknown',
    '"Whenever you find yourself doubting how far you can go, just remember how far you have come." - Unknown',
    '"Good. Better. Best. Never let it rest. \’Til your good is better and your better is best." - St. Jerome',
    '"In the middle of every difficulty lies opportunity." - Albert Einstein',
    '"Start where you are. Use what you have. Do what you can." - Arthur Ashe',
    '"Dreams don\’t work unless you do." - John C. Maxwell',
    '"Go the extra mile. It\’s never crowded there." - Dr. Wayne D. Dyer',
    '"Make each day your masterpiece." - John Wooden',
    '"Keep your face always toward the sunshine—and shadows will fall behind you." - Walt Whitman',
    '"Wherever you go, go with all your heart." - Confucius',
    '"Turn your wounds into wisdom." - Oprah Winfrey',
    '"Opportunities don\’t happen. You create them." - Chris Grosser',
    '"Success is liking yourself, liking what you do, and liking how you do it." - Maya Angelou',
    '"Don\’t dream about success. Get out there and work for it." - ',
    '"Every champion was once a contender that didn\’t give up." - Gabby Douglas',
    '"We can do anything we want to if we stick to it long enough." - Helen Keller',
    '"If you obey all the rules, you miss all the fun." - Katharine Hepburn',
    '"You were born to be a player. You were meant to be here. This moment is yours." - Herb Brooks',
    '"When you reach the end of your rope, tie a knot and hang out." - Abraham Lincoln',
    '"Never regret anything that made you smile." - Mark Twain',
    '"You must do the thing you think you cannot do." - Eleanor Roosevelt',
    '"If you want to fly, give up everything that weighs you down." - Buddha',
    '"Doubt kills more dreams than failure ever will." - Suzy Kassem',
    '"I never lose. Either I win or learn." - Nelson Mandela',
    '"Today is your opportunity to build the tomorrow you want." - Ken Poirot',
    '"Focus on being productive instead of busy." - Tim Ferriss',
    '"It\’s not all sunshine and rainbows, but a good amount of it actually is." - Unknown',
    '"When someone says you can\’t do it, do it twice and take pictures." - Unknown',
    '"I didn\’t get there by wishing for it, but by working for it." - Estée Lauder',
    '"If you\’re too comfortable, it\’s time to move on. Terrified of what\’s next? You\’re on the right track." - Susan Fales-Hill',
    '"Be happy with what you have while working for what you want." - Helen Keller',
    '"Sunshine all the time makes a desert" - Arabic proverb',
    '"The big lesson in life, baby, is never be scared of anyone or anything." - Frank Sinatra',
    '"You don\’t need to see the whole staircase, just take the first step." - Martin Luther King Jr.',
    '"You\’re so much stronger than your excuses." - Unknown',
    '"Don\’t compare yourself to others. Be like the sun and the moon and shine when it\’s your time." - Unknown',
    '"Don\’t tell everyone your plans, instead show them your results." - Unknown',
    '"I choose to make the rest of my life the best of my life." - Louise Hay',
    '"Nothing can dim the light that shines from within." - Maya Angelou',
    '"Be so good they can\’t ignore you." - Steve Martin',
    '"You can\’t go back and change the beginning, but you can start where you are and change the ending." - C.S. Lewis',
    '"I can and I will. Watch me." - Carrie Green',
    '"Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself." - Rumi',
    '"If you can\’t do anything about it then let it go. Don\’t be a prisoner to things you can\’t change." - Tony Gaskins',
    '"A walk to a nearby park may give you more energy and inspiration in life than spending two hours in front of a screen." - Tsang Lindsay',
    '"The world is full of nice people. If you can\’t find one, be one." - Nishan Panwar',
    '"When you feel like giving up just remember that there are a lot of people you still have to prove wrong" - Unknown',
    '"It\’s OK to outgrow people who don\’t grow. Grow tall anyways." - Unknown',
    '"I am thankful for all of those who said no to me. It\’s because of them I\’m doing it myself." - Wayne W. Dyer',
    '"You never know what you can do until you try." - William Cobbett',
    '"All we can do is the best we can do." - David Axelrod',
    '"You can do anything you set your mind to." - Benjamin Franklin',
    '"Don\’t let what you can\’t do interfere with what you can do." - Unknown',
    '"Trust yourself that you can do it and get it." - Baz Luhrmann',
    '"If you can dream it, you can do it." - Walt Disney',
    '"It\’s never too late to be what you might\’ve been." - George Eliot',
    '"Do what you can, with what you have, where you are." - Theodore Roosevelt',
    '"Do the best you can. No one can do more than that." - John Wooden',
    '"If you don\’t get out of the box you\’ve been raised in, you won\’t understand how much bigger the world is." - Angelina Jolie',
    '"This is a reminder to you to create your own rule book, and live your life the way you want it." - Reese Evans',
    '"Twenty years from now you\’ll be more disappointed by the things you did not do than the ones you did." - Mark Twain',
    '"Nothing is stronger than a broken man rebuilding himself." - Unknown',
    '"What hurts you blesses you." - Rumi',
    '"Today is your opportunity to build the tomorrow you want." - Ken Poirot',
    '"If your dreams don\’t scare you, they are too small." - Richard Branson',
    '"Done is better than perfect." - Sheryl Sandberg',
    '"I was smart enough to go through any door that opened." - Joan Rivers',
    '"Learn from the mistakes of others. You can\’t live long enough to make them all yourself." - Eleanor Roosevelt',
    '"The best revenge is massive success." - Frank Sinatra',
    '"What\’s on the other side of fear? Nothing." - Jamie Foxx',
    '"Quitters never win. Winners never quit!" - Dr. Irene C. Kassorla',
    '"If there is no wind, row." - Latin Proverb',
    '"It\’s never too late for a new beginning in your life." - Joyce Meyers',
    '"Action is the foundational key to all success." - Pablo Picasso',
    '"I never dreamt of success. I worked for it." - Estée Lauder',
    '"A goal is a dream with a deadline." - Napoleon Hill',
    '"Be the change that you wish to see in the world." - Mahatma Gandhi',
    '"Change is painful, but nothing is as painful as staying stuck somewhere you don\’t belong." - Mandy Hale',
    '"Those who cannot change their minds cannot change anything." - George Bernard Shaw',
    '"Try not to become a man of success, but rather become a man of value." - Albert Einstein',
    '"A winner is a dreamer who never gives up." - Nelson Mandela',
    '"If you don\’t have a competitive advantage, don\’t compete." - Jack Welch',
    '"What is life without a little risk?" - J.K. Rowling',
    '"Only do what your heart tells you." - Princess Diana',
    '"I attribute my success to this: I never gave or took an excuse." - Florence Nightingale',
    '"The question isn\’t who is going to let me; it\’s who is going to stop me." - Ayn Rand',
    '"A surplus of effort could overcome a deficit of confidence." - Sonia Sotomayer',
    '"And, when you want something, all the universe conspires in helping you to achieve it." - Paulo Coelho',
    '"Don\’t think or judge, just listen." - Sarah Dessen, Just Listen',
    '"I can be changed by what happens to me. But I refuse to be reduced by it." - Maya Angelou',
    '"It\’s the possibility of having a dream come true that makes life interesting." - Paulo Coelho, The Alchemist',
    '"There is some good in this world, and it\’s worth fighting for." - J.R.R. Tolkien, The Two Towers',
    '"Oh yes, the past can hurt. But the way I see it, you can either run from it or learn from it." - The Lion King',
    '"We\’re on the brink of adventure, children. Don\’t spoil it with questions." - Mary Poppins',
    '"I just wanna let them know that they didn\’t break me." - Pretty in Pink',
    '"No one has ever made a difference by being like everyone else." - The Greatest Showman',
    '"The problem is not the problem. The problem is your attitude about the problem." - Pirates of the Caribbean',
    '"Remember you\’re the one who can fill the world with sunshine." - Snow White and the Seven Dwarfs',
    '"Spend a little more time trying to do something with yourself and a little less time trying to impress people." - The Breakfast Club',
    '"And when you get the choice to sit it out or dance … I hope you dance." - “I Hope You Dance,” Lee Ann Womack',
    '"Just because it burns doesn\’t mean you\’re gonna die you\’ve gotta get up and try." - “Try,” Pink',
    '"Life\’s a game made for everyone and love is the prize." - “Wake Me Up,” Avicii',
    '"Today is where your book begins, the rest is still unwritten." - “Unwritten,” Natasha Bedingfield',
    '"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela',
    '"If you can\’t make a mistake you can\’t make anything." - Marva Collin',
    '"Practice makes progress, not perfect." - Unknown',
    '"You may be disappointed if you fail, but you\’ll be doomed if you don\’t try.’ - Beverly Sills',
    '"Failure is the tuition you pay for success." - Walter Brunell',
    '"If we wait until we\’re ready, we\’ll be waiting for the rest of our lives." - Lemony Snicket',
    '"Everyone thinks of changing the world, but no one thinks of changing himself." - Leo Tolstoy',
    '"It\’s better to be absolutely ridiculous than absolutely boring." - Marilyn Monroe',
    '"I want to be remembered as the one who tried." - Dr. Dorothy Height',
    '"The key to success is to start before you are ready." - Marie Forleo',
    '"Your positive action combined with positive thinking results in success." - Shiv Khera',
    '"Formal education will make you a living; self-education will make you a fortune." - Jim Rohn',
    '"The secret of change is to focus all your energy, not on fighting the old, but on building the new." - Socrates',
    '"Forget your excuses. You either want it bad or don\’t want it at all. - Unknown',
    '"If you talk about it, it\’s a dream. If you envision it, it\’s possible. If you schedule it, it\’s real.’ - Tony Robbins',
    '"There are two rules for success: 1. Never reveal everything you know." - Roger H. Lincoln',
    '"Don\’t be upset when people reject you. Nice things are rejected all the time by people who can\’t afford them." - Unknown',
    '"Don\’t give up, don\’t take anything personally, and don\’t take no for an answer." - Sophia Amoruso',
    '"Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver." - Jen Sincero',
    '"Money can\’t buy happiness, but it can make you awfully comfortable while you\’re being miserable." - Clare Boothe Luce',
    '"That man is richest whose pleasures are cheapest." - Henry David Thoreau',
];

// Variable for one line jokes
let jokes = [
    "Why don\'t scientists trust atoms? Because they make up everything.",
    "I used to play piano by ear, but now I use my hands.",
    "Did you hear about the mathematician who\'s afraid of negative numbers? He\'ll stop at nothing to avoid them.",
    "Parallel lines have so much in common—it\'s a shame they\'ll never meet.",
    'How do you organize a space party? You "planet."',
    'The computer\'s got me on the ropes; it keeps saying, "Press any key to continue," but I can\'t find the "Any" key.',
    "I\'m reading a book on anti-gravity—it's impossible to put down.",
    "What did the grape say when it got stepped on? Nothing, it just let out a little whine.",
    "I\'m friends with all electricians; we have great current connections.",
    "Why don\'t skeletons fight each other? They don\'t have the guts.",
    "I used to be a baker, but I couldn\'t make enough dough.",
    "I\'m writing a book on reverse psychology—I hope people don\'t buy it.",
    "When life gives you melons, you might be dyslexic.",
    "I\'m so good at sleeping that I can do it with my eyes closed.",
    "What do you call a bear with no teeth? A gummy bear.",
    "Why don\'t oysters donate to charity? Because they are shellfish.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "I\'m on a whiskey diet. I\'ve lost three days already.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "What do you call a dog magician? A labracadabrador.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "Why did the math book look sad? Because it had too many problems.",
    "I don\'t trust stairs because they\'re always up to something.",
    "Did you hear about the claustrophobic astronaut? He just needed a little space.",
    "Did you hear they arrested the devil? Yeah, they got him on possession.",
    " What did one DNA say to the other DNA? 'Do these genes make me look fat?'",
    "My IQ test results came back. They were negative.",
    "What do you get when you cross a polar bear with a seal? A polar bear. ",
    "Why can\'t you trust an atom? Because they make up literally everything.",
    "Why was six afraid of seven? Because seven eight nine.",
    "What do you call a hippie\'s wife? Mississippi.",
    "What\'s the difference between an outlaw and an in-law? Outlaws are wanted.",
    "Scientists have recently discovered a food that greatly reduces sex drive. It\'s called wedding cake.",
    "I never knew what happiness was until I got married—and then it was too late.",
    "What happens to an illegally parked frog? It gets toad away.",
    "How does the man in the moon get his hair cut? Eclipse it.",
    "Our child has a great deal of willpower— and even more won\'t power.",
    "Why aren\'t dogs good dancers? Because they have two left feet.",
    "What\'s a dog\'s favorite homework assignment? A lab report.",
    "Why did the parents not like their son\'s biology teacher? He had skeletons in his closet.",
    "What did one cannibal say to the other while they were eating a clown? 'Does this taste funny to you?'",
    "What do fish say when they hit a concrete wall? Dam!",
    "Knock, knock. Who\'s there? Control freak. Now you say, “Control freak who?”",
    "My father is allergic to cotton. He has pills he can take, but he can't get them out of the bottle.",
    "My wife told me to stop impersonating a flamingo. I had to put my foot down.",
    "I went to buy some camo pants but couldn\’t find any.",
    "I failed math so many times at school, I can\’t even count.",
    "I was wondering why the frisbee kept getting bigger and bigger, but then it hit me.",
    "I told him to be himself; that was pretty mean, I guess.",
    'I know they say that money talks, but all mine says is "Goodbye."',
    "The problem with kleptomaniacs is that they always take things literally.",
    "I can\’t believe I got fired from the calendar factory. All I did was take a day off.",
    "Most people are shocked when they find out how bad I am as an electrician.",
    "My wife just found out I replaced our bed with a trampoline. She hit the ceiling!",
    "Russian dolls are so full of themselves.",
    "I used to think I was indecisive. But now I\’m not so sure.",
    "The easiest time to add insult to injury is when you\’re signing someone\’s cast.",
    "My therapist says I have a preoccupation for revenge. We\’ll see about that.",
    'A termite walks into the bar and asks, "Is the bar tender here?"',
    "A told my girlfriend she drew her eyebrows too high. She seemed surprised.",
    'Two fish are in a tank. One says, "How do you drive this thing?"',
    "Just burned 2,000 calories. That\’s the last time I leave brownies in the oven while I nap.",
    "Always borrow money from a pessimist. They\’ll never expect it back.",
    "The last thing I want to do is hurt you; but it\’s still on the list.",
    "Today a man knocked on my door and asked for a small donation toward the local swimming pool. I gave him a glass of water."
];

// Variable for Images for quotes
let backgroundImagesQuotes = [
    "assets/images/shell.jpg",
    "assets/images/bench.jpg",
    "assets/images/flower.jpg",
    "assets/images/coffee.jpg",
    "assets/images/field.jpg",
    "assets/images/rainbow.jpg",
    "assets/images/sprinkle.jpg",
    "assets/images/tulip.jpg",
    "assets/images/umbrella.jpg",
    "assets/images/nature.jpg",
    "assets/images/wheat.jpg",
    "assets/images/paint.jpg",
    "assets/images/winery.jpg",
    "assets/images/golden.jpg",
    "assets/images/hotairballons.jpg",
    "assets/images/water.jpg",
    "assets/images/candle.jpg",
    "assets/images/sparkles.jpg",
    "assets/images/firework.jpg"
];

// Variable for Images for jokes
let backgroundImagesJokes = [
    "assets/images/coffee.jpg",
    "assets/images/donut.jpg",
    "assets/images/happyface.jpg",
    "assets/images/justforfun.jpg",
    "assets/images/lol.jpg",
    "assets/images/sprinkle.jpg",
    "assets/images/dogs.jpg",
    "assets/images/laugh.jpg",
    "assets/images/colorful.jpg",
    "assets/images/umbrella.jpg",
    "assets/images/funnydog.jpg",
    "assets/images/smiley.jpg",
    "assets/images/globes.jpg",
    "assets/images/golden.jpg",
    "assets/images/ballons.jpg",
    "assets/images/pinkgreen.jpg",
    "assets/images/sparkles.jpg",
    "assets/images/firework.jpg",
];

let newQuoteButton = document.querySelector(".quote-button");

let newJokeButton = document.querySelector(".joke-button");

function newQuote() {
    showQuote();
    showButtons("quote-button");
    hideButtons("joke-button");
    showQuoteDisplay();
}

function newJoke() {
    showJoke();
    showButtons("joke-button");
    hideButtons("quote-button");
    showQuoteDisplay();
}
//to show the quote display
function showQuoteDisplay() {
    let quoteDisplayElement = document.querySelector(".quoteDisplay");
    quoteDisplayElement.style.display = "flex";
}

//function that give the toggle button its function
function toggleQuotesAndJokes() {
    if (newQuoteButton.id === "active") {
        newQuoteButton.style.display = "none";
        newJokeButton.style.display = "inline-block";
        newJokeButton.id = "active";
        newQuoteButton.removeAttribute("id");
    } else if (newJokeButton.id === "active") {
        newQuoteButton.style.display = "inline-block";
        newJokeButton.style.display = "none";
        newJokeButton.removeAttribute("id");
        newQuoteButton.id = "active";
    }
}

function showButtons(className) {
    let buttons = document.getElementsByClassName(className);
    for (let button of buttons) {
        button.style.display = "inline-block";
        button.id = "active";
    }
}

function hideButtons(className) {
    let buttons = document.getElementsByClassName(className);
    for (let button of buttons) {
        button.style.display = "none";
    }
}

//Function that randonly will choose a quote and Image from the variables
function showQuote() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let randomImageNumber = Math.floor(
        Math.random() * backgroundImagesQuotes.length
    );
    let quoteDisplayElements = document.getElementsByClassName("quoteDisplay");
    let quoteboxElement = document.querySelector(".quotebox");

    if (quoteDisplayElements.length > 0) {
        quoteDisplayElements[0].innerHTML = quotes[randomNumber];

        quoteboxElement.style.backgroundImage =
            "url(" + backgroundImagesQuotes[randomImageNumber] + ")";
    }
}

//Function that randonly will choose a joke and Image from the variables
function showJoke() {
    let randomNumber = Math.floor(Math.random() * jokes.length);
    let randomImageNumber = Math.floor(
        Math.random() * backgroundImagesJokes.length
    );
    let quoteDisplayElements = document.getElementsByClassName("quoteDisplay");
    let quoteboxElement = document.querySelector(".quotebox");

    if (quoteDisplayElements.length > 0) {
        quoteDisplayElements[0].innerHTML = jokes[randomNumber];

        quoteboxElement.style.backgroundImage =
            "url(" + backgroundImagesJokes[randomImageNumber] + ")";
    }
}
