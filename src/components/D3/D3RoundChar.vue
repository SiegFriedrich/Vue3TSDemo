<template>
    <div class="frame">
        <div class="center-content"></div>

    </div>
</template>

<script setup lang="ts">
import * as d3 from 'd3'
import { onMounted } from 'vue';
onMounted(() => {
    initialize();
})
const initialize = () => {
    const dataSet = [5, 10, 15, 20]
    const colorSet = ['#EF3d59', '#E17A47', '#EFC958', '#344E5C']
    const postColorSet = ['#EF3d59', '#E17A47', '#EFC958', '#344E5C']
    const width = 1000;
    const height = 1000;
    const svg = d3
        .select('.center-content')
        .append('svg')
        .attr('class', 'outer-svg')
        .attr('width', width)
        .attr('height', height)
    // .attr('fill', '#4Ab19D')

    const circles = svg.selectAll('circle')
        .data(dataSet)
        .enter()
        .append('circle')
        .attr('cx', (d, i) => (d + 10 * i * d + 50))
        .attr('cy', 100)
        .attr('r', (d, i) => d * 2)
        .attr('fill', (d, i) => colorSet[i])
        .transition().duration(5000).style('fill', (d, i) => {
            console.log(`before --- ${colorSet}`)
            colorSet.reverse;
            console.log(`after --- ${colorSet}`)
            return colorSet[i]
        });
}
</script>

<style lang="scss" scoped>
.frame {
    border-radius: 20px;
    box-shadow: 5px 5px 5px 3px burlywood;
}
</style>