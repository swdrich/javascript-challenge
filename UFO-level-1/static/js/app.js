console.log("app.js is loaded");

// from data.js
var tableData = data;
console.log(data);

// Create reference to table in index page
var tbody = d3.select("tbody");

// Loop through data and add to rows
data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
