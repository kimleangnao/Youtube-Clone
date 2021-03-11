<template>
  <div :class="[darkMode ? 'nav nav--black' : 'nav']">
    <section class="nav__left">
      <div class="nav__bar" @click="expand">
        <div
          :class="[
            darkMode ? 'nav__bar__line nav__bar__line--black' : 'nav__bar__line'
          ]"
        ></div>
        <div
          :class="[
            darkMode ? 'nav__bar__line nav__bar__line--black' : 'nav__bar__line'
          ]"
        ></div>
        <div
          :class="[
            darkMode ? 'nav__bar__line nav__bar__line--black' : 'nav__bar__line'
          ]"
        ></div>
      </div>
      <div class="nav__logo" @click="navigateHome">
        <svg class="nav__logo__svg">
          <rect
            width="33"
            height="24"
            rx="6"
            class="nav__logo__svg__rect--red"
          />
          <path
            d="M 22 12 L 13 8 L 13 16 Z"
            class="nav__logo__svg__path--white"
          />
        </svg>
        <div class="nav__logo__text">YouTube</div>
      </div>
    </section>
    <section class="nav__mid">
      <div class="nav__search">
        <form action="/" class="nav__form" v-on:submit.prevent="search">
          <input
            v-model="inputSearch"
            type="text"
            id="search"
            placeholder="Search"
            :class="[
              darkMode
                ? 'nav__search__input nav__search__input--black'
                : 'nav__search__input'
            ]"
          />
          <button
            :class="[
              darkMode
                ? 'nav__search__button nav__search__button--black '
                : 'nav__search__button'
            ]"
          >
            <i class="fas fa-search"></i>
          </button>
        </form>
        <button
          :class="[
            darkMode
              ? 'nav__search__mic nav__search__mic--black'
              : 'nav__search__mic'
          ]"
        >
          <svg class="nav__search__mic__svg" @click="showModal">
            <rect
              x="7"
              y="6"
              width="5"
              height="11"
              rx="2"
              :class="[
                darkMode
                  ? 'nav__search__mic__svg__rect nav__search__mic__svg__rect--black'
                  : 'nav__search__mic__svg__rect'
              ]"
            />
            <path
              d="M3 17 Q 9.5 25, 16 17"
              :class="[
                darkMode
                  ? 'nav__search__mic__svg__path nav__search__mic__svg__path--black'
                  : 'nav__search__mic__svg__path'
              ]"
            />
            <path
              d="M 9.5 20 L 9.5 26"
              :class="[
                darkMode
                  ? 'nav__search__mic__svg__path nav__search__mic__svg__path--black'
                  : 'nav__search__mic__svg__path'
              ]"
            />
          </svg>
        </button>
      </div>
    </section>
    <section
      v-if="showSmallSearch == true"
      :class="[
        showSmallSearch
          ? 'nav__mid--specialsearch--open'
          : 'nav__mid--specialsearch',
        darkMode ? 'nav__mid--specialsearch--open--black' : ''
      ]"
    >
      <button
        :class="[
          darkMode
            ? 'nav__mid--specialsearch__back--black'
            : 'nav__mid--specialsearch__back'
        ]"
        @click="switchSmallSearchClose"
      >
        <i class="fas fa-angle-left"></i>
      </button>
      <form action="/" class="nav__form" v-on:submit.prevent="search">
        <input
          v-model="inputSearch"
          type="text"
          id="search"
          placeholder="Search"
          :class="[
            darkMode
              ? 'nav__search__input nav__search__input--black'
              : 'nav__search__input'
          ]"
        />
        <button
          :class="[
            darkMode
              ? 'nav__search__button nav__search__button--black '
              : 'nav__search__button'
          ]"
        >
          <i class="fas fa-search"></i>
        </button>
      </form>
      <button
        :class="[
          darkMode
            ? 'nav__mid--specialsearch__mic--black'
            : 'nav__mid--specialsearch__mic'
        ]"
      >
        <i class="fas fa-microphone"></i>
      </button>
    </section>
    <section class="nav__right">
      <button
        v-if="viewportWidth == 7"
        :class="[
          darkMode
            ? 'nav__right__searchButton--black'
            : 'nav__right__searchButton'
        ]"
        @click="switchSmallSearchOpen"
      >
        <i class="fas fa-search"></i>
      </button>
      <button
        v-if="viewportWidth == 7"
        :class="[
          darkMode ? 'nav__right__micButton--black' : 'nav__right__micButton'
        ]"
      >
        <i class="fas fa-microphone"></i>
      </button>
      <button
        :class="[darkMode ? 'nav__live nav__live--black' : 'nav__live']"
        @click="liveCreateSwitch"
      >
        <svg class="nav__search__live__svg">
          <rect
            x="4"
            y="12"
            width="15"
            height="12"
            :class="[
              darkMode
                ? 'nav__search__live__svg__rect nav__search__live__svg__rect--black'
                : 'nav__search__live__svg__rect'
            ]"
          />
          <path
            d="M20 18 L 23 15 L 23 21 Z"
            :class="[
              darkMode
                ? 'nav__search__live__svg__path nav__search__live__svg__path--black'
                : 'nav__search__live__svg__path'
            ]"
          />
          <path
            d="M6 18 L 16 18 "
            :class="[
              darkMode
                ? 'nav__search__live__svg__cross nav__search__live__svg__cross--black'
                : 'nav__search__live__svg__cross'
            ]"
          />
          <path
            d="M11 14 L 11 22"
            :class="[
              darkMode
                ? 'nav__search__live__svg__cross nav__search__live__svg__cross--black'
                : 'nav__search__live__svg__cross'
            ]"
          />
        </svg>
        <div
          :class="[
            liveCreate
              ? 'nav__right__create__absolute '
              : 'nav__right__create__absolute hide__live__absolute'
          ]"
        >
          <div class="nav__right__create__absolute__list">
            <svg class="nav__right__create__absolute__list__svg">
              <rect
                width="25"
                height="25"
                x="15"
                y="7.5"
                class="nav__right__create__absolute__list__svg__grey"
              />
              <path
                d="M25 15 L 25 25 L 32 20 Z"
                class="nav__right__create__absolute__list__svg__red"
              />
            </svg>
            <div class="nav__right__create__absolute__list__text">
              Upload video
            </div>
          </div>
          <div class="nav__right__create__absolute__list">
            <svg class="nav__right__create__absolute__list__svg">
              <circle
                cx="25"
                cy="20"
                r="3"
                class="nav__right__create__absolute__list__svg__red"
              />
              <path
                d="M 21 15 Q 15 20, 21 25"
                class="nav__right__create__absolute__list__svg__grey"
              />
              <path
                d="M 19 12 Q 10 20, 19 28"
                class="nav__right__create__absolute__list__svg__grey"
              />
              <path
                d="M 29 15 Q 35 20, 29 25"
                class="nav__right__create__absolute__list__svg__grey"
              />
              <path
                d="M 31 12 Q 40 20, 31 28"
                class="nav__right__create__absolute__list__svg__grey"
              />
            </svg>

            <div class="nav__right__create__absolute__list__text">Go live</div>
          </div>
        </div>
      </button>

      <button
        :class="[darkMode ? 'nav__menu nav__menu--black' : 'nav__menu']"
        @click="menuAppSwitch"
      >
        <svg class="nav__search__menu__svg">
          <rect
            x="3"
            y="8"
            width="4"
            height="4"
            :class="[
              darkMode
                ? 'nav__search__menu__svg__rect nav__search__menu__svg__rect--black'
                : 'nav__search__menu__svg__rect'
            ]"
          />
          <rect
            x="11"
            y="8"
            width="4"
            height="4"
            :class="[
              darkMode
                ? 'nav__search__menu__svg__rect nav__search__menu__svg__rect--black'
                : 'nav__search__menu__svg__rect'
            ]"
          />
          <rect
            x="19"
            y="8"
            width="4"
            height="4"
            :class="[
              darkMode
                ? 'nav__search__menu__svg__rect nav__search__menu__svg__rect--black'
                : 'nav__search__menu__svg__rect'
            ]"
          />

          <rect
            x="3"
            y="16"
            width="4"
            height="4"
            :class="[
              darkMode
                ? 'nav__search__menu__svg__rect nav__search__menu__svg__rect--black'
                : 'nav__search__menu__svg__rect'
            ]"
          />
          <rect
            x="11"
            y="16"
            width="4"
            height="4"
            :class="[
              darkMode
                ? 'nav__search__menu__svg__rect nav__search__menu__svg__rect--black'
                : 'nav__search__menu__svg__rect'
            ]"
          />
          <rect
            x="19"
            y="16"
            width="4"
            height="4"
            :class="[
              darkMode
                ? 'nav__search__menu__svg__rect nav__search__menu__svg__rect--black'
                : 'nav__search__menu__svg__rect'
            ]"
          />

          <rect
            x="3"
            y="24"
            width="4"
            height="4"
            :class="[
              darkMode
                ? 'nav__search__menu__svg__rect nav__search__menu__svg__rect--black'
                : 'nav__search__menu__svg__rect'
            ]"
          />
          <rect
            x="11"
            y="24"
            width="4"
            height="4"
            :class="[
              darkMode
                ? 'nav__search__menu__svg__rect nav__search__menu__svg__rect--black'
                : 'nav__search__menu__svg__rect'
            ]"
          />
          <rect
            x="19"
            y="24"
            width="4"
            height="4"
            :class="[
              darkMode
                ? 'nav__search__menu__svg__rect nav__search__menu__svg__rect--black'
                : 'nav__search__menu__svg__rect'
            ]"
          />
        </svg>
        <div
          :class="[
            menuApp
              ? 'nav__menu__absolute'
              : 'nav__menu__absolute hide__menu__absolute'
          ]"
        >
          <div class="nav__menu__absolute__list">
            <svg class="nav__menu__absolute__list__svg">
              <rect
                width="28"
                height="20"
                x="18"
                y="8"
                rx="2"
                class="nav__menu__absolute__list__svg__red"
              />
              <path
                d="M28 12 L 28 22 L 37 17"
                class="nav__menu__absolute__list__svg__white"
              />
              <path
                d="M27 30.2 L 37 30.2"
                class="nav__menu__absolute__list__svg__red"
              />
            </svg>
            <div class="nav__menu__absolute__list__text">YouTube TV</div>
          </div>
          <div class="nav__menu__absolute__group">
            <div class="nav__menu__absolute__group__list">
              <svg class="nav__menu__absolute__group__list__svg">
                <circle
                  cx="32"
                  cy="20"
                  r="14"
                  class="nav__menu__absolute__group__list__svg__red"
                />
                <circle
                  cx="32"
                  cy="20"
                  r="7"
                  class="nav__menu__absolute__group__list__svg__white"
                />
                <path
                  d="M30 16 L 30 24 L 36 20 Z"
                  class="nav__menu__absolute__group__list__svg__white--fill"
                />
              </svg>
              <div class="nav__menu__absolute__group__list__text">
                YouTube Music
              </div>
            </div>
            <div class="nav__menu__absolute__group__list">
              <svg
                class="nav__menu__absolute__group__list__svg special__effect"
              >
                <rect
                  width="28"
                  height="20"
                  x="18"
                  y="8"
                  rx="2"
                  class="nav__menu__absolute__group__list__svg__red"
                />
                <path
                  d="M29 12 L 29 22 L 37 17 Z"
                  class="nav__menu__absolute__group__list__svg__white--fill"
                />
              </svg>
              <div class="nav__menu__absolute__group__list__text">
                YouTube Kids
              </div>
            </div>
          </div>
          <div class="nav__menu__absolute__list">
            <svg class="nav__menu__absolute__list__svg">
              <rect
                width="28"
                height="20"
                x="18"
                y="10"
                rx="2"
                class="nav__menu__absolute__list__svg__red"
              />
              <path
                d="M29 14 L 29 24 L 37 19"
                class="nav__menu__absolute__list__svg__white"
              />
            </svg>
            <div class="nav__menu__absolute__list__text">Creator Academy</div>
          </div>
          <div class="nav__menu__absolute__list">
            <svg class="nav__menu__absolute__list__svg">
              <rect
                width="28"
                height="20"
                x="18"
                y="10"
                rx="2"
                class="nav__menu__absolute__list__svg__red"
              />
              <path
                d="M29 14 L 29 24 L 37 19"
                class="nav__menu__absolute__list__svg__white"
              />
            </svg>
            <div class="nav__menu__absolute__list__text">
              YouTube for Artists
            </div>
          </div>
        </div>
      </button>
      <button
        :class="[
          darkMode
            ? 'nav__notification nav__notification--black'
            : 'nav__notification'
        ]"
        @click="notificationSwitch"
      >
        <svg class="nav__notification__svg">
          <path
            d="M13.5 10 Q 6 10, 7 21 L 7 26 L 5 27 L 5 29 L 22 29 L 22 27 L 20 26 L 20 21 Q 20.5 10, 13.5 10"
            :class="[
              darkMode
                ? 'nav__notification__svg__path nav__notification__svg__path--black'
                : 'nav__notification__svg__path'
            ]"
          />
          <circle
            cx="13.5"
            cy="10"
            r="2"
            :class="[
              darkMode
                ? 'nav__notification__svg__circle nav__notification__svg__circle--black'
                : 'nav__notification__svg__circle'
            ]"
          />
          <path
            d="M11.5 32 Q 13.5 35, 15.5 32 Z"
            :class="[
              darkMode
                ? 'nav__notification__svg__path nav__notification__svg__path--black'
                : 'nav__notification__svg__path'
            ]"
          />
        </svg>
        <div
          :class="[
            notification
              ? 'nav__notification__absolute'
              : 'nav__notification__absolute nav__notification__hide'
          ]"
        >
          <div class="nav__notification__absolute__title">
            <div class="nav__notification__absolute__title__text">
              Notifications
            </div>
            <div class="nav__notification__absolute__title__setting">
              <i class="fas fa-cog"></i>
            </div>
          </div>
          <div class="nav__notification__absolute__wrap">
            <NotificationBox />
            <NotificationBox />
            <NotificationBox />
            <NotificationBox />
            <NotificationBox />
          </div>
        </div>
      </button>
      <div class="nav__user">
        <img
          :src="userImage"
          class="nav__user__image"
          @click="switchUserInfo"
        />
        <div
          :class="[
            userInfo
              ? 'nav__user__expand nav__user__expand--on'
              : 'nav__user__expand'
          ]"
        >
          <div class="nav__user__expand__first">
            <div class="nav__user__expand__first__logo">
              <img
                :src="imageLogo"
                alt="profile"
                class="nav__user__expand__first__logo__image"
              />
            </div>
            <div class="nav__user__expand__first__gmail">
              <div class="nav__user__expand__first__gmail__name">REdi</div>
              <div class="nav__user__expand__first__gmail__email">
                Redi@gmail.com
              </div>
              <div class="nav__user__expand__first__gmail__setting">
                Manage your Google Account
              </div>
            </div>
          </div>
          <div class="nav__user__expand__second">
            <div class="nav__user__expand__second__yourChannel">
              <div class="nav__user__expand__second__yourChannel__icon">
                <i class="fas fa-user-circle"></i>
              </div>
              <div class="nav__user__expand__second__yourChannel__text">
                Your channel
              </div>
            </div>
            <div class="nav__user__expand__second__membership">
              <div class="nav__user__expand__second__membership__icon">
                <i class="fas fa-dollar-sign"></i>
              </div>
              <div class="nav__user__expand__second__membership__text">
                Purchases and memberships
              </div>
            </div>
            <div class="nav__user__expand__second__studio">
              <div class="nav__user__expand__second__studio__icon">
                <i class="fas fa-cog"></i>
              </div>
              <div class="nav__user__expand__second__studio__text">
                YouTube Studio
              </div>
            </div>
            <div class="nav__user__expand__second__switchAccount">
              <div class="nav__user__expand__second__switchAccount__icon">
                <i class="fas fa-user-friends"></i>
              </div>

              <div class="nav__user__expand__second__switchAccount__text">
                Switch account
              </div>
            </div>
            <div class="nav__user__expand__second__signout">
              <div class="nav__user__expand__second__signout__icon">
                <i class="fas fa-sign-out-alt"></i>
              </div>
              <div class="nav__user__expand__second__signout__text">
                Sign out
              </div>
            </div>
          </div>
          <div class="nav__user__expand__third">
            <div class="nav__user__expand__third__theme">
              <div class="nav__user__expand__third__theme__icon">
                <i class="fas fa-adjust"></i>
              </div>

              <div class="nav__user__expand__third__theme__text">
                Appearance: Device theme
              </div>
            </div>
            <div class="nav__user__expand__third__languages">
              <div class="nav__user__expand__third__languages__icon">
                <i class="fas fa-language"></i>
              </div>
              <div class="nav__user__expand__third__languages__text">
                Language: English
              </div>
            </div>
            <div class="nav__user__expand__third__location">
              <div class="nav__user__expand__third__location__icon">
                <i class="fas fa-globe"></i>
              </div>
              <div class="nav__user__expand__third__location__text">
                Location: United States
              </div>
            </div>
            <div class="nav__user__expand__third__setting">
              <div class="nav__user__expand__third__setting__icon">
                <i class="fas fa-cog"></i>
              </div>
              <div class="nav__user__expand__third__setting__text">
                Settings
              </div>
            </div>
            <div class="nav__user__expand__third__dataInYoutube">
              <div class="nav__user__expand__third__dataInYoutube__icon">
                <i class="fas fa-database"></i>
              </div>
              <div class="nav__user__expand__third__dataInYoutube__text">
                Your data in YouTube
              </div>
            </div>
            <div class="nav__user__expand__third__help">
              <div class="nav__user__expand__third__help__icon">
                <i class="fas fa-question-circle"></i>
              </div>
              <div class="nav__user__expand__third__help__text">Help</div>
            </div>
            <div class="nav__user__expand__third__feedback">
              <div class="nav__user__expand__third__feedback__icon">
                <i class="fas fa-comment-alt"></i>
              </div>
              <div class="nav__user__expand__third__feedback__text">
                Send feddback
              </div>
            </div>
            <div class="nav__user__expand__third__keyboardShortcuts">
              <div class="nav__user__expand__third__keyboardShortcuts__icon">
                <i class="fas fa-keyboard"></i>
              </div>
              <div class="nav__user__expand__third__keyboardShortcuts__text">
                Keyboard shortcuts
              </div>
            </div>
          </div>
          <div class="nav__user__expand__four">
            <div class="nav__user__expand__four__text">
              Restricted Mode: Off
            </div>
            <div class="nav__user__expand__four__icon">
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import imageLogo from "@/assets/profile.png";
import { onMounted, reactive, toRefs } from "vue";
import NotificationBox from "@/components/NotificationBox.vue";

export default {
  name: "NavBar",
  props: {
    showModal: {
      type: Function,
      required: true
    },
    expand: {
      type: Function,
      required: true
    },
    darkMode: {
      type: Boolean,
      required: false
    }
  },
  components: {
    NotificationBox
  },
  setup() {
    const state = reactive({
      liveCreate: false,
      menuApp: false,
      notification: false,
      userImage: imageLogo,
      inputSearch: "",
      showSmallSearch: false,
      viewportWidth: 10,
      userInfo: false
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

    const switchSmallSearchOpen = () => {
      state.showSmallSearch = true;
    };
    const switchSmallSearchClose = () => {
      state.showSmallSearch = false;
    };

    const navigateHome = () => {
      window.location.href = "/";
    };
    const search = e => {
      e.preventDefault();
      window.location.href = "/search?search_query=" + state.inputSearch;
    };

    const liveCreateSwitch = () => {
      state.liveCreate = !state.liveCreate;
      state.menuApp = false;
      state.notification = false;
    };
    const menuAppSwitch = () => {
      state.menuApp = !state.menuApp;
      state.liveCreate = false;
      state.notification = false;
    };
    const notificationSwitch = () => {
      state.menuApp = false;
      state.liveCreate = false;
      state.notification = !state.notification;
    };

    const switchUserInfo = () => {
      state.userInfo = !state.userInfo;
    };
    // expose to template
    return {
      ...toRefs(state),
      imageLogo,
      navigateHome,
      search,
      liveCreateSwitch,
      menuAppSwitch,
      notificationSwitch,
      switchSmallSearchOpen,
      switchSmallSearchClose,
      switchUserInfo
    };
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
@media only screen and (min-width: 321px) {
  .nav__left {
    width: 200px;
    justify-content: space-around;
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    transform: scale(0.85);
  }

  .nav__mid {
    display: flex;
    flex-flow: row nowrap;
    width: 45%;
    justify-content: space-around;
    align-items: center;
    display: none;
  }
  .nav__mid--specialsearch {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    justify-content: space-around;
    align-items: center;
    display: none;
  }
  .nav__mid--specialsearch--open {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    justify-content: space-around;
    align-items: center;
    display: block;
    z-index: 10;
    background-color: white;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  .nav__mid--specialsearch--open--black {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    justify-content: space-around;
    align-items: center;
    display: block;
    z-index: 10;
    background-color: black;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  /*search*/
  .nav__form {
    width: 60%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  .nav__search__input {
    width: 78%;
    height: 30px;
    font-size: 18px;
    padding-left: 15px;
    border-top: 1px solid rgb(184, 182, 182);
    border-left: 1px solid rgb(184, 182, 182);
    border-bottom: 1px solid rgb(184, 182, 182);
    border-right: 0px solid rgb(184, 182, 182);
    z-index: 2;
  }

  .nav__search__button {
    border-top: 1px solid rgb(184, 182, 182);
    border-left: 1px solid rgb(184, 182, 182);
    border-bottom: 1px solid rgb(184, 182, 182);
    border-right: 1px solid rgb(184, 182, 182);
    background-color: white;
    height: 34px;
  }

  .nav__search__button:hover {
    cursor: pointer;
  }

  .nav__mid--specialsearch__back {
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    background-color: white;
  }
  .nav__mid--specialsearch__back--black {
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    background-color: black;
  }
  .nav__mid--specialsearch__back .fas {
    color: rgb(26, 26, 26);
  }
  .nav__mid--specialsearch__back--black .fas {
    color: white;
  }

  .nav__mid--specialsearch__back:hover {
    cursor: pointer;
  }
  .nav__mid--specialsearch__mic {
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    background-color: white;
  }
  .nav__mid--specialsearch__mic--black {
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    background-color: black;
  }
  .nav__mid--specialsearch__mic .fas {
    color: rgb(26, 26, 26);
  }
  .nav__mid--specialsearch__mic--black .fas {
    color: white;
  }
  .nav__mid--specialsearch__mic:hover {
    cursor: pointer;
  }
  .nav__right {
    width: 280px;
    justify-content: space-around;
    align-items: center;
    position: relative;
    padding-right: 0px;
    display: flex;
    flex-flow: row nowrap;
    transform: scale(0.8);
  }
  .nav__right__searchButton--black {
    color: white;
    border-top: 1px solid #202020;
    border-left: 1px solid #202020;
    border-bottom: 1px solid #202020;
    border-right: 1px solid #202020;
    background-color: #202020;
  }
  .nav__right__searchButton--black:hover {
    cursor: pointer;
  }
  .nav__right__searchButton--black .fas {
    color: white;
  }
  .nav__right__micButton--black {
    color: white;
    border-top: 1px solid #202020;
    border-left: 1px solid #202020;
    border-bottom: 1px solid #202020;
    border-right: 1px solid #202020;
    background-color: #202020;
  }
  .nav__right__micButton--black:hover {
    cursor: pointer;
  }
  .nav__right__micButton--black .fas {
    color: white;
  }
}
@media only screen and (min-width: 768px) {
  .nav__left {
    width: 200px;
    justify-content: space-around;
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    transform: scale(0.85);
  }

  .nav__mid {
    display: flex;
    flex-flow: row nowrap;
    width: 45%;
    justify-content: space-around;
    align-items: center;
  }

  /*search*/
  .nav__form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  .nav__search__input {
    width: 100%;
    height: 30px;
    font-size: 18px;
    padding-left: 15px;
    border-top: 1px solid rgb(184, 182, 182);
    border-left: 1px solid rgb(184, 182, 182);
    border-bottom: 1px solid rgb(184, 182, 182);
    border-right: 0px solid rgb(184, 182, 182);
    z-index: 2;
  }
  .nav__search__button .fas {
    line-height: 34px;
  }
  .nav__search__button {
    z-index: 1;
    width: 15%;
    height: 34px;
    line-height: 35px;
    border-top: 1px solid rgb(184, 182, 182);
    border-right: 1px solid rgb(184, 182, 182);
    border-bottom: 1px solid rgb(184, 182, 182);
    border-left: 1px solid rgb(184, 182, 182);
    background-color: #f0f0f0;
    cursor: pointer;
  }

  .nav__search__button__svg {
    width: 100%;
    height: 100%;
  }
  .nav__search__button__svg__circle {
    fill: transparent;
    stroke: grey;
    stroke-width: 1.8px;
  }
  .nav__search__button__svg__path {
    fill: transparent;
    stroke: grey;
    stroke-width: 1.8px;
  }

  .nav__mid--specialsearch__back {
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    background-color: white;
  }
  .nav__mid--specialsearch__back .fas {
    color: rgb(26, 26, 26);
  }
  .nav__mid--specialsearch__back:hover {
    cursor: pointer;
  }
  .nav__mid--specialsearch__mic {
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    background-color: white;
  }
  .nav__mid--specialsearch__mic .fas {
    color: rgb(26, 26, 26);
  }
  .nav__mid--specialsearch__mic:hover {
    cursor: pointer;
  }
  .nav__right {
    width: 280px;
    justify-content: space-around;
    align-items: center;
    position: relative;
    padding-right: 0px;
    display: flex;
    flex-flow: row nowrap;
    transform: scale(0.8);
  }
}
@media only screen and (min-width: 1224px) {
  .nav__left {
    width: 200px;
    justify-content: space-around;
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    transform: scale(1);
  }

  .nav__mid {
    display: flex;
    flex-flow: row nowrap;
    width: 45%;
    justify-content: space-around;
    align-items: center;
  }

  /*search*/
  .nav__form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  .nav__search__input {
    width: 100%;
    height: 30px;
    font-size: 18px;
    padding-left: 15px;
    border-top: 1px solid rgb(184, 182, 182);
    border-left: 1px solid rgb(184, 182, 182);
    border-bottom: 1px solid rgb(184, 182, 182);
    border-right: 0px solid rgb(184, 182, 182);
    z-index: 2;
  }
  .nav__search__button .fas {
    line-height: 34px;
  }
  .nav__search__button {
    z-index: 1;
    width: 15%;
    height: 34px;
    line-height: 35px;
    border-top: 1px solid rgb(184, 182, 182);
    border-right: 1px solid rgb(184, 182, 182);
    border-bottom: 1px solid rgb(184, 182, 182);
    border-left: 1px solid rgb(184, 182, 182);
    background-color: #f0f0f0;
    cursor: pointer;
  }

  .nav__search__button__svg {
    width: 100%;
    height: 100%;
  }
  .nav__search__button__svg__circle {
    fill: transparent;
    stroke: grey;
    stroke-width: 1.8px;
  }
  .nav__search__button__svg__path {
    fill: transparent;
    stroke: grey;
    stroke-width: 1.8px;
  }

  .nav__mid--specialsearch__back {
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    background-color: white;
  }
  .nav__mid--specialsearch__back .fas {
    color: rgb(26, 26, 26);
  }
  .nav__mid--specialsearch__back:hover {
    cursor: pointer;
  }
  .nav__mid--specialsearch__mic {
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    background-color: white;
  }
  .nav__mid--specialsearch__mic .fas {
    color: rgb(26, 26, 26);
  }
  .nav__mid--specialsearch__mic:hover {
    cursor: pointer;
  }
  .nav__right {
    width: 280px;
    justify-content: space-around;
    align-items: center;
    position: relative;
    padding-right: 0px;
    display: flex;
    flex-flow: row nowrap;
    transform: scale(1);
  }
}
@media only screen and (min-width: 1824px) {
  .nav__left {
    width: 200px;
    justify-content: space-around;
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    transform: scale(1);
  }

  .nav__mid {
    display: flex;
    flex-flow: row nowrap;
    width: 45%;
    justify-content: space-around;
    align-items: center;
  }

  /*search*/
  .nav__form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  .nav__search__input {
    width: 100%;
    height: 30px;
    font-size: 18px;
    padding-left: 15px;
    border-top: 1px solid rgb(184, 182, 182);
    border-left: 1px solid rgb(184, 182, 182);
    border-bottom: 1px solid rgb(184, 182, 182);
    border-right: 0px solid rgb(184, 182, 182);
    z-index: 2;
  }

  .nav__search__button {
    z-index: 1;
    width: 15%;
    height: 34px;
    line-height: 35px;
    border-top: 1px solid rgb(184, 182, 182);
    border-right: 1px solid rgb(184, 182, 182);
    border-bottom: 1px solid rgb(184, 182, 182);
    border-left: 1px solid rgb(184, 182, 182);
    background-color: #f0f0f0;
    cursor: pointer;
  }
  .nav__search__button .fas {
    line-height: 34px;
  }
  .nav__search__button__svg {
    width: 100%;
    height: 100%;
  }
  .nav__search__button__svg__circle {
    fill: transparent;
    stroke: grey;
    stroke-width: 1.8px;
  }
  .nav__search__button__svg__path {
    fill: transparent;
    stroke: grey;
    stroke-width: 1.8px;
  }

  .nav__mid--specialsearch__back {
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    background-color: white;
  }
  .nav__mid--specialsearch__back .fas {
    color: rgb(26, 26, 26);
  }
  .nav__mid--specialsearch__back:hover {
    cursor: pointer;
  }
  .nav__mid--specialsearch__mic {
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    background-color: white;
  }
  .nav__mid--specialsearch__mic .fas {
    color: rgb(26, 26, 26);
  }
  .nav__mid--specialsearch__mic:hover {
    cursor: pointer;
  }
  .nav__right {
    width: 280px;
    justify-content: space-around;
    align-items: center;
    position: relative;
    padding-right: 0px;
    display: flex;
    flex-flow: row nowrap;
    transform: scale(1);
  }
}
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  font-size: 10px;
  background-color: white;
  font-size: 15px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border-bottom: 1px solid #f9f9f9;
  z-index: 5;
}
.nav--black {
  color: white;
  background-color: #202020;
  border-bottom: 1px solid #202020;
}

.nav__bar {
  width: 24px;
  height: 24px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
}
.nav__bar:hover {
  cursor: pointer;
}
.nav__bar__line {
  width: 100%;
  height: 2px;
  background-color: black;
}
.nav__bar__line--black {
  background-color: white;
}
.nav__logo {
  width: 58%;
  height: 24px;
  line-height: 40px;
  font-size: 25px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
}
.nav__logo__svg {
  width: 100%;
  height: 100%;
}
.nav__logo__svg__path {
  fill: transparent;
  stroke: black;
  stroke-width: 1px;
}
.nav__logo__svg__rect {
  fill: transparent;
  stroke: black;
  stroke-width: 3px;
}
.nav__logo__svg__rect--red {
  fill: red;
  stroke: red;
  stroke-width: 1px;
}
.nav__logo__svg__rect--red--no {
  fill: transparent;
  stroke: red;
  stroke-width: 1px;
}
.nav__logo__svg__path--white {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
.nav__logo__svg__path--black {
  fill: black;
  stroke: black;
  stroke-width: 1px;
}

.nav__logo__text {
  font-size: 24px;

  font-family: "Oswald", sans-serif;
  font-weight: bolder;
}

/*search*/
/**/
.nav__search {
  width: 85%;
  height: 35px;
  display: flex;
  flex-flow: row nowrap;
}
/*
.nav__form {
  width: 90%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}

.nav__search__input {
  width: 86%;
  height: 30px;
  font-size: 18px;
  padding-left: 15px;
  border-top: 1px solid rgb(184, 182, 182);
  border-left: 1px solid rgb(184, 182, 182);
  border-bottom: 1px solid rgb(184, 182, 182);
  border-right: 0px solid rgb(184, 182, 182);
  z-index: 2;
}
*/
.nav__search__input--black {
  background-color: rgb(26, 26, 26);
  border-top: 1px solid #313131;
  border-left: 1px solid #313131;
  border-bottom: 1px solid #313131;
  border-right: 0px solid #313131;
  color: white;
}
.nav__search__input:focus {
  outline: 0px solid white;
}
.nav__search__button:focus,
.nav__search__mic:focus {
  outline: 0px solid white;
}

.nav__search__button--black {
  background-color: #313131;
  border-top: 1px solid #313131;
  border-left: 1px solid #313131;
  border-bottom: 1px solid #313131;
  border-right: 0px solid #313131;
}

.nav__search__button__svg {
  width: 100%;
  height: 100%;
}
.nav__search__button__svg__circle {
  fill: transparent;
  stroke: grey;
  stroke-width: 1.8px;
}
.nav__search__button__svg__path {
  fill: transparent;
  stroke: grey;
  stroke-width: 1.8px;
}

/*mic*/
.nav__search__mic {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 2%;
  border: 1px solid white;
  background-color: white;
  cursor: pointer;
  transition: all 1s;
}
.nav__search__mic--black {
  border: 1px solid #202020;
  background-color: #202020;
}
.nav__search__mic:focus {
  outline: 0px solid white;
  transform-origin: 50 50;
  background: rgb(206, 205, 205);
}
.nav__search__mic__svg {
  width: 100%;
  height: 100%;
}
.nav__search__mic__svg__rect {
  fill: rgb(22, 22, 22);
  stroke: rgb(22, 22, 22);
  stroke-width: 1.8px;
}
.nav__search__mic__svg__rect--black {
  fill: white;
  stroke: white;
  stroke-width: 1.8px;
}
.nav__search__mic__svg__path {
  fill: transparent;
  stroke: rgb(22, 22, 22);
  stroke-width: 1.8px;
}
.nav__search__mic__svg__path--black {
  fill: transparent;
  stroke: white;
  stroke-width: 1.8px;
}
/*nav__right search*/
.nav__right__searchButton {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 1s;
  margin: 0 1px;
  border: 1px solid white;
  background-color: white;
}
.nav__right__searchButton .fas {
  color: rgb(22, 22, 22);
}
.nav__right__searchButton:hover {
  cursor: pointer;
}
.nav__right__searchButton:focus {
  outline: unset;
}
/*nav__right mic*/
.nav__right__micButton {
  width: 40px;
  height: 40px;
  transition: all 1s;
  border-radius: 50%;
  border: 1px solid white;
  background-color: white;
  color: rgb(22, 22, 22);
}
.nav__right__micButton .fas {
  color: rgb(22, 22, 22);
}
.nav__right__micButton:hover {
  cursor: pointer;
}
.nav__right__micButton:focus {
  outline: unset;
}
/*live*/
.nav__live {
  width: 40px;
  height: 40px;
  border: 1px solid white;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: all 1s;
}
.nav__live--black {
  border: 1px solid #202020;
  background-color: #202020;
}

.nav__live:focus {
  outline: 0px solid white;
  transform-origin: 50 50;
  background: rgb(206, 205, 205);
}
.nav__live--black:focus {
  outline: 0px solid white;
  transform-origin: 50 50;
  background: rgb(61, 61, 61);
}

.nav__search__live__svg {
  width: 100%;
  height: 100%;
}
.nav__search__live__svg__rect {
  fill: rgb(22, 22, 22);
  stroke: rgb(22, 22, 22);
  stroke-width: 1.8px;
}
.nav__search__live__svg__rect--black {
  fill: white;
  stroke: white;
  stroke-width: 1.8px;
}
.nav__search__live__svg__path {
  fill: rgb(22, 22, 22);
  stroke: rgb(22, 22, 22);
  stroke-width: 1.8px;
}
.nav__search__live__svg__path--black {
  fill: white;
  stroke: white;
  stroke-width: 1.8px;
}
.nav__search__live__svg__cross {
  fill: white;
  stroke: white;
  stroke-width: 1.8px;
}
.nav__search__live__svg__cross--black {
  fill: rgb(22, 22, 22);
  stroke: rgb(22, 22, 22);
  stroke-width: 1.8px;
}
/*menu*/
.nav__menu {
  width: 40px;
  height: 40px;
  border: 1px solid white;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: all 1s;
}
.nav__menu--black {
  border: 1px solid #202020;
  background-color: #202020;
}

.nav__menu:focus {
  outline: 0px solid white;
  transform-origin: 50 50;
  background: rgb(206, 205, 205);
}
.nav__menu--black:focus {
  background-color: rgb(61, 61, 61);
}

.nav__search__menu__svg {
  width: 100%;
  height: 100%;
}
.nav__search__menu__svg__rect {
  fill: rgb(22, 22, 22);
  stroke: rgb(22, 22, 22);
  stroke-width: 1.8px;
}
.nav__search__menu__svg__rect--black {
  fill: white;
  stroke: white;
  stroke-width: 1.8px;
}
/*notification*/
.nav__notification {
  width: 40px;
  height: 40px;
  border: 1px solid white;
  background-color: white;
  border-radius: 50%;
  transition: all 1s;
  cursor: pointer;
}
.nav__notification--black {
  border: 1px solid #202020;
  background-color: #202020;
}
.nav__notification:focus {
  outline: 0px solid white;
  transform-origin: 50 50;
  background: rgb(206, 205, 205);
}
.nav__notification--black:focus {
  background: rgb(61, 61, 61);
}
.nav__notification__svg {
  width: 100%;
  height: 100%;
}
.nav__notification__svg__rect {
  fill: transparent;
  stroke: white;
  stroke-width: 1.8px;
}
.nav__notification__svg__rect--black {
  stroke: #202020;
}
.nav__notification__svg__path {
  fill: rgb(22, 22, 22);
  stroke: rgb(22, 22, 22);
  stroke-width: 1px;
}
.nav__notification__svg__path--black {
  fill: white;
  stroke: white;
  stroke-width: 1px;
}
.nav__notification__svg__circle {
  fill: rgb(22, 22, 22);
  stroke: rgb(22, 22, 22);
  stroke-width: 1.8px;
}
.nav__notification__svg__circle--black {
  fill: white;
  stroke: white;
  stroke-width: 1.8px;
}
/*user*/
.nav__user {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
.nav__user:hover {
  cursor: pointer;
}
.nav__user__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.nav__user__expand {
  position: absolute;
  right: 5px;
  width: 300px;
  height: 740px;
  background-color: white;
  border-bottom: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  box-shadow: 0px 2px 5px grey;
  display: none;
  font-family: Roboto, Arial, sans-serif;
}
.nav__user__expand--on {
  display: block;
}

.nav__user__expand__first {
  width: 100%;
  border-bottom: 1px solid lightgrey;
  display: flex;
  flex-flow: row nowrap;
}
.nav__user__expand__first__logo {
  width: 20%;
  height: 50px;
  margin-top: 10px;
}
.nav__user__expand__first__logo__image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.nav__user__expand__first__gmail {
  width: 80%;
  margin-top: 10px;
  text-align: left;
}
.nav__user__expand__first__gmail__name {
  font-size: 1rem;
  font-weight: 500;
}
.nav__user__expand__first__gmail__email {
  font-size: 1rem;
  margin: 2px 0;
}
.nav__user__expand__first__gmail__setting {
  margin: 10px 0;
  font-size: 0.9rem;
  color: rgb(23, 119, 216);
}

.nav__user__expand__second {
  width: 100%;
  border-bottom: 1px solid lightgrey;
}
.nav__user__expand__second__yourChannel,
.nav__user__expand__second__membership,
.nav__user__expand__second__studio,
.nav__user__expand__second__switchAccount,
.nav__user__expand__second__signout {
  width: 100%;
  height: 35px;
  margin: 10px 0;
  line-height: 35px;
  display: flex;
  flex-flow: row nowrap;
}
.nav__user__expand__second__yourChannel:hover {
  cursor: pointer;
  background-color: rgb(236, 236, 236);
}
.nav__user__expand__second__membership:hover {
  cursor: pointer;
  background-color: rgb(236, 236, 236);
}
.nav__user__expand__second__studio:hover {
  cursor: pointer;
  background-color: rgb(236, 236, 236);
}
.nav__user__expand__second__switchAccount:hover {
  cursor: pointer;
  background-color: rgb(236, 236, 236);
}
.nav__user__expand__second__signout:hover {
  cursor: pointer;
  background-color: rgb(236, 236, 236);
}

.nav__user__expand__second__yourChannel__icon,
.nav__user__expand__second__membership__icon,
.nav__user__expand__second__studio__icon,
.nav__user__expand__second__switchAccount__icon,
.nav__user__expand__second__signout__icon {
  width: 20%;
  height: 35px;
  text-align: center;
}
.nav__user__expand__second__yourChannel__icon .fas {
  font-size: 1.5rem;
  line-height: 35px;
}
.nav__user__expand__second__membership__icon .fas {
  font-size: 1.5rem;
  line-height: 35px;
}
.nav__user__expand__second__studio__icon .fas {
  font-size: 1.5rem;
  line-height: 35px;
  margin-left: 0px;
}
.nav__user__expand__second__switchAccount__icon .fas {
  font-size: 1.5rem;
  line-height: 35px;
}
.nav__user__expand__second__signout .fas {
  font-size: 1.5rem;
  line-height: 35px;
}

.nav__user__expand__second__yourChannel__text,
.nav__user__expand__second__membership__text,
.nav__user__expand__second__studio__text,
.nav__user__expand__second__switchAccount__text,
.nav__user__expand__second__signout__text {
  width: 80%;
  height: 35px;
  text-align: left;
  font-size: 1rem;
}

.nav__user__expand__third {
  width: 100%;
  border-bottom: 1px solid lightgrey;
}
.nav__user__expand__third__theme,
.nav__user__expand__third__languages,
.nav__user__expand__third__location,
.nav__user__expand__third__setting,
.nav__user__expand__third__dataInYoutube,
.nav__user__expand__third__help,
.nav__user__expand__third__feedback,
.nav__user__expand__third__keyboardShortcuts {
  width: 100%;
  height: 35px;
  margin: 10px 0;
  line-height: 35px;
  display: flex;
  flex-flow: row nowrap;
}
.nav__user__expand__third__theme:hover,
.nav__user__expand__third__languages:hover,
.nav__user__expand__third__location:hover,
.nav__user__expand__third__setting:hover,
.nav__user__expand__third__dataInYoutube:hover,
.nav__user__expand__third__help:hover,
.nav__user__expand__third__feedback:hover,
.nav__user__expand__third__keyboardShortcuts:hover {
  cursor: pointer;
  background-color: rgb(236, 236, 236);
}

.nav__user__expand__third__theme__icon,
.nav__user__expand__third__languages__icon,
.nav__user__expand__third__location__icon,
.nav__user__expand__third__setting__icon,
.nav__user__expand__third__dataInYoutube__icon,
.nav__user__expand__third__help__icon,
.nav__user__expand__third__feedback__icon,
.nav__user__expand__third__keyboardShortcuts__icon {
  width: 20%;
  height: 35px;
  text-align: center;
}
.nav__user__expand__third__theme__icon .fas {
  font-size: 1.5rem;
  line-height: 35px;
}
.nav__user__expand__third__languages__icon .fas {
  font-size: 1.5rem;
  line-height: 35px;
}
.nav__user__expand__third__location__icon .fas {
  font-size: 1.5rem;
  line-height: 35px;
}
.nav__user__expand__third__setting__icon .fas {
  font-size: 1.5rem;
  margin-left: 0;
  line-height: 35px;
}
.nav__user__expand__third__dataInYoutube__icon .fas {
  font-size: 1.5rem;
  line-height: 35px;
}
.nav__user__expand__third__help__icon .fas {
  font-size: 1.5rem;
  line-height: 35px;
}
.nav__user__expand__third__feedback__icon .fas {
  font-size: 1.5rem;
  line-height: 35px;
}
.nav__user__expand__third__keyboardShortcuts__icon .fas {
  font-size: 1.5rem;
  line-height: 35px;
}

.nav__user__expand__third__theme__text,
.nav__user__expand__third__languages__text,
.nav__user__expand__third__location__text,
.nav__user__expand__third__setting__text,
.nav__user__expand__third__dataInYoutube__text,
.nav__user__expand__third__help__text,
.nav__user__expand__third__feedback__text,
.nav__user__expand__third__keyboardShortcuts__text {
  width: 80%;
  height: 35px;
  text-align: left;
  font-size: 1rem;
}

.nav__user__expand__four {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.nav__user__expand__four:hover {
  cursor: pointer;
  background-color: rgb(236, 236, 236);
}
.nav__user__expand__four__text {
  text-align: left;
  width: 80%;
  line-height: 45px;
  font-size: 1rem;
  text-indent: 20px;
}
.nav__user__expand__four__icon {
  width: 20%;
}
.nav__user__expand__four__icon .fas {
  line-height: 45px;
  font-size: 1.5rem;
}
/*absolute*/
.hide__live__absolute {
  display: none;
}
.nav__right__create__absolute {
  position: absolute;
  width: 175px;
  height: 95px;
  background: white;
  margin-top: 0px;
  margin-left: -5px;
  z-index: 10;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
}
.nav__right__create__absolute__list {
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
}
.nav__right__create__absolute__list:hover {
  background-color: rgb(233, 232, 232);
}
.nav__right__create__absolute__list:first-child {
  margin-top: 12px;
}
.nav__right__create__absolute__list__svg {
  width: 30%;
  height: 100%;
}
.nav__right__create__absolute__list__svg__grey {
  fill: transparent;
  stroke: grey;
  stroke-width: 2px;
}
.nav__right__create__absolute__list__svg__grey--1px {
  fill: transparent;
  stroke: grey;
  stroke-width: 1px;
}
.nav__right__create__absolute__list__svg__red {
  fill: red;
  stroke: red;
  stroke-width: 1px;
}
.nav__right__create__absolute__list__text {
  width: 70%;
  height: 100%;
  line-height: 40px;
  font-size: 0.9rem;
  text-align: left;
}

/*absolute */
.hide__menu__absolute {
  display: none;
}
.nav__menu__absolute {
  position: absolute;
  width: 216px;
  height: 220px;
  background-color: white;
  margin-left: -183px;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  text-align: left;
}
.nav__menu__absolute__list {
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
}
.nav__menu__absolute__list:hover {
  background-color: lightgrey;
}
.nav__menu__absolute__list:first-child {
  margin-top: 10px;
}
.nav__menu__absolute__list__svg {
  width: 30%;
  height: 100%;
}
.nav__menu__absolute__list__svg__red {
  fill: red;
  stroke: red;
}
.nav__menu__absolute__list__svg__white {
  fill: white;
  stroke: white;
}
.nav__menu__absolute__list__text {
  width: 70%;
  height: 100%;
  line-height: 40px;
  font-size: 0.9rem;
}
.nav__menu__absolute__group {
  width: 100%;
  height: 80px;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
}
.nav__menu__absolute__group__list {
  width: 100%;
  height: 50%;
  display: flex;
  flex-flow: row nowrap;
}
.nav__menu__absolute__group__list:hover {
  background-color: lightgrey;
}
.nav__menu__absolute__group__list__svg {
  width: 30%;
  height: 100%;
}
.nav__menu__absolute__group__list__svg__red {
  fill: red;
  stroke: red;
}
.nav__menu__absolute__group__list__svg__white {
  fill: transparent;
  stroke: white;
}
.nav__menu__absolute__group__list__svg__white--fill {
  fill: white;
  stroke: white;
}
.nav__menu__absolute__group__list__text {
  width: 70%;
  height: 100%;
  line-height: 40px;
  font-size: 0.9rem;
}

.special__effect {
  transform-origin: 35px 15px;
  transform: rotate(-25deg);
}

/*notification*/
.nav__notification__hide {
  display: none;
}
.nav__notification__absolute {
  position: absolute;
  width: 478px;
  margin-left: -445px;
  background-color: white;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
}
.nav__notification__absolute__title {
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  text-align: left;
  border-bottom: 1px solid lightgrey;
}
.nav__notification__absolute__title__text {
  width: 50%;
  height: 100%;
  margin-left: 15px;
  line-height: 40px;
  font-size: 1rem;
}
.nav__notification__absolute__title__setting {
  width: 10%;
  height: 100%;
}
.fa-cog {
  font-size: 1.5rem;
  line-height: 40px;
  margin-left: 13px;
}
.nav__notification__absolute__wrap {
  width: 100%;
  padding-bottom: 10px;
}
</style>
