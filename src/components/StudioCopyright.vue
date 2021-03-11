<template>
  <div class="studioCopyright">
    <div class="studioCopyright__title">Channel copyright</div>
    <div class="studioCopyright__head">
      <div class="studioCopyright__head__list">Removal requests</div>
      <div class="studioCopyright__head__list">NEW REMOVAL REQUEST</div>
    </div>
    <div class="studioCopyright__nothing">
      <img
        :src="kittenball"
        alt="nothing found image"
        class="studioCopyright__nothing__image"
      />
      <div class="studioCopyright__nothing__text">Nothing to see yet</div>
      <div class="studioCopyright__nothing__subText">
        You haven't submmited any
        <span class="link--subText">copyright takedown request.</span>
      </div>
      <div v-if="request == false" class="studioCopyright__nothing__subText">
        Looking for a copyright claim somebody made on your video? Check the
        <span class="link--subText">video list.</span>
      </div>
    </div>
    <div v-if="request" class="studioCopyright__component"></div>
  </div>
</template>

<script>
import kittenball from "@/assets/kittenball.png";
import { reactive, toRefs } from "vue";

export default {
  name: "StudioCopyright",
  setup() {
    const state = reactive({
      request: false
    });
    return { ...toRefs(state), kittenball };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.studioCopyright {
  width: 100%;
  height: 100%;
  font-family: Roboto, Arial, sans-serif;
}
.studioCopyright__title {
  width: 100%;
  height: 70px;
  text-align: left;
  line-height: 90px;
  font-size: 1.5rem;
  text-indent: 25px;
  font-weight: 500;
}
.studioCopyright__head {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.studioCopyright__head__list {
  margin-left: 25px;
  margin-right: 25px;
  line-height: 50px;
  font-weight: 500;
  font-size: 0.9rem;
  color: dodgerblue;
}
.studioCopyright__head__list:first-child {
  border-bottom: 3px solid dodgerblue;
}
.studioCopyright__nothing {
  width: 500px;
  height: 250px;
  margin: 150px auto;
}
.studioCopyright__nothing__image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0 0 5px grey;
}
.studioCopyright__nothing__text {
  margin: 5px auto;
  font-size: 0.95rem;
  color: grey;
}
.studioCopyright__nothing__subText {
  font-size: 0.85rem;
  color: grey;
}
.link--subText {
  color: dodgerblue;
  cursor: pointer;
}
.studioCopyright__component {
  width: 100%;
  height: 100%;
}
</style>
