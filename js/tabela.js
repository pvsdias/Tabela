let counter = 0

function placePilots(pilot) {
    const imgAndText = document.createElement("div");
    imgAndText.setAttribute("class", "container")

    const img = document.createElement("img");
    img.setAttribute("src", `./img/${pilot.pilot}.png`);
    img.setAttribute("class", "tabela");

    const points = document.createElement("div")
    points.setAttribute("class", "centeredLeft");
    points.appendChild(document.createTextNode(pilot.points))

    const position = document.createElement("div")
    position.setAttribute("class", "centeredRight");
    position.appendChild(document.createTextNode(positions[counter]))
    counter++

    imgAndText.appendChild(img);
    imgAndText.appendChild(points);
    imgAndText.appendChild(position);

    const element = document.getElementById("body");
    element.appendChild(imgAndText);
}

pilots.sort(function(a, b){return b.points - a.points});
pilots.forEach(pilot => {
    placePilots(pilot)
});

