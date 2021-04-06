<template>
  <div class="watch">
    <WatchVideo
      :clickToViewReply="clickToViewReply"
      :makeAreplyToComment="makeAreplyToComment"
      :video="video"
      :liked="liked"
      :disliked="disliked"
      :makeAReply="makeAReply"
      :userClickLike="userClickLike"
      :userClickDislike="userClickDislike"
      :deleteThisComment="deleteThisComment"
      :userLikeCommentId="user.likeCommentId"
      :userDislikeCommentId="user.dislikeCommentId"
      :switchShowShare="switchShowShare"
      :switchShowSave="switchShowSave"
      :recommendVideos="videos"
      :isItAPlaylist="isItAPlaylist"
      :playlist="playlist"
      :playlistIndex="playlistIndex"
      :playlistAutoplay="playlistAutoplay"
      :playlistAutoReplay="playlistAutoReplay"
      :playlistShuffle="playlistShuffle"
      :clickShuffle="clickShuffle"
      :clickAutoReplay="clickAutoReplay"
      :clickDeleteVideoFromPlaylist="clickDeleteVideoFromPlaylist"
      :addToHistory="addToHistory"
    />
  </div>
</template>

<script>
import WatchVideo from "@/components/WatchVideo.vue";

import { reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import EventService from "@/services/EventService.js";

export default {
  name: "Watch",
  components: {
    WatchVideo
  },
  props: {
    switchShowShare: Function,
    switchShowSave: Function,
    giveAppParamsInfo: Function,
    changeCurrentRoute: Function
  },
  setup(props) {
    const state = reactive({
      video: {
        id: 1,
        type: "x",
        title: "x",
        videoLink: "Snowy Tree.mp4",
        category: "x",
        thumbnail: "skyscrapper.jpg",
        videoLength: "5:00",
        profileImage: "profile.png",
        profileName: "x",
        userId: 1,
        viewscount: 0,
        profilePostDate: "Aug 20, 2020",
        like: 0,
        dislike: 0,
        description: "",
        comments: []
      },
      videos: [
        {
          id: 1,
          type: "x",
          title: "x",
          videoLink: "Ocean.mp4",
          category: "x",
          thumbnail: "skyscrapper.jpg",
          videoLength: "5:00",
          profileImage: "profile.png",
          profileName: "x",
          userId: 1,
          viewscount: 0,
          profilePostDate: "Aug 20, 2020",
          like: 0,
          dislike: 0,
          description: "",
          comments: []
        }
      ],
      playlist: [],
      playlists: [],
      user: {},
      check1: false,
      check2: false,
      liked: false,
      disliked: false,
      isItAPlaylist: false,
      playlistIndex: 1,
      playlistAutoplay: false,
      playlistAutoReplay: false,
      playlistShuffle: false
    });
    //pass route name back to app
    let name = useRoute().name;
    if (name == "Watch") {
      props.changeCurrentRoute("/watch");
    }

    let paramId = useRoute().params.id;

    const sliceTheParamsId = paramsId => {
      let arraySplit = paramsId.split("");
      //playlist
      let playlistId = [];
      let index = [];
      let videoId = null;
      let startFromIndex = null;
      let startIndex = null;
      //check if the paramId is from playlist or normal video
      if (arraySplit[0] == "p") {
        //get playlist id
        state.isItAPlaylist = true;
        for (let i = 0; i < arraySplit.length; i++) {
          //

          if (arraySplit[i] == "=") {
            //
            startFromIndex = i + 1;
          }
          if (i == startFromIndex && arraySplit[i] != "&") {
            playlistId.push(arraySplit[i]);
            startFromIndex++;
          } else if (arraySplit[i] == "&") {
            break;
          }
        }

        //get index of the video
        for (let i = 0; i < arraySplit.length; i++) {
          //
          if (arraySplit[i] == "=" && arraySplit[i - 1] == "x") {
            //
            startIndex = i + 1;
          }
          if (i == startIndex) {
            index.push(arraySplit[i]);
            startIndex++;
          }
        }
      } else {
        //video
        videoId = paramsId;
      }
      let joinedPlaylist = playlistId.join("");
      let joinedVideoIndex = index.join("");
      return [joinedPlaylist, joinedVideoIndex, videoId];
    };
    let [playlistId, indexVideo, videoId] = sliceTheParamsId(paramId);
    //console.log(playlistId, indexVideo, videoId);
    //we assume user 1
    props.giveAppParamsInfo([playlistId, indexVideo, videoId]);

    //if watch for 3 second, add this to the history
    const addToHistory = () => {
      for (let i = 0; i < state.user.history.length; i++) {
        //
        if (state.user.history[i].id == state.video.id) {
          state.user.history.splice(i, 1);
        }
      }
      state.user.history.unshift(state.video);
      EventService.putUser(1, state.user);
    };

    EventService.getUser(1).then(response => {
      //console.log("userPlaylists:", response.data.playlists);
      state.user = response.data;
      //O(n)^2
      state.playlists = response.data.playlists;
      if (playlistId) {
        //console.log("PlaylisId", playlistId);
        for (let i = 0; i < response.data.playlists.length; i++) {
          if (response.data.playlists[i].id == playlistId) {
            //
            console.log("userPlaylists:", response.data.playlists[i]);
            state.playlist = response.data.playlists[i];
            state.playlistIndex = Number(indexVideo[0]);
            state.playlistAutoplay = true;
            //console.log("video:", response.data.playlists[i].videos);
            if (response.data.playlists[i].videos.length > 0) {
              for (
                let j = 0;
                j < response.data.playlists[i].videos.length;
                j++
              ) {
                let currentIndex = j + 1;
                if (currentIndex == indexVideo) {
                  //console.log("video:", response.data.playlists[i].videos[j]);
                  state.video = response.data.playlists[i].videos[j];
                }
              }
            } else {
              //if there is no video to display, redirect to home
              window.location.href = "/";
            }
          }
        }
      }
      //console.log("got data user:", response.data);
      state.check2 = true;
    });
    //get the whole videos
    EventService.getVideos().then(response => {
      //

      //console.log(response.data);

      if (videoId) {
        //no playlist, so we get the video directly from videos
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].id == videoId) {
            //console.log("found! video", response.data[i]);
            state.video = response.data[i];
          }
        }
      }

      state.videos = response.data;
      //console.log("videos:", state.videos);
      state.check1 = true;
    });

    const checkInterval = setInterval(function() {
      if (state.check1 && state.check2) {
        didUserLikedIt();
        didUserDislikedIt();
        clearInterval(checkInterval);
      }
    }, 500);

    const didUserLikedIt = () => {
      //check video id with this current user liked video
      if (state.check1 && state.check2) {
        //now we can check if user like the video

        for (let i = 0; i < state.user.likedVideos.length; i++) {
          if (state.user.likedVideos[i].id == state.video.id) {
            //we liked
            state.liked = true;
          }
        }
      }
    };

    const didUserDislikedIt = () => {
      if (state.check1 && state.check2) {
        //now we can check if user dislike the video

        for (let i = 0; i < state.user.dislikedVideos.length; i++) {
          if (state.user.dislikedVideos[i].id == state.video.id) {
            //we disliked
            state.disliked = true;
          }
        }
      }
    };

    const clickToViewReply = id => {
      for (let i = 0; i < state.video.comments.length; i++) {
        if (id == state.video.comments[i].id) {
          //found it, now change it to opposite of what it is
          state.video.comments[i].viewReply = !state.video.comments[i]
            .viewReply;
        }
      }
    };
    const makeAReply = (id, newComment) => {
      //console.log("newComment:", newComment);

      const comment = {
        id: Math.floor(Math.random() * 1000000) + "",
        commenter: "REdi",
        commenterId: state.user.id,
        comment: newComment,
        like: 0,
        dislike: 0,
        hearted: false,
        viewReply: false,
        commentChild: []
      };

      state.video.comments.unshift(comment);
      EventService.postCommentToVideoId(id, state.video);
    };
    const makeAreplyToComment = (videoId, commentId, newCommentToComment) => {
      const comment = {
        id: Math.floor(Math.random() * 1000000) + "",
        commenter: "Leaf on the wind",
        commenterId: 2,
        comment: newCommentToComment,
        like: 0,
        dislike: 0
      };
      //look for the comment
      for (let i = 0; i < state.video.comments.length; i++) {
        if (state.video.comments[i].id == commentId) {
          //found it
          state.video.comments[i].commentChild.push(comment);
        }
      }
      EventService.postCommentToVideoId(videoId, state.video);
    };

    const userClickLike = () => {
      //check if user not like the video yet
      didUserLikedIt();
      if (!state.liked) {
        //user not liked it yet
        //so let user like it
        //so we manipulate by putting this current video into this current user
        //and make a call to API to update it
        if (state.disliked) {
          for (let i = 0; i < state.user.dislikedVideos.length; i++) {
            if (state.user.dislikedVideos[i].id == state.video.id) {
              //
              state.user.dislikedVideos.splice(i, 1);
              state.user.likedVideos.push(state.video);
              EventService.putUser(1, state.user);
              state.video.dislike -= 1;
              state.video.like += 1;
              EventService.putVideoId(state.video.id, state.video);
              state.disliked = false;
              state.liked = true;
            }
          }
        } else {
          state.user.likedVideos.push(state.video);
          state.liked = true;
          EventService.putUser(1, state.user);
          //update the video like counter
          state.video.like += 1;
          EventService.putVideoId(state.video.id, state.video);
        }
      } else {
        //if they click it again, when already liked, make it stop like
        //mean remove that video from userLike videos
        for (let i = 0; i < state.user.likedVideos.length; i++) {
          if (state.user.likedVideos[i].id == state.video.id) {
            //found that
            //now remove it
            state.user.likedVideos.splice(i, 1);
            //console.log(state.user);
            state.liked = false;
            EventService.putUser(1, state.user);
            state.video.like -= 1;
            EventService.putVideoId(state.video.id, state.video);
          }
        }
      }
    };

    const userClickDislike = () => {
      //make sure it's not like
      didUserDislikedIt();
      if (!state.disliked) {
        //dislike it

        if (state.liked) {
          //console.log("user liked it!");
          //if user like this?
          //we need to remove all the like and  give it a dislike
          for (let i = 0; i < state.user.likedVideos.length; i++) {
            if (state.user.likedVideos[i].id == state.video.id) {
              //found that
              //now remove it
              state.user.likedVideos.splice(i, 1);
              state.user.dislikedVideos.push(state.video);
              EventService.putUser(1, state.user);
              state.liked = false;
              state.disliked = true;
              state.video.like -= 1;
              state.video.dislike += 1;
              EventService.putVideoId(state.video.id, state.video);
            }
          }
        } else {
          state.user.dislikedVideos.push(state.video);
          EventService.putUser(1, state.user);
          state.video.dislike += 1;
          EventService.putVideoId(state.video.id, state.video);
          state.disliked = true;
        }
      } else {
        //okay so user is not dislike anymore, remove that from dislike
        for (let i = 0; i < state.user.dislikedVideos.length; i++) {
          if (state.user.dislikedVideos[i].id == state.video.id) {
            //
            state.user.dislikedVideos.splice(i, 1);
            EventService.putUser(1, state.user);
            state.video.dislike -= 1;
            EventService.putVideoId(state.video.id, state.video);
            state.disliked = false;
          }
        }
      }
    };

    const deleteThisComment = commentId => {
      //when click on the delete option, the comment will be no more
      //so we need the comment ID
      for (let i = 0; i < state.video.comments.length; i++) {
        if (state.video.comments[i].id == commentId) {
          //we found our comment, now delete it
          state.video.comments.splice(i, 1);
          //now we update the database
          EventService.putVideoId(state.video.id, state.video);
        }
      }
    };

    const clickAutoReplay = () => {
      //
      state.playlistAutoReplay = !state.playlistAutoReplay;
    };

    const clickShuffle = () => {
      state.playlistShuffle = !state.playlistShuffle;
    };

    const clickDeleteVideoFromPlaylist = id => {
      for (let i = 0; i < state.playlist.videos.length; i++) {
        if (state.playlist.videos[i].id == id) {
          state.playlist.videos.splice(i, 1);
          //if you delete the same index, then refresh the page with the same index, should show diff video
          //console.log("i+1:", i + 1, indexVideo);
          if (i + 1 == indexVideo[0]) {
            if (state.playlist.videos.length >= indexVideo) {
              window.location.href =
                "/watch/playlist=" + playlistId + "&index=" + indexVideo;
            } else {
              window.location.href =
                "/watch/playlist=" +
                playlistId +
                "&index=" +
                state.playlist.videos.length;
            }
          }
        }
      }
      //now update this playlist in user playlists
      for (let i = 0; i < state.user.playlists.length; i++) {
        //
        if (state.user.playlists[i].id == state.playlist.id) {
          state.user.playlists[i] = state.playlist;
          EventService.putUser(1, state.user);
        }
      }
    };

    return {
      ...toRefs(state),
      addToHistory,
      clickToViewReply,
      makeAReply,
      makeAreplyToComment,
      userClickLike,
      userClickDislike,
      deleteThisComment,
      clickAutoReplay,
      clickShuffle,
      clickDeleteVideoFromPlaylist
    };
  }
};
</script>

<style scoped></style>
