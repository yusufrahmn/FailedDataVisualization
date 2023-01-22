// aequitasData, alphaData, tsxData

const getMessages = (data) => {
    let seconds = [];
    for (let timeElapsed = 0; timeElapsed < 240; timeElapsed++) {
        let messagesPerSecond = [];
        let x = 0;
        while (x < data.length) {
            if (data[x].TimeStampEpoch.slice(0,10) == 1673015280 + timeElapsed) { messagesPerSecond.push(data[x]); }
            x++;
        }
        seconds.push(messagesPerSecond);
    }
    return seconds;
}

const aequitasMessages = getMessages(aequitasData);
const alphaMessages = getMessages(alphaData);
const tsxMessages = getMessages(tsxData);

const data = [aequitasMessages, alphaMessages, tsxMessages];

const xScale = d3
    .

const svg = d3.select("body")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .style('margin', '5px')
    .attr('fill', 'blue')
    .attr('width', '25px')
    .attr('height', (d) => data[d][1].length)
    .attr('x', (d, i) => {})