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
button.on("click", findActiveFilters);

// I'm borrowing this approach: https://itnext.io/one-approach-to-filtering-a-d3-interactive-dashboard-f63e0244f77d

let filters = [{key:"Date", value:""},
               {key:"City", value:""},
               {key:"State", value:""},
               {key:"Country", value:""},
               {key:"Shape", value:""}];

function findActiveFilters() {
    return filters.filter(d => d.value);
}
console.log(filters);

// Build out function
function runEnter() {

    console.log("button clicked!")
    // Prevent refresh
    d3.event.preventDefault();

    // Filter by Date
    var inputDate = d3.select("#datetime");
    var dateValue = inputDate.property("value");
    console.log(dateValue);

    var filteredByDate = tableData.filter(sighting => sighting.datetime === dateValue);
    console.log(filteredByDate);

    // Filter by City
    var inputCity = d3.select("#city");
    var cityValue = inputCity.property("value");
    console.log(cityValue);
    
    var filteredByCity = filteredByDate.filter(sighting => sighting.city === cityValue);
    console.log(filteredByCity);

    // Clear table
    d3.select("tbody").selectAll("tr").remove();

    // Add filtered data to table
    filteredByCity.forEach((ufoSighting) => {
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