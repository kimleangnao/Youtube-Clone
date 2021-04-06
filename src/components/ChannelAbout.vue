<template>
  <div class="ca">
    <div class="ca__left">
      <div class="ca__left__descriptionTitle">Description</div>
      <div class="ca__left__description">
        {{ user.description }}
      </div>
      <div class="ca__left__details" v-if="location">
        <div class="ca__left__details__title">
          Details
        </div>
        <div class="ca__left__details__location">
          <div class="ca__left__details__location__title">Location:</div>
          <div class="ca__left__details__location__name">
            {{ user.location }}
          </div>
        </div>
      </div>
      <div class="ca__left__links">
        <div class="ca__left__links__title">Links</div>
        <div class="ca__left__links__wrap">
          <template v-for="social in user.links" :key="social.id">
            <a class="ca__left__links__wrap__link" :href="social.link">{{
              social.text
            }}</a>
          </template>
        </div>
      </div>
    </div>
    <div class="ca__right">
      <div class="ca__right__wrap">Stats</div>
      <div class="ca__right__wrap">Joined {{ user.joinDate }}</div>
      <div class="ca__right__wrap" v-if="totalViews">
        {{ user.totalViews }} views
      </div>
      <svg class="ca__right__report">
        <path
          d="M0 30 L 0 0 L 20 0 18 3 L 30 3 L 30 20 L 16 20 L 18 18 L 3 18 L 3 30 Z"
          class="svg__grey"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChannelAbout",
  props: {
    user: {
      type: Object,
      required: true
    },
    totalViews: Boolean,
    location: Boolean
  },
  setup() {
    return {};
  }
};
</script>

<style scoped>
.ca {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.ca__left {
  width: 65%;
}
.ca__left__descriptionTitle {
  width: 100%;
  height: 50px;
  margin-top: 30px;
  text-align: left;
  line-height: 50px;
  font-weight: 500;
}
.ca__left__description {
  width: 100%;
  text-align: left;
  padding-bottom: 30px;
  border-bottom: 1px solid lightgrey;
}
.ca__left__details {
  width: 100%;
  height: 130px;
  border-bottom: 1px solid lightgrey;
}
.ca__left__details__title {
  width: 100%;
  height: 50px;
  line-height: 60px;
  text-align: left;
  font-weight: 500;
}
.ca__left__details__location {
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: row nowrap;
  font-size: 0.9rem;
  color: grey;
}
.ca__left__details__location__title {
  line-height: 60px;
}
.ca__left__details__location__name {
  line-height: 60px;
  margin-left: 30px;
  color: rgb(68, 68, 68);
}

.ca__left__links {
  width: 100%;
}
.ca__left__links__title {
  width: 100%;
  height: 50px;
  text-align: left;
  font-weight: 500;
  line-height: 50px;
}
.ca__left__links__wrap {
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: space-around;
}
.ca__left__links__wrap__link {
  text-align: left;
  height: 30px;
  line-height: 30px;
  margin: 0px 0 8px 0;
  text-decoration: none;
  font-size: 0.9rem;
}

.ca__right {
  width: 30%;
  height: 400px;
  text-align: left;
}
.ca__right__wrap {
  text-align: left;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid lightgrey;
  line-height: 50px;
  font-size: 0.9rem;
}
.ca__right__wrap:first-child {
  margin-top: 30px;
  font-size: 1rem;
  font-weight: 500;
}
.ca__right__report {
  width: 30px;
  height: 30px;
  line-height: 50px;
  font-size: 0.9rem;
  margin-top: 10px;
  transform: scale(0.6);
}
.ca__right__report:hover {
  cursor: pointer;
}
.svg__grey {
  fill: grey;
  stroke: grey;
}
</style>
