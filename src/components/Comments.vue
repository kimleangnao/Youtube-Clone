<template>
  <div class="comments">
    <div class="comments__wrapProfile">
      <img
        v-if="type == 'REPLY'"
        :src="channelLogo"
        class="comments__profile"
        alt="channel logo1"
      />
      <img
        v-else
        :src="channelLogo"
        class="comments__profile__2"
        alt="channel logo2"
      />
    </div>

    <div :class="[myWidth == 7 ? 'comments__details--7' : 'comments__details']">
      <div v-if="pinned == true" class="comments__details__pind">
        <svg class="comments__details__pind__svg">
          <path
            d="M0 8 L 10 8 L 10 9 L 0 9"
            class="comments__details__pind__svg__grey"
          />
          <path
            d="M2 9 L 8 9 L 8 15 L 2 15 Z"
            class="comments__details__pind__svg__grey"
          />
          <path
            d="M2 15 L 0 17 L 10 17 L 8 15 Z"
            class="comments__details__pind__svg__grey"
          />
          <path
            d="M 4.5 17 L 5.5 17 L 5.5 22 L 4.5 22 Z"
            class="comments__details__pind__svg__grey"
          />
        </svg>
        <div class="comments__details__pind__text">Pinned By Redi</div>
      </div>
      <div class="comments__details__userName">
        Levi23
        <span class="comments__details__userName__yearposted">2 years ago</span>
      </div>
      <div class="comments__details__comment">
        Growing old is the worst thing to ever happen. All life seems to be
        about now is work, being successful, studying ect.. Honestly wondering
        if life will ever be great again. I'm 25 now and all I ever seem to
        think about is the past and how care free I used to be. I teared up a
        little while listening to these tracks. Brought back the feeling of pure
        happiness, something that seems so distant sometimes. Yeah I have good
        times still don't get me wrong, but I don't think it will ever compare
        to being a 14 year old without a worry in the world. A magical time that
        I will cherish forever. Thanks for the memories...
      </div>
      <div class="comments__details__more">Read more</div>
      <div class="comments__details__ratio">
        <div class="comments__details__ratio__like">
          <svg class="comments__details__ratio__like__svg">
            <path
              d="M0 8 L 2 8 L 2 22 L 0 22"
              class="comments__details__ratio__like__svg__grey"
            />
            <path
              d="M5 22 L 5 8 L 16 2 L 17 4 L 15 8 L 25 8 L 28 12 L 23 22 Z"
              class="comments__details__ratio__like__svg__grey"
            />
          </svg>
        </div>
        <div class="comments__details__ratio__likeNumber">300K</div>
        <div class="comments__details__ratio__dislike">
          <svg class="comments__details__ratio__dislike__svg">
            <path
              d="M28 8 L 30 8 L 30 22 L 28 22"
              class="comments__details__ratio__dislike__svg__grey"
            />
            <path
              d="M25 8 L 25 22 L 14 28 L 13 26 L 15 22 L 5 22 L 2 18 L 5 8 Z"
              class="comments__details__ratio__dislike__svg__grey"
            />
          </svg>
        </div>
        <div class="comments__details__ratio__heart">
          <img
            :src="channelLogo"
            class="comments__details__ratio__heart__user"
            alt="profile logo"
          />
          <svg class="comments__details__ratio__heart__svg">
            <path
              d="M7.5 15 L 0 5 Q 2 -5, 7.5 4 Q 13 -5, 15 5 Z"
              class="comments__details__ratio__heart__svg__grey"
            />
          </svg>
        </div>
        <div class="comments__details__ratio__reply" @click="clickToReply">
          REPLY
        </div>
      </div>
      <div
        :class="[
          postReply ? 'comments__details__postReply' : 'hide__postReply'
        ]"
      >
        <PostComment :myWidth="myWidth" type="REPLY" />
      </div>
    </div>
  </div>
</template>

<script>
import imageLogo from "@/assets/profile.png";
import { reactive, toRefs } from "vue";
import PostComment from "@/components/PostComment.vue";

export default {
  name: "Comments",
  components: { PostComment },
  props: {
    type: {
      type: String,
      required: true
    },
    pinned: {
      type: Boolean,
      required: true
    },
    myWidth: {
      type: Number,
      required: true
    }
  },
  setup() {
    const state = reactive({
      channelLogo: imageLogo,
      postReply: false
    });
    const clickToReply = () => {
      state.postReply = !state.postReply;
    };
    return {
      ...toRefs(state),
      clickToReply
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");

.comments {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.comments__wrapProfile {
  width: 60px;
  height: 100%;
}
.comments__profile {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
.comments__profile__2 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
.comments__details {
  width: 1210px;
  margin-left: 20px;
  text-align: left;
  font-family: "Roboto", Arial, sans-serif;
}
.comments__details--7 {
  width: 88%;
  height: 100%;
  text-align: left;
  font-family: "Roboto", Arial, sans-serif;
}
.comments__details__pind {
  height: 25px;
  line-height: 30px;
  font-size: 0.85rem;
  display: flex;
  flex-flow: row nowrap;
}
.comments__details__pind__svg {
  width: 20px;
  height: 25px;
}
.comments__details__pind__svg__grey {
  fill: grey;
  stroke: grey;
}
.comments__details__pind__text {
  width: 100px;
  height: 100%;
  line-height: 26px;
}
.hide__pinned {
  display: none;
}
.comments__details__userName {
  width: 100%;
  height: 30px;
  font-weight: 500;
  line-height: 30px;
}
.comments__details__userName__yearposted {
  color: rgb(107, 101, 101);
  font-size: 0.9rem;
  font-weight: 400;
}
.comments__details__comment {
  width: 100%;
  height: 120px;
  line-height: 30px;
  overflow: hidden;
}
.comments__details__more {
  width: 80px;
  line-height: 30px;
  font-weight: 500;
  cursor: pointer;
  font-size: 0.95rem;
}

.comments__details__ratio {
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
  display: flex;
  flex-flow: row nowrap;
}
.comments__details__ratio__like {
  width: 30px;
  height: 30px;
}
.comments__details__ratio__like__svg {
  width: 100%;
  height: 100%;
}
.comments__details__ratio__like__svg__grey {
  fill: grey;
  stroke: grey;
  transform: scale(0.8);
}
.comments__details__ratio__likeNumber {
  width: 40px;
  height: 30px;
  line-height: 20px;
  font-size: 0.8rem;
}
.comments__details__ratio__dislike {
  width: 30px;
  height: 30px;
  margin-left: 5px;
}
.comments__details__ratio__dislike__svg {
  width: 100%;
  height: 100%;
  margin-top: -5px;
}
.comments__details__ratio__dislike__svg__grey {
  fill: grey;
  stroke: grey;
  transform: scale(0.8);
}

.comments__details__ratio__heart {
  width: 30px;
  height: 30px;
  margin-left: 15px;
  margin-top: -3px;
  position: relative;
}
.comments__details__ratio__heart__user {
  width: 20px;
  height: 20px;
  margin: 1px auto;
  border-radius: 50%;
  object-fit: cover;
}
.comments__details__ratio__heart__svg {
  position: absolute;
  width: 15px;
  height: 15px;
  margin: 14px -7px;
}
.comments__details__ratio__heart__svg__grey {
  fill: red;
  stroke: red;
  transform: scale(0.7);
}

.comments__details__ratio__reply {
  font-size: 0.9rem;
  margin-left: 10px;
  cursor: pointer;
  margin-top: -7px;
}

.comments__details__postReply {
  width: 90%;
}
.hide__postReply {
  display: none;
}

.comments__details__viewReplies {
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: none;
}
</style>
