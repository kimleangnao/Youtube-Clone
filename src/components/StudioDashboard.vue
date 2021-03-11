<template>
  <div class="studioDashboard">
    <div class="studioDashboard__title">
      <div class="studioDashboard__title__text">Channel dashboard</div>
      <div class="studioDashboard__title__actions">
        <div class="studioDashboard__title__actions__upload">
          <svg class="studioDashboard__title__actions__upload__svg">
            <path
              d="M20 29 L 12 29 L 12 30 L 28 30 L 28 29 L 20 29"
              class="svg__red"
            />

            <path
              d="M20 26 L 17 26 L 17 18 L 12 18 L 20 10 L 28 18 L 23 18 L 23 26 L 20 26 Z"
              class="svg__grey"
            />
          </svg>
        </div>
        <div class="studioDashboard__title__actions__live">
          <svg class="studioDashboard__title__actions__live__svg">
            <path d="M13 13 Q 7 20, 13 27 " class="svg__grey--nofill" />
            <path d="M15 15 Q 11 20, 15 25 " class="svg__grey--nofill" />
            <circle cx="20" cy="20" r="3" class="svg__red" />
            <path d="M25 15 Q 29 20, 25 25 " class="svg__grey--nofill" />
            <path d="M28 13 Q 33 20, 28 27 " class="svg__grey--nofill" />
          </svg>
        </div>
      </div>
    </div>
    <div class="studioDashboard__content">
      <div class="studioDashboard__content__upload">
        <div class="studioDashboard__content__upload__inner">
          <div class="studioDashboard__content__upload__inner__image">
            <img
              :src="uploadImage"
              alt="image camera woman"
              class="studioDashboard__content__upload__inner__image__img"
            />
          </div>
          <div class="studioDashboard__content__upload__inner__text">
            Want to see metrics on your recent video? Upload and publish a video
            to get started.
          </div>
          <button class="studioDashboard__content__upload__inner__button">
            UPLOADS VIDEOS
          </button>
        </div>
      </div>
      <div class="studioDashboard__content__analytics">
        <div class="studioDashboard__content__analytics__title">
          Channel analytics
        </div>
        <div class="studioDashboard__content__analytics__subscriber">
          <div class="studioDashboard__content__analytics__subscriber__text">
            Current subscribers
          </div>
          <div class="studioDashboard__content__analytics__subscriber__amount">
            1
          </div>
        </div>
        <div class="studioDashboard__content__analytics__summary">
          <div class="studioDashboard__content__analytics__summary__text">
            Summary
          </div>
          <div class="studioDashboard__content__analytics__summary__subText">
            Last 28 days
          </div>
          <div class="studioDashboard__content__analytics__summary__views">
            <div
              class="studioDashboard__content__analytics__summary__views__title"
            >
              Views
            </div>
            <div
              class="studioDashboard__content__analytics__summary__views__percentage"
            >
              0 0%
            </div>
          </div>
          <div class="studioDashboard__content__analytics__summary__watchTime">
            <div
              class="studioDashboard__content__analytics__summary__watchTime__title"
            >
              Watch time (hours)
            </div>
            <div
              class="studioDashboard__content__analytics__summary__watchTime__percentage"
            >
              0.0 0%
            </div>
          </div>
        </div>
        <div class="studioDashboard__content__analytics__topVideo">
          <div class="studioDashboard__content__analytics__topVideo__title">
            Top Videos
          </div>
          <div class="studioDashboard__content__analytics__topVideo__stats">
            Last 48 hours &bullet; Views
          </div>
        </div>
        <div class="studioDashboard__content__analytics__goto">
          GO TO CHANNEL ANALYTICS
        </div>
      </div>
      <div class="studioDashboard__content__helps">
        <div class="studioDashboard__content__helps__ideas">
          <div class="studioDashboard__content__helps__title">
            Ideas for you
          </div>
          <div class="studioDashboard__content__helps__subTitle">
            Project your channel
          </div>
          <div class="studioDashboard__content__helps__subText">
            Your account is at greater risk of attack without 2-Step
            Verifcation. Turn it on for extra security
          </div>
          <div class="studioDashboard__content__helps__getstarted">
            <div class="studioDashboard__content__helps__getstarted__text">
              GET STARTED
            </div>
            <div class="studioDashboard__content__helps__getstarted__option">
              <i class="fas fa-ellipsis-v"></i>
            </div>
          </div>
        </div>
        <div class="studioDashboard__content__helps__issues">
          <div class="studioDashboard__content__helps__title">
            YouTube Known issues
          </div>
          <div class="studioDashboard__content__helps__issues__subText">
            [Fixed][Feb 25] Multiple reports of channel pages not loading.
          </div>
        </div>
        <div class="studioDashboard__content__helps__new">
          <div class="studioDashboard__content__helps__new__title">
            What's new in Studio
          </div>
          <div class="studioDashboard__content__helps__new__list">
            Customize your channel in Studio
          </div>
          <div class="studioDashboard__content__helps__new__list">
            Protect your privacy with new blurring features
          </div>
          <div class="studioDashboard__content__helps__new__list">
            See more Studio updates
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uploadImage from "@/assets/camera-woman.png";

export default {
  name: "StudioDashboard",
  setup() {
    return { uploadImage };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.studioDashboard {
  width: 1278px;
  height: 100%;
  color: black;
}
.studioDashboard__title {
  width: 100%;
  height: 55px;
  display: flex;
  flex-flow: row nowrap;
}
.studioDashboard__title__text {
  width: 90%;
  height: 100%;
  line-height: 75px;
  font-size: 1.5rem;
  text-align: left;
  text-indent: 25px;
  font-weight: 500;
  font-family: Roboto, Arial, sans-serif;
}
.studioDashboard__title__actions {
  width: 10%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.studioDashboard__title__actions__upload {
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}
.studioDashboard__title__actions__live {
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}
.studioDashboard__title__actions__upload__svg,
.studioDashboard__title__actions__live__svg {
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
}
.studioDashboard__title__actions__upload__svg:hover,
.studioDashboard__title__actions__live__svg:hover {
  cursor: pointer;
}

.svg__grey {
  stroke: grey;
  fill: grey;
}
.svg__grey--nofill {
  stroke: grey;
  fill: transparent;
  stroke-width: 2px;
}
.svg__red {
  stroke: red;
  fill: red;
}

.studioDashboard__content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.studioDashboard__content__upload {
  width: 392px;
  height: 500px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 25px;
  padding: 10px;
}
.studioDashboard__content__upload__inner {
  width: 100%;
  height: 100%;
  border: 1px dashed lightgrey;
}
.studioDashboard__content__upload__inner__image {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin: 150px auto 0;
}
.studioDashboard__content__upload__inner__image__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transform: scaleX(-1);
}
.studioDashboard__content__upload__inner__text {
  font-size: 0.9rem;
  width: 80%;
  text-align: center;
  margin: 0 auto;
  color: grey;
  font-family: Roboto, Arial, sans-serif;
}
.studioDashboard__content__upload__inner__button {
  margin: 20px auto;
  font-family: Roboto, Arial, sans-serif;
  background-color: rgb(23, 119, 216);
  color: white;
  border: unset;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 10px 10px;
  border-radius: 2px;
}
.studioDashboard__content__upload__inner__button:hover {
  cursor: pointer;
}
.studioDashboard__content__upload__inner__button:focus {
  outline: unset;
}

.studioDashboard__content__analytics {
  width: 392px;
  height: 429px;
  background-color: white;
  border: 1px solid lightgrey;
  margin-top: 20px;
  border-radius: 5px;
}
.studioDashboard__content__analytics__title {
  width: 344px;
  font-family: Roboto, Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: left;
  margin: 20px auto 0;
}
.studioDashboard__content__analytics__subscriber {
  width: 344px;
  height: 110px;
  border-bottom: 1px solid lightgrey;
  font-family: Roboto, Arial, sans-serif;
  margin: 0 auto;
}
.studioDashboard__content__analytics__subscriber__text {
  width: 100%;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: left;
  margin: 10px auto 0;
  text-align: left;
}
.studioDashboard__content__analytics__subscriber__amount {
  text-align: left;
  font-size: 2rem;
}
.studioDashboard__content__analytics__summary {
  width: 344px;
  height: 145px;
  border-bottom: 1px solid lightgrey;
  font-family: Roboto, Arial, sans-serif;
  margin: 0 auto;
}
.studioDashboard__content__analytics__summary__text {
  text-align: left;
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  font-family: Roboto, Arial, sans-serif;
  margin-top: 10px;
}
.studioDashboard__content__analytics__summary__subText {
  text-align: left;
  width: 100%;
  font-size: 0.75rem;
  font-weight: 400;
  margin-top: 5px;
  color: grey;
  font-family: Roboto, Arial, sans-serif;
}
.studioDashboard__content__analytics__summary__views {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-flow: row nowrap;
}
.studioDashboard__content__analytics__summary__views__title {
  width: 70%;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 400;
}
.studioDashboard__content__analytics__summary__views__percentage {
  width: 30%;
  width: 30%;
  text-align: right;
  font-size: 0.8rem;
  font-weight: 400;
}
.studioDashboard__content__analytics__summary__watchTime {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-flow: row nowrap;
}
.studioDashboard__content__analytics__summary__watchTime__title {
  width: 70%;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 400;
}
.studioDashboard__content__analytics__summary__watchTime__percentage {
  width: 30%;
  width: 30%;
  font-size: 0.8rem;
  font-weight: 400;
  text-align: right;
}
.studioDashboard__content__analytics__topVideo {
  width: 344px;
  font-family: Roboto, Arial, sans-serif;
  margin: 0 auto;
  text-align: left;
}
.studioDashboard__content__analytics__topVideo__title {
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  font-family: Roboto, Arial, sans-serif;
  margin-top: 10px;
}
.studioDashboard__content__analytics__topVideo__stats {
  text-align: left;
  width: 100%;
  font-size: 0.75rem;
  font-weight: 400;
  margin-top: 5px;
  color: grey;
  font-family: Roboto, Arial, sans-serif;
}
.studioDashboard__content__analytics__goto {
  width: 344px;
  font-family: Roboto, Arial, sans-serif;
  margin: 22px auto;
  text-align: left;
  font-weight: 500;
  color: dodgerblue;
  font-size: 0.9rem;
}
.studioDashboard__content__analytics__goto:hover {
  cursor: pointer;
}

.studioDashboard__content__helps {
  width: 392px;
  margin-top: 20px;
  border-radius: 5px;
}
.studioDashboard__content__helps__ideas {
  width: 100%;
  height: 320px;
  background-color: white;
  border: 1px solid lightgrey;
  margin-top: 0px;
  border-radius: 5px;
}
.studioDashboard__content__helps__title {
  width: 344px;
  font-family: Roboto, Arial, sans-serif;
  margin: 20px auto;
  text-align: left;
  font-weight: 500;
  font-size: 1.1rem;
}
.studioDashboard__content__helps__subTitle {
  width: 344px;
  font-family: Roboto, Arial, sans-serif;
  margin: 35px auto 0;
  text-align: left;
  font-weight: 500;
  font-size: 0.85rem;
}
.studioDashboard__content__helps__subText {
  width: 50%;
  text-align: left;
  margin-left: 25px;
  margin-top: 15px;
  font-size: 0.82rem;
  line-height: 20px;
}
.studioDashboard__content__helps__getstarted {
  width: 344px;
  height: 40px;
  font-family: Roboto, Arial, sans-serif;
  margin: 110px auto 0;
  display: flex;
  flex-flow: row nowrap;
}
.studioDashboard__content__helps__getstarted__text {
  line-height: 40px;
  padding: 0 10px;
  color: dodgerblue;
  font-weight: 500;
  font-size: 0.9rem;
}
.studioDashboard__content__helps__getstarted__text:hover {
  cursor: pointer;
}
.studioDashboard__content__helps__getstarted__option {
  line-height: 40px;
  padding: 0 10px;
}
.studioDashboard__content__helps__getstarted__option .fas {
  line-height: 40px;
}

.studioDashboard__content__helps__issues {
  width: 100%;
  margin-top: 20px;
  background-color: white;
  border: 1px solid lightgrey;
  margin-top: 20px;
  border-radius: 5px;
}

.studioDashboard__content__helps__issues__subText {
  width: 344px;
  text-align: left;
  margin: 25px auto;
  font-size: 0.85rem;
}

.studioDashboard__content__helps__new {
  width: 392px;
  background-color: white;
  border: 1px solid lightgrey;
  margin-top: 20px;
  border-radius: 5px;
}
.studioDashboard__content__helps__new__title {
  text-align: left;
  width: 344px;
  margin: 0 auto;
  padding: 20px 0;
  font-size: 1.1rem;
  font-family: Roboto, Arial, sans-serif;
  font-weight: 500;
}
.studioDashboard__content__helps__new__list {
  width: 344px;
  margin: 0 auto;
  text-align: left;
  font-family: Roboto, Arial, sans-serif;
  font-size: 0.9rem;
  padding: 15px 0;
  border-bottom: 1px solid lightgrey;
}
.studioDashboard__content__helps__new__list:last-child {
  border-bottom: unset;
}
</style>
