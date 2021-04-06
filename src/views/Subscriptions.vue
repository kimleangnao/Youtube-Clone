<template>
  <div class="">
    <div class="subscription">
      <SubscriptionsWrapper
        :user="user"
        :myWidth="viewportWidth"
        title="Subscription feed"
      />
    </div>
  </div>
</template>

<script>
import SubscriptionsWrapper from "@/components/SubscriptionsWrapper.vue";
import { reactive, toRefs } from "vue";
import EventService from "@/services/EventService.js";

export default {
  name: "Subscription",
  components: {
    SubscriptionsWrapper
  },
  setup() {
    const state = reactive({
      viewportWidth: 1900,
      user: []
    });

    //1 here is equal to user id right now, the one that login
    //we need to log in at some point and get that id
    EventService.getUser(1).then(response => {
      state.user = response.data;
      console.log("response.data:", response.data);
    });

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
    return { ...toRefs(state) };
  }
};
</script>

<style scoped>
@media only screen and (min-width: 321px) {
  .subscription {
    width: 95%;
    height: 100%;
    margin: 0 auto;
  }
}
@media only screen and (min-width: 768px) {
  .subscription {
    width: 100%;
    height: 100%;
  }
}
@media only screen and (min-width: 1224px) {
  .subscription {
    width: 100%;
    height: 100%;
  }
}
@media only screen and (min-width: 1824px) {
  .subscription {
    width: 100%;
    height: 100%;
  }
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
</style>
