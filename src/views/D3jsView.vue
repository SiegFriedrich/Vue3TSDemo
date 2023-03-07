<template>
    <div class="center-title">
        <h1>D3練習</h1>
    </div>
    <span>今のプロジェクトでは、金融系で、、資産モードルの描画を求めるので、いろんなチャートが必要です</span>
    <br />
    <span>というわけで、D3jsを使っていますが。むずい！</span>
    <div class="center-content"></div>
    <svg>
        <rect width="100" height="100" fill="red"></rect>
        <circle cx="5" cy="50" r="10" fill="#EF3d59"></circle>
    </svg>

    <svg width="800px" height="300px" viewBox="0 0 80 30">

        <defs>
            <linearGradient id="Gradient01" gradientTransform="rotate(90)">
                <stop offset="20%" stop-color="#39F" />
                <stop offset="90%" stop-color="#F3F" />
            </linearGradient>
        </defs>

        <rect x="10" y="10" width="60" height="10" fill="url(#Gradient01)" />
    </svg>

    <svg width="800px" height="300px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" stroke="red"
            d="M 10,30
                                                                                                           A 20,20 0,0,1 50,30
                                                                                                           A 20,20 0,0,1 90,30
                                                                                                           Q 90,60 50,80
                                                                                                           Q 10,60 10,30 " />
    </svg>

    <svg width="800px" height="300px" viewBox="0 0 100 100">
        <path d="M 10, 30" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="10" height="10" />
    </svg>
</template>

<script setup lang="ts">
import * as d3 from 'd3';
import { onMounted } from 'vue';
const initialize = () => {
    const dataSet = [5, 10, 15, 20]
    const colorSet = ['#EF3d59', '#E17A47', '#EFC958', '#344E5C']
    const width = 500;
    const height = 500;
    const svg = d3
        .select('.center-content')
        .append('svg')
        .attr('class', 'outer-svg')
        .attr('width', width)
        .attr('heigth', height)
        .selectAll('circle')
        .data(dataSet)
        .enter()
        .append('circle')
        .attr('cx', (d, i) => (d + 3 * i * d))
        .attr('cy', 50)
        .attr('r', (d, i) => d * 2)
        .attr('fill', (d, i) => colorSet[i])
        .transition()


    // .selectAll()
    // .data(dataSet)
    // .enter()
    // .attr('transform', `translate(${width / 2},${height / 2})`)



}


onMounted(() => {
    initialize();
});


</script>

<style scoped>
.center-title {
    display: flex;
    justify-content: center;
}

.outer-svg {
    width: 500px;
    height: 500px;
}

.center-content {
    width: 400px;
    height: 400px;
    background-color: aquamarine;
}
</style>