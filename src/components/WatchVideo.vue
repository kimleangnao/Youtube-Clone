<template>
  <div class="watchVideo">
    <div class="watchVideo__video">
      <div class="watchVideo__video__play">
        <template v-if="video.videoLink">
          <VideoPlay
            :checkIfVideoEnded="checkIfVideoEnded"
            :videoLink="video.videoLink"
            :currentIndex="playlistIndex"
            :playlistAutoplay="playlistAutoplay"
            :addToHistory="addToHistory"
          />
        </template>
        <template
          v-if="
            (isItAPlaylist && viewportWidth == 7) ||
              (isItAPlaylist && viewportWidth == 8)
          "
        >
          <div class="watchVideo__recommend__playlist">
            <div class="watchVideo__recommend__playlist__header">
              <div class="watchVideo__recommend__playlist__header__left">
                <div class="watchVideo__recommend__playlist__header__title">
                  {{ playlist.name }}
                </div>
                <div
                  class="watchVideo__recommend__playlist__header__info"
                  v-if="playlist.videos"
                >
                  {{ playlist.creator }}- {{ playlistIndex }}/{{
                    playlist.videos.length
                  }}
                </div>
              </div>
              <div
                class="watchVideo__recommend__playlist__header__right"
                @click="playlistExpand = !playlistExpand"
              >
                <i class="fas fa-chevron-up"></i>
              </div>
            </div>
            <div
              class="watchVideo__recommend__playlist__functions"
              v-if="playlistExpand"
            >
              <div
                class="watchVideo__recommend__playlist__functions__icon"
                @click="clickAutoReplay"
              >
                <i
                  :class="[
                    playlistAutoReplay
                      ? 'fas fa-redo active--replay'
                      : 'fas fa-redo'
                  ]"
                ></i>
              </div>
              <!-- 
            <div
              class="watchVideo__recommend__playlist__functions__icon"
              @click="clickShuffle"
            >
              <i
                :class="[
                  playlistShuffle
                    ? 'fas fa-random active--shuffle'
                    : 'fas fa-random'
                ]"
              ></i>
            </div>
            --></div>
            <div
              class="watchVideo__recommend__playlist__wrap"
              v-if="playlistExpand"
            >
              <template
                v-for="(video, index) in playlist.videos"
                :key="video.id"
              >
                <div
                  :class="[
                    index + 1 == playlistIndex
                      ? 'watchVideo__recommend__playlist__wrap__list playlist--active'
                      : 'watchVideo__recommend__playlist__wrap__list'
                  ]"
                  @click="goToLocation(playlist.id, index)"
                >
                  <div
                    class="watchVideo__recommend__playlist__wrap__list__icon"
                  >
                    <template v-if="index + 1 == playlistIndex">
                      <i class="fas fa-pause-circle"></i>
                    </template>
                    <template v-else>
                      <i class="fas fa-play"></i>
                    </template>
                  </div>
                  <div
                    class="watchVideo__recommend__playlist__wrap__list__thumbnail"
                  >
                    <img
                      :src="require('@/assets/' + video.thumbnail)"
                      alt="thumbnail"
                      class="watchVideo__recommend__playlist__wrap__list__thumbnail__image"
                    />
                  </div>
                  <div
                    class="watchVideo__recommend__playlist__wrap__list__info"
                  >
                    <div
                      class="watchVideo__recommend__playlist__wrap__list__info__title"
                    >
                      {{ video.title }}
                    </div>
                    <div
                      class="watchVideo__recommend__playlist__wrap__list__info__name"
                    >
                      {{ video.profileName }}
                    </div>
                  </div>
                  <div
                    class="watchVideo__recommend__playlist__wrap__list__delete"
                  >
                    <i
                      class="fas fa-trash"
                      @click.stop="clickDeleteVideoFromPlaylist(video.id)"
                    ></i>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>

      <div class="watchVideo__video__details" v-if="video">
        <div class="watchVideo__video__details__title">
          <div class="watchVideo__video__details__title__hastag"></div>
          <div class="watchVideo__video__details__title__text">
            {{ video.title }}
          </div>
        </div>
        <div class="watchVideo__video__details__info">
          <div
            v-if="viewportWidth == 7"
            class="watchVideo__video__details__viewsAndDate"
          >
            {{ viewsCount() }}
          </div>
          <div v-else class="watchVideo__video__details__viewsAndDate">
            {{ viewsCount() }} views &bullet; {{ video.profilePostDate }}
          </div>
          <div class="watchVideo__video__details__metricAndFunction">
            <div
              title="like"
              class="watchVideo__video__details__metricAndFunction__like"
            >
              <svg
                class="watchVideo__video__details__metricAndFunction__like__svg"
                @click="userClickLike"
              >
                <path
                  d="M0 15 L 4 15 L 4 35 L 0 35 "
                  :class="[
                    liked
                      ? ' watchVideo__video__details__metricAndFunction__like__svg__blue'
                      : 'watchVideo__video__details__metricAndFunction__like__svg__grey'
                  ]"
                />
                <path
                  d="M 7 35 L 7 15 L 18 7 L 20 10 L 18 15 L 27 15 L 30 20 L 27 35Z"
                  :class="[
                    liked
                      ? ' watchVideo__video__details__metricAndFunction__like__svg__blue'
                      : 'watchVideo__video__details__metricAndFunction__like__svg__grey'
                  ]"
                />
              </svg>
              <div
                class="watchVideo__video__details__metricAndFunction__like__num"
              >
                {{ video.like }}
              </div>
            </div>
            <div class="watchVideo__video__details__metricAndFunction__ratio">
              <div
                class="watchVideo__video__details__metricAndFunction__ratio__like"
                :style="{
                  width: (video.like / (video.dislike + video.like)) * 100 + '%'
                }"
              ></div>
            </div>
            <div
              title="dislike"
              class="watchVideo__video__details__metricAndFunction__dislike"
            >
              <svg
                class="watchVideo__video__details__metricAndFunction__dislike__svg"
                @click="userClickDislike"
              >
                <path
                  d="M 30 7 L 30 27 L 26 27 L 26 7"
                  :class="[
                    disliked
                      ? 'watchVideo__video__details__metricAndFunction__dislike__svg__red'
                      : 'watchVideo__video__details__metricAndFunction__dislike__svg__grey'
                  ]"
                />
                <path
                  d="M 23 7 L 23 27 L 12 35 L 10 32 L 12 27 L 3 27 L 0 20 L 3 7 "
                  :class="[
                    disliked
                      ? 'watchVideo__video__details__metricAndFunction__dislike__svg__red '
                      : 'watchVideo__video__details__metricAndFunction__dislike__svg__grey'
                  ]"
                />
              </svg>
              <div
                class="watchVideo__video__details__metricAndFunction__dislike__num"
              >
                {{ video.dislike }}
              </div>
            </div>
            <div
              @click="switchShowShare"
              title="Share ?"
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
            <div
              class="watchVideo__video__details__metricAndFunction__save"
              @click="switchShowSave"
            >
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
            <div
              class="watchVideo__video__details__metricAndFunction__report"
              @click="reportMenuSwitch"
            >
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
              <div
                v-if="reportMenu"
                class="watchVideo__video__details__metricAndFunction__report--absolute"
              >
                <div
                  @click.stop="reportMenuSwitch"
                  class="watchVideo__video__details__metricAndFunction__report--absolute__list"
                >
                  <div
                    class="watchVideo__video__details__metricAndFunction__report--absolute__list__icon"
                  >
                    <i class="fas fa-flag"></i>
                  </div>
                  <div
                    class="watchVideo__video__details__metricAndFunction__report--absolute__list__text"
                  >
                    Report
                  </div>
                </div>
              </div>
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
                {{ video.profileName }}
              </div>
              <div
                class="watchVideo__video__user__wrap__channelNameWrap__subscribeNumber"
              >
                1 Subscriber
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
            {{ video.description }}
          </div>
        </div>
        <template
          v-if="video.description ? video.description.length > 293 : false"
        >
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
        </template>
      </div>
      <div v-if="vifComment == false" class="watchVideo__video__commentSection">
        <div class="watchVideo__video__commentSection__countAndSort">
          <div
            class="watchVideo__video__commentSection__countAndSort__commentsCount"
          >
            {{ video.comments ? video.comments.length : "0" }} Comments
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
          <PostComment
            :videoId="Number(video.id)"
            :makeAReply="makeAReply"
            :myWidth="viewportWidth"
            type="COMMENT"
          />
        </div>
        <template v-for="comment in video.comments" :key="comment.id">
          <div class="watchVideo__video__commentSection__postComment__comments">
            <Comments
              :comment="comment"
              :myWidth="viewportWidth"
              :videoId="Number(video.id)"
              type="REPLY"
              :makeAreplyToComment="makeAreplyToComment"
              :pinned="comment.pinned ? comment.pined : false"
              :deleteThisComment="deleteThisComment"
              :userLikeCommentId="userLikeCommentId"
              :userDislikeCommentId="userDislikeCommentId"
            />
          </div>
          <div
            class="comments__details__reply"
            @click="clickToViewReply(comment.id)"
          >
            <svg
              class="comments__details__reply__svg"
              v-if="comment.commentChild.length > 0"
            >
              <path
                d="M0 11 L 10 11 L 5 18Z"
                class="comments__details__reply__svg__dodgerBlue"
              />
            </svg>
            <div
              v-if="comment.commentChild.length > 0"
              class="comments__details__reply__text"
            >
              View
              {{ comment.commentChild ? comment.commentChild.length : "0" }}
              replies
            </div>
          </div>
          <div
            class="watchVideo__video__commentSection__replyToComment"
            v-if="comment.viewReply"
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
      </div>
    </div>

    <div class="watchVideo__recommend">
      <template
        v-if="isItAPlaylist && viewportWidth != 7 && viewportWidth != 8"
      >
        <div class="watchVideo__recommend__playlist">
          <div class="watchVideo__recommend__playlist__header">
            <div class="watchVideo__recommend__playlist__header__left">
              <div class="watchVideo__recommend__playlist__header__title">
                {{ playlist.name }}
              </div>
              <div
                class="watchVideo__recommend__playlist__header__info"
                v-if="playlist.videos"
              >
                {{ playlist.creator }}- {{ playlistIndex }}/{{
                  playlist.videos.length
                }}
              </div>
            </div>
            <div
              class="watchVideo__recommend__playlist__header__right"
              @click="playlistExpand = !playlistExpand"
            >
              <i class="fas fa-chevron-up"></i>
            </div>
          </div>
          <div
            class="watchVideo__recommend__playlist__functions"
            v-if="playlistExpand"
          >
            <div
              class="watchVideo__recommend__playlist__functions__icon"
              @click="clickAutoReplay"
            >
              <i
                :class="[
                  playlistAutoReplay
                    ? 'fas fa-redo active--replay'
                    : 'fas fa-redo'
                ]"
              ></i>
            </div>
            <!-- 
            <div
              class="watchVideo__recommend__playlist__functions__icon"
              @click="clickShuffle"
            >
              <i
                :class="[
                  playlistShuffle
                    ? 'fas fa-random active--shuffle'
                    : 'fas fa-random'
                ]"
              ></i>
            </div>
            -->
          </div>
          <div
            class="watchVideo__recommend__playlist__wrap"
            v-if="playlistExpand"
          >
            <template v-for="(video, index) in playlist.videos" :key="video.id">
              <div
                :class="[
                  index + 1 == playlistIndex
                    ? 'watchVideo__recommend__playlist__wrap__list playlist--active'
                    : 'watchVideo__recommend__playlist__wrap__list'
                ]"
                @click="goToLocation(playlist.id, index)"
              >
                <div class="watchVideo__recommend__playlist__wrap__list__icon">
                  <template v-if="index + 1 == playlistIndex">
                    <i class="fas fa-pause-circle"></i>
                  </template>
                  <template v-else>
                    <i class="fas fa-play"></i>
                  </template>
                </div>
                <div
                  class="watchVideo__recommend__playlist__wrap__list__thumbnail"
                >
                  <img
                    :src="require('@/assets/' + video.thumbnail)"
                    alt="thumbnail"
                    class="watchVideo__recommend__playlist__wrap__list__thumbnail__image"
                  />
                </div>
                <div class="watchVideo__recommend__playlist__wrap__list__info">
                  <div
                    class="watchVideo__recommend__playlist__wrap__list__info__title"
                  >
                    {{ video.title }}
                  </div>
                  <div
                    class="watchVideo__recommend__playlist__wrap__list__info__name"
                  >
                    {{ video.profileName }}
                  </div>
                </div>
                <div
                  class="watchVideo__recommend__playlist__wrap__list__delete"
                >
                  <i
                    class="fas fa-trash"
                    @click.stop="clickDeleteVideoFromPlaylist(video.id)"
                  ></i>
                </div>
              </div>
            </template>
          </div>
        </div>
      </template>
      <template v-for="(video, index) in recommendVideos" :key="index">
        <template v-if="!isItAPlaylist">
          <div class="watchVideo__recommend__next" v-if="index == 0">
            <RecommendVideo :space="false" :video="video" />
          </div>
        </template>

        <div class="watchVideo__recommend__more" v-if="index != 0">
          <RecommendVideo :space="true" :video="video" />
        </div>
      </template>
      <!-- 
      <button
        v-if="viewportWidth == 7"
        class="watchVideo__recommend__moreButton"
      >
        SHOW MORE
      </button>
      -->
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
        {{ video.comments ? video.comments.length : "0" }} Comments
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
      <PostComment
        :videoId="Number(video.id)"
        :makeAReply="makeAReply"
        :myWidth="viewportWidth"
        type="COMMENT"
      />
    </div>
    <template v-for="comment in video.comments" :key="comment.id">
      <div class="watchVideo__video__commentSection__postComment__comments">
        <Comments
          :comment="comment"
          :myWidth="viewportWidth"
          :videoId="Number(video.id)"
          type="REPLY"
          :makeAreplyToComment="makeAreplyToComment"
          :pinned="comment.pinned ? comment.pined : false"
          :deleteThisComment="deleteThisComment"
          :userLikeCommentId="userLikeCommentId"
          :userDislikeCommentId="userDislikeCommentId"
        />
      </div>
      <div
        class="comments__details__reply"
        @click="clickToViewReply(comment.id)"
      >
        <svg
          class="comments__details__reply__svg"
          v-if="comment.commentChild.length > 0"
        >
          <path
            d="M0 11 L 10 11 L 5 18Z"
            class="comments__details__reply__svg__dodgerBlue"
          />
        </svg>
        <div
          v-if="comment.commentChild.length > 0"
          class="comments__details__reply__text"
        >
          View
          {{ comment.commentChild ? comment.commentChild.length : "0" }}
          replies
        </div>
      </div>
      <div
        class="watchVideo__video__commentSection__replyToComment"
        v-if="comment.viewReply"
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
  props: {
    video: {
      type: Object,
      required: true
    },
    clickToViewReply: {
      type: Function,
      required: true
    },
    makeAReply: {
      type: Function
    },
    makeAreplyToComment: {
      type: Function
    },
    liked: Boolean,
    disliked: Boolean,
    userClickLike: Function,
    userClickDislike: Function,
    deleteThisComment: Function,
    userLikeCommentId: Array,
    userDislikeCommentId: Array,
    switchShowShare: Function,
    switchShowSave: Function,
    recommendVideos: {
      type: Array,
      required: true
    },
    isItAPlaylist: Boolean,
    playlist: Object,
    playlistIndex: Number,
    playlistAutoplay: Boolean,
    playlistAutoReplay: Boolean,
    playlistShuffle: Boolean,
    clickShuffle: Function,
    clickAutoReplay: Function,
    clickDeleteVideoFromPlaylist: Function,
    addToHistory: Function
  },
  setup(props) {
    const state = reactive({
      channelProfile: imageLogo,
      height50px: true,
      hideCommentFunctions: true,
      description: "",
      viewportWidth: 10,
      vifComment: false,
      reportMenu: false,
      playlistExpand: true
    });

    //check if the video ended
    //if it does, go to the next one if the length of the playlist -1 is > than the currentIndex
    const checkIfVideoEnded = (ended, index) => {
      if (ended && props.playlist.videos.length >= index + 1) {
        window.location.href =
          "/watch/playlist=" + props.playlist.id + "&index=" + (index + 1);
      } else if (props.playlistAutoReplay) {
        window.location.href =
          "/watch/playlist=" + props.playlist.id + "&index=" + 1;
      }
    };

    const reportMenuSwitch = () => {
      state.reportMenu = !state.reportMenu;
    };
    //console.log("watchVideo:", props.recommendVideos);
    //console.log("video:", props.video);
    const ShowMore = () => {
      state.height50px = !state.height50px;
    };
    /*
    //manipulate in the parent component, not here!!!!!!!!!!
    const clickToViewReply = id => {
      console.log("state", state.videoCurrent);
      //looking for the video with that id
      for (let i = 0; i < state.videoCurrent.comments.length; i++) {
        if (id == state.videoCurrent.comments[i].id) {
          //found it, now change it to opposite of what it is
          state.videoCurrent.comments[i].viewReply = !state.videoCurrent
            .comments[i].viewReply;
        }
      }
    };
    */
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
      console.log("check viewport!");
      if (state.viewportWidth == 7) {
        state.vifComment = true;
        console.log(state.vifComment);
      } else if (state.viewportWidth == 8) {
        state.vifComment = true;
        console.log(state.vifComment);
      } else state.vifComment = false;
    };
    const goToChannel = () => {
      window.location.href = "/channel/" + props.video.userId;
    };
    const goToLocation = (playlistId, index) => {
      //index + 1 because it start at 0
      window.location.href =
        "/watch/playlist=" + playlistId + "&index=" + (index + 1);
    };

    const viewsCount = () => {
      if (props.video) {
        let views = props.video.viewscount.toString().split("");
        let newArrayView = [];
        let indexNum = 1;

        for (let i = views.length - 1; i >= 0; i--) {
          if (indexNum == 3) {
            newArrayView.unshift(views[i]);
            if (views[i - 1] != undefined) {
              newArrayView.unshift(",");
            }

            indexNum = 1;
          } else {
            newArrayView.unshift(views[i]);
            indexNum++;
          }
        }
        return newArrayView.join("");
      }
    };

    let convertTime = function convertMs(ms) {
      let seconds = (ms / 1000).toFixed(0);
      let minutes = Math.floor(seconds / 60);
      let hours = "";
      let days = "";
      let months = "";
      let years = "";
      if (minutes > 59) {
        hours = Math.floor(minutes / 60);
        if (hours > 23) {
          days = Math.floor(hours / 24);
          if (days > 30) {
            months = Math.floor(days / 30);
            if (months > 12) {
              years = Math.floor(months / 12);
            }
          }
        }
        minutes = Math.floor(minutes % 60);
        minutes = minutes >= 10 ? minutes : "0" + minutes;
      }

      seconds = Math.floor(seconds % 60);
      seconds = seconds >= 10 ? seconds : "0" + seconds;
      return [years, months, days, hours, minutes, seconds];
    };

    const convertDate = () => {
      let startDate = new Date(props.video.profilePostDate);
      let now = Date.now();

      let result = convertTime(now - startDate.getTime());
      let [years, months, days, hours, minutes, seconds] = result;
      //console.log("year", years, months, days, hours, minutes, seconds);
      if (years >= 1) {
        return years + " year ago";
      } else if (months >= 1) {
        return months + " months ago";
      } else if (days >= 1) {
        return days + " days ago";
      } else if (hours >= 1) {
        return hours + " hours ago";
      } else if (minutes >= 1) {
        return minutes + " minutes ago";
      } else if (seconds >= 1) {
        return seconds + " seconds ago";
      } else {
        return "unknown ago";
      }
    };

    return {
      ...toRefs(state),
      imageLogo,
      ShowMore,
      checkIfSmallDeviceComment,
      goToChannel,
      reportMenuSwitch,
      convertDate,
      viewsCount,
      goToLocation,
      checkIfVideoEnded
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
  }
  .watchVideo__video__details {
    font-family: Roboto, Arial, sans-serif;
    width: 100%;
    height: 120px;
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
    width: 15%;
    height: 100%;
    line-height: 40px;
    font-size: 0.9rem;
  }
  .watchVideo__video__details__metricAndFunction {
    width: 85%;
    height: 50px;
    margin-right: 0;
    display: flex;
    flex-flow: row nowrap;
    transform: scale(0.85);
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
    min-height: 100px;
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

  .watchVideo__recommend__playlist {
    width: 100%;
    max-height: 442px;
    border: 1px solid rgb(207, 207, 207);
    margin: 0 auto;
  }
  .watchVideo__recommend__playlist__header {
    width: 100%;
    height: 60px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .watchVideo__recommend__playlist__header__left {
    width: 80%;
  }
  .watchVideo__recommend__playlist__header__title {
    text-align: left;
    font-family: Roboto, Arial, sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 10px 10px 0 10px;
  }
  .watchVideo__recommend__playlist__header__info {
    text-align: left;
    font-family: Roboto, Arial, sans-serif;
    font-size: 0.8rem;
    padding: 3px 10px 0 10px;
  }
  .watchVideo__recommend__playlist__header__right {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .watchVideo__recommend__playlist__header__right .fa-chevron-up {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    line-height: 30px;
  }
  .watchVideo__recommend__playlist__header__right .fa-chevron-up:hover {
    background-color: rgb(226, 226, 226);
    cursor: pointer;
  }
  .watchVideo__recommend__playlist__functions {
    width: 100%;
    height: 30px;
    display: flex;
    flex-flow: row nowrap;
  }
  .watchVideo__recommend__playlist__functions__icon {
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin-left: 10px;
  }
  .watchVideo__recommend__playlist__functions__icon:hover {
    cursor: pointer;
  }

  .active--replay {
    color: dodgerblue;
  }
  .active--shuffle {
    color: dodgerblue;
  }

  .watchVideo__recommend__playlist__wrap {
    width: 100%;
    height: 325px;
    overflow-y: scroll;
  }
  .watchVideo__recommend__playlist__wrap__list {
    width: 100%;
    height: 65px;
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 5px;
  }
  .watchVideo__recommend__playlist__wrap__list:hover
    .watchVideo__recommend__playlist__wrap__list__icon
    .fa-pause-circle,
  .watchVideo__recommend__playlist__wrap__list:hover
    .watchVideo__recommend__playlist__wrap__list__icon
    .fa-play,
  .watchVideo__recommend__playlist__wrap__list:hover
    .watchVideo__recommend__playlist__wrap__list__delete
    .fa-trash {
    display: block;
  }
  .playlist--active {
    background-color: rgb(235, 235, 235);
  }
  .watchVideo__recommend__playlist__wrap__list:hover {
    cursor: pointer;
    background-color: rgb(235, 235, 235);
  }
  .watchVideo__recommend__playlist__wrap__list__icon {
    width: 5%;
    height: 100%;
  }
  .watchVideo__recommend__playlist__wrap__list__icon .fa-pause-circle {
    line-height: 65px;
    font-size: 0.8rem;
    display: none;
  }
  .watchVideo__recommend__playlist__wrap__list__icon .fa-play {
    line-height: 65px;
    font-size: 0.8rem;
    display: none;
  }
  .watchVideo__recommend__playlist__wrap__list__thumbnail {
    width: 25%;
    height: 100%;
  }
  .watchVideo__recommend__playlist__wrap__list__thumbnail__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .watchVideo__recommend__playlist__wrap__list__info {
    width: 55%;
    height: 100%;
  }
  .watchVideo__recommend__playlist__wrap__list__info__title {
    width: 97%;
    max-height: 60%;
    text-align: left;
    font-size: 0.9rem;
    font-weight: 500;
    font-family: Roboto, Arial, sans-serif;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-left: 3%;
  }
  .watchVideo__recommend__playlist__wrap__list__info__name {
    margin-left: 3%;
    width: 97%;
    height: 40%;
    text-align: left;
    font-size: 0.8rem;
    line-height: 25px;
  }

  .watchVideo__recommend__playlist__wrap__list__delete {
    width: 15%;
    height: 100%;
  }
  .watchVideo__recommend__playlist__wrap__list__delete .fa-trash {
    line-height: 65px;
    display: none;
  }
  .watchVideo__recommend__playlist__wrap__list__delete .fa-trash:hover {
    cursor: pointer;
    color: red;
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
  }
  .watchVideo__video__details {
    font-family: Roboto, Arial, sans-serif;
    width: 100%;
    height: 120px;
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

  .watchVideo__recommend__playlist {
    width: 100%;
    max-height: 442px;
    border: 1px solid rgb(207, 207, 207);
    margin: 0 auto;
  }
  .watchVideo__recommend__playlist__header {
    width: 100%;
    height: 60px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .watchVideo__recommend__playlist__header__left {
    width: 80%;
  }
  .watchVideo__recommend__playlist__header__title {
    text-align: left;
    font-family: Roboto, Arial, sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 10px 10px 0 10px;
  }
  .watchVideo__recommend__playlist__header__info {
    text-align: left;
    font-family: Roboto, Arial, sans-serif;
    font-size: 0.8rem;
    padding: 3px 10px 0 10px;
  }
  .watchVideo__recommend__playlist__header__right {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .watchVideo__recommend__playlist__header__right .fa-chevron-up {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    line-height: 30px;
  }
  .watchVideo__recommend__playlist__header__right .fa-chevron-up:hover {
    background-color: rgb(226, 226, 226);
    cursor: pointer;
  }
  .watchVideo__recommend__playlist__functions {
    width: 100%;
    height: 30px;
    display: flex;
    flex-flow: row nowrap;
  }
  .watchVideo__recommend__playlist__functions__icon {
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin-left: 10px;
  }
  .watchVideo__recommend__playlist__functions__icon:hover {
    cursor: pointer;
  }

  .active--replay {
    color: dodgerblue;
  }
  .active--shuffle {
    color: dodgerblue;
  }

  .watchVideo__recommend__playlist__wrap {
    width: 100%;
    height: 325px;
    overflow-y: scroll;
  }
  .watchVideo__recommend__playlist__wrap__list {
    width: 100%;
    height: 65px;
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 5px;
  }
  .watchVideo__recommend__playlist__wrap__list:hover
    .watchVideo__recommend__playlist__wrap__list__icon
    .fa-pause-circle,
  .watchVideo__recommend__playlist__wrap__list:hover
    .watchVideo__recommend__playlist__wrap__list__icon
    .fa-play,
  .watchVideo__recommend__playlist__wrap__list:hover
    .watchVideo__recommend__playlist__wrap__list__delete
    .fa-trash {
    display: block;
  }
  .playlist--active {
    background-color: rgb(235, 235, 235);
  }
  .watchVideo__recommend__playlist__wrap__list:hover {
    cursor: pointer;
    background-color: rgb(235, 235, 235);
  }
  .watchVideo__recommend__playlist__wrap__list__icon {
    width: 5%;
    height: 100%;
  }
  .watchVideo__recommend__playlist__wrap__list__icon .fa-pause-circle {
    line-height: 65px;
    font-size: 0.8rem;
    display: none;
  }
  .watchVideo__recommend__playlist__wrap__list__icon .fa-play {
    line-height: 65px;
    font-size: 0.8rem;
    display: none;
  }
  .watchVideo__recommend__playlist__wrap__list__thumbnail {
    width: 15%;
    height: 100%;
  }
  .watchVideo__recommend__playlist__wrap__list__thumbnail__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .watchVideo__recommend__playlist__wrap__list__info {
    width: 55%;
    height: 100%;
  }
  .watchVideo__recommend__playlist__wrap__list__info__title {
    width: 97%;
    max-height: 60%;
    text-align: left;
    font-size: 0.9rem;
    font-weight: 500;
    font-family: Roboto, Arial, sans-serif;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-left: 3%;
  }
  .watchVideo__recommend__playlist__wrap__list__info__name {
    margin-left: 3%;
    width: 97%;
    height: 40%;
    text-align: left;
    font-size: 0.8rem;
    line-height: 25px;
  }

  .watchVideo__recommend__playlist__wrap__list__delete {
    width: 15%;
    height: 100%;
  }
  .watchVideo__recommend__playlist__wrap__list__delete .fa-trash {
    line-height: 65px;
    display: none;
  }
  .watchVideo__recommend__playlist__wrap__list__delete .fa-trash:hover {
    cursor: pointer;
    color: red;
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
  }
  .watchVideo__video__details {
    font-family: Roboto, Arial, sans-serif;
    width: 100%;
    height: 120px;
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

  .watchVideo__recommend__playlist {
    width: 390px;
    max-height: 442px;
    border: 1px solid rgb(207, 207, 207);
    margin-left: 25px;
  }
  .watchVideo__recommend__playlist__header {
    width: 100%;
    height: 60px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .watchVideo__recommend__playlist__header__left {
    width: 80%;
  }
  .watchVideo__recommend__playlist__header__title {
    text-align: left;
    font-family: Roboto, Arial, sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 10px 10px 0 10px;
  }
  .watchVideo__recommend__playlist__header__info {
    text-align: left;
    font-family: Roboto, Arial, sans-serif;
    font-size: 0.8rem;
    padding: 3px 10px 0 10px;
  }
  .watchVideo__recommend__playlist__header__right {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .watchVideo__recommend__playlist__header__right .fa-chevron-up {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    line-height: 30px;
  }
  .watchVideo__recommend__playlist__header__right .fa-chevron-up:hover {
    background-color: rgb(226, 226, 226);
    cursor: pointer;
  }
  .watchVideo__recommend__playlist__functions {
    width: 100%;
    height: 30px;
    display: flex;
    flex-flow: row nowrap;
  }
  .watchVideo__recommend__playlist__functions__icon {
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin-left: 10px;
  }
  .watchVideo__recommend__playlist__functions__icon:hover {
    cursor: pointer;
  }

  .active--replay {
    color: dodgerblue;
  }
  .active--shuffle {
    color: dodgerblue;
  }

  .watchVideo__recommend__playlist__wrap {
    width: 100%;
    height: 325px;
    overflow-y: scroll;
  }
  .watchVideo__recommend__playlist__wrap__list {
    width: 100%;
    height: 65px;
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 5px;
  }
  .watchVideo__recommend__playlist__wrap__list:hover
    .watchVideo__recommend__playlist__wrap__list__icon
    .fa-pause-circle,
  .watchVideo__recommend__playlist__wrap__list:hover
    .watchVideo__recommend__playlist__wrap__list__icon
    .fa-play,
  .watchVideo__recommend__playlist__wrap__list:hover
    .watchVideo__recommend__playlist__wrap__list__delete
    .fa-trash {
    display: block;
  }
  .playlist--active {
    background-color: rgb(235, 235, 235);
  }
  .watchVideo__recommend__playlist__wrap__list:hover {
    cursor: pointer;
    background-color: rgb(235, 235, 235);
  }
  .watchVideo__recommend__playlist__wrap__list__icon {
    width: 5%;
    height: 100%;
  }
  .watchVideo__recommend__playlist__wrap__list__icon .fa-pause-circle {
    line-height: 65px;
    font-size: 0.8rem;
    display: none;
  }
  .watchVideo__recommend__playlist__wrap__list__icon .fa-play {
    line-height: 65px;
    font-size: 0.8rem;
    display: none;
  }
  .watchVideo__recommend__playlist__wrap__list__thumbnail {
    width: 25%;
    height: 100%;
  }
  .watchVideo__recommend__playlist__wrap__list__thumbnail__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .watchVideo__recommend__playlist__wrap__list__info {
    width: 55%;
    height: 100%;
  }
  .watchVideo__recommend__playlist__wrap__list__info__title {
    width: 97%;
    max-height: 60%;
    text-align: left;
    font-size: 0.9rem;
    font-weight: 500;
    font-family: Roboto, Arial, sans-serif;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-left: 3%;
  }
  .watchVideo__recommend__playlist__wrap__list__info__name {
    margin-left: 3%;
    width: 97%;
    height: 40%;
    text-align: left;
    font-size: 0.8rem;
    line-height: 25px;
  }

  .watchVideo__recommend__playlist__wrap__list__delete {
    width: 15%;
    height: 100%;
  }
  .watchVideo__recommend__playlist__wrap__list__delete .fa-trash {
    line-height: 65px;
    display: none;
  }
  .watchVideo__recommend__playlist__wrap__list__delete .fa-trash:hover {
    cursor: pointer;
    color: red;
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
  }
  .watchVideo__video__details {
    font-family: Roboto, Arial, sans-serif;
    width: 100%;
    height: 120px;
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

  .watchVideo__recommend__playlist {
    width: 390px;
    max-height: 442px;
    border: 1px solid rgb(207, 207, 207);
    margin-left: 25px;
  }
  .watchVideo__recommend__playlist__header {
    width: 100%;
    height: 60px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .watchVideo__recommend__playlist__header__left {
    width: 80%;
  }
  .watchVideo__recommend__playlist__header__title {
    text-align: left;
    font-family: Roboto, Arial, sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 10px 10px 0 10px;
  }
  .watchVideo__recommend__playlist__header__info {
    text-align: left;
    font-family: Roboto, Arial, sans-serif;
    font-size: 0.8rem;
    padding: 3px 10px 0 10px;
  }
  .watchVideo__recommend__playlist__header__right {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .watchVideo__recommend__playlist__header__right .fa-chevron-up {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    line-height: 30px;
  }
  .watchVideo__recommend__playlist__header__right .fa-chevron-up:hover {
    background-color: rgb(226, 226, 226);
    cursor: pointer;
  }
  .watchVideo__recommend__playlist__functions {
    width: 100%;
    height: 30px;
    display: flex;
    flex-flow: row nowrap;
  }
  .watchVideo__recommend__playlist__functions__icon {
    width: 30px;
    height: 30px;
    line-height: 30px;
    margin-left: 10px;
  }
  .watchVideo__recommend__playlist__functions__icon:hover {
    cursor: pointer;
  }

  .active--replay {
    color: dodgerblue;
  }
  .active--shuffle {
    color: dodgerblue;
  }

  .watchVideo__recommend__playlist__wrap {
    width: 100%;
    height: 325px;
    overflow-y: scroll;
  }
  .watchVideo__recommend__playlist__wrap__list {
    width: 100%;
    height: 65px;
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 5px;
  }
  .watchVideo__recommend__playlist__wrap__list:hover
    .watchVideo__recommend__playlist__wrap__list__icon
    .fa-pause-circle,
  .watchVideo__recommend__playlist__wrap__list:hover
    .watchVideo__recommend__playlist__wrap__list__icon
    .fa-play,
  .watchVideo__recommend__playlist__wrap__list:hover
    .watchVideo__recommend__playlist__wrap__list__delete
    .fa-trash {
    display: block;
  }
  .playlist--active {
    background-color: rgb(235, 235, 235);
  }
  .watchVideo__recommend__playlist__wrap__list:hover {
    cursor: pointer;
    background-color: rgb(235, 235, 235);
  }
  .watchVideo__recommend__playlist__wrap__list__icon {
    width: 5%;
    height: 100%;
  }
  .watchVideo__recommend__playlist__wrap__list__icon .fa-pause-circle {
    line-height: 65px;
    font-size: 0.8rem;
    display: none;
  }
  .watchVideo__recommend__playlist__wrap__list__icon .fa-play {
    line-height: 65px;
    font-size: 0.8rem;
    display: none;
  }
  .watchVideo__recommend__playlist__wrap__list__thumbnail {
    width: 25%;
    height: 100%;
  }
  .watchVideo__recommend__playlist__wrap__list__thumbnail__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .watchVideo__recommend__playlist__wrap__list__info {
    width: 55%;
    height: 100%;
  }
  .watchVideo__recommend__playlist__wrap__list__info__title {
    width: 97%;
    max-height: 60%;
    text-align: left;
    font-size: 0.9rem;
    font-weight: 500;
    font-family: Roboto, Arial, sans-serif;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-left: 3%;
  }
  .watchVideo__recommend__playlist__wrap__list__info__name {
    margin-left: 3%;
    width: 97%;
    height: 40%;
    text-align: left;
    font-size: 0.8rem;
    line-height: 25px;
  }

  .watchVideo__recommend__playlist__wrap__list__delete {
    width: 15%;
    height: 100%;
  }
  .watchVideo__recommend__playlist__wrap__list__delete .fa-trash {
    line-height: 65px;
    display: none;
  }
  .watchVideo__recommend__playlist__wrap__list__delete .fa-trash:hover {
    cursor: pointer;
    color: red;
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

.watchVideo__video__details__metricAndFunction__like__svg__blue {
  fill: dodgerblue;
  stroke: dodgerblue;
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
  .watchVideo__video__details__metricAndFunction__dislike__svg__grey,
.watchVideo__video__details__metricAndFunction__dislike__svg__red {
  cursor: pointer;
  fill: red;
  stroke: red;
}
.watchVideo__video__details__metricAndFunction__dislike__svg__grey {
  fill: grey;
  stroke: grey;
  transform: scale(0.8);
}
.watchVideo__video__details__metricAndFunction__dislike__svg__red {
  fill: red;
  stroke: red;
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
  position: relative;
}
.watchVideo__video__details__metricAndFunction__report--absolute {
  position: absolute;
  width: 120px;
  height: 50px;
  background-color: white;
  box-shadow: 0 0 5px grey;
  right: -25px;
  top: 30px;
  display: flex;
  align-items: center;
}
.watchVideo__video__details__metricAndFunction__report--absolute__list {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
}
.watchVideo__video__details__metricAndFunction__report--absolute__list:hover {
  background-color: lightgrey;
  cursor: pointer;
}
.watchVideo__video__details__metricAndFunction__report--absolute__list__icon {
  width: 30%;
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
  margin-left: 12px;
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
