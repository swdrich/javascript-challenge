console.log("app.js is loaded");

// from data.js
var tableData = data;
console.log(tableData);

// Create reference to table in index page
var tbody = d3.select("tbody");

// Loop through data and add to rows
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Create event handler to search for date
// Select form
var form = d3.select("#form");

// Select button
var button = d3.select("#filter-btn");

// Create event handlers
form.on("submit", runEnter);
button.on("click", runEnter);

// Build out function
function runEnter() {

    // Prevent refresh
    d3.event.preventDefault();

    // Select input element
    var inputElement = d3.select("#datetime");

    // Get value
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // Filter
    var filteredByDate = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredByDate);
    
    // Clear table
    d3.select("tbody").selectAll("tr").remove();

    // Add filtered data to table
    filteredByDate.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    // Add print statement
    console.log("filtering complete")
};

