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
    .attr('background', 'transparent')

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

console.log("icon 3")
let svg3 = d3.select("main")
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', 'transparent')

let da =[
    { x: 25, y: 65, w: 10, hs: 10, hf: 50, dy: 25},
    { x: 45, y: 65, w: 10, hs: 10, hf: 35, dy: 40},
    { x: 65, y: 65, w: 10, hs: 10, hf: 15, dy: 60}
]

let rectangles = svg3.selectAll("rect")
    .data(da)
    .enter()
    .append("rect")
    .attr("x", d => d.x)
    .attr("y", d => d.y)
    .attr("width", d => d.w)
    .attr("height", d => d.hs)
    .attr("stroke", 'black')
    .attr("stroke-width", 3)
    .attr("fill", 'black');

rectangles.transition()
    .attr("height", d => d.hf)
    .attr("y", d => d.dy)
    .duration(1000)

console.log("icon 4")
let svg4 = d3.select("main")
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', 'transparent')

svg4.append("rect")
    .attr("x",16)
    .attr("y",35)
    .attr("width", 68)
    .attr("height", 40)
    .attr("stroke", 'black')
    .attr("stroke-width", 3)
    .attr("fill", '#a9a9a9')

let td = [
    [
        {x: 20, y:75},
        {x: 80, y:75},
        {x: 50, y:55}
    ],
    [
        {x: 20, y:35},
        {x: 80, y:35},
        {x: 50, y:55}
    ],
    [
        {x: 20, y:35},
        {x: 80, y:35},
        {x: 50, y:10}
    ],
]
svg4.append("polygon")
    .attr("points", td[0].map(d => `${d.x},${d.y}`).join(" "))
    .attr("stroke", 'black')
    .attr("stroke-width", 3)
    .attr("fill", '#a9a9a9');
svg4.append("polygon")
    .attr("points", td[1].map(d => `${d.x},${d.y}`).join(" "))
    .attr("stroke", 'black')
    .attr("stroke-width", 3)
    .attr("fill", 'white');

let envelope = svg4.append("polygon")
    .attr("points", td[1].map(d => `${d.x},${d.y}`).join(" "))
    .attr("stroke", 'black')
    .attr("stroke-width", 3)
    .attr("fill", '#a9a9a9');

envelope.transition()
    .attr("points", td[2].map(d => `${d.x},${d.y}`).join(" "))
    .attr("transform-origin", "25 35")
    .duration(1000)

console.log("icon 5")
let svg5 = d3.select("main")
    .append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', '#eee')
