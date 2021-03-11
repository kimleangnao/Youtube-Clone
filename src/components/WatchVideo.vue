<template>
  <div class="watchVideo">
    <div class="watchVideo__video">
      <div class="watchVideo__video__play">
        <VideoPlay />
      </div>
      <div class="watchVideo__video__details">
        <div class="watchVideo__video__details__title">
          <div class="watchVideo__video__details__title__hastag">
            #WIN #WIN
          </div>
          <div class="watchVideo__video__details__title__text">
            Beautiful Sky
          </div>
        </div>
        <div class="watchVideo__video__details__info">
          <div
            v-if="viewportWidth == 7"
            class="watchVideo__video__details__viewsAndDate"
          >
            400K
          </div>
          <div v-else class="watchVideo__video__details__viewsAndDate">
            400,400 views &bullet; Aug 5, 2020
          </div>
          <div class="watchVideo__video__details__metricAndFunction">
            <div
              title="like"
              class="watchVideo__video__details__metricAndFunction__like"
            >
              <svg
                class="watchVideo__video__details__metricAndFunction__like__svg"
              >
                <path
                  d="M0 15 L 4 15 L 4 35 L 0 35 "
                  class="watchVideo__video__details__metricAndFunction__like__svg__grey"
                />
                <path
                  d="M 7 35 L 7 15 L 18 7 L 20 10 L 18 15 L 27 15 L 30 20 L 27 35Z"
                  class="watchVideo__video__details__metricAndFunction__like__svg__grey"
                />
              </svg>
              <div
                class="watchVideo__video__details__metricAndFunction__like__num"
              >
                323
              </div>
            </div>
            <div class="watchVideo__video__details__metricAndFunction__ratio">
              <div
                class="watchVideo__video__details__metricAndFunction__ratio__like"
              ></div>
            </div>
            <div
              title="dislike"
              class="watchVideo__video__details__metricAndFunction__dislike"
            >
              <svg
                class="watchVideo__video__details__metricAndFunction__dislike__svg"
              >
                <path
                  d="M 30 7 L 30 27 L 26 27 L 26 7"
                  class="watchVideo__video__details__metricAndFunction__dislike__svg__grey"
                />
                <path
                  d="M 23 7 L 23 27 L 12 35 L 10 32 L 12 27 L 3 27 L 0 20 L 3 7 "
                  class="watchVideo__video__details__metricAndFunction__dislike__svg__grey"
                />
              </svg>
              <div
                class="watchVideo__video__details__metricAndFunction__dislike__num"
              >
                300
              </div>
            </div>
            <div
              title="Share?"
              class="watchVideo__video__details__metricAndFunction__share"
            >
              <svg
                class="watchVideo__video__details__metricAndFunction__share__svg"
              >
                <path
                  d="M 0 35 Q 3 18, 15 20 L 15 10 L 30 23 L 15 36 L 15 26 Q 3 24, 0 35"
                  class="watchVideo__video__details__metricAndFunction__share__svg__grey"
                />
              </svg>
              <div
                class="watchVideo__video__details__metricAndFunction__share__text"
              >
                SHARE
              </div>
            </div>
            <div class="watchVideo__video__details__metricAndFunction__save">
              <svg
                class="watchVideo__video__details__metricAndFunction__save__svg"
              >
                <path
                  d="M 5 17 L 24 17 L 24 19 L 5 19"
                  class="watchVideo__video__details__metricAndFunction__save__svg__grey"
                />
                <path
                  d="M 5 22 L 24 22 L 24 24 L 5 24"
                  class="watchVideo__video__details__metricAndFunction__save__svg__grey"
                />
                <path
                  d="M 5 27 L 18 27 L 18 29 L 5 29"
                  class="watchVideo__video__details__metricAndFunction__save__svg__grey"
                />
                <path
                  d="M 20 27 L 35 27 L 35 29 L 20 29"
                  class="watchVideo__video__details__metricAndFunction__save__svg__grey"
                />
                <path
                  d="M 27 22 L 29 22 L 29 35 L 27 35 Z"
                  class="watchVideo__video__details__metricAndFunction__save__svg__grey"
                />
              </svg>
              <div
                class="watchVideo__video__details__metricAndFunction__save__text"
              >
                SAVE
              </div>
            </div>
            <div class="watchVideo__video__details__metricAndFunction__report">
              <svg
                class="watchVideo__video__details__metricAndFunction__report__svg"
              >
                <circle
                  cx="15"
                  cy="24"
                  r="3"
                  class="watchVideo__video__details__metricAndFunction__report__svg__grey"
                />
                <circle
                  cx="25"
                  cy="24"
                  r="3"
                  class="watchVideo__video__details__metricAndFunction__report__svg__grey"
                />
                <circle
                  cx="35"
                  cy="24"
                  r="3"
                  class="watchVideo__video__details__metricAndFunction__report__svg__grey"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="watchVideo__video__user">
        <div class="watchVideo__video__user__wrap">
          <div class="watchVideo__video__user__wrapLogoAndName">
            <div
              class="watchVideo__video__user__wrap__channelWrap"
              @click="goToChannel"
            >
              <img
                :src="channelProfile"
                alt="channel profile"
                class="watchVideo__video__user__wrap__channelWrap__profile"
              />
            </div>
            <div class="watchVideo__video__user__wrap__channelNameWrap">
              <div
                class="watchVideo__video__user__wrap__channelNameWrap__name"
                @click="goToChannel"
              >
                Redi
              </div>
              <div
                class="watchVideo__video__user__wrap__channelNameWrap__subscribeNumber"
              >
                1.93M subscribers
              </div>
            </div>
          </div>

          <div class="watchVideo__video__user__wrap__channelSubscribeWrap">
            <button
              class="watchVideo__video__user__wrap__channelSubscribeWrap__button"
            >
              SUBSCRIBE
            </button>
            <div
              class="watchVideo__video__user__wrap__channelSubscribeWrap__bell hide__bell"
            >
              <svg
                class="watchVideo__video__user__wrap__channelSubscribeWrap__bell__svg"
              >
                <path
                  d="M 23.5 10 L 23.5 5 L 25.5 5 L 25.5 10"
                  class="watchVideo__video__user__wrap__channelSubscribeWrap__bell__svg__grey--fill"
                />
                <path
                  d="M15 30 L 15 20 Q 15 12, 25 10 Q 35 12, 35 20 L 35 30 L 37 32 L 13 32 Z"
                  class="watchVideo__video__user__wrap__channelSubscribeWrap__bell__svg__grey"
                />
                <path
                  d="M 22 34 Q 25 40, 28 34"
                  class="watchVideo__video__user__wrap__channelSubscribeWrap__bell__svg__grey--fill"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="watchVideo__video__user__descriptionWrap">
          <div
            :class="[
              height50px
                ? 'watchVideo__video__user__descriptionWrap__details height50px'
                : 'watchVideo__video__user__descriptionWrap__details '
            ]"
          >
            <span
              class="watchVideo__video__user__descriptionWrap__details__span"
            >
              This music will accompany you in a spiritual dimension. Ideal for
              reiki practice and meditation. Namaste
            </span>
            <br />
            <br />
            <span>
              You can download this track with the title "Energy Healing" here:
              <br />
              iTunes:
            </span>
            <a href="https://apple.co/3m3Yzj5">https://apple.co/3m3Yzj5</a>
            <br />
            <span>Amazon: </span>
            <a href="https://amzn.to/3q1cngo">https://amzn.to/3q1cngo</a> <br />
            <span>7 Digital: </span>
            <a href="https://bit.ly/3mlQA0B">https://bit.ly/3mlQA0B</a> <br />
            <span
              >Streaming music: <br />
              Spotify:
            </span>
            <a href="https://spoti.fi/3nSjcz6">https://spoti.fi/3nSjcz6</a>
            <br />
            <span>Deezer: </span>
            <a href="https://bit.ly/3m5D1lV">https://bit.ly/3m5D1lV</a> <br />
            <span>YouTube Music: </span>
            <a href="https://bit.ly/39tgGLU">https://bit.ly/39tgGLU</a> <br />
          </div>
        </div>
        <div
          v-if="height50px"
          class="watchVideo__video__user__moreOrLess"
          @click="ShowMore"
        >
          SHOW MORE
        </div>
        <div
          v-else
          class="watchVideo__video__user__moreOrLess"
          @click="ShowMore"
        >
          SHOW LESS
        </div>
      </div>
      <div v-if="vifComment == false" class="watchVideo__video__commentSection">
        <div class="watchVideo__video__commentSection__countAndSort">
          <div
            class="watchVideo__video__commentSection__countAndSort__commentsCount"
          >
            4,000,000 Comments
          </div>
          <div class="watchVideo__video__commentSection__countAndSort__sort">
            <svg class="watchVideo__video__commentSection__countAndSort__svg">
              <path
                d="M15 13 L 40 13 L 40 15 L 15 15 Z"
                class="watchVideo__video__commentSection__countAndSort__svg__grey"
              />
              <path
                d="M15 18 L 30 18 L 30 20 L 15 20 Z"
                class="watchVideo__video__commentSection__countAndSort__svg__grey"
              />
              <path
                d="M15 23 L 20 23 L 20 25 L 15 25 Z"
                class="watchVideo__video__commentSection__countAndSort__svg__grey"
              />
            </svg>
            <div
              class="watchVideo__video__commentSection__countAndSort__sort__span"
            >
              SORT BY
            </div>
          </div>
        </div>
        <div class="watchVideo__video__commentSection__postComment">
          <PostComment :myWidth="viewportWidth" type="COMMENT" />
        </div>
        <div class="watchVideo__video__commentSection__postComment__comments">
          <Comments :myWidth="viewportWidth" type="REPLY" :pinned="true" />
        </div>
        <div class="comments__details__reply" @click="clickToViewReply">
          <svg class="comments__details__reply__svg">
            <path
              d="M0 11 L 10 11 L 5 18Z"
              class="comments__details__reply__svg__dodgerBlue"
            />
          </svg>
          <div class="comments__details__reply__text">
            View 100K replies
          </div>
        </div>
        <div
          class="watchVideo__video__commentSection__replyToComment"
          v-if="viewReply"
        >
          <Comments
            :myWidth="viewportWidth"
            type="REPLYTOREPLY"
            :pinned="false"
          />
        </div>
      </div>
    </div>
    <div class="watchVideo__recommend">
      <div class="watchVideo__recommend__next">
        <RecommendVideo :space="false" :video="nextVideo" />
      </div>
      <div class="watchVideo__recommend__more">
        <template v-for="(video, index) in recommendVideos" :key="index">
          <RecommendVideo :space="true" :video="video" />
        </template>
      </div>
      <button
        v-if="viewportWidth == 7"
        class="watchVideo__recommend__moreButton"
      >
        SHOW MORE
      </button>
    </div>
  </div>
  <div
    v-if="vifComment == true"
    class="watchVideo__commentSection--smallDevice"
  >
    <div class="watchVideo__video__commentSection__countAndSort">
      <div
        class="watchVideo__video__commentSection__countAndSort__commentsCount"
      >
        4,000,000 Comments
      </div>
      <div class="watchVideo__video__commentSection__countAndSort__sort">
        <svg class="watchVideo__video__commentSection__countAndSort__svg">
          <path
            d="M15 13 L 40 13 L 40 15 L 15 15 Z"
            class="watchVideo__video__commentSection__countAndSort__svg__grey"
          />
          <path
            d="M15 18 L 30 18 L 30 20 L 15 20 Z"
            class="watchVideo__video__commentSection__countAndSort__svg__grey"
          />
          <path
            d="M15 23 L 20 23 L 20 25 L 15 25 Z"
            class="watchVideo__video__commentSection__countAndSort__svg__grey"
          />
        </svg>
        <div
          class="watchVideo__video__commentSection__countAndSort__sort__span"
        >
          SORT BY
        </div>
      </div>
    </div>
    <div class="watchVideo__video__commentSection__postComment">
      <PostComment :myWidth="viewportWidth" type="COMMENT" />
    </div>
    <div class="watchVideo__video__commentSection__postComment__comments">
      <Comments :myWidth="viewportWidth" type="REPLY" :pinned="true" />
    </div>
    <div class="comments__details__reply" @click="clickToViewReply">
      <svg class="comments__details__reply__svg">
        <path
          d="M0 11 L 10 11 L 5 18Z"
          class="comments__details__reply__svg__dodgerBlue"
        />
      </svg>
      <div class="comments__details__reply__text">
        View 100K replies
      </div>
    </div>
    <div
      class="watchVideo__video__commentSection__replyToComment"
      v-if="viewReply"
    >
      <Comments :myWidth="viewportWidth" type="REPLYTOREPLY" :pinned="false" />
    </div>
  </div>
</template>

<script>
import imageLogo from "@/assets/profile.png";
import { onMounted, reactive, toRefs } from "vue";
import Comments from "@/components/Comments.vue";
import PostComment from "@/components/PostComment.vue";
import RecommendVideo from "@/components/RecommendVideo.vue";
import VideoPlay from "@/components/VideoPlay.vue";

export default {
  name: "WatchVideo",
  components: { Comments, PostComment, RecommendVideo, VideoPlay },

  setup() {
    const state = reactive({
      channelProfile: imageLogo,
      height50px: true,
      hideCommentFunctions: true,
      description: "",
      viewReply: true,
      nextVideo: {
        id: "1",
        profilePicture: imageLogo,
        thumbnail: imageLogo,
        channelName: "ExampleName1",
        title:
          "This will be a very very very long title, let keep it going for a while longer",
        viewscount: 400_000,
        uploadDate: "Jul 28 1993",
        videoLength: "5:35"
      },
      recommendVideos: [
        {
          id: "2",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName2",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2012",
          videoLength: "10:55"
        },
        {
          id: "3",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName3",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2019",
          videoLength: "1:25"
        },
        {
          id: "4",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName4",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2016",
          videoLength: "23:35"
        },
        {
          id: "5",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName5",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2018",
          videoLength: "8:16"
        },
        {
          id: "6",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName6",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2009",
          videoLength: "18:10"
        },
        {
          id: "7",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName7",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2003",
          videoLength: "55:28"
        },
        {
          id: "8",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName8",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2012",
          videoLength: "36:42"
        },
        {
          id: "9",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName9",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2010",
          videoLength: "6:52"
        },
        {
          id: "10",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName10",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2005",
          videoLength: "45:45"
        },
        {
          id: "2",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName2",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2012",
          videoLength: "10:55"
        },
        {
          id: "3",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName3",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2019",
          videoLength: "1:25"
        },
        {
          id: "4",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName4",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2016",
          videoLength: "23:35"
        },
        {
          id: "5",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName5",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2018",
          videoLength: "8:16"
        },
        {
          id: "6",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName6",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2009",
          videoLength: "18:10"
        },
        {
          id: "7",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName7",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2003",
          videoLength: "55:28"
        },
        {
          id: "8",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName8",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2012",
          videoLength: "36:42"
        },
        {
          id: "9",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName9",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2010",
          videoLength: "6:52"
        },
        {
          id: "10",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName10",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2005",
          videoLength: "45:45"
        }
      ],
      viewportWidth: 10,
      vifComment: false
    });

    const ShowMore = () => {
      state.height50px = !state.height50px;
    };
    const clickToViewReply = () => {
      state.viewReply = !state.viewReply;
    };
    onMounted(() => {
      let viewWidth = document.documentElement.clientWidth;
      if (viewWidth >= 1824) {
        state.viewportWidth = 10;
      } else if (viewWidth >= 1224) {
        state.viewportWidth = 9;
      } else if (viewWidth >= 768) {
        state.viewportWidth = 8;
      } else if (viewWidth >= 321) {
        state.viewportWidth = 7;
      }
      checkIfSmallDeviceComment();
    });
    const checkViewport = () => {
      //
      window.addEventListener("resize", function() {
        let viewWidth = document.documentElement.clientWidth;
        if (viewWidth >= 1824) {
          state.viewportWidth = 10;
        } else if (viewWidth >= 1224) {
          state.viewportWidth = 9;
        } else if (viewWidth >= 768) {
          state.viewportWidth = 8;
        } else if (viewWidth >= 321) {
          state.viewportWidth = 7;
        }
        checkIfSmallDeviceComment();
      });
    };
    checkViewport();
    const checkIfSmallDeviceComment = () => {
      if (state.viewportWidth == 7) {
        state.vifComment = true;
      } else if (state.viewportWidth == 8) {
        state.vifComment = true;
      } else state.vifComment = false;
    };

    const goToChannel = () => {
      window.location.href = "/channel/dfdf";
    };
    return {
      ...toRefs(state),
      ShowMore,
      clickToViewReply,
      checkIfSmallDeviceComment,
      goToChannel
    };
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
    width: 30%;
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
  width: 51%;
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
