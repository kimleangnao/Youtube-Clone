<template>
  <div id="app">
    <StudioNavbar v-if="currentRoute == '/studio'" />
    <NavBar
      v-else
      :darkMode="currentRoute == '/fashion' ? true : false"
      :expand="clickToExpandNavLeft"
      :showModal="switchModal"
    />
    <div
      v-if="!expanded"
      :class="[
        showLeftNav ? 'left__nav' : 'left__nav  left__nav__none',
        currentRoute == '/fashion' ? 'left__nav--black' : 'left__nav',
        currentRoute == '/setting' ? 'left__nav__none' : '',
        currentRoute == '/watch' ? 'left__nav__none' : '',
        currentRoute == '/studio' ? 'left__nav__none' : ''
      ]"
    >
      <div class="left__nav__list" @click="goHome">
        <svg class="left__nav__list__svg">
          <path
            d="M22 31 L 35 20 L 48 31 Z"
            class="left__nav__list__svg__grey"
          />
          <path
            d="M32.5 34 L 32.5 40 L 27.5 40 L 27.5 30 L 42.5 30 L 42.5 40 L 37.5 40 L 37.5 34"
            class="left__nav__list__svg__grey"
          />
        </svg>
        <p class="left__nav__list__text">Home</p>
      </div>
      <div class="left__nav__list" @click="goToTrending">
        <svg class="left__nav__list__svg">
          <path
            d="M 18.5 40 L 45.5 40 L 45.5 15"
            class="left__nav__list__svg__grey--nofill"
          />
          <path
            d="M 22.5 40 L 22.5 30"
            class="left__nav__list__svg__grey--nofill"
          />
          <path
            d="M 29.5 40 L 29.5 25"
            class="left__nav__list__svg__grey--nofill"
          />
          <path
            d="M 37.5 40 L 37.5 20"
            class="left__nav__list__svg__grey--nofill"
          />
        </svg>
        <p class="left__nav__list__text">Trending</p>
      </div>
      <div class="left__nav__list" @click="goToSubscriptions">
        <svg class="left__nav__list__svg">
          <path d="M24.5 24 L 43.5 24 Z" class="left__nav__list__svg__grey" />
          <path d="M26.5 21 L 41.5 21 Z" class="left__nav__list__svg__grey" />
          <path
            d="M22.5 40 L 45.5 40 L 45.5 27 L 22.5 27 Z"
            class="left__nav__list__svg__grey"
          />
          <path
            d="M32 30 L 32 37 L 38 33.5"
            class="left__nav__list__svg__white"
          />
        </svg>
        <p class="left__nav__list__text">Subscriptions</p>
      </div>
      <div class="left__nav__list" @click="goToLibrary">
        <svg class="left__nav__list__svg">
          <path
            d="M22.5 25 L 22.5 40 L 42.5 40"
            class="left__nav__list__svg__grey--nofill"
          />
          <path
            d="M25.5 18 L 25.5 37 L 45.5 37 L 45.5 18 Z"
            class="left__nav__list__svg__grey"
          />
          <path
            d="M33 22 L 33 32 L 39 27"
            class="left__nav__list__svg__white"
          />
        </svg>
        <p class="left__nav__list__text">Library</p>
      </div>
    </div>
    <div v-else class="left__nav__expand">
      <div class="left__nav__expand__goPlace">
        <div class="left__nav__expand__goPlace__button">
          <svg class="left__nav__expand__goPlace__button__svg">
            <path
              d="M12.5 4 L 0 15 L 5 15 L 5 25 L 10 25 L 10 15 L 15 15 L 15 25 L 20 25 L 20 15 L 25 15Z"
              class="svg__grey"
            />
          </svg>
          <div class="left__nav__expand__goPlace__button__text" @click="goHome">
            Home
          </div>
        </div>
        <div class="left__nav__expand__goPlace__button">
          <div class="left__nav__expand__goPlace__button__svg">
            <i class="fas fa-signal"></i>
          </div>
          <div
            class="left__nav__expand__goPlace__button__text"
            @click="goToTrending"
          >
            Trending
          </div>
        </div>
        <div class="left__nav__expand__goPlace__button">
          <svg class="left__nav__expand__goPlace__button__svg">
            <path d="M8 3 L 18 3 Z" class="svg__grey" />
            <path d="M3 8 L 23 8 Z" class="svg__grey" />
            <rect width="25" height="13" class="svg__grey" y="12" rx="2" />
            <path d="M10 15 L 10 22 L 15 19" class="svg__white" />
          </svg>
          <div
            class="left__nav__expand__goPlace__button__text"
            @click="goToSubscriptions"
          >
            Subscriptions
          </div>
        </div>
      </div>
      <div class="left__nav__expand__playlists">
        <div class="left__nav__expand__playlists__list">
          <svg class="left__nav__expand__playlists__list__svg">
            <path
              d="M0 5 L 0 25 L 20 25 L 20 23 L 2 23 L 2 5 Z"
              class="svg__grey"
            />

            <path d="M5 0 L 5 21 L 25 21 L 25 0 Z" class="svg__grey" />
            <path d="M13 7 L 13 15 L19 11" class="svg__white" />
          </svg>
          <div
            class="left__nav__expand__playlists__list__text"
            @click="goToLibrary"
          >
            Library
          </div>
        </div>
        <div class="left__nav__expand__playlists__list">
          <div class="left__nav__expand__playlists__list__svg">
            <i class="fas fa-history"></i>
          </div>
          <div
            class="left__nav__expand__playlists__list__text"
            @click="goToHistory"
          >
            History
          </div>
        </div>
        <div class="left__nav__expand__playlists__list">
          <svg class="left__nav__expand__playlists__list__svg">
            <path
              d="M0 0 L 0 25 L 25 25 L 25 0 Z"
              class="svg__grey--nofill--4px"
            />
            <path d="M10.5 8.5 L 10 17 L 17 12.5 Z" class="svg__grey" />
          </svg>
          <div
            class="left__nav__expand__playlists__list__text"
            @click="goToPlaylist"
          >
            Your Videos
          </div>
        </div>
        <div class="left__nav__expand__playlists__list">
          <div class="left__nav__expand__playlists__list__svg">
            <i class="fas fa-clock"></i>
          </div>
          <div
            class="left__nav__expand__playlists__list__text"
            @click="goToPlaylist"
          >
            Watch later
          </div>
        </div>
        <div class="left__nav__expand__playlists__list">
          <svg class="left__nav__expand__playlists__list__svg">
            <path d="M 0 3 L 25 3" class="svg__grey--nofill--4px" />
            <path d="M 0 12 L 25 12" class="svg__grey--nofill--4px" />
            <path d="M 0 20 L 15 20" class="svg__grey--nofill--4px" />
            <path d="M17 15 L 17 25 L 25 20 Z" class="svg__grey" />
          </svg>
          <div
            class="left__nav__expand__playlists__list__text"
            @click="goToPlaylist"
          >
            JavaScript
          </div>
        </div>
        <div class="left__nav__expand__playlists__list">
          <div class="left__nav__expand__playlists__list__svg">
            <i class="fas fa-angle-down"></i>
          </div>
          <div class="left__nav__expand__playlists__list__text">Show more</div>
        </div>
      </div>
      <div class="left__nav__expand__subscriptions">
        <div class="left__nav__expand__subscriptions__text">SUBSCRIPTIONS</div>
        <div
          class="left__nav__expand__subscriptions__channel"
          @click="goToChannel"
        >
          <img
            :src="profile"
            class="left__nav__expand__subscriptions__channel__profile"
          />
          <div class="left__nav__expand__subscriptions__channel__name">
            REdi
          </div>
        </div>
        <div
          class="left__nav__expand__subscriptions__channel"
          @click="goToChannel"
        >
          <img
            :src="profile"
            class="left__nav__expand__subscriptions__channel__profile"
          />
          <div class="left__nav__expand__subscriptions__channel__name">
            REdi
          </div>
        </div>
        <div
          class="left__nav__expand__subscriptions__channel"
          @click="goToChannel"
        >
          <img
            :src="profile"
            class="left__nav__expand__subscriptions__channel__profile"
          />
          <div class="left__nav__expand__subscriptions__channel__name">
            REdi
          </div>
        </div>
        <div
          class="left__nav__expand__subscriptions__channel"
          @click="goToChannel"
        >
          <img
            :src="profile"
            class="left__nav__expand__subscriptions__channel__profile"
          />
          <div class="left__nav__expand__subscriptions__channel__name">
            REdi
          </div>
        </div>
        <div
          class="left__nav__expand__subscriptions__channel"
          @click="goToChannel"
        >
          <img
            :src="profile"
            class="left__nav__expand__subscriptions__channel__profile"
          />
          <div class="left__nav__expand__subscriptions__channel__name">
            REdi
          </div>
        </div>
        <div
          class="left__nav__expand__subscriptions__channel"
          @click="goToChannel"
        >
          <img
            :src="profile"
            class="left__nav__expand__subscriptions__channel__profile"
          />
          <div class="left__nav__expand__subscriptions__channel__name">
            REdi
          </div>
        </div>
        <div
          class="left__nav__expand__subscriptions__channel"
          @click="goToChannel"
        >
          <img
            :src="profile"
            class="left__nav__expand__subscriptions__channel__profile"
          />
          <div class="left__nav__expand__subscriptions__channel__name">
            REdi
          </div>
        </div>
        <div
          class="left__nav__expand__subscriptions__channel"
          @click="goToChannel"
        >
          <img
            :src="profile"
            class="left__nav__expand__subscriptions__channel__profile"
          />
          <div class="left__nav__expand__subscriptions__channel__name">
            REdi
          </div>
        </div>
        <div
          class="left__nav__expand__subscriptions__channel"
          @click="goToChannel"
        >
          <div class="left__nav__expand__subscriptions__channel__svg">
            <i class="fas fa-angle-down"></i>
          </div>
          <div class="left__nav__expand__subscriptions__channel__more">
            Show x more
          </div>
        </div>
      </div>
      <div class="left__nav__expand__more">
        <div class="left__nav__expand__more__title">MORE FROM YOUTUBE</div>
        <div class="left__nav__expand__more__lists">
          <div class="left__nav__expand__more__lists__svg">
            <i class="fab fa-youtube"></i>
          </div>
          <div
            class="left__nav__expand__more__lists__text"
            @click="goToPremium"
          >
            YouTube Premium
          </div>
        </div>
        <div class="left__nav__expand__more__lists">
          <div class="left__nav__expand__more__lists__svg">
            <i class="fas fa-film"></i>
          </div>
          <div class="left__nav__expand__more__lists__text" @click="goToMovies">
            Movies & Shows
          </div>
        </div>
        <div class="left__nav__expand__more__lists">
          <svg class="left__nav__expand__more__lists__svg">
            <path
              d="M 5 5 L 0 10 L 0 15 L 12.5 25 L 25 15  L 25 10 L 20 5 L 12.5 10"
              class="svg__grey"
            />
            <path d="M 5 8 L5 14" class="svg__white" />
            <path d="M 2 11 L8 11" class="svg__white" />
            <circle cx="20" cy="10" r="1" class="svg__white" />
            <circle cx="17" cy="13" r="1" class="svg__white" />
          </svg>
          <div class="left__nav__expand__more__lists__text" @click="goToGaming">
            Gaming
          </div>
        </div>
        <div class="left__nav__expand__more__lists">
          <svg class="left__nav__expand__more__lists__svg">
            <circle cx="12.5" cy="12.5" r="2.5" class="svg__grey" />
            <path d="M8 6 Q 3 12.5, 8 18 " class="svg__grey--nofill--3px" />
            <path d="M5 4 Q -1 12.5, 5 20 " class="svg__grey--nofill--3px" />
            <path d="M16 6 Q 21 12.5, 16 18 " class="svg__grey--nofill--3px" />
            <path d="M19 4 Q 25 12.5, 19 20 " class="svg__grey--nofill--3px" />
          </svg>
          <div class="left__nav__expand__more__lists__text" @click="goToLive">
            Live
          </div>
        </div>
        <div class="left__nav__expand__more__lists">
          <svg class="left__nav__expand__more__lists__svg">
            <path
              d="M12.5 8 L 12.5 5 L14 2.5 L 12.5 0 L 10.5 4"
              class="svg__grey--nofill--2px"
            />
            <path
              d="M 12.5 8 L 0 16 L 25 16 Z"
              class="svg__grey--nofill--2px"
            />
            <path d="M9 16 L 9 22" class="svg__grey--nofill--2px" />
            <path d="M10 16 L 10 22 L 16 22 L 16 16 Z" class="svg__grey" />
            <path d="M10 16 L 10 25" class="svg__grey--nofill--2px" />
            <path d="M13 16 L 13 25" class="svg__grey--nofill--2px" />
            <path d="M16 16 L 16 25" class="svg__grey--nofill--2px" />
            <path d="M18 16 L 18 22" class="svg__grey--nofill--2px" />
          </svg>
          <div
            class="left__nav__expand__more__lists__text"
            @click="goToFashion"
          >
            Fashion & Beauty
          </div>
        </div>
        <div class="left__nav__expand__more__lists">
          <div class="left__nav__expand__more__lists__svg">
            <i class="fas fa-lightbulb"></i>
          </div>
          <div
            class="left__nav__expand__more__lists__text"
            @click="goToLearning"
          >
            Learning
          </div>
        </div>
        <div class="left__nav__expand__more__lists">
          <div class="left__nav__expand__more__lists__svg">
            <i class="fas fa-trophy"></i>
          </div>
          <div class="left__nav__expand__more__lists__text" @click="goToSports">
            Sports
          </div>
        </div>
      </div>
      <div class="left__nav__expand__setting">
        <div class="left__nav__expand__setting__list">
          <div class="left__nav__expand__setting__list__svg">
            <i class="fas fa-cog"></i>
          </div>
          <div
            class="left__nav__expand__setting__list__text"
            @click="goToSettings"
          >
            Settings
          </div>
        </div>
        <div class="left__nav__expand__setting__list">
          <svg class="left__nav__expand__setting__list__svg">
            <path
              d="M0 25 L 0 0 L 17 0 L 15 3 L 25 3 L 25 15 L 13 15 L 15 12 L 3 12 L 3 25 Z"
              class="svg__grey"
            />
          </svg>
          <div class="left__nav__expand__setting__list__text">
            Report history
          </div>
        </div>
        <div class="left__nav__expand__setting__list" @click="showHelp">
          <div class="left__nav__expand__setting__list__svg">
            <i class="fas fa-question-circle"></i>
          </div>
          <div class="left__nav__expand__setting__list__text">Help</div>
        </div>
        <div class="left__nav__expand__setting__list">
          <svg class="left__nav__expand__setting__list__svg">
            <path d="M0 25 L 0 0 L 25 0 25 19 L 3 19 " class="svg__grey" />
            <path
              d="M11 5 L 13 5 L 13 10 L 11 10 Z"
              class="svg__white--nofill"
            />
            <path
              d="M11 14 L 13 14 L 13 15 L11 15 Z"
              class="svg__white--nofill"
            />
          </svg>
          <div class="left__nav__expand__setting__list__text">
            Send feedback
          </div>
        </div>
      </div>
      <div class="left__nav__expand__info">
        <div class="left__nav__expand__info__wrap">
          <a href="/" alt="About" class="left__nav__expand__info__link">
            About
          </a>
          <a href="/" alt="About" class="left__nav__expand__info__link">
            Press
          </a>
          <a href="/" alt="About" class="left__nav__expand__info__link">
            Copyright
          </a>
          <a href="/" alt="About" class="left__nav__expand__info__link">
            Contact us
          </a>
          <a href="/" alt="About" class="left__nav__expand__info__link">
            Creators
          </a>
          <a href="/" alt="About" class="left__nav__expand__info__link">
            Advertise
          </a>
          <a href="/" alt="About" class="left__nav__expand__info__link">
            Developers
          </a>
        </div>
        <div class="left__nav__expand__info__wrap">
          <a href="/" alt="About" class="left__nav__expand__info__link">
            Terms
          </a>
          <a href="/" alt="About" class="left__nav__expand__info__link">
            Privacy
          </a>
          <a href="/" alt="About" class="left__nav__expand__info__link">
            Policy & Safety
          </a>
          <a href="/" alt="About" class="left__nav__expand__info__link">
            How YouTube works
          </a>
          <a href="/" alt="About" class="left__nav__expand__info__link">
            Test new features
          </a>
        </div>
        <div class="left__nav__expand__info__wrap">
          <div class="left__nav__expand__info__wrap__copyright">
            &copy; 2021 Google LLC
          </div>
        </div>
      </div>
    </div>
    <teleport v-if="showModal" to="#modal" :disable="false">
      <Modal>
        <div class="modal__search">
          <div class="modal__search__close">
            <svg class="modal__search__close__svg" @click="showModal = false">
              <path
                d="M 15 15 L 35 35"
                class="modal__search__close__svg__grey"
              />
              <path
                d="M 35 15 L 15 35"
                class="modal__search__close__svg__grey"
              />
            </svg>
          </div>
          <div class="modal__search__input">
            <div v-if="listening" class="modal__search__input__text">
              Listening...
            </div>
            <div v-else class="modal__search__input__text">
              Microphone off. Try again.
            </div>
          </div>
          <div class="modal__search__mic">
            <svg
              @click="listening = !listening"
              :class="[
                listening
                  ? 'modal__search__mic__svg red__svg'
                  : 'modal__search__mic__svg'
              ]"
            >
              <path
                d="M35 25 L 35 45 Q 40 51, 45 45 L 45 25 Q 40 19, 35 25"
                :class="[
                  listening
                    ? 'modal__search__mic__svg__grey white__fill'
                    : 'modal__search__mic__svg__grey'
                ]"
              />
              <path
                d="M28 45 C 30 59, 50 59, 52 45 "
                :class="[
                  listening
                    ? 'modal__search__mic__svg__grey white__nofill'
                    : 'modal__search__mic__svg__grey--nofill'
                ]"
              />
              <path
                d="M40 54L 40 63 "
                :class="[
                  listening
                    ? 'modal__search__mic__svg__grey white__nofill'
                    : 'modal__search__mic__svg__grey--nofill'
                ]"
              />
            </svg>
            <div v-if="listening == false" class="modal__search__mic__error">
              Tap microphone to try again
            </div>
          </div>
        </div>
      </Modal>
    </teleport>
    <div
      :class="[
        currentRoute == '/setting' ? 'app__component--100' : '',
        currentRoute == '/studio' ? 'app__component--100' : '',
        expanded
          ? 'app__component--expand'
          : showLeftNav
          ? 'app__wrap'
          : 'app__component--100',
        currentRoute == '/watch'
          ? 'app__wrap--watch app__component--expand--watch '
          : '',
        currentRoute == '/studio'
          ? 'app__wrap--studio app__component--expand--studio '
          : ''
      ]"
      :style="{ width: exactWidth + 'px' }"
    >
      <div
        :class="[
          showModal ? 'app__component app_component--height' : 'app__component'
        ]"
      >
        <div :style="{ width: exactWidth + 'px' }">
          <router-view />
        </div>
      </div>
    </div>
    <div
      :class="[
        displayHelp == true
          ? 'app__component__help'
          : 'app__component__help app__component__help--none'
      ]"
    >
      <div class="app__component__help__head">
        <div class="app__component__help__head__title">Help</div>
        <div class="app__component__help__head__close" @click="closeHelp">
          X
        </div>
      </div>
      <div class="app__component__help__search">
        <div class="app__component__help__search__wrap">
          <div class="app__component__help__search__button">
            <i class="fas fa-search"></i>
          </div>
          <div class="app__component__help__search__text">
            <input
              type="text"
              class="app__component__help__search__text__input"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <div class="app__component__help__content">
        <div class="app__component__help__content__title">
          Popular help resources
        </div>
        <div class="app__component__help__content__wrap">
          <div class="app__component__help__content__wrap__box">
            <i class="fas fa-clipboard-list"></i>
          </div>
          <div class="app__component__help__content__wrap__text">
            Contact the YouTube Creator Support team
          </div>
        </div>
        <div class="app__component__help__content__wrap">
          <div class="app__component__help__content__wrap__box">
            <i class="fas fa-clipboard-list"></i>
          </div>
          <div class="app__component__help__content__wrap__text">
            Disable or enable Restricted Mode
          </div>
        </div>
        <div class="app__component__help__content__wrap">
          <div class="app__component__help__content__wrap__box">
            <i class="fas fa-clipboard-list"></i>
          </div>
          <div class="app__component__help__content__wrap__text">
            Concel, pause, or resume your Premium membership
          </div>
        </div>
        <div class="app__component__help__content__wrap">
          <div class="app__component__help__content__wrap__box">
            <i class="fas fa-clipboard-list"></i>
          </div>
          <div class="app__component__help__content__wrap__text">
            Sign in & out of YouTube
          </div>
        </div>
        <div class="app__component__help__content__wrap">
          <div class="app__component__help__content__wrap__box">
            <i class="fas fa-clipboard-list"></i>
          </div>
          <div
            class="app__component__help__content__wrap__text help__last--wrap"
          >
            Delete or hide your YouTube channel
          </div>
        </div>
      </div>
      <div class="app__component__help__article">
        BROWSE ALL ARTICLES
      </div>
      <div class="app__component__help__forum">
        VISIT HELP FORUM
      </div>
      <div class="app__component__help__contacttitle">Contact us</div>
      <div class="app__component__help__feedback">
        <i class="fas fa-exclamation-circle"></i>

        <div class="app__component__help__feedback__text">Send feedback</div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Modal from "@/components/Modal.vue";
import profile from "@/assets/profile.png";
import StudioNavbar from "@/components/StudioNavbar.vue";

import { onMounted, reactive, toRefs } from "vue";
export default {
  name: "App",
  components: {
    NavBar,
    Modal,
    StudioNavbar
  },
  setup() {
    const state = reactive({
      showLeftNav: true,
      showModal: false,
      listening: true,
      expanded: false,
      changeGrid: 5,
      currentRoute: null,
      displayHelp: false,
      exactWidth: 483,
      minusThisForWidth: 72,
      viewportWidth: 1900
    });

    const findExactWidth = () => {
      window.addEventListener("resize", function() {
        if (state.expanded) {
          state.minusThisForWidth = 240;
        } else {
          state.minusThisForWidth = 72;
        }
        if (state.showLeftNav == false) {
          state.exactWidth = document.documentElement.clientWidth;
          //console.log("no -");
        } else {
          state.exactWidth =
            document.documentElement.clientWidth - state.minusThisForWidth;
          //console.log("yes -");
        }
        //even when resize, need to check if the route is == /watch, so the page will even out
        determineToGetExactWidthOrNotBaseOnPageRoute();
        //console.log("swidth:", state.exactWidth);
      });
    };

    //we want the expand nav to be fixed on watch page and not moving page around
    const determineToGetExactWidthOrNotBaseOnPageRoute = () => {
      console.log("did this ahppen?");
      if (state.currentRoute == "/watch") {
        //exact width
        state.exactWidth = document.documentElement.clientWidth;
      } else if (state.currentRoute == "/studio") {
        //exact width
        state.exactWidth = document.documentElement.clientWidth;
      }
    };

    onMounted(() => {
      //check route
      state.currentRoute = window.location.pathname;

      //first load, make sure page is set up properly
      let viewWidth = document.documentElement.clientWidth;

      if (viewWidth >= 1824) {
        state.viewportWidth = 10;
        state.showLeftNav = true;
      } else if (viewWidth >= 1224) {
        state.viewportWidth = 9;
        state.showLeftNav = true;
      } else if (viewWidth >= 768) {
        state.viewportWidth = 8;
        state.showLeftNav = true;
      } else if (viewWidth >= 321) {
        state.viewportWidth = 7;
        state.showLeftNav = false;
        //console.log("!!!");
      }
      if (state.expanded) {
        state.minusThisForWidth = 240;
      } else {
        state.minusThisForWidth = 72;
      }
      if (state.showLeftNav == false) {
        //17 is the scrollbar that account for with initial load
        state.exactWidth = document.documentElement.clientWidth - 17;
      } else {
        state.exactWidth =
          document.documentElement.clientWidth - state.minusThisForWidth;
      }
      //call resize even
      findExactWidth();
      //make sure it right the first load, when user are not resize yet
      determineToGetExactWidthOrNotBaseOnPageRoute();

      //movable element tag
      moveElement(document.querySelector(".app__component__help"));
      function moveElement(elem) {
        //
        let currentClientX = 0,
          currentClientY = 0,
          clientX = 0,
          clientY = 0;

        if (elem.querySelector(".app__component__help__head")) {
          document
            .querySelector(".app__component__help__head")
            .addEventListener("mousedown", function(e) {
              e.preventDefault();
              clickeMouseDown(e);
            });
        } else {
          elem.onmousedown = clickeMouseDown;
        }

        const clickeMouseDown = e => {
          e.preventDefault();
          //console.log(e.clientX);
          //console.log(e.clientY);

          clientX = e.clientX;
          clientY = e.clientY;

          document.onmouseup = closeMoveElem;
          document.onmousemove = elemMove;
        };

        const elemMove = e => {
          e.preventDefault();

          currentClientX = clientX - e.clientX;
          currentClientY = clientY - e.clientY;
          clientX = e.clientX;
          clientY = e.clientY;

          elem.style.top = elem.offsetTop - currentClientY + "px";
          elem.style.left = elem.offsetLeft - currentClientX + "px";
        };

        const closeMoveElem = () => {
          document.onmouseup = null;
          document.onmousemove = null;
        };
      }
    });

    const switchModal = () => {
      state.showModal = true;
    };

    const clickToExpandNavLeft = () => {
      //console.log("expand!");
      state.expanded = !state.expanded;
      console.log(state.expanded);

      if (state.expanded) {
        state.minusThisForWidth = 240;
      } else {
        state.minusThisForWidth = 72;
      }
      console.log(document.documentElement.clientWidth);
      if (state.showLeftNav == false) {
        state.exactWidth = document.documentElement.clientWidth;
        console.log(state.exactWidth);
      } else {
        state.exactWidth =
          document.documentElement.clientWidth - state.minusThisForWidth;
      }

      determineToGetExactWidthOrNotBaseOnPageRoute();
    };
    const changeGrid = () => {
      if (state.changeGrid == 5) {
        state.changeGrid = 4;
      } else {
        state.changeGrid = 5;
      }
    };

    const goHome = () => {
      window.location.href = "/";
    };
    const goToTrending = () => {
      window.location.href = "/trending";
    };

    const goToSubscriptions = () => {
      window.location.href = "/subscriptions";
    };

    const goToLibrary = () => {
      window.location.href = "/library";
    };

    const goToHistory = () => {
      window.location.href = "/history";
    };
    const goToWatchLater = () => {
      window.location.href = "/playlist";
    };
    const goToPlaylist = () => {
      window.location.href = "/playlist";
    };
    const goToChannel = () => {
      window.location.href = "/channel/dfdf";
    };
    const goToPremium = () => {
      window.location.href = "/premium";
    };
    const goToMovies = () => {
      window.location.href = "/movies";
    };
    const goToGaming = () => {
      window.location.href = "/gaming";
    };
    const goToLive = () => {
      window.location.href = "/live";
    };
    const goToFashion = () => {
      window.location.href = "/fashion";
    };
    const goToLearning = () => {
      window.location.href = "/learning";
    };
    const goToSports = () => {
      window.location.href = "/sports";
    };
    const goToSettings = () => {
      window.location.href = "/setting";
    };

    const showHelp = () => {
      state.displayHelp = true;
    };
    const closeHelp = () => {
      state.displayHelp = false;
    };

    const checkViewport = () => {
      //
      window.addEventListener("resize", function() {
        let viewWidth = document.documentElement.clientWidth;
        //console.log("width:", viewWidth);
        if (viewWidth >= 1824) {
          state.viewportWidth = 10;
          state.showLeftNav = true;
        } else if (viewWidth >= 1224) {
          state.viewportWidth = 9;
          state.showLeftNav = true;
        } else if (viewWidth >= 768) {
          state.viewportWidth = 8;
          state.showLeftNav = true;
        } else if (viewWidth >= 321) {
          state.viewportWidth = 7;
          state.showLeftNav = false;
        }
      });
    };

    checkViewport();

    return {
      ...toRefs(state),
      switchModal,
      goHome,
      goToTrending,
      goToSubscriptions,
      goToLibrary,
      clickToExpandNavLeft,
      changeGrid,
      profile,
      closeHelp,
      showHelp,
      findExactWidth,
      goToHistory,
      goToWatchLater,
      goToPlaylist,
      goToChannel,
      goToPremium,
      goToMovies,
      goToGaming,
      goToLive,
      goToFashion,
      goToLearning,
      goToSports,
      goToSettings
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
#app {
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  overflow-x: hidden;
}

.app__component__help {
  position: fixed;
  width: 360px;
  height: 700px;
  background-color: white;
  border: 1px solid #80868b;
  z-index: 500;
  top: 120px;
  left: 1500px;
  border-radius: 10px;
  display: block;
}
.app__component__help--none {
  position: fixed;
  width: 360px;
  height: 700px;
  background-color: white;
  border: 1px solid #80868b;
  z-index: 500;
  top: 120px;
  left: 1500px;
  border-radius: 10px;
  display: none;
}
.app__component__help__head {
  cursor: move;
  width: 100%;
  height: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #80868b;
  z-index: 550;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  color: white;
}
.app__component__help__head__title {
  line-height: 50px;
  font-size: 1.3rem;
  margin-left: 10px;
}
.app__component__help__head__close {
  line-height: 50px;
  font-size: 1.3rem;
  margin-right: 10px;
  cursor: pointer;
}
.app__component__help__search {
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: #80868b;
  box-shadow: 0px 2px 5px grey;
  margin-bottom: 5px;
}
.app__component__help__search__wrap {
  width: 94%;
  height: 70%;
  background-color: white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.app__component__help__search__button {
  width: 15%;
  height: 100%;
  margin-left: 10px;
}
.app__component__help__search__text {
  width: 75%;
  height: 100%;
  margin-right: 10px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}
.app__component__help__search__button .fa-search {
  line-height: 60px;
  font-size: 1.3rem;
}
.app__component__help__search__button .fa-search:hover {
  cursor: pointer;
}
.app__component__help__search__text__input {
  width: 98%;
  height: 50%;
  border: 0;
  font-size: 1rem;
}
.app__component__help__search__text__input:focus {
  outline: unset;
}
.app__component__help__content {
  width: 100%;
  background-color: white;
  border-bottom: 1px solid lightgrey;
}
.app__component__help__content__title {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 0.95rem;
  text-align: left;
  text-indent: 20px;
  font-weight: 500;
  color: rgb(80, 77, 77);
  font-family: Roboto, Arial, sans-serif;
}
.app__component__help__content__wrap {
  width: 100%;

  display: flex;
  flex-flow: row nowrap;
}
.app__component__help__content__wrap:hover {
  cursor: pointer;
  background-color: lightgrey;
}
.app__component__help__content__wrap__box {
  width: 20%;
  height: 100%;
  margin: 22px 0 0;
}
.app__component__help__content__wrap__text {
  width: 80%;
  height: 100%;
  text-align: left;
  padding: 20px 0;
  font-weight: 400;
  font-size: 1.05rem;
  font-family: Roboto, Arial, sans-serif;
  border-bottom: 1px solid lightgrey;
}

.app__component__help__content__wrap__box .fa-clipboard-list {
  font-size: 1.5rem;
  color: dodgerblue;
}
.help__last--wrap {
  border-bottom: 0px solid lightgrey;
}

.app__component__help__article {
  text-align: left;
  padding: 10px 0;
  border-bottom: 1px solid lightgrey;
  color: dodgerblue;
  font-size: 0.9rem;
  font-family: Roboto, Arial, sans-serif;
  font-weight: 500;
  text-indent: 10px;
}
.app__component__help__forum {
  text-align: left;
  padding: 10px 0;
  border-bottom: 1px solid lightgrey;
  color: dodgerblue;
  font-size: 0.9rem;
  text-indent: 10px;
  font-family: Roboto, Arial, sans-serif;
  font-weight: 500;
  box-shadow: 0px 2px 5px grey;
}
.app__component__help__contacttitle {
  font-family: Roboto, Arial, sans-serif;
  width: 100%;
  padding: 20px 0;
  text-align: left;
  font-weight: 500;
  font-size: 0.9rem;
  text-indent: 10px;
}
.app__component__help__feedback {
  width: 100%;
  height: 30px;
  display: flex;
  flex-flow: row nowrap;
}
.app__component__help__feedback:hover {
  cursor: pointer;
}
.fa-exclamation-circle {
  padding-left: 10px;
  line-height: 30px;
}
.app__component__help__feedback__text {
  line-height: 30px;
  padding-left: 30px;
}
/*app--wrap*/
.app__wrap {
  width: 96.2%;
  height: 100%;
  margin-left: 72px;
  background-color: #f9f9f9;
}
.app__wrap--watch,
.app__wrap--studio {
  width: 100%;
  height: 100%;
  margin-left: 0px;
  background-color: #f9f9f9;
  margin: 0 auto;
}

.app__component--expand {
  width: 85%;
  margin-left: 240px;
}
.app__component--expand--watch,
.app__component--expand--studio {
  width: 100%;
  margin-left: 0;
}
.app__component--100 {
  width: 100%;
  margin-left: 0%;
  height: 100%;
}

.app__component {
  width: 100%;
  height: 100%;
}

.app_component--height {
  height: 100vh;
  overflow: hidden;
}

.left__nav {
  width: 72px;
  top: 60px;
  height: 100%;
  position: fixed;
  z-index: 100;
  display: flex;
  flex-flow: column nowrap;
}
.left__nav--black {
  background-color: #202020;
  color: grey;
}
.left__nav__none {
  display: none;
}
.left__nav__list {
  width: 72px;
  height: 72px;
  margin-bottom: 1px;
  margin-top: 5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  font-size: 0.7rem;
}
.left__nav__list:hover {
  cursor: pointer;
  background-color: lightgrey;
}
.left__nav__list__svg {
  width: 100%;
  height: 70%;
}
.left__nav__list__svg__grey {
  fill: grey;
  stroke: grey;
}
.left__nav__list__svg__grey--nofill {
  fill: transparent;
  stroke: grey;
  stroke-width: 2px;
}
.left__nav__list__svg__grey--2px {
  fill: transparent;
  stroke: grey;
  stroke-width: 2px;
}
.left__nav__list__svg__white {
  fill: white;
  stroke: white;
}
.left__nav__list__text {
  margin-top: 0;
  width: 100%;
  height: 30%;
}

/*expanded nav left*/
.fas,
.fab {
  display: inline-block;
  font-size: 1.1rem;
  vertical-align: top;
  line-height: 25px;
  color: grey;
}

.svg__grey {
  fill: grey;
  stroke: grey;
}
.svg__grey--nofill {
  fill: transparent;
  stroke: grey;
  stroke-width: 4px;
}
.svg__grey--nofill--4px {
  fill: transparent;
  stroke: grey;
  stroke-width: 4px;
}
.svg__grey--nofill--3px {
  fill: transparent;
  stroke: grey;
  stroke-width: 3px;
}
.svg__grey--nofill--2px {
  fill: transparent;
  stroke: grey;
  stroke-width: 2px;
}
.svg__white {
  fill: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}
.svg__white--nofill {
  fill: transparent;
  stroke: rgb(255, 255, 255);
}

/*expand*/

.left__nav__expand {
  font-family: Roboto, Arial, sans-serif;
  width: 240px;
  height: 95vh;
  top: 60px;
  position: fixed;
  z-index: 100;
  background-color: rgb(218, 218, 218);
  overflow: auto;
}
.left__nav__expand__goPlace {
  width: 100%;
  height: 140px;
  border-top: 1px solid rgb(255, 255, 255);
  border-bottom: 1px solid lightgrey;
  background-color: white;
}

.left__nav__expand__goPlace__button {
  width: 80%;
  height: 40px;
  border: 1px solid white;
  text-align: left;
  font-size: 1rem;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.left__nav__expand__goPlace__button:focus {
  outline: 0px;
}
.left__nav__expand__goPlace__button:hover {
  cursor: pointer;
  background-color: lightgrey;
}
.left__nav__expand__goPlace__button:first-child {
  margin-top: 10px;
}
.left__nav__expand__goPlace__button__svg {
  width: 25px;
  height: 25px;
  text-align: center;
}
.left__nav__expand__goPlace__button__text {
  width: 70%;
  height: 100%;
  line-height: 45px;
}

.left__nav__expand__playlists {
  width: 100%;
  border-bottom: 1px solid lightgrey;
  background-color: white;
  padding-bottom: 10px;
  padding-top: 10px;
  text-align: left;
  font-size: 1rem;
}
.left__nav__expand__playlists__list {
  width: 80%;
  height: 40px;
  line-height: 40px;
  border: 1px solid white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.left__nav__expand__playlists__list:hover {
  cursor: pointer;
  background-color: lightgrey;
}
.left__nav__expand__playlists__list__svg {
  width: 25px;
  height: 25px;
  text-align: center;
}
.left__nav__expand__playlists__list__text {
  width: 70%;
  height: 100%;
  line-height: 40px;
}

.left__nav__expand__subscriptions {
  width: 100%;
  border-bottom: 1px solid lightgrey;
  background-color: white;
  padding-bottom: 0px;
  padding-top: 10px;
  text-align: left;
  font-size: 1rem;
}
.left__nav__expand__subscriptions__text {
  width: 80%;
  margin: 0 auto;
  font-weight: 500;
  padding-bottom: 10px;
  font-size: 0.95rem;
}

.left__nav__expand__subscriptions__channel {
  width: 80%;
  height: 40px;
  line-height: 40px;
  margin: 5px auto;
  border: 1px solid white;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.left__nav__expand__subscriptions__channel:hover {
  cursor: pointer;
  background-color: lightgrey;
}

.left__nav__expand__subscriptions__channel__profile {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
.left__nav__expand__subscriptions__channel__name {
  width: 70%;
  height: 40px;
}

.left__nav__expand__subscriptions__channel__svg {
  width: 25px;
  height: 25px;
  text-align: center;
}
.left__nav__expand__subscriptions__channel__more {
  width: 70%;
  height: 40px;
}

.left__nav__expand__more {
  width: 100%;
  background-color: white;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid lightgrey;
  margin: 0 auto;
  font-size: 0.9rem;
}
.left__nav__expand__more__title {
  width: 80%;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  font-weight: 500;
}
.left__nav__expand__more__lists {
  width: 80%;
  height: 40px;
  line-height: 40px;
  text-align: left;
  margin: 5px auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.left__nav__expand__more__lists:hover {
  cursor: pointer;
  background-color: lightgrey;
}
.left__nav__expand__more__lists__svg {
  width: 25px;
  height: 25px;
  text-align: center;
}
.left__nav__expand__more__lists__text {
  width: 70%;
  height: 40px;
  line-height: 45px;
}

.left__nav__expand__setting {
  width: 100%;
  background-color: white;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid lightgrey;
}
.left__nav__expand__setting__list {
  width: 80%;
  height: 40px;
  line-height: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 5px auto;
}
.left__nav__expand__setting__list:hover {
  cursor: pointer;
  background-color: lightgrey;
}
.left__nav__expand__setting__list__svg {
  width: 25px;
  height: 25px;
  text-align: center;
}
.left__nav__expand__setting__list__text {
  width: 70%;
  height: 40px;
  line-height: 45px;
}

.left__nav__expand__info {
  width: 100%;
  background-color: white;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 10px;
}

.left__nav__expand__info__wrap {
  width: 80%;
  margin: 10px auto;
}
.left__nav__expand__info__link {
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 0.83rem;
}

/*modal*/
.hide__modal {
  display: none;
}

.modal__search {
  width: 600px;
  height: 500px;
  margin: 50px auto;
  background-color: white;
  z-index: 200;
  display: flex;
  flex-flow: column wrap;
}
.modal__search__close {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
}
.modal__search__close__svg {
  margin-right: 10px;
  width: 50px;
  height: 100%;
  right: 0;
}
.modal__search__close__svg:hover {
  cursor: pointer;
}
.modal__search__close__svg__grey {
  fill: grey;
  stroke: grey;
  stroke-width: 3px;
}

.modal__search__input {
  width: 100%;
  height: 250px;
  overflow-y: auto;
}
.modal__search__input__text {
  font-size: 1.5rem;
  font-family: "Roboto", Arial, sans-serif;
  padding: 1rem 2rem;
}

.modal__search__mic {
  width: 100%;
  height: 200px;
}
.modal__search__mic__svg {
  display: block;
  width: 80px;
  height: 80px;
  background-color: lightgrey;
  margin: 50px auto 10px;
  border-radius: 50%;
}
.modal__search__mic__svg:hover {
  cursor: pointer;
}
.modal__search__mic__svg__grey {
  fill: rgb(83, 82, 82);
  stroke: rgb(83, 82, 82);
}
.modal__search__mic__svg__grey--nofill {
  fill: transparent;
  stroke: rgb(83, 82, 82);
  stroke-width: 3px;
}
.modal__search__mic__error {
  text-align: center;
  font-size: 1.1rem;
  color: rgb(80, 79, 79);
}

.red__svg {
  background-color: red;
}
.white__fill {
  fill: white;
  stroke: white;
}
.white__nofill {
  fill: transparent;
  stroke: white;
  stroke-width: 3px;
}
/*a.router-link-exact-active*/
</style>
