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
    ' "The way to happiness: Keep your heart free from hate, your mind from worry. Live simply, expect little, give much. Scatter sunshine, forget self, think of others." - Norman Vincent Peale',
    ' "Happiness is a warm kitten." - Unknown',
    ' "Happiness is the natural flower of duty." - Phillips Brooks ',
];
/*function newQuote() {
*    var randomNumber = Math.floor(Math.random() * (quotes.length));
 *   document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
*}
*/ 

function newQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    var quoteDisplayElements = document.getElementsByClassName('quoteDisplay');

    if (quoteDisplayElements.length > 0) {
        quoteDisplayElements[0].innerHTML = quotes[randomNumber];
    }
}