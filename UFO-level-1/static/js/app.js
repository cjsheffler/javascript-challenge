// Coding for creating table adapted from Lesson 14-3-3
// https://ku.bootcampcontent.com/ku-coding-boot-camp/KU-OVE-DATA-PT-01-2020-U-C/tree/master/01-Lesson-Plans/14-Intro-To-JavaScript/3/Activities/03-Evr_D3_Table/Solved
// from data.js
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("#form");
console.log(data);



// Coding for filtering adapted from Lesson 14-3-9
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#date-form-input");
    var inputValue = inputElement.property("value");
    var filteredData = data.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);
};

// take data and put it into the table body.
data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});