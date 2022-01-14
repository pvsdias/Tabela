function placePilots(pilot) {
    const imgAndText = document.createElement("div");
    imgAndText.setAttribute("class", "container")

    const img = document.createElement("img");
    img.setAttribute("src", `./img/${pilot.pilot}.png`);
    img.setAttribute("class", "tabela");

    const points = document.createElement("div")
    points.setAttribute("class", "centered");
    points.appendChild(document.createTextNode(pilot.points))

    imgAndText.appendChild(img);
    imgAndText.appendChild(points);

    const element = document.getElementById("body");
    element.appendChild(imgAndText);
}

data.sort(function(a, b){return b.points - a.points});
data.forEach(pilot => {
    placePilots(pilot)
});

