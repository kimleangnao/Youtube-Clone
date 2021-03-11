<template>
  <div class="pc">
    <div class="pc__channel">
      <div class="pc__channel__profile">
        <img
          :src="profile"
          class="pc__channel__profile__img"
          @click="goToChannel"
        />
      </div>
      <div class="pc__channel__name" @click="goToChannel">Redi</div>
      <div class="pc__channel__tag">Creator on the Rise</div>
    </div>
    <div
      :class="[
        myWidth == 7
          ? 'pc__videos--7'
          : myWidth == 8
          ? 'pc__videos--8'
          : myWidth == 9
          ? 'pc__videos--9'
          : myWidth == 10
          ? 'pc__videos--10'
          : 'pc__videos'
      ]"
    >
      <PromoteVideo />
      <PromoteVideo />
      <PromoteVideo />
      <PromoteVideo />
      <PromoteVideo />
      <PromoteVideo />
    </div>
  </div>
</template>

<script>
import profile from "@/assets/profile.png";
import PromoteVideo from "@/components/PromoteVideo.vue";

export default {
  name: "PromoteChannel",
  components: { PromoteVideo },
  props: {
    myWidth: {
      type: Number,
      required: false
    }
  },
  setup() {
    const goToChannel = () => {
      window.location.href = "/channel/dfdf";
    };
    return { profile, goToChannel };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap");
.pc {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  font-family: Roboto, Arial, sans-serif;
}
.pc__channel {
  width: 100%;
  height: 70px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}
.pc__channel__profile {
  width: 35px;
  height: 35px;
  cursor: pointer;
}
.pc__channel__profile__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.pc__channel__name {
  margin: 0 10px;
  font-weight: 500;
  cursor: pointer;
}

.pc__channel__tag {
  background-color: dodgerblue;
  color: white;
  font-weight: 500;
  padding: 2px 5px;
  font-size: 0.9rem;
  margin: 0 5px;
  border-radius: 2px;
}

.pc__videos {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
}
.pc__videos--7 {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}
.pc__videos--8 {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
.pc__videos--9 {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
}
.pc__videos--10 {
  width: 100%;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
}
</style>
