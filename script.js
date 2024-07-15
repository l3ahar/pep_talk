// script.js  

// Function to fetch and parse the CSV file  
async function fetchQuotes() {
    // Add cache-busting query parameter  
    const response = await fetch('quotes.csv?timestamp=' + new Date().getTime());
    const data = await response.text();
    const quotes = data.split('\n').slice(1).map(quote => quote.trim().replace(/"/g, ''));
    return quotes;
}

// Function to display a random quote  
async function displayRandomQuote() {
    const quotes = await fetchQuotes();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote-display').innerText = randomQuote;
}

// Add event listener to the button  
document.getElementById('generate-quote').addEventListener('click', displayRandomQuote);  