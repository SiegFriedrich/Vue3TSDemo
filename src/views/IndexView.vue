import { onMounted } from 'vue';
<template>
    <div class="index">
        <h1>看见世界</h1>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';


onMounted(() => {
    console.log();
});

setInterval(() => {

}, 2000);

</script>

<style lang="scss" scoped>
.index {
    h1 {
        color: white;
        font-size: 12vw;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: url('@/assets/metropolitan.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>