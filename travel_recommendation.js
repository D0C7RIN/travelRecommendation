function search() {
    const input = document.getElementById("searchInput").value;
    alert("Searching for: " + input);
}

function clearSearch() {
    document.getElementById("searchInput").value = "";
}
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});
let travelData = {};

// Fetch JSON data
fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => {
        travelData = data;
        console.log(data); // check in browser console
    })
    .catch(error => console.error("Error fetching data:", error));


// SEARCH FUNCTION
function search() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = ""; // clear previous results

    let results = [];

    if (input.includes("beach")) {
        results = travelData.beaches;
    } 
    else if (input.includes("temple")) {
        results = travelData.temples;
    } 
    else if (input.includes("country")) {
        results = travelData.countries;
    } 
    else {
        resultsDiv.innerHTML = "<p>No results found</p>";
        return;
    }

    displayResults(results);
}


// DISPLAY RESULTS
function displayResults(items) {
    const resultsDiv = document.getElementById("results");

    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;

        resultsDiv.appendChild(card);
    });
}


// CLEAR BUTTON FUNCTION
function clearSearch() {
    document.getElementById("searchInput").value = "";
    document.getElementById("results").innerHTML = "";
}