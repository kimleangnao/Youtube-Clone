<template>
  <div
    :class="[
      hideManage ? ' subscription__wrapper__flex' : 'subscription__wrapper',
      myWidth ? 'subscription__wrapper--100' : 'subscription__wrapper'
    ]"
  >
    <div
      :class="[
        myWidth == 7
          ? 'subscription__wrapper__today--7 '
          : myWidth == 8
          ? 'subscription__wrapper__today--8'
          : myWidth == 9
          ? 'subscription__wrapper__today--9'
          : myWidth == 10
          ? 'subscription__wrapper__today--10'
          : 'subscription__wrapper__today'
      ]"
    >
      <div class="subscription__wrapper__today__wrap">
        <div class="subscription__wrapper__top">
          <div class="subscription__wrapper__top__title">{{ title }}</div>
          <div v-if="hideManage" class="subscription__wrapper__top__seeAll">
            SEE ALL
          </div>
          <div v-if="!hideManage" class="subscription__wrapper__top__manage">
            <div class="subscription__wrapper__top__manage__text">MANAGE</div>
            <div class="subscription__wrapper__top__manage__short">
              <div class="subscription__wrapper__top__manage__short__svg">
                <i class="fas fa-th"></i>
              </div>
            </div>
            <div class="subscription__wrapper__top__manage__long">
              <div class="subscription__wrapper__top__manage__long__svg">
                <i class="fas fa-th-list"></i>
              </div>
            </div>
          </div>
        </div>
        <div
          :class="[
            myWidth == 7
              ? 'subscription__wrapper__videos--7'
              : myWidth == 8
              ? 'subscription__wrapper__videos--8'
              : myWidth == 9
              ? 'subscription__wrapper__videos--9'
              : 'subscription__wrapper__videos'
          ]"
        >
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
        </div>
      </div>
      <div v-if="hideManage" class="subscription__wrapper__today__wrap">
        <div class="subscription__wrapper__top">
          <div class="subscription__wrapper__top__title">
            Watch later <span class="videos__count">120</span>
          </div>
          <div v-if="hideManage" class="subscription__wrapper__top__seeAll">
            SEE ALL
          </div>
        </div>
        <div
          :class="[
            myWidth == 7
              ? 'subscription__wrapper__videos--7'
              : myWidth == 8
              ? 'subscription__wrapper__videos--8'
              : myWidth == 9
              ? 'subscription__wrapper__videos--9'
              : 'subscription__wrapper__videos'
          ]"
        >
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
        </div>
      </div>
      <div v-if="hideManage" class="subscription__wrapper__today__wrap">
        <div class="subscription__wrapper__top">
          <div class="subscription__wrapper__top__title">
            Playlists
          </div>
        </div>
        <div
          :class="[
            myWidth == 7
              ? 'subscription__wrapper__videos--7'
              : myWidth == 8
              ? 'subscription__wrapper__videos--8'
              : myWidth == 9
              ? 'subscription__wrapper__videos--9'
              : 'subscription__wrapper__videos'
          ]"
        >
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
        </div>
        <div
          v-if="extendPlaylist"
          :class="[
            myWidth == 7
              ? 'subscription__wrapper__videos--7'
              : myWidth == 8
              ? 'subscription__wrapper__videos--8'
              : myWidth == 9
              ? 'subscription__wrapper__videos--9'
              : 'subscription__wrapper__videos'
          ]"
        >
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
        </div>
        <div
          v-if="extendPlaylist"
          class="subscription__wrapper__seeMore"
          @click="extendPlaylist = !extendPlaylist"
        >
          SEE LESS
        </div>
        <div
          v-else
          class="subscription__wrapper__seeMore"
          @click="extendPlaylist = !extendPlaylist"
        >
          SEE MORE
        </div>
      </div>
      <div
        v-if="hideManage"
        class="subscription__wrapper__today__wrap wrap__noline"
      >
        <div class="subscription__wrapper__top">
          <div class="subscription__wrapper__top__title">
            Liked videos <span class="videos__count">20</span>
          </div>
          <div v-if="hideManage" class="subscription__wrapper__top__seeAll">
            SEE ALL
          </div>
        </div>
        <div
          :class="[
            myWidth == 7
              ? 'subscription__wrapper__videos--7'
              : myWidth == 8
              ? 'subscription__wrapper__videos--8'
              : 'subscription__wrapper__videos'
          ]"
        >
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
          <PromoteVideo
            :componentType="
              route == '/library'
                ? 'library'
                : route == '/subscriptions'
                ? 'subscriptions'
                : ''
            "
          />
        </div>
      </div>
    </div>

    <div
      v-if="!hideManage"
      :class="[
        myWidth == 7
          ? 'subscription__wrapper__yesterday--7'
          : myWidth == 8
          ? 'subscription__wrapper__yesterday--8'
          : myWidth == 9
          ? 'subscription__wrapper__yesterday--9'
          : myWidth == 10
          ? 'subscription__wrapper__yesterday--10'
          : 'subscription__wrapper__yesterday'
      ]"
    >
      <div class="subscription__wrapper__top">
        <div class="subscription__wrapper__top__title">Yesterday</div>
      </div>
      <div
        :class="[
          myWidth == 7
            ? 'subscription__wrapper__videos--7'
            : myWidth == 8
            ? 'subscription__wrapper__videos--8'
            : myWidth == 9
            ? 'subscription__wrapper__videos--9'
            : 'subscription__wrapper__videos'
        ]"
      >
        <PromoteVideo
          :componentType="
            route == '/library'
              ? 'library'
              : route == '/subscriptions'
              ? 'subscriptions'
              : ''
          "
        />
        <PromoteVideo
          :componentType="
            route == '/library'
              ? 'library'
              : route == '/subscriptions'
              ? 'subscriptions'
              : ''
          "
        />
        <PromoteVideo
          :componentType="
            route == '/library'
              ? 'library'
              : route == '/subscriptions'
              ? 'subscriptions'
              : ''
          "
        />
      </div>
    </div>

    <div
      v-if="hideManage"
      :class="[
        myWidth == 7
          ? 'subscription__Wrapper__stats--7'
          : 'subscription__Wrapper__stats'
      ]"
    >
      <img
        :src="profile"
        class="subscription__Wrapper__stats__profile"
        alt="profile picture"
      />
      <div class="subscription__Wrapper__stats__name">
        REdi
      </div>
      <div class="subscription__Wrapper__stats__subNumber">
        <div class="subscription__Wrapper__stats__subNumber__text">
          Subscriptions
        </div>
        <div class="subscription__Wrapper__stats__subNumber__count">1</div>
      </div>
      <div class="subscription__Wrapper__stats__uploads">
        <div class="subscription__Wrapper__stats__uploads__text">
          Uploads
        </div>
        <div class="subscription__Wrapper__stats__uploads__count">
          0
        </div>
      </div>
      <div class="subscription__Wrapper__stats__likes">
        <div class="subscription__Wrapper__stats__likes__text">Likes</div>
        <div class="subscription__Wrapper__stats__likes__count">2</div>
      </div>
    </div>
  </div>
</template>

<script>
import profile from "@/assets/profile.png";

import PromoteVideo from "@/components/PromoteVideo.vue";

import Playlist from "@/components/Playlist.vue";
import { onMounted, reactive, toRefs } from "vue";

export default {
  name: "SubscriptionWrapper",
  props: {
    hideManage: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    myWidth: {
      type: Number,
      required: true
    }
  },
  components: { PromoteVideo, Playlist },
  setup() {
    const state = reactive({
      extendPlaylist: false,
      route: null
    });

    onMounted(() => {
      state.route = window.location.pathname;
    });

    return { ...toRefs(state), profile };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
.subscription__wrapper {
  width: 1280px;
  margin: 60px auto;
  font-family: Roboto, Arial, sans-serif;
  text-align: left;
}
.subscription__wrapper--100 {
  width: 100%;
  margin: 60px auto;
  font-family: Roboto, Arial, sans-serif;
  text-align: left;
}

.subscription__wrapper__flex {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  margin: 60px auto;
  font-family: Roboto, Arial, sans-serif;
  text-align: left;
}

.subscription__wrapper__today {
  width: 1281px;
  height: 100%;
  margin: 0 auto;
}
.subscription__wrapper__today--7 {
  width: 480px;
  height: 100%;
  margin: 0 auto;
}
.subscription__wrapper__today--8 {
  width: 70%;
  height: 100%;
  margin: 0 auto;
}
.subscription__wrapper__today--9 {
  width: 1101px;
  height: 100%;
  margin: 0 auto;
}

.subscription__wrapper__today--10 {
  width: 1281px;
  height: 100%;
  margin: 0 auto;
}

.subscription__wrapper__today__wrap {
  width: 100%;
  height: 100%;
  border-bottom: 1px solid lightgrey;
  margin: 0 auto;
}

.subscription__Wrapper__stats {
  width: 15%;
  height: 300px;
  margin-top: 68px;
}
.subscription__Wrapper__stats--7 {
  display: none;
}
.subscription__Wrapper__stats__profile {
  width: 80px;
  height: 80px;
  background-color: green;
  margin: 10px auto 0;
  border-radius: 50%;
  display: block;
  object-fit: cover;
}
.subscription__Wrapper__stats__name {
  text-align: center;
  margin-top: 10px;
}
.subscription__Wrapper__stats__subNumber {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  line-height: 50px;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  font-size: 0.85rem;
}
.subscription__Wrapper__stats__uploads {
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  line-height: 50px;
  border-bottom: 1px solid lightgrey;
  font-size: 0.85rem;
}
.subscription__Wrapper__stats__likes {
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  line-height: 50px;
  border-bottom: 1px solid lightgrey;
  font-size: 0.85rem;
}

.subscription__wrapper__yesterday {
  width: 80%;
  height: 100%;
  border-bottom: 1px solid lightgrey;
  margin: 0 auto;
}
.subscription__wrapper__yesterday--7 {
  width: 480px;
  height: 100%;
  border-bottom: 1px solid lightgrey;
  margin: 0 auto;
}
.subscription__wrapper__yesterday--8 {
  width: 70%;
  height: 100%;
  border-bottom: 1px solid lightgrey;
  margin: 0 auto;
}
.subscription__wrapper__yesterday--9 {
  width: 1101px;
  height: 100%;
  border-bottom: 1px solid lightgrey;
  margin: 0 auto;
}
.subscription__wrapper__yesterday--10 {
  width: 1281px;
  height: 100%;
  border-bottom: 1px solid lightgrey;
  margin: 0 auto;
}

.subscription__wrapper__top {
  width: 100%;
  height: 70px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.subscription__wrapper__top__title {
  line-height: 70px;
  font-size: 1.2rem;
  font-weight: 500;
}
.subscription__wrapper__top__seeAll {
  line-height: 70px;
  font-size: 0.95rem;
  font-weight: 500;
  color: dodgerBlue;
}
.subscription__wrapper__top__seeAll:hover {
  cursor: pointer;
}

.subscription__wrapper__top__manage {
  width: 120px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}

.subscription__wrapper__top__manage__text {
  line-height: 80px;
  font-size: 0.9rem;
  color: dodgerblue;
}

.subscription__wrapper__top__manage__short {
  width: 17px;
  height: 17px;
  overflow: hidden;
  margin-top: -4px;
}
.subscription__wrapper__top__manage__long {
  width: 17px;
  height: 17px;
  margin-top: -4px;
}

.subscription__wrapper__videos {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
}
.subscription__wrapper__videos--7 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}
.subscription__wrapper__videos--8 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
.subscription__wrapper__videos--9 {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
}

.subscription__wrapper__seeMore {
  padding: 20px 0;
  font-weight: 500;
  font-size: 0.9rem;
}
.subscription__wrapper__seeMore:hover {
  cursor: pointer;
}
.subscription__wrapper__top__manage__short__svg {
  width: 100%;
  height: 100%;
}
.subscription__wrapper__top__manage__short__svg:hover {
  cursor: pointer;
}
.subscription__wrapper__top__manage__short__svg__grey {
  fill: dodgerblue;
  stroke: dodgerblue;
}
.subscription__wrapper__top__manage__long__svg {
  width: 100%;
  height: 100%;
}
.subscription__wrapper__top__manage__long__svg:hover {
  cursor: pointer;
}
.subscription__wrapper__top__manage__long__svg__grey {
  fill: rgb(117, 117, 117);
  stroke: rgb(255, 255, 255);
}
.fa-th {
  color: dodgerblue;
  font-size: 1.01rem;
  line-height: 18px;
}
.fa-th-list {
  color: grey;
  font-size: 1rem;
  line-height: 18px;
}

.videos__count {
  font-size: 1rem;
  color: grey;
  line-height: 70px;
  margin-left: 10px;
  font-weight: 300;
}
.wrap__noline {
  border: unset;
}
</style>
