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

    console.log("button clicked!")
    // Prevent refresh
    d3.event.preventDefault();

    // Filter by Date
    var dateValue = d3.select("#datetime").property("value");
    console.log(dateValue);

    if (dateValue === "") {
        var filteredByDate = tableData;
    } else {
    var filteredByDate = tableData.filter(sighting => sighting.datetime === dateValue);
    }
    console.log(filteredByDate);

    // Filter by City
    var cityValue = d3.select("#city").property("value");
    console.log(cityValue);
    
    if (cityValue === "") {
        var filteredByCity = filteredByDate;
    } else {
        var filteredByCity = filteredByDate.filter(sighting => sighting.city === cityValue);
    }
    console.log(filteredByCity);

    // Filter by State
    var stateValue = d3.select("#state").property("value");
    console.log(stateValue);

    if (stateValue === "") {
        var filteredByState = filteredByCity;
    } else {
        var filteredByState = filteredByCity.filter(sighting => sighting.state === stateValue);
    }
    console.log(filteredByState);

    // Filter by Country
    var countryValue = d3.select("#country").property("value");
    console.log(countryValue);

    if (countryValue === "") {
        var filteredByCountry = filteredByState;
    } else {
        var filteredByCountry = filteredByState.filter(sighting => sighting.country === countryValue);
    }
    console.log(filteredByCountry);

    // Filter by Shape
    var shapeValue = d3.select("#shape").property("value");
    console.log(shapeValue);

    if (shapeValue === "") {
        var filteredByShape = filteredByCountry;
    } else {
        var filteredByShape = filteredByCountry.filter(sighting => sighting.shape === shapeValue);
    }
    console.log(shapeValue);

    // Clear table
    d3.select("tbody").selectAll("tr").remove();

    // Add filtered data to table
    filteredByShape.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    // Add print statement
    console.log("filtering complete")
};

// Create Event handler to clear filters from data

var clearButton = d3.select("#clear-filter-btn");

clearButton.on("click", runClear);

// Build runClear function

function runClear() {
    console.log("clearing filters");
    
    location.reload();
    
    console.log(tableData);
};