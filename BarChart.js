const aequitasMessages = getMessages(aequitasData).map(x => x.length);
const alphaMessages = getMessages(alphaData).map(x => x.length);
const tsxMessages = getMessages(tsxData).map(x => x.length);
const ratio = Math.max.apply(Math, tsxMessages) / 400;

for (let i = 0; i < aequitasMessages.length; i++) {
    aequitasMessages[i] = Math.round(aequitasMessages[i]/ratio);
    alphaMessages[i] = Math.round(alphaMessages[i]/ratio);
    tsxMessages[i] = Math.round(tsxMessages[i]/ratio);
    console.log(aequitasMessages[i]);
    console.log(alphaMessages[i]);
    console.log(tsxMessages[i]);
}



const data = [aequitasMessages, alphaMessages, tsxMessages];



const w = 1000;
const h = 500;
const padding = 17;

const xScale = d3.scaleLinear()
    .domain([0, 3])
    .range([170, w - 170]);

const yScale = d3.scaleLinear()
    .domain([0, 7500])
    .range([h - padding, padding]);

const svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .style('margin', '15px')
    .attr('fill', '--primary')
    .attr('width', 150)
    .attr('height', (d) => d[120])
    .attr('x', (d, i) => (i+1) * 200)
    .attr('y', (d) => h - d[120] - padding);


let tickLabels = ['Aequitas', 'Alpha', 'TSX'];
const xAxis = d3.axisBottom(xScale)
                .ticks(3)
                .tickValues([0.5, 1.5, 2.5])
                .tickFormat((d, i) => tickLabels[i]);

const yAxis = d3.axisLeft(yScale);

svg.append("g")
       .attr("transform", "translate(0, " +(h-padding)+")")
       .call(xAxis);
svg.append("g")
    .attr("transform", "translate(170, 0)")
    .call(yAxis);