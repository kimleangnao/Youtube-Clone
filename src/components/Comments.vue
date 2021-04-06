<template v-show="viewReply">
  <div class="comments--component" @click="clickToShowOption = false">
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

      <div
        :class="[myWidth == 7 ? 'comments__details--7' : 'comments__details']"
      >
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
          {{ comment.commenter }}
          <span class="comments__details__userName__yearposted"
            >2 years ago</span
          >
        </div>
        <div class="comments__details__comment">
          {{ comment.comment }}
        </div>
        <!--<div class="comments__details__more">Read more</div>-->
        <div class="comments__details__ratio">
          <div class="comments__details__ratio__like">
            <svg
              class="comments__details__ratio__like__svg"
              @click="userClickLikeComment"
            >
              <path
                d="M0 8 L 2 8 L 2 22 L 0 22"
                :class="[
                  liked
                    ? 'comments__details__ratio__like__svg__blue'
                    : 'comments__details__ratio__like__svg__grey'
                ]"
              />
              <path
                d="M5 22 L 5 8 L 16 2 L 17 4 L 15 8 L 25 8 L 28 12 L 23 22 Z"
                :class="[
                  liked
                    ? 'comments__details__ratio__like__svg__blue'
                    : 'comments__details__ratio__like__svg__grey'
                ]"
              />
            </svg>
          </div>

          <div class="comments__details__ratio__likeNumber">
            {{ likeAmount }}
          </div>
          <div class="comments__details__ratio__dislike">
            <svg
              class="comments__details__ratio__dislike__svg"
              @click="userClickDislikeComment"
            >
              <path
                d="M28 8 L 30 8 L 30 22 L 28 22"
                :class="[
                  disliked
                    ? 'comments__details__ratio__dislike__svg__blue'
                    : 'comments__details__ratio__dislike__svg__grey'
                ]"
              />
              <path
                d="M25 8 L 25 22 L 14 28 L 13 26 L 15 22 L 5 22 L 2 18 L 5 8 Z"
                :class="[
                  disliked
                    ? 'comments__details__ratio__dislike__svg__blue'
                    : 'comments__details__ratio__dislike__svg__grey'
                ]"
              />
            </svg>
          </div>
          <div v-if="comment.hearted" class="comments__details__ratio__heart">
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
          <PostComment
            :makeAreplyToComment="makeAreplyToComment"
            :myWidth="myWidth"
            :videoId="videoId"
            :commentId="comment.id"
            :clickToReply="clickToReply"
            type="REPLY"
          />
        </div>
      </div>
    </div>
    <div
      class="comments--option"
      @click.stop="clickToShowOption = !clickToShowOption"
    >
      <i class="fas fa-ellipsis-v"></i>
      <div
        class="comments--absolute--menu"
        v-if="clickToShowOption && comment.commenterId == 1"
      >
        <div class="comments--absolute--menu__option">
          <div class="comments--absolute--menu__option__icon">
            <i class="far fa-edit"></i>
          </div>
          <div class="comments--absolute--menu__option__text">Edit</div>
        </div>
        <div
          class="comments--absolute--menu__option"
          @click="deleteThisComment(comment.id)"
        >
          <div class="comments--absolute--menu__option__icon">
            <i class="far fa-trash-alt"></i>
          </div>
          <div class="comments--absolute--menu__option__text">Delete</div>
        </div>
      </div>
      <div
        v-if="clickToShowOption && comment.commenterId != 1"
        class="comments--absolute--menu"
      >
        <div class="comments--absolute--menu__option">
          <div class="comments--absolute--menu__option__icon">
            <i class="fas fa-flag"></i>
          </div>
          <div class="comments--absolute--menu__option__text">Report</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageLogo from "@/assets/profile.png";
import { reactive, toRefs } from "vue";
import PostComment from "@/components/PostComment.vue";
import EventSevice from "@/services/EventService.js";

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
    },
    videoId: {
      type: Number
    },
    comment: {
      type: Object,
      required: true
    },
    makeAreplyToComment: {
      type: Function
    },
    deleteThisComment: Function,
    userLikeCommentId: Array,
    userDislikeCommentId: Array
  },
  setup(props) {
    const state = reactive({
      channelLogo: imageLogo,
      postReply: false,
      clickToShowOption: false,
      likeAmount: null,
      liked: false,
      disliked: false,
      video: [],
      user: []
    });

    //get user and video for this video
    EventSevice.getUser(1)
      .then(response => {
        state.user = response.data;
        //console.log("data was fetch from commennt! user", response.data);
        didUserLikeThisComment();
        didUserDislikeThisComment();
      })
      .catch(error => {
        console.log("error!", error);
      });

    if (props.videoId) {
      EventSevice.getVideoId(props.videoId)
        .then(response => {
          state.video = response.data;
          getLikeAndDislike();
          //console.log("data was fetch from commennt! video", response.data);
        })
        .catch(error => {
          console.log("error!", error);
        });
    }

    const getLikeAndDislike = () => {
      for (let i = 0; i < state.video.comments.length; i++) {
        if (state.video.comments[i].id == props.comment.id) {
          //found it
          state.likeAmount = state.video.comments[i].like;
          state.dislikeAmount = state.video.comments[i].dislike;
        }
      }
    };

    const clickToReply = () => {
      state.postReply = !state.postReply;
    };

    const didUserLikeThisComment = () => {
      for (let i = 0; i < state.user.likeCommentId.length; i++) {
        if (state.user.likeCommentId[i].commentId == props.comment.id) {
          state.liked = true;
          return true;
        }
      }
      state.liked = false;
    };
    const didUserDislikeThisComment = () => {
      for (let i = 0; i < state.user.dislikeCommentId.length; i++) {
        if (state.user.dislikeCommentId[i].commentId == props.comment.id) {
          state.disliked = true;
          return true;
        }
      }
      state.disliked = false;
    };

    //userClickLike
    //userClickDislike

    const userClickLikeComment = () => {
      //does user like it before?
      //check user likeCommentId
      didUserLikeThisComment();
      if (state.liked) {
        //user liked it before
        //so now unlike it
        //remove from likeCommentId
        //remove the like from video -1
        //call to event API to update
        //video
        for (let i = 0; i < state.video.comments.length; i++) {
          if (state.video.comments[i].id == props.comment.id) {
            //found it
            if (state.video.comments[i].like > 0) {
              state.video.comments[i].like -= 1;
              state.likeAmount = state.video.comments[i].like;
              EventSevice.putVideoId(props.videoId, state.video);
            } else {
              state.video.comments[i].like = 0;
              state.likeAmount = state.video.comments[i].like;
              EventSevice.putVideoId(props.videoId, state.video);
            }
          }
        }
        //user
        for (let i = 0; i < state.user.likeCommentId.length; i++) {
          if (state.user.likeCommentId[i].commentId == props.comment.id) {
            //
            state.user.likeCommentId.splice(i, 1);
            EventSevice.putUser(1, state.user);
          }
        }
        state.liked = false;
      } else {
        const comment = {
          id: Math.floor(Math.random() * 1000000) + "",
          commentId: props.comment.id,
          commenterId: 1,
          date: "Mon Mar 22 2021 13:55:31 GMT-0700 (Pacific Daylight Time)"
        };
        if (state.disliked) {
          //if it was disliked before
          //remove the dislike from the commentId
          //add the like to user commentId
          //remove dislike from video -1
          //add the like to video +=1
          //call to API
          //update the like amount
          //update the like stated to like
          //and remove dislike state
          for (let i = 0; i < state.user.dislikeCommentId.length; i++) {
            if (state.user.dislikeCommentId[i].commentId == props.comment.id) {
              state.user.dislikeCommentId.splice(i, 1);
              state.user.likeCommentId.push(comment);
              EventSevice.putUser(1, state.user);
            }
          }
          for (let i = 0; i < state.video.comments.length; i++) {
            if (state.video.comments[i].id == props.comment.id) {
              //found it
              state.video.comments[i].dislike -= 1;
              state.video.comments[i].like += 1;
              state.likeAmount = state.video.comments[i].like;
              EventSevice.putVideoId(props.videoId, state.video);
            }
          }
          state.liked = true;
          state.disliked = false;
        } else {
          //user never like it before, like it and never dislike, it mean in neutral zone
          for (let i = 0; i < state.video.comments.length; i++) {
            if (state.video.comments[i].id == props.comment.id) {
              //found it
              state.video.comments[i].like += 1;
              state.likeAmount = state.video.comments[i].like;
              EventSevice.putVideoId(props.videoId, state.video);
            }
          }
          //
          state.user.likeCommentId.push(comment);
          EventSevice.putUser(1, state.user);

          state.liked = true;
        }
      }
    };

    const userClickDislikeComment = () => {
      //
      didUserDislikeThisComment();
      const comment = {
        id: Math.floor(Math.random() * 1000000) + "",
        commentId: props.comment.id,
        commenterId: 1,
        date: "Mon Mar 22 2021 13:55:31 GMT-0700 (Pacific Daylight Time)"
      };

      if (state.disliked) {
        //if user dislike it before
        //go through the dislike
        //remove it
        //go through video comment, remove the dislike -1
        for (let i = 0; i < state.user.dislikeCommentId.length; i++) {
          //
          if (state.user.dislikeCommentId[i].commentId == props.comment.id) {
            state.user.dislikeCommentId.splice(i, 1);
            EventSevice.putUser(1, state.user);
          }
        }
        for (let i = 0; i < state.video.comments.length; i++) {
          if (state.video.comments[i].id == props.comment.id) {
            if (state.video.comments[i].dislike > 0) {
              state.video.comments[i].dislike -= 1;
              EventSevice.putVideoId(props.videoId, state.video);
            } else {
              state.video.comments[i].dislike = 0;
              EventSevice.putVideoId(props.videoId, state.video);
            }
          }
        }
        state.disliked = false;
      } else {
        //if user never dislike
        console.log("statelike:", state.liked);
        if (state.liked) {
          //ask if user like it before?
          for (let i = 0; i < state.user.likeCommentId.length; i++) {
            if (state.user.likeCommentId[i].commentId == props.comment.id) {
              //remove the like, add to the dislike in user API
              state.user.likeCommentId.splice(i, 1);
              state.user.dislikeCommentId.push(comment);
              EventSevice.putUser(1, state.user);
            }
          }
          for (let i = 0; i < state.video.comments.length; i++) {
            if (state.video.comments[i].id == props.comment.id) {
              //found it
              //take out the like -1, and update the like, +plus to dislike, update dislike
              state.video.comments[i].like -= 1;
              state.likeAmount = state.video.comments[i].like;
              state.video.comments[i].dislike += 1;
              EventSevice.putVideoId(props.videoId, state.video);
            }
          }
          state.disliked = true;
          state.liked = false;
        } else {
          //if never like
          for (let i = 0; i < state.video.comments.length; i++) {
            if (state.video.comments[i].id == props.comment.id) {
              //found it
              //take out the like -1, and update the like, +plus to dislike, update dislike
              state.video.comments[i].dislike += 1;
              EventSevice.putVideoId(props.videoId, state.video);
            }
          }
          state.user.dislikeCommentId.push(comment);
          EventSevice.putUser(1, state.user);
          state.disliked = true;
          state.liked = false;
        }
      }
    };

    return {
      ...toRefs(state),
      clickToReply,
      userClickLikeComment,
      userClickDislikeComment
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
.comments--component {
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.comments--component:hover .comments--option {
  display: block;
}
.comments {
  width: 95%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.comments--option {
  width: 10px;
  height: 100%;
  display: none;
  position: relative;
}
.comments--option:hover {
  cursor: pointer;
}
.fa-ellipsis-v {
  font-size: 1.3rem;
}
.comments--absolute--menu {
  position: absolute;
  width: 120px;
  background-color: white;
  box-shadow: 0 0 5px grey;
  right: 0;
}
.comments--absolute--menu__option {
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.comments--absolute--menu__option:hover {
  background-color: lightgrey;
}
.comments--absolute--menu__option__icon {
  width: 30%;
}
.comments--absolute--menu__option__text {
  text-align: left;
  width: 70%;
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
  max-height: 120px;
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
.comments__details__ratio__like__svg:hover
  .comments__details__ratio__like__svg__grey,
.comments__details__ratio__like__svg:hover
  .comments__details__ratio__like__svg__blue {
  cursor: pointer;
  fill: dodgerblue;
  stroke: dodgerblue;
}

.comments__details__ratio__like__svg__grey {
  fill: grey;
  stroke: grey;
  transform: scale(0.8);
}
.comments__details__ratio__like__svg__blue {
  fill: dodgerblue;
  stroke: dodgerblue;
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
.comments__details__ratio__dislike__svg:hover
  .comments__details__ratio__dislike__svg__grey,
.comments__details__ratio__dislike__svg:hover
  .comments__details__ratio__dislike__svg__blue {
  cursor: pointer;
  fill: red;
  stroke: red;
}
.comments__details__ratio__dislike__svg__grey {
  fill: grey;
  stroke: grey;
  transform: scale(0.8);
}
.comments__details__ratio__dislike__svg__blue {
  fill: red;
  stroke: red;
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
