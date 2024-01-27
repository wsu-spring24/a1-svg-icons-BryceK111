// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// First: Set up your name
let std_name = "Bryce Johnson"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`

//Then: comes everything else
import * as d3 from "d3";
console.log("icon 1")
let svg1 = d3.select('main')
    .append('svg')
    .attr('width',100)
    .attr('height', 100)
    .style('background', 'transparent')
    .style("fill", "transparent")
    .attr("fill", 'white');

svg1.append("circle")
    .style("stroke", "black")
    .style("stroke-width", 13)
    .style("fill", "white")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 15);

for (let i = 0; i < 6; i++) {
    svg1.append("rect")
        .attr('x', 42.5)
        .attr('y', 20)
        .attr('width', 15)
        .attr('height', 10)
        .attr("transform", `rotate(${i * 60}, 50, 50)`)
        .attr('stroke', 'black')
        .attr('fill', 'black')
}

let interpol_rotate = d3.interpolateString('rotate(0, 0, 0)', 'rotate(360, 0, 0)')
svg1.transition()
    .attrTween("transform",function(d,i,a){return interpol_rotate})
    .duration(4000)



console.log("icon 2")
let svg2 = d3.select("main")
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .attr('background', '#a9a9a9') // change background color

svg2.append('path')
    .style("stroke", "black")
    .style("fill", "none")
    .style("stroke-width", 3)
    .attr("d", "M25,75 L25,25 L45,25 L45,35, L75,35, L75,75 Z")

let obj_rect = svg2.append("rect")
    .attr("x",25)
    .attr("y",35)
    .attr("width", 50)
    .attr("height", 40)
    .attr("stroke", 'black')
    .attr("stroke-width", 3)
    .attr("fill", '#a9a9a9')

obj_rect
    .transition()
    .attr("transform", "skewX(-20)")
    .attr("transform-origin", "25 75")
    .duration(1000)

