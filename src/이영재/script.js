const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const newQuoteButton = document.getElementById('newQuoteButton');
function fetchQuote() {
    const script = document.createElement('script');
    script.src = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=parseQuote';
    document.body.appendChild(script);
}
function parseQuote(response) {
    quoteText.textContent = response.quoteText;
    quoteAuthor.textContent = response.quoteAuthor ? `— ${response.quoteAuthor}` : '— Unknown';
}
newQuoteButton.addEventListener('click', () => {
    quoteText.textContent = 'Loading...';
    quoteAuthor.textContent = '';
    fetchQuote();
});
fetchQuote();