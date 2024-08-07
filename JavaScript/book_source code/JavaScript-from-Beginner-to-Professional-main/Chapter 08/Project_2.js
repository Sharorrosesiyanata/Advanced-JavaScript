let endDate = "August 12 2025";

function countdown() {
    let total = Date.parse(endDate) - new Date();
    let days = Math.floor(total / (1000 * 60 * 60 * 24));
    let hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
    let mins = Math.floor((total / 1000 / 60) % 60);
    let secs = Math.floor((total / 1000) % 60);
    return {
        days,
        hrs,
        mins,
        secs
    };
}

function update() {
    let temp = countdown();
    let output = "";
    for (const property in temp) {
        output += (`${property}: ${temp[property]} `);
    }
    console.log(output);
    setTimeout(update, 2000);
}

update();
