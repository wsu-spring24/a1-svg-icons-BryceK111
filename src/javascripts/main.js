// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// First: Set up your name
let std_name = "Bryce Johnson"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`

//Then: comes everything else
// Function to create an SVG icon with animation
function createIcon(container, iconType) {
    const svg = container.append("svg")
        .attr("class", "icon");

    // Add your icon elements and animations here
    if (iconType === "circle") {
        svg.append("circle")
            .attr("cx", 50)
            .attr("cy", 50)
            .attr("r", 40)
            .attr("fill", "blue")
            .append("animate")
            .attr("attributeName", "r")
            .attr("values", "40;20;40")
            .attr("dur", "2s")
            .attr("repeatCount", "indefinite");
    } else if (iconType === "rect") {
        svg.append("rect")
            .attr("x", 10)
            .attr("y", 10)
            .attr("width", 80)
            .attr("height", 80)
            .attr("fill", "green")
            .append("animate")
            .attr("attributeName", "width")
            .attr("values", "80;40;80")
            .attr("dur", "2s")
            .attr("repeatCount", "indefinite");
    }