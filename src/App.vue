import { ref } from 'vue';
<template>
  <div v-loading.fullscreen.lock="loading">
    <router-view />
  </div>
  <AlertDialog :header="alertHeader" :message="alertMessage" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useGlobalStore } from './store/global.store';
import { storeToRefs } from 'pinia';
import AlertDialog from '@/components/AlertDialog.vue'
const store = useGlobalStore();
const { loading, alertHeader, alertMessage } = storeToRefs(store);

computed(() => {
  store.loading;
});
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}

html,
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
}
</style>
