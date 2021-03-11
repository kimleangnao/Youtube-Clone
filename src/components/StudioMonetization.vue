<template>
  <div class="studioMonetization">
    <div class="studioMonetization__title">Channel monetization</div>
    <div class="studioMonetization__wrap">
      <img
        :src="investment"
        alt="growth image"
        class="studioMonetization__wrap__img"
      />
      <div class="studioMonetization__wrap__title">Grow with YouTube</div>
      <div class="studioMonetization__wrap__subTitle">
        As a YouTube partner, you'll be eligible to earn money from your videos,
        get creator support, and more.
        <span class="link--subText"> Learn more</span>
      </div>
      <div class="studioMonetization__wrap__subText">
        To get into the YouTube Partner Program, your channel needs 4,000 public
        watch hours in the last 12 months, and 1,000 subscribers. Your channel
        will also get reviewed to make sure it follows
        <span class="link--subText"> YouTube monetization policies.</span>
      </div>
      <div class="studioMonetization__wrap__requirement">
        <svg class="studioMonetization__wrap__requirement__svg">
          <path d="M20 50 Q 20 25, 50 20 Q 80 25, 80 50" class="svg__blue" />
          <circle cx="50" cy="50" r="40" class="svg__blue" />
          <circle cx="50" cy="51" r="30" class="svg__white" />
          <path d="M50 48 L 30 45 L 50 45" class="svg__grey" />
          <path d="M0 50 L 100 50 L 100 60 L 0 60Z" class="svg__white" />
        </svg>
        <div class="studioMonetization__wrap__requirement__text">
          <div class="studioMonetization__wrap__requirement__text__yours">
            1 subscriber
          </div>
          <div class="studioMonetization__wrap__requirement__text__require">
            1,000 required
          </div>
        </div>
        <svg class="studioMonetization__wrap__requirement__svg">
          <path d="M20 50 Q 20 25, 50 20 Q 80 25, 80 50" class="svg__blue" />
          <circle cx="50" cy="50" r="40" class="svg__blue" />
          <circle cx="50" cy="51" r="30" class="svg__white" />
          <path d="M50 48 L 30 45 L 50 45" class="svg__grey" />
          <path d="M0 50 L 100 50 L 100 60 L 0 60Z" class="svg__white" />
        </svg>
        <div class="studioMonetization__wrap__requirement__text">
          <div class="studioMonetization__wrap__requirement__text__yours">
            0 public watch hours
          </div>
          <div class="studioMonetization__wrap__requirement__text__require">
            4,000 required
          </div>
        </div>
      </div>
      <div class="studioMonetization__wrap__notify">
        NOTIFY ME WHEN I"M ELIGIBLE
      </div>
    </div>
  </div>
</template>

<script>
import investment from "@/assets/investment.jpg";
export default {
  name: "StudioMonetization",

  setup() {
    return { investment };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.studioMonetization {
  width: 100%;
  height: 100%;
  font-family: Roboto, Arial, sans-serif;
}
.studioMonetization__title {
  width: 100%;
  height: 70px;
  line-height: 90px;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 500;
  text-indent: 25px;
}
.studioMonetization__wrap {
  width: 500px;
  height: 100%;
  margin: 100px auto;
}
.studioMonetization__wrap__img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0 0 15px grey;
}
.studioMonetization__wrap__title {
  font-size: 1.3rem;
  margin: 10px auto;
  font-weight: 500;
}
.studioMonetization__wrap__subTitle {
  margin: 10px auto;
}
.studioMonetization__wrap__subText {
  margin: 10px auto;
  font-size: 0.9rem;
  color: grey;
}
.link--subText {
  color: dodgerblue;
  cursor: pointer;
}
.studioMonetization__wrap__requirement {
  width: 100%;
  height: 60px;
  border: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
}
.studioMonetization__wrap__requirement__svg {
  width: 20%;
  height: 100%;
  border-radius: 2px;
}
.studioMonetization__wrap__requirement__text {
  width: 30%;
  height: 100%;
  text-align: left;
  font-size: 0.9rem;
}
.svg__blue {
  fill: rgb(156, 195, 233);
  stroke: rgb(156, 195, 233);
}
.svg__white {
  fill: white;
  stroke: white;
}
.svg__grey {
  fill: lightgrey;
  stroke: lightgrey;
}
.studioMonetization__wrap__requirement__text__yours {
  margin: 10px 0 5px;
}
.studioMonetization__wrap__requirement__text__require {
  color: grey;
}
.studioMonetization__wrap__notify {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 2px;
  margin: 10px auto;
  border: 1px solid dodgerblue;
  color: white;
  background-color: dodgerblue;
}
.studioMonetization__wrap__notify:hover {
  cursor: pointer;
}
</style>
