<template>
  <div class="gameprofile">
    <ChannelGameProfileBanner />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import ChannelGameProfileBanner from "@/components/ChannelGameProfileBanner.vue";
export default {
  components: { ChannelGameProfileBanner },
  setup() {
    const state = reactive({});

    return { ...toRefs(state) };
  }
};
</script>

<style scoped>
.gameprofile {
  width: 100%;
  height: 100%;
}
</style>
