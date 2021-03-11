<template>
  <div class="studioCommentsHeldForReview">
    <div class="studioCommentsHeldForReview__wrap">
      <img
        :src="geometry"
        class="studioCommentsHeldForReview__wrap__img"
        alt="geometry"
      />
      <div class="studioCommentsHeldForReview__wrap__text">No comment</div>
    </div>
  </div>
</template>

<script>
import geometry from "@/assets/geometry.png";

export default {
  name: "StudioCommentsHeldForReview",
  setup() {
    return { geometry };
  }
};
</script>

<style scoped>
.studioCommentsHeldForReview {
  width: 100%;
  height: 100%;
}
.studioCommentsHeldForReview__wrap {
  width: 200px;
  height: 200px;
  margin: 150px auto;
}
.studioCommentsHeldForReview__wrap__img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
.studioCommentsHeldForReview__wrap__text {
  font-size: 0.9rem;
  color: grey;
}
</style>
