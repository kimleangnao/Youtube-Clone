<template>
  <div class="studioCommentsPublished">
    <div class="studioCommentsPublished__wrap">
      <img
        :src="kittenball"
        class="studioCommentsPublished__wrap__img"
        alt="cat"
      />
      <div class="studioCommentsPublished__wrap__text">
        No content available
      </div>
    </div>
  </div>
</template>

<script>
import kittenball from "@/assets/kittenball.png";
export default {
  name: "StudioCommentsPublished",
  setup() {
    return { kittenball };
  }
};
</script>

<style scoped>
.studioCommentsPublished {
  width: 100%;
  height: 100%;
}
.studioCommentsPublished__wrap {
  width: 200px;
  height: 200px;
  margin: 150px auto;
}
.studioCommentsPublished__wrap__img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}
.studioCommentsPublished__wrap__text {
  color: grey;
  font-size: 0.9rem;
}
</style>
