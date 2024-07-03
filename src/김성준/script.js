const stocks = ['AAPL', 'MSFT', 'AMZN', 'GOOGL', 'BRK.B'];
const apiKey = 'aI6bTq28ABjxU2cBKlBnih1taUh2LDHs';
const apiUrl = 'https://financialmodelingprep.com/api/v3/quote/';
function getStockData() {
    return Promise.all(stocks.map(stock => 
        fetch(`${apiUrl}${stock}?apikey=${apiKey}`)
            .then(response => response.json())
            .then(data => data[0])
    ));
}
function formatNumber(num) {
    return num.toLocaleString();
}
function formatPercentage(num) {
    return (num * 100).toFixed(2) + '%';
}
function updateTable(stocksData) {
    const tableBody = document.querySelector('#stock-table tbody');
    tableBody.innerHTML = '';
    stocksData.forEach(stock => {
        const changeClass = stock.change > 0 ? 'change-positive' : (stock.change < 0 ? 'change-negative' : 'change-neutral');
        const row = `
            <tr>
                <td>${stock.symbol}</td>
                <td>${stock.name}</td>
                <td>${stock.price.toFixed(2)}</td>
                <td class="${changeClass}">${formatPercentage(stock.changesPercentage)}</td>
                <td class="${changeClass}">${stock.change.toFixed(2)}</td>
                <td>${stock.yearHigh.toFixed(2)}</td>
                <td>${stock.yearLow.toFixed(2)}</td>
                <td>${formatNumber(stock.marketCap)}</td>
                <td>${formatNumber(stock.volume)}</td>
                <td>${stock.eps.toFixed(2)}</td>
                <td>${stock.pe.toFixed(2)}</td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}
getStockData()
    .then(data => updateTable(data))
    .catch(error => console.error('주식 데이터 가져오기 실패:', error));