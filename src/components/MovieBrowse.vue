<template>
  <div class="mb">
    <WrapComponent
      :myWidth="myWidth"
      title="Recommended movies for you"
      :playall="false"
      :nextButton="true"
      componentType="movie"
    >
      <template v-if="myWidth == 7">
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
      </template>
      <template v-if="myWidth == 8">
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
      </template>
      <template v-if="myWidth == 9">
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
      </template>
      <template v-if="myWidth == 10">
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
      </template>
    </WrapComponent>
    <WrapComponent
      :myWidth="myWidth"
      title="Free To watch"
      :playall="false"
      :nextButton="true"
      componentType="movie"
      :viewall="true"
    >
      <template v-if="myWidth == 7">
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
      </template>
      <template v-if="myWidth == 8">
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
      </template>
      <template v-if="myWidth == 9">
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
      </template>
      <template v-if="myWidth == 10">
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
      </template>
    </WrapComponent>
    <WrapComponent
      :myWidth="myWidth"
      title="Top Selling"
      :playall="false"
      :nextButton="true"
      componentType="movie"
    >
      <template v-if="myWidth == 7">
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
      </template>
      <template v-if="myWidth == 8">
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
      </template>
      <template v-if="myWidth == 9">
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
      </template>
      <template v-if="myWidth == 10">
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
        <Movie title="The Fallen" />
      </template>
    </WrapComponent>
  </div>
</template>

<script>
import WrapComponent from "@/components/WrapComponent.vue";
import Movie from "@/components/Movie.vue";

export default {
  name: "MovieBrowse",
  components: { WrapComponent, Movie },
  props: {
    myWidth: {
      type: Number,
      required: false
    }
  },
  setup() {
    return {};
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
.mb {
  width: 100%;
  font-family: "Roboto", Arial, sans-serif;
}
.mb__title {
  width: 100%;
  height: 50px;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  line-height: 50px;
}
</style>
