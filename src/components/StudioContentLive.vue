<template>
  <div class="studioContentLive">
    <div class="studioContentLive__filter">
      <div class="studioContentLive__filter__select">
        <input
          type="checkbox"
          name="liveSelect"
          class="studioContentLive__filter__select__checkbox"
        />
        <label class="studioContentLive__filter__select__label"
          >Live stream</label
        >
      </div>
      <div class="studioContentLive__filter__visibility">
        <div class="studioContentLive__filter__visibility__text">
          Visibility
        </div>
      </div>
      <div class="studioContentLive__filter__restriction">
        <div class="studioContentLive__filter__restriction__text">
          Restriction
        </div>
      </div>
      <div class="studioContentLive__filter__date">
        <div class="studioContentLive__filter__date__text">
          Date <i class="fas fa-long-arrow-alt-down"></i>
        </div>
      </div>
      <div class="studioContentLive__filter__views">
        <div class="studioContentLive__filter__views__text">Views</div>
      </div>
      <div class="studioContentLive__filter__liveViewers">
        <div class="studioContentLive__filter__liveViewers__text">
          Live viewers
        </div>
      </div>
      <div class="studioContentLive__filter__comments">
        <div class="studioContentLive__filter__comments__text">Comments</div>
      </div>
      <div class="studioContentLive__filter__likeAndDislike">
        <div class="studioContentLive__filter__likeAndDislike__text">
          Likes (vs. dislikes)
        </div>
      </div>
    </div>
    <div class="studioContentLive__noLive">
      <img
        :src="cameraWoman"
        alt="live logo"
        class="studioContentLive__noLive__img"
      />
      <p class="studioContentLive__noLive__text">
        Your live streams will show up here
      </p>
      <p class="studioContentLive__noLive__link">GET STARTED</p>
    </div>
  </div>
</template>

<script>
import cameraWoman from "@/assets/camera-woman.png";
export default {
  name: "StudioContentLive",
  setup() {
    return { cameraWoman };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.studioContentLive {
  width: 100%;
  height: 100%;
}
.studioContentLive__filter {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
}
.studioContentLive__filter__select {
  margin-left: 25px;
  width: 30%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.studioContentLive__filter__select__label {
  margin-left: 25px;
  font-size: 0.85rem;
}

.studioContentLive__filter__visibility,
.studioContentLive__filter__restriction,
.studioContentLive__filter__date,
.studioContentLive__filter__views,
.studioContentLive__filter__liveViewers,
.studioContentLive__filter__comments,
.studioContentLive__filter__likeAndDislike {
  width: 9.5%;
  height: 100%;
}

.studioContentLive__filter__visibility__text,
.studioContentLive__filter__restriction__text,
.studioContentLive__filter__date__text {
  text-align: left;
  font-size: 0.85rem;
  line-height: 50px;
}
.studioContentLive__filter__date__text .fas {
  text-align: left;
  font-size: 0.85rem;
  line-height: 50px;
}
.studioContentLive__filter__views__text,
.studioContentLive__filter__liveViewers__text,
.studioContentLive__filter__comments__text,
.studioContentLive__filter__likeAndDislike__text {
  text-align: center;
  font-size: 0.85rem;
  line-height: 50px;
}

.studioContentLive__noLive {
  width: 300px;
  height: 300px;
  margin: 70px auto;
}
.studioContentLive__noLive__img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}
.studioContentLive__noLive__text {
  color: grey;
  font-size: 0.85rem;
}
.studioContentLive__noLive__link {
  color: dodgerblue;
  font-size: 0.85rem;
  font-weight: 500;
}
.studioContentLive__noLive__link:hover {
  cursor: pointer;
}
</style>
