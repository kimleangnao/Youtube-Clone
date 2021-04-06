<template>
  <div class="studioContentUploads">
    <div class="studioContentUploads__filters">
      <div class="studioContentUploads__filters__select">
        <input
          type="checkbox"
          name="select__video"
          class="studioContentUploads__filters__select__checkbox"
        />
        <label
          for="select__video"
          class="studioContentUploads__filters__select__label"
          >Video</label
        >
      </div>
      <div class="studioContentUploads__filters__visibility">
        <p class="studioContentUploads__filters__visibility__text">
          Visibility
        </p>
      </div>
      <div class="studioContentUploads__filters__restrictions">
        <p class="studioContentUploads__filters__restrictions__text">
          Restrictions
        </p>
      </div>
      <div class="studioContentUploads__filters__date">
        <p class="studioContentUploads__filters__date__text">
          Date <i class="fas fa-long-arrow-alt-down"></i>
        </p>
      </div>
      <div class="studioContentUploads__filters__views">
        <p class="studioContentUploads__filters__views__text">Views</p>
      </div>
      <div class="studioContentUploads__filters__comments">
        <p class="studioContentUploads__filters__comments__text">Comments</p>
      </div>
      <div class="studioContentUploads__filters__likeAndDislike">
        <p class="studioContentUploads__filters__likeAndDislike__text">
          Like (vs. dislike)
        </p>
      </div>
    </div>
    <div class="studioContentUploads__noVideo">
      <img
        :src="cameraWoman"
        alt="image no upload"
        class="studioContentUploads__noVideo__image"
      />
      <p class="studioContentUploads__noVideo__text">No content available</p>
      <button
        class="studioContentUploads__noVideo__button"
        @click="uploadSwitch"
      >
        UPLOAD VIDEOS
      </button>
    </div>
  </div>
</template>

<script>
import cameraWoman from "@/assets/camera-woman.png";

export default {
  name: "StudioContentUploads",
  props: {
    uploadSwitch: {
      type: Function,
      required: true
    }
  },
  setup() {
    return { cameraWoman };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.studioContentUploads {
  width: 100%;
  height: 100%;
}
.studioContentUploads__filters {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
}
.studioContentUploads__filters__select {
  width: 38%;
  height: 100%;
  margin-left: 25px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.studioContentUploads__filters__visibility {
  width: 10%;
  height: 100%;
}
.studioContentUploads__filters__restrictions {
  width: 10%;
  height: 100%;
}
.studioContentUploads__filters__date {
  width: 10%;
  height: 100%;
}
.studioContentUploads__filters__views {
  width: 8.6%;
  height: 100%;
}
.studioContentUploads__filters__comments {
  width: 10%;
  height: 100%;
}
.studioContentUploads__filters__likeAndDislike {
  width: 10%;
  height: 100%;
}

.studioContentUploads__noVideo {
  width: 200px;
  height: 270px;
  margin: 90px auto;
}

.studioContentUploads__noVideo__image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
}
.studioContentUploads__noVideo__text {
  color: grey;
  margin: 0;
  font-family: Roboto, Arial, sans-serif;
}
.studioContentUploads__noVideo__button {
  padding: 10px 15px;
  margin: 5px auto;
  background-color: dodgerblue;
  font-weight: 500;
  font-size: 0.9rem;
  color: white;
  border: unset;
  font-family: Roboto, Arial, sans-serif;
}
.studioContentUploads__noVideo__button:focus {
  outline: unset;
}
.studioContentUploads__noVideo__button:hover {
  cursor: pointer;
}

.studioContentUploads__filters__select__label {
  font-size: 0.8rem;
  text-align: left;
  margin-left: 20px;
}

.studioContentUploads__filters__visibility__text,
.studioContentUploads__filters__restrictions__text {
  font-size: 0.8rem;
  text-align: left;
  line-height: 25px;
}
.studioContentUploads__filters__views__text,
.studioContentUploads__filters__comments__text,
.studioContentUploads__filters__likeAndDislike__text,
.studioContentUploads__filters__date__text {
  font-size: 0.8rem;
  text-align: center;
  line-height: 25px;
}
.studioContentUploads__filters__date__text {
  font-weight: 500;
}
</style>
