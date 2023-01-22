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

