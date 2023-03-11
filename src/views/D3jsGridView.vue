<template>
    <div class="center-title">
        <span>D3</span>
    </div>

    <div class="level-1">
        <D3RoundChar></D3RoundChar>
    </div>
</template>

<script setup lang="ts">
import D3RoundChar from '@/components/D3/D3RoundChar.vue';


</script>

<style lang="scss" scoped>
.center-title {
    span {
        font-size: 30px;
        font-weight: bolder;
    }

    margin: 20px;
    box-shadow: 5px 5px 5px 3px #BDC3C7;
    height: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
}

.level-1 {
    margin: 20px;
}
</style>