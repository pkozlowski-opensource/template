<script>
  import { onMount } from "svelte";
  import { dashboardStore } from "./storage/dashboard.store.js";

  import * as d3 from "d3";

  let category = null;

  function drawViz(d3Data, g) {
    // Declare d3 layout
    var vLayout = d3
      .partition()
      .size([2 * Math.PI, Math.min(vWidth, vHeight) / 2]);

    var vRoot = d3.hierarchy(d3Data).sum(function(d) {
      return d.data.noOfIssues;
    });

    // Layout + Data
    var vNodes = vRoot.descendants();
    vLayout(vRoot);
    var vArc = d3
      .arc()
      .startAngle(function(d) {
        return d.x0;
      })
      .endAngle(function(d) {
        return d.x1;
      })
      .innerRadius(function(d) {
        return d.y0;
      })
      .outerRadius(function(d) {
        return d.y1;
      });

    // Draw on screen
    const vSlices = g
      .selectAll("path")
      .data(vNodes)
      .enter()
      .append("path")
      .style("stroke", "#fff")
      .attr("display", function(d) {
        return d.depth ? null : "none";
      })
      .attr("title", d => d.data.title)
      .style("fill", function(d) {
        return color((d.children ? d : d.parent).data.data.title);
      })
      .attr("d", vArc)
      .append("title")
      .append("text")
      .text(d => d.data.data.title);
  }

  // Prepare our physical space - should be on mount
  const vWidth = 1200;
  const vHeight = 800;
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  dashboardStore.subscribe(cAndNoOfIssues => {
    if (cAndNoOfIssues && cAndNoOfIssues.length > 0) {
      var g = d3
        .select("svg")
        .attr("width", vWidth)
        .attr("height", vHeight)
        .select("g")
        .attr("transform", "translate(" + vWidth / 2 + "," + vHeight / 2 + ")");

      const d3Data = d3
        .stratify()
        .id(d => d._id)
        .parentId(d => d.parentId)(cAndNoOfIssues);

      drawViz(d3Data, g);
    }
  });
</script>

<svg>
  <g />
</svg>
