
// from data.js
const tableData = data;
const tbody = d3.select("tbody"); 
console.log(tableData);
// default table 
tableData.forEach((sighting) => {
      const row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
      //  cells
        var cell = row.append("td");
        cell.text([value]).attr("style","font-size:12px; text-transform: capitalize;");
      });   
}); 



const filter = d3.select("#filter-btn"); 
filter.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // clear what's already in the table 
  tbody.html("");

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  filteredData = tableData.filter(td => td.datetime === inputValue);

  // console.log(filteredData); 

  
  filteredData.forEach((sighting) => {
	    const row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
       // cells 
        var cell = row.append("td");
        cell.text([value]).attr("style","font-size:12px; text-transform: capitalize;");
        })
	     
	    
   }); 
}); 
