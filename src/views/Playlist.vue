<template>
  <div class="playlist">
    <PlaylistWrap
      :playlist="playlist"
      :deleteThisPlaylist="deleteThisPlaylist"
    />
  </div>
</template>

<script>
import PlaylistWrap from "@/components/PlaylistWrap.vue";
import { reactive, toRefs } from "vue";
import EventService from "@/services/EventService.js";
import { useRoute } from "vue-router";

export default {
  name: "Playlist",
  components: {
    PlaylistWrap
  },
  setup() {
    const state = reactive({
      user: [],
      playlist: {
        id: 1,
        name: "",
        thumbnail: "JS.png",
        creator: "",
        creatorId: 1,
        description: "",
        videos: [
          {
            id: 1,
            type: "",
            title: "",
            category: "",
            thumbnail: "skyscrapper.jpg",
            videoLength: "5:00",
            profileImage: "profile.png",
            profileName: "",
            viewscount: 0,
            profilePostDate: "Jan 20 2021",
            like: 0,
            dislike: 0,
            description: "",
            comments: [
              {
                id: "c19",
                commenter: "",
                comment: "",
                like: 0,
                dislike: 0,
                hearted: true,
                commentChild: []
              },
              {
                id: "c20",
                commenter: "",
                comment: "",
                like: 0,
                dislike: 0,
                hearted: true,
                commentChild: [
                  {
                    id: "cc25",
                    commenter: "",
                    comment: "",
                    like: 0,
                    dislike: 0
                  }
                ]
              }
            ]
          }
        ]
      }
    });
    const route = useRoute();
    EventService.getUser(1).then(response => {
      state.user = response.data;
      for (let i = 0; i < response.data.playlists.length; i++) {
        if (response.data.playlists[i].id == route.params.id) {
          state.playlist = response.data.playlists[i];
        }
      }
    });

    const deleteThisPlaylist = id => {
      console.log(id);
      for (let i = 0; i < state.user.playlists.length; i++) {
        if (state.user.playlists[i].id == id) {
          state.user.playlists.splice(i, 1);
          //call to API to make the change
          EventService.putUser(1, state.user).then(response => {
            console.log(response);
            window.location.href = "/library";
          });
        }
      }
    };

    return {
      ...toRefs(state),
      deleteThisPlaylist
    };
  }
};
</script>

<style scoped>
.playlist {
  width: 100%;
  margin-top: 60px;
}
</style>
