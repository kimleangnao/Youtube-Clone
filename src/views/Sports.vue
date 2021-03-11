<template>
  <div class="sports">
    <img :src="imageLogo" alt="banner picture" class="sports__img" />
    <img :src="rocks" alt="profile logo" class="sports__channelProfile" />
    <div class="sports__channelInfo">
      NBA &bullet; 2.1 views &bullet; 1 day ago
    </div>
    <div class="sports__title">
      NETS at LAKERS | FULL GAME HIGHLIGHTS | FEB 18, 2021
    </div>
    <div class="sports__subnav">
      <img :src="rocks" alt="nav box img" class="sports__subnav__box" />
      <img :src="rocks" alt="nav box img" class="sports__subnav__box" />
      <img :src="rocks" alt="nav box img" class="sports__subnav__box" />
      <img :src="rocks" alt="nav box img" class="sports__subnav__box" />
      <img :src="rocks" alt="nav box img" class="sports__subnav__box" />
    </div>
  </div>
  <div class="sports__channel">
    <ChannelWrap
      :myWidth="viewportWidth"
      titleColor="black"
      title="Sports"
      :customizeProfile="true"
      :showSubscriber="true"
    >
      <svg class="sports__channel__svg">
        <path d="M25 20 L 25 40 Q 25 50 ,40 55L 40 20 Z" class="svg__white" />
        <path d="M55 20 L 55 40 Q 55 50 ,40 55 L 40 20 Z" class="svg__grey" />
        <path d="M40 55 L30 60 L 30 65 L 40 65" class="svg__white" />
        <path d="M40 55 L 50 60 L 50 65 L 40 65" class="svg__grey" />
        <path
          d="M25 25 L 20 25 L 20 30 L 25 35 L 25 38 L 17 30 L 17 22 L 25 22"
          class="svg__white"
        />
        <path
          d="M55 25 L 60 25 L 60 30 L 55 35 L 55 38 L 63 30 L 63 22 L 55 22"
          class="svg__grey"
        />
      </svg>
    </ChannelWrap>
  </div>
  <div class="sports__content">
    <template v-for="(video, index) in videos" :key="index.id">
      <VideoBox :video="video" />
    </template>
  </div>
  <div class="sports__highlight">
    <WrapComponent
      :myWidth="viewportWidth"
      title="Highlights"
      :viewall="true"
      componentType="sports"
    >
      <template v-for="(video, index) in videosHighlights" :key="index.id">
        <VideoBox :video="video" />
      </template>
    </WrapComponent>
  </div>
</template>

<script>
import ChannelWrap from "@/components/ChannelWrap.vue";
import VideoBox from "@/components/VideoBox.vue";
import WrapComponent from "@/components/WrapComponent.vue";

import imageLogo from "@/assets/jungle.jpg";
import rocks from "@/assets/rocks.png";
import { onMounted, reactive, toRefs } from "vue";

export default {
  name: "Sports",
  components: {
    ChannelWrap,
    VideoBox,
    WrapComponent
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
      ],
      videosHighlights: [
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
          channelName: "ExampleName4",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2016",
          videoLength: "23:35"
        },
        {
          id: "6",
          profilePicture: imageLogo,
          thumbnail: imageLogo,
          channelName: "ExampleName4",
          title:
            "This will be a very very very long title, let keep it going for a while longer",
          viewscount: 400_000,
          uploadDate: "Jul 28 2016",
          videoLength: "23:35"
        }
      ],
      viewportWidth: 10
    });
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
      });
    };
    checkViewport();
    return {
      ...toRefs(state),
      imageLogo,
      rocks
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");

@media only screen and (min-width: 321px) {
  .sports__channel {
    width: 95%;
    height: 90px;
    padding: 20px 0;
    margin: 0 auto;
  }
  .sports__title {
    position: absolute;
    color: white;
    font-size: 2.2rem;
    width: 90%;
    text-align: left;
    left: 10%;
    top: 50%;
  }
  .sports__subnav {
    position: absolute;
    left: 10%;
    top: 80%;
    width: 400px;
    height: 50px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 10px;
  }
  .sports__content {
    width: 95%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
  }
  .sports__highlight {
    width: 95%;
    margin: 0 auto;
    color: black;
  }
}
@media only screen and (min-width: 768px) {
  .sports__channel {
    width: 95%;
    height: 90px;
    padding: 20px 0;
    margin: 0 auto;
  }
  .sports__title {
    position: absolute;
    color: white;
    font-size: 2.2rem;
    width: 60%;
    text-align: left;
    left: 10%;
    top: 50%;
  }

  .sports__subnav {
    position: absolute;
    left: 10%;
    top: 80%;
    width: 400px;
    height: 50px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 10px;
  }
  .sports__content {
    width: 95%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
  }
  .sports__highlight {
    width: 95%;
    margin: 0 auto;
    color: black;
  }
}
@media only screen and (min-width: 1224px) {
  .sports__channel {
    width: 1100px;
    height: 90px;
    padding: 20px 0;
    margin: 0 auto;
  }
  .sports__title {
    position: absolute;
    color: white;
    font-size: 2.2rem;
    width: 90%;
    text-align: left;
    left: 10%;
    top: 50%;
  }
  .sports__subnav {
    position: absolute;
    left: 10%;
    top: 65%;
    width: 400px;
    height: 50px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 10px;
  }
  .sports__content {
    width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 10px;
  }
  .sports__highlight {
    width: 1100px;
    margin: 0 auto;
    color: black;
  }
}
@media only screen and (min-width: 1824px) {
  .sports__channel {
    width: 1481px;
    height: 90px;
    padding: 20px 0;
    margin: 0 auto;
  }
  .sports__title {
    position: absolute;
    color: white;
    font-size: 2.2rem;
    width: 90%;
    text-align: left;
    left: 10%;
    top: 50%;
  }
  .sports__subnav {
    position: absolute;
    left: 10%;
    top: 70%;
    width: 400px;
    height: 50px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 10px;
  }
  .sports__content {
    width: 1481px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 10px;
  }
  .sports__highlight {
    width: 1481px;
    margin: 0 auto;
    color: black;
  }
}
.sports {
  width: 100%;
  height: 430px;
  margin-top: 60px;
  background-color: lightgrey;
  position: relative;
  font-family: Roboto, Arial, sans-serif;
}
.sports__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.sports__channelProfile {
  position: absolute;
  width: 70px;
  height: 70px;
  left: 10%;
  top: 20%;
  border-radius: 50%;
  object-fit: cover;
}
.sports__channelInfo {
  position: absolute;
  color: rgb(221, 219, 219);
  left: 10%;
  top: 40%;
}

.sports__subnav__box {
  width: 100%;
  height: 50px;
}
.sports__subnav__box:first-child {
  border-bottom: 2px solid white;
}

.sports__channel__svg {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgb(44, 44, 44);
}
.svg__white {
  fill: white;
  stroke: white;
}
.svg__grey {
  fill: lightgrey;
  stroke: lightgrey;
}
</style>
