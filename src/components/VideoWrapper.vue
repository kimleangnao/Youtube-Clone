<template>
  <div class="video__wrapper">
    <p class="video__h1">{{ title }}</p>
    <div
      :class="[
        viewport == 10
          ? 'video__wrapper__inner'
          : viewport == 9
          ? 'video__wrapper__inner--4'
          : viewport == 8
          ? 'video__wrapper__inner--3'
          : viewport == 7
          ? 'video__wrapper__inner--2'
          : 'video__wrapper__inner'
      ]"
    >
      <template v-for="(video, index) in videos" :key="index.id">
        <VideoBox :video="video" />
      </template>
    </div>
  </div>
</template>

<script>
import VideoBox from "@/components/VideoBox.vue";
import { reactive, toRefs } from "vue";
import imageLogo from "@/assets/profile.png";

export default {
  name: "VideoWrapper",
  props: {
    title: {
      type: String,
      required: true
    },
    viewport: {
      type: Number,
      required: true
    }
  },
  components: {
    VideoBox
  },
  setup() {
    const state = reactive({
      videos: [
        {
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
      ]
    });
    return {
      ...toRefs(state)
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
.video__wrapper {
  width: 100%;
  margin: 80px auto;
}
.video__h1 {
  text-align: left;
  margin-left: 10px;
  font-size: 1.5rem;
  font-family: Roboto, Arial, sans-serif;
}
.video__wrapper__inner {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}
.video__wrapper__inner--4 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.video__wrapper__inner--3 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.video__wrapper__inner--2 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
