const aequitasMessages = getMessages(aequitasData).map(x => x.length);
const alphaMessages = getMessages(alphaData).map(x => x.length);
const tsxMessages = getMessages(tsxData).map(x => x.length);
const ratio = Math.max.apply(Math, tsxMessages) / 400;

for (let i = 0; i < aequitasMessages.length; i++) {
    aequitasMessages[i] = Math.round(aequitasMessages[i]/ratio);
    alphaMessages[i] = Math.round(alphaMessages[i]/ratio);
    tsxMessages[i] = Math.round(tsxMessages[i]/ratio);
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

let svg = d3.select("section")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .style('margin', '15px')
    .attr('fill', 'white')
    .attr('width', 150)
    .attr('height', (d) => d[0])
    .attr('x', (d, i) => (i+1) * 200)
    .attr('y', (d) => h - d[0] - padding);

    function update(data) {
        console.log()
        d3.select("width")
            .select("height")
            .select("append")
            .selectAll('rect')
            .data(data)
            .join(
                function(update) {
                    return update.attr('height', (d) => d[120]);
                }
            )
    }

update(data);
       
            // .enter()
            // .append('rect')
            // .style('margin', '15px')
            // .attr('fill', 'navy')
            // .attr('width', 150)
            // .attr('height', (d) => d[currentSecond])
    //         // .attr('x', (d, i) => (i+1) * 200)
    //         // .attr('y', (d) => h - d[currentSecond] - padding);
    //     console.log(currentSecond);
    //     currentSecond = currentSecond + 1;
    // // }, 1000);


    // .join(
    //     function(enter) {
    //       return enter
    //         .append('circle')
    //         .style('opacity', 0);
    //     },
    //     function(update) {
    //       return update.style('opacity', 1);
    //     }
    //   )

// function update(data) {
//     var text = svg.selectAll("rect")
//     .data(data);
        
//     svg.exit().remove();
    
//     svg.enter()
//         .append("rect")
//         .attr("class", "myText")
//         .attr('height', (d) => d[1])
//         .attr('x', (d, i) => (i+1) * 200)
//         .attr('y', (d) => h - d[1] - padding);
// }

// setTimeout(function() {
//     update(data);
// }, 5000);
  
// setInterval(() => {
//     svg.selectAll("rect")
//         .data(data)
//         .enter()
//         .append("rect")
//         .style('margin', '15px')
//         .attr('fill', '--primary')
//         .attr('width', 150)
//         .attr('height', (d) => d[currentSecond])
//         .attr('x', (d, i) => (i+1) * 200)
//         .attr('y', (d) => h - d[currentSecond] - padding);
//         currentSecond++;
//         console.log(currentSecond);
// }, 1000);




// function update(data) {
//     var bars = svg.selectAll("rect")
//                   .data(data);
//                   bars.exit().remove();
//                   bars.enter().append("rect")
//                   .style('margin', '15px')
//                     .attr('fill', '--primary')
//                     .attr('width', 150)
//                     .attr('height', (d) => d[currentSecond])
//                     .attr('x', (d, i) => (i+1) * 200)
//                     .attr('y', (d) => h - d[currentSecond] - padding)
// }

// let counter = 0;
// setInterval(function() {
//     new_data = 
//     update(data);
//   }, 500);



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