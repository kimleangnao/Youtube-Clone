<template>
  <template v-for="comment in comments" :key="comment.id">
    <div class="watchVideo__video__commentSection__postComment__comments">
      <Comments
        :comment="comment"
        :myWidth="viewportWidth"
        type="REPLY"
        :pinned="comment.pinned ? comment.pinned : false"
      />
    </div>
    <div class="comments__details__reply" @click="clickToViewReply">
      <svg class="comments__details__reply__svg">
        <path
          d="M0 11 L 10 11 L 5 18Z"
          class="comments__details__reply__svg__dodgerBlue"
        />
      </svg>
      <div class="comments__details__reply__text">
        View
        {{ comment.commentChild ? comment.commentChild.length : "0" }}replies
      </div>
    </div>
    <div
      v-if="viewReply"
      class="watchVideo__video__commentSection__replyToComment"
    >
      <template
        v-for="commentChild in comment.commentChild"
        :key="commentChild.id"
      >
        <Comments
          :comment="commentChild"
          :myWidth="viewportWidth"
          type="REPLYTOREPLY"
          :pinned="false"
        />
      </template>
    </div>
  </template>
</template>

<script>
import Comments from "@/components/Comments.vue";
import { reactive, toRefs } from "vue";
export default {
  name: "CommentsWrapper",
  props: {
    comments: Object,
    viewportWidth: Number
  },
  components: { Comments },
  setup(props) {
    const state = reactive({
      viewReply: false
    });

    const clickToViewReply = () => {
      state.viewReply = !state.viewReply;
    };

    console.log("comment:", props.comment);
    return { ...toRefs(state), clickToViewReply };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@media only screen and (min-width: 321px) {
  .watchVideo {
    width: 100%;
    height: 100%;
    margin: 80px auto 0;
    display: flex;
    flex-flow: row wrap;
    color: black;
  }
  .watchVideo__video {
    width: 90%;
    margin: 0 auto;
  }
  .watchVideo__video__play {
    width: 100%;
    height: 250px;
    background-color: lightgrey;
  }
  .watchVideo__video__details {
    font-family: Roboto, Arial, sans-serif;
    width: 100%;
    height: 100px;
    text-align: left;
  }
  .watchVideo__video__details__info {
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #0000001a;
  }
  .watchVideo__video__details__viewsAndDate {
    width: 10%;
    height: 100%;
    line-height: 40px;
    font-size: 0.9rem;
  }
  .watchVideo__video__details__metricAndFunction {
    width: 90%;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    transform: scale(0.95);
  }
  .watchVideo__video__user__wrap {
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .watchVideo__video__user__wrap__channelWrap {
    width: 50px;
    height: 100%;
    border-radius: 50%;
  }
  .watchVideo__video__user__wrapLogoAndName {
    width: 80%;
    display: flex;
    flex-flow: row nowrap;
    justify-items: flex-start;
  }
  .watchVideo__video__user__wrap__channelNameWrap {
    width: 70%;
    height: 100%;
    text-align: left;
    text-indent: 15px;
  }

  .watchVideo__video__user__wrap__channelSubscribeWrap {
    width: 200px;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
  }
  .watchVideo__video__user__wrap__channelSubscribeWrap__button {
    width: 60%;
    height: 100%;
    background-color: red;
    border: 1px solid red;
    color: white;
    font-size: 0.9rem;
    font-family: Roboto, Arial, sans-serif;
    font-weight: 500;
    border-radius: 3px;
    cursor: pointer;
    margin-right: 10px;
  }
  .watchVideo__video__user__descriptionWrap {
    width: 80%;
    margin-left: 66px;
    margin-top: 20px;
  }
  .watchVideo__video__user__descriptionWrap__details {
    width: 100%;
    text-align: left;
    font-size: 0.9rem;
    overflow: hidden;
  }
  .watchVideo__recommend {
    width: 95%;
    margin: 20px auto 0;
  }
  .watchVideo__recommend__next {
    width: 95%;
    margin: 0 auto;
  }
  .watchVideo__recommend__more {
    width: 95%;
    margin: 0 auto;
  }
  .watchVideo__recommend__moreButton {
    width: 100%;
    margin: 0 auto;
    font-size: 1rem;
    font-weight: 500;
    font-family: Roboto, Arial, sans-serif;
    padding: 10px 0;
    color: rgb(15, 104, 194);
    border: 1px solid rgb(15, 104, 194);
    background-color: white;
  }
  .watchVideo__recommend__moreButton:hover {
    cursor: pointer;
  }
  .watchVideo__recommend__moreButton:focus {
    outline: unset;
  }
  .watchVideo__commentSection--smallDevice {
    width: 95%;
    margin: 10px auto 0;
  }
  .watchVideo__video__commentSection__postComment {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-flow: row nowrap;
    font-family: "Roboto", Arial, sans-serif;
  }
  .watchVideo__video__commentSection__postComment__comments {
    width: 100%;
    margin-top: 30px;
  }

  .comments__details__reply {
    height: 30px;
    line-height: 30px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    cursor: pointer;
    width: 135px;
    margin-left: 60px;
  }
  .watchVideo__video__commentSection__replyToComment {
    width: 87%;
    margin-left: 60px;
  }
}
@media only screen and (min-width: 768px) {
  .watchVideo {
    width: 100%;
    height: 100%;
    margin: 80px auto 0;
    display: flex;
    flex-flow: row wrap;
    color: black;
  }
  .watchVideo__video {
    width: 95%;
    margin: 0 auto;
  }
  .watchVideo__video__play {
    width: 100%;
    height: 410px;
    background-color: lightgrey;
  }
  .watchVideo__video__details {
    font-family: Roboto, Arial, sans-serif;
    width: 100%;
    height: 100px;
    text-align: left;
  }
  .watchVideo__video__details__info {
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid#0000001a;
  }
  .watchVideo__video__details__viewsAndDate {
    width: 40%;
    height: 100%;
    line-height: 40px;
    font-size: 0.9rem;
  }
  .watchVideo__video__details__metricAndFunction {
    width: 60%;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    transform: scale(0.95);
  }
  .watchVideo__video__user__wrap {
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .watchVideo__video__user__wrap__channelWrap {
    width: 50px;
    height: 100%;
    border-radius: 50%;
  }
  .watchVideo__video__user__wrapLogoAndName {
    width: 80%;
    display: flex;
    flex-flow: row nowrap;
    justify-items: flex-start;
  }
  .watchVideo__video__user__wrap__channelNameWrap {
    width: 70%;
    height: 100%;
    text-align: left;
    text-indent: 15px;
  }

  .watchVideo__video__user__wrap__channelSubscribeWrap {
    width: 200px;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
  }
  .watchVideo__video__user__wrap__channelSubscribeWrap__button {
    width: 60%;
    height: 100%;
    background-color: red;
    border: 1px solid red;
    color: white;
    font-size: 0.9rem;
    font-family: Roboto, Arial, sans-serif;
    font-weight: 500;
    border-radius: 3px;
    cursor: pointer;
    margin-right: 10px;
  }
  .watchVideo__video__user__descriptionWrap {
    width: 80%;
    margin-left: 66px;
    margin-top: 20px;
  }
  .watchVideo__video__user__descriptionWrap__details {
    width: 100%;
    text-align: left;
    font-size: 0.9rem;
    overflow: hidden;
  }
  .watchVideo__recommend {
    width: 95%;
    margin: 20px auto 0;
  }
  .watchVideo__recommend__next {
    width: 95%;
    margin: 0 auto;
  }
  .watchVideo__recommend__more {
    width: 95%;
    margin: 0 auto;
  }
  .watchVideo__recommend__moreButton {
    width: 100%;
    margin: 0 auto;
    font-size: 1rem;
    font-weight: 500;
    font-family: Roboto, Arial, sans-serif;
    padding: 10px 0;
    color: rgb(15, 104, 194);
    border: 1px solid rgb(15, 104, 194);
    background-color: white;
  }
  .watchVideo__recommend__moreButton:hover {
    cursor: pointer;
  }
  .watchVideo__recommend__moreButton:focus {
    outline: unset;
  }
  .watchVideo__commentSection--smallDevice {
    width: 100%;
    margin: 10px auto 0;
  }
  .watchVideo__video__commentSection__postComment {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-flow: row nowrap;
    font-family: "Roboto", Arial, sans-serif;
  }
  .watchVideo__video__commentSection__postComment__comments {
    width: 100%;
    margin-top: 30px;
  }
  .comments__details__reply {
    height: 30px;
    line-height: 30px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    cursor: pointer;
    width: 135px;
    margin-left: 60px;
  }
  .watchVideo__video__commentSection__replyToComment {
    width: 87%;
    margin-left: 60px;
  }
}
@media only screen and (min-width: 1224px) {
  .watchVideo {
    width: 100%;
    height: 100%;
    margin: 80px auto 0;
    display: flex;
    flex-flow: row nowrap;
    color: black;
  }
  .watchVideo__video {
    width: 63%;
    margin: 0 auto;
  }
  .watchVideo__video__play {
    width: 100%;
    height: 420px;
    background-color: lightgrey;
  }
  .watchVideo__video__details {
    font-family: Roboto, Arial, sans-serif;
    width: 100%;
    height: 100px;
    text-align: left;
  }
  .watchVideo__video__details__info {
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid#0000001a;
  }
  .watchVideo__video__details__viewsAndDate {
    width: 40%;
    height: 100%;
    line-height: 40px;
    font-size: 0.9rem;
  }
  .watchVideo__video__details__metricAndFunction {
    width: 60%;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    transform: scale(0.95);
  }
  .watchVideo__video__user__wrap {
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .watchVideo__video__user__wrap__channelWrap {
    width: 50px;
    height: 100%;
    border-radius: 50%;
  }
  .watchVideo__video__user__wrapLogoAndName {
    width: 80%;
    display: flex;
    flex-flow: row nowrap;
    justify-items: flex-start;
  }
  .watchVideo__video__user__wrap__channelNameWrap {
    width: 70%;
    height: 100%;
    text-align: left;
    text-indent: 15px;
  }

  .watchVideo__video__user__wrap__channelSubscribeWrap {
    width: 200px;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
  }
  .watchVideo__video__user__wrap__channelSubscribeWrap__button {
    width: 60%;
    height: 100%;
    background-color: red;
    border: 1px solid red;
    color: white;
    font-size: 0.9rem;
    font-family: Roboto, Arial, sans-serif;
    font-weight: 500;
    border-radius: 3px;
    cursor: pointer;
    margin-right: 10px;
  }
  .watchVideo__video__user__descriptionWrap {
    width: 80%;
    margin-left: 66px;
    margin-top: 20px;
  }
  .watchVideo__video__user__descriptionWrap__details {
    width: 100%;
    text-align: left;
    font-size: 0.9rem;
    overflow: hidden;
  }
  .watchVideo__recommend {
    width: 424px;
  }
  .watchVideo__recommend__next {
    width: 400px;
    margin-left: 24px;
  }
  .watchVideo__recommend__more {
    margin-left: 24px;
    margin-top: 50px;
    width: 400px;
  }
  .watchVideo__recommend__moreButton {
    width: 100%;
    margin: 0 auto;
    font-size: 1rem;
    font-weight: 500;
    font-family: Roboto, Arial, sans-serif;
    padding: 10px 0;
    color: rgb(15, 104, 194);
    border: 1px solid rgb(15, 104, 194);
    background-color: white;
  }
  .watchVideo__recommend__moreButton:hover {
    cursor: pointer;
  }
  .watchVideo__recommend__moreButton:focus {
    outline: unset;
  }

  .watchVideo__video__commentSection {
    width: 100%;
    margin-top: 20px;
  }
  .watchVideo__video__commentSection__postComment {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-flow: row nowrap;
    font-family: "Roboto", Arial, sans-serif;
  }
  .watchVideo__video__commentSection__postComment__comments {
    width: 100%;
    margin-top: 30px;
  }

  .comments__details__reply {
    height: 30px;
    line-height: 30px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    cursor: pointer;
    width: 135px;
    margin-left: 60px;
  }
  .watchVideo__video__commentSection__replyToComment {
    width: 87%;
    margin-left: 60px;
  }
}
@media only screen and (min-width: 1824px) {
  .watchVideo {
    width: 80%;
    height: 100%;
    margin: 0 auto 0;
    display: flex;
    flex-flow: row nowrap;
    color: black;
    padding-top: 80px;
  }
  .watchVideo__video {
    width: 76%;
    margin: 0 auto;
  }
  .watchVideo__video__play {
    width: 100%;
    height: 720px;
    background-color: lightgrey;
  }
  .watchVideo__video__details {
    font-family: Roboto, Arial, sans-serif;
    width: 100%;
    height: 100px;
    text-align: left;
  }
  .watchVideo__video__details__info {
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid#0000001a;
  }
  .watchVideo__video__details__viewsAndDate {
    width: 40%;
    height: 100%;
    line-height: 40px;
    font-size: 0.9rem;
  }
  .watchVideo__video__details__metricAndFunction {
    width: 35%;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    transform: scale(0.9);
  }
  .watchVideo__video__user__wrap {
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .watchVideo__video__user__wrap__channelWrap {
    width: 50px;
    height: 100%;
    border-radius: 50%;
    display: flex;
    flex-flow: row nowrap;
    justify-items: flex-start;
  }
  .watchVideo__video__user__wrapLogoAndName {
    width: 80%;
    display: flex;
    flex-flow: row nowrap;
    justify-items: flex-start;
  }
  .watchVideo__video__user__wrap__channelNameWrap {
    width: 70%;
    height: 100%;
    text-align: left;
    text-indent: 15px;
  }

  .watchVideo__video__user__wrap__channelSubscribeWrap {
    width: 200px;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
  }
  .watchVideo__video__user__wrap__channelSubscribeWrap__button {
    width: 60%;
    height: 100%;
    background-color: red;
    border: 1px solid red;
    color: white;
    font-size: 0.9rem;
    font-family: Roboto, Arial, sans-serif;
    font-weight: 500;
    border-radius: 3px;
    cursor: pointer;
    margin-right: 10px;
  }
  .watchVideo__video__user__descriptionWrap {
    width: 80%;
    margin-left: 66px;
    margin-top: 20px;
  }
  .watchVideo__video__user__descriptionWrap__details {
    width: 100%;
    text-align: left;
    font-size: 0.9rem;
    overflow: hidden;
  }
  .watchVideo__recommend {
    width: 424px;
  }
  .watchVideo__recommend__next {
    width: 400px;
    margin-left: 24px;
  }
  .watchVideo__recommend__more {
    margin-left: 24px;
    margin-top: 50px;
    width: 400px;
  }
  .watchVideo__recommend__moreButton {
    width: 100%;
    margin: 0 auto;
    font-size: 1rem;
    font-weight: 500;
    font-family: Roboto, Arial, sans-serif;
    padding: 10px 0;
    color: rgb(15, 104, 194);
    border: 1px solid rgb(15, 104, 194);
    background-color: white;
  }
  .watchVideo__recommend__moreButton:hover {
    cursor: pointer;
  }
  .watchVideo__recommend__moreButton:focus {
    outline: unset;
  }

  .watchVideo__video__commentSection {
    width: 100%;
    margin-top: 20px;
  }
  .watchVideo__video__commentSection__postComment {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-flow: row nowrap;
    font-family: "Roboto", Arial, sans-serif;
  }
  .watchVideo__video__commentSection__postComment__comments {
    width: 100%;
    margin-top: 30px;
  }

  .comments__details__reply {
    height: 30px;
    line-height: 30px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    cursor: pointer;
    width: 135px;
    margin-left: 60px;
  }
  .watchVideo__video__commentSection__replyToComment {
    width: 87%;
    margin-left: 60px;
  }
}

.watchVideo__video__details__title {
  width: 100%;
  height: 50px;
  margin-top: 15px;
}
.watchVideo__video__details__title__hastag {
  width: 100%;
  height: 20px;
  font-size: 0.7rem;
  line-height: 20px;
  color: dodgerblue;
}
.watchVideo__video__details__title__text {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.2rem;
}

.watchVideo__video__details__metricAndFunction__like {
  width: 70px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.watchVideo__video__details__metricAndFunction__like__svg {
  width: 30px;
  height: 100%;
}
.watchVideo__video__details__metricAndFunction__like__svg:hover
  .watchVideo__video__details__metricAndFunction__like__svg__grey {
  cursor: pointer;
  fill: dodgerblue;
  stroke: dodgerblue;
}
.watchVideo__video__details__metricAndFunction__like__svg__grey {
  fill: grey;
  stroke: grey;
  transform: scale(0.8);
}

.watchVideo__video__details__metricAndFunction__like__num {
  width: 35px;
  height: 100%;
  font-size: 0.95rem;
  line-height: 40px;
  margin-left: 5px;
  font-weight: 500;
}
.watchVideo__video__details__metricAndFunction__dislike {
  width: 70px;
  height: 100%;
  margin-left: 15px;
  display: flex;
  flex-flow: row nowrap;
}
.watchVideo__video__details__metricAndFunction__dislike__svg {
  width: 30px;
  height: 100%;
}
.watchVideo__video__details__metricAndFunction__dislike__svg:hover
  .watchVideo__video__details__metricAndFunction__dislike__svg__grey {
  cursor: pointer;
  fill: red;
  stroke: red;
}
.watchVideo__video__details__metricAndFunction__dislike__svg__grey {
  fill: grey;
  stroke: grey;
  transform: scale(0.8);
}
.watchVideo__video__details__metricAndFunction__dislike__num {
  width: 35px;
  height: 100%;
  font-size: 0.95rem;
  line-height: 40px;
  margin-left: 5px;
  font-weight: 500;
}

.watchVideo__video__details__metricAndFunction__share {
  width: 90px;
  height: 100%;
  margin-left: 15px;
  display: flex;
  flex-flow: row nowrap;
}
.watchVideo__video__details__metricAndFunction__share:hover {
  cursor: pointer;
}
.watchVideo__video__details__metricAndFunction__share__svg {
  width: 30px;
  height: 50px;
}
.watchVideo__video__details__metricAndFunction__share__svg__grey {
  fill: grey;
  stroke: grey;
  transform: scale(0.8);
}
.watchVideo__video__details__metricAndFunction__share__text {
  width: 50px;
  height: 50px;
  line-height: 40px;
  font-weight: 500;
  margin-left: 5px;
}

.watchVideo__video__details__metricAndFunction__save {
  width: 80px;
  height: 100%;
  margin-left: 5px;
  display: flex;
  flex-flow: row nowrap;
}
.watchVideo__video__details__metricAndFunction__save:hover {
  cursor: pointer;
}
.watchVideo__video__details__metricAndFunction__save__svg {
  width: 40px;
  height: 50px;
  transform: scale(0.8);
  margin-top: -5px;
}
.watchVideo__video__details__metricAndFunction__save__svg__grey {
  fill: grey;
  stroke: grey;
}
.watchVideo__video__details__metricAndFunction__save__text {
  width: 40px;
  height: 50px;
  line-height: 40px;
  font-weight: 500;
  margin-left: 5px;
}

.watchVideo__video__details__metricAndFunction__report {
  width: 60px;
  height: 100%;
  margin-left: 5px;
}

.watchVideo__video__details__metricAndFunction__report__svg {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 10px;
  transform: scale(0.8);
  margin-top: -7px;
}
.watchVideo__video__details__metricAndFunction__report__svg:hover {
  cursor: pointer;
}
.watchVideo__video__details__metricAndFunction__report__svg__grey {
  fill: grey;
  stroke: grey;
}

.watchVideo__video__details__metricAndFunction__ratio {
  position: absolute;
  width: 155px;
  height: 3px;
  background-color: lightgrey;
  margin-top: 48px;
}
.watchVideo__video__details__metricAndFunction__ratio__like {
  height: 100%;
  background-color: grey;
}

.watchVideo__video__user {
  width: 100%;
  margin-top: 10px;
  font-family: Roboto, Arial, sans-serif;
  border-bottom: 1px solid#0000001a;
}

.watchVideo__video__user__wrap__channelWrap__profile {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.watchVideo__video__user__wrap__channelWrap__profile:hover {
  cursor: pointer;
}

.watchVideo__video__user__wrap__channelNameWrap__name {
  height: 50%;
  line-height: 30px;
  font-size: 0.95rem;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.watchVideo__video__user__wrap__channelNameWrap__name:hover {
  cursor: pointer;
}
.watchVideo__video__user__wrap__channelNameWrap__subscribeNumber {
  width: 100%;
  height: 50%;
  font-size: 0.83rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.watchVideo__video__user__wrap__channelSubscribeWrap__bell {
  width: 50px;
  height: 100%;
}
.watchVideo__video__user__wrap__channelSubscribeWrap__bell__svg {
  width: 100%;
  height: 100%;
}
.watchVideo__video__user__wrap__channelSubscribeWrap__bell__svg__grey {
  fill: transparent;
  stroke: grey;
  stroke-width: 3px;
}
.watchVideo__video__user__wrap__channelSubscribeWrap__bell__svg__grey--fill {
  fill: grey;
  stroke: grey;
}
.hide__bell {
  display: none;
}

.height50px {
  height: 50px;
}
.watchVideo__video__user__moreOrLess {
  width: 85px;
  height: 40px;
  margin-left: 66px;
  text-align: left;
  line-height: 40px;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgb(82, 80, 80);
  cursor: pointer;
}

.watchVideo__video__commentSection {
  width: 100%;
  margin-top: 20px;
}
.watchVideo__video__commentSection__countAndSort {
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
}
.watchVideo__video__commentSection__countAndSort__commentsCount {
  height: 100%;
  line-height: 40px;
  font-family: "Roboto", Arial, sans-serif;
}
.watchVideo__video__commentSection__countAndSort__sort {
  width: 140px;
  height: 100%;
  margin-left: 10px;
  display: flex;
  flex-flow: row nowrap;
}
.watchVideo__video__commentSection__countAndSort__svg {
  width: 50px;
  height: 100%;
}
.watchVideo__video__commentSection__countAndSort__svg__grey {
  fill: grey;
  stroke: grey;
}
.watchVideo__video__commentSection__countAndSort__sort__span {
  height: 100%;
  line-height: 38px;
  margin-left: 5px;
  font-size: 0.95rem;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 500;
}

/*
.watchVideo__video__commentSection__postComment {
  width: 100%;
  height: 90px;
  margin-top: 20px;
  display: flex;
  flex-flow: row nowrap;
  font-family: "Roboto", Arial, sans-serif;
  border: 1px solid red;
}

.watchVideo__video__commentSection__postComment__comments {
  width: 100%;
  margin-top: 30px;
  border: 1px solid red;
}

.comments__details__reply {
  height: 30px;
  line-height: 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  cursor: pointer;
  width: 135px;
  margin-left: 70px;
}
*/
.comments__details__reply__svg {
  width: 20px;
  height: 30px;
}
.comments__details__reply__svg__dodgerBlue {
  fill: dodgerblue;
  stroke: dodgerblue;
}
.comments__details__reply__text {
  font-family: "Roboto", Arial, sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: dodgerblue;
  width: 100%;
}
/*
.watchVideo__video__commentSection__replyToComment {
  width: 95%;
  margin-left: 70px;
}

.watchVideo__recommend {
  width: 424px;
}
.watchVideo__recommend__next {
  width: 400px;
  margin-left: 24px;
}
.watchVideo__recommend__more {
  margin-left: 24px;
  margin-top: 50px;
  width: 400px;
}*/
</style>
