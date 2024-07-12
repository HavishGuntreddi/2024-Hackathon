document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const data = JSON.parse(e.target.result);
        analyzeData(data);
      };
      reader.readAsText(file);
    }
  });

function analyzeData(data) {
  let output = "<h3>Summary of Olympic Data</h3>";

  // Example analysis: Count the number of records
  const totalRecords = data.length;
  output += `<p>Total records: ${totalRecords}</p>`;

  // Example analysis: Count medals by country
  const medalsByCountry = {};
  data.forEach((record) => {
    const country = record.country;
    if (!medalsByCountry[country]) {
      medalsByCountry[country] = { gold: 0, silver: 0, bronze: 0 };
    }
    if (record.medal === "Gold") medalsByCountry[country].gold++;
    if (record.medal === "Silver") medalsByCountry[country].silver++;
    if (record.medal === "Bronze") medalsByCountry[country].bronze++;
  });

  output += "<h4>Medals by Country</h4>";
  output +=
    "<table><tr><th>Country</th><th>Gold</th><th>Silver</th><th>Bronze</th></tr>";
  for (const country in medalsByCountry) {
    output += `<tr><td>${country}</td><td>${medalsByCountry[country].gold}</td><td>${medalsByCountry[country].silver}</td><td>${medalsByCountry[country].bronze}</td></tr>`;
  }
  output += "</table>";

  document.getElementById("dataOutput").innerHTML = output;
}
