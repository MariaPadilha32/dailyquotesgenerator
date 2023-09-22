var quotes = [
    ' "The journey of a thousand miles begins with one step." - Lao Tzu',
    ' "Happiness is not something ready-made. It comes from your own actions." - Dalai Lama',
    ' "Love yourself first, and everything else falls in line." - Lucille Ball',
    ' "To love oneself is the beginning of a lifelong romance." - Oscar Wilde',
    ' "The only way to do great work is to love what you do." - Steve Jobs',
    ' "Friendship is born at that moment when one person says to another',
    ' "Harmony makes small things grow; lack of it makes great things decay." - Sallust',
    ' "Life is really simple, but we insist on making it complicated." - Confucius',
    ' "You are never too old to set another goal or to dream a new dream." - C.S.Lewis',
    ' "Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
    ' "The best way to predict the future is to create it." - Abraham Lincoln',
    ' "The purpose of our lives is to be happy." - Dalai Lama',
    ' "Joy is not in things; it is in us." - Richard Wagner',
    ' "Happiness is when what you think, what you say, and what you do are in harmony." - Mahatma Gandhi',
    ' "Happiness is a direction, not a place." - Sydney J.Harris',
    ' "The secret of happiness is not in doing what one likes, but in liking what one does." - James M.Barrie',
    ' "Happiness is a journey, not a destination." - Ben Sweetland',
    ' "Happiness is a warm kitten." - Unknown',
    ' "Happiness is the natural flower of duty." - Phillips Brooks ',
    ' "If you want to be happy, be." - Leo Tolstoy ',
    ' "The secret to happiness is freedom... And the secret to freedom is courage." - Thucydides',
    ' "The greatest happiness you can have is knowing that you do not necessarily require happiness." - William Saroyan ',
    ' "The best way to cheer yourself up is to try to cheer somebody else up." - Mark Twain ',
    ' "Count your age by friends, not years. Count your life by smiles, not tears." - John Lennon',
    ' "The happiness of your life depends upon the quality of your thoughts." - Marcus Aurelius',
    ' "Don\'t cry because it\'s over, smile because it happened." - Dr.Seuss',
    ' "Be happy for this moment. This moment is your life." - Omar Khayyam',
    '  "Happiness is not a goal; it is a by-product." - Eleanor Roosevelt',
    ' "The most important thing is to enjoy your life—to be happy—it\'s all that matters." - Audrey Hepburn',
    ' "The key to being happy is knowing you have the power to choose what to accept and what to let go." - Dodinsky',
    ' "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort." - Franklin D.Roosevelt',
];

var backgroundImages = [
    '../images/shell.jpg',
    '../images/bench.jpg',
    '../images/flower.jpg'
];
/*function newQuote() {
*    var randomNumber = Math.floor(Math.random() * (quotes.length));
 *   document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
*}
*/

function newQuote() {
    console.log('newQuote() function called');
    var randomNumber = Math.floor(Math.random() * quotes.length);
    var randomImageNumber = Math.floor(Math.random() * backgroundImages.length);
    var quoteDisplayElements = document.getElementsByClassName('quoteDisplay');
    var quoteboxElement = document.querySelector('.quotebox');

    if (quoteDisplayElements.length > 0) {
        quoteDisplayElements[0].innerHTML = quotes[randomNumber];

        quoteboxElement.style.backgroundImage = 'url(' + backgroundImages[randomImageNumber] + ')';
    }
}