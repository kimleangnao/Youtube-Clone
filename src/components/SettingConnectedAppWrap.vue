<template>
  <div class="SCAW">
    <img :src="sunset" alt="profile image" class="SCAW__box" />
    <div class="SCAW__text">
      <div class="SCAW__text__name">Company name</div>
      <div class="SCAW__text__subtext">
        Connect accounts and watch approved events and videos for a chance to
        win in-game rewards
      </div>
    </div>
    <button class="SCAW__connect">CONNECT</button>
  </div>
</template>

<script>
import sunset from "@/assets/sunset.jpg";
export default {
  name: "SettingConnectedAppWrap",
  setup() {
    return { sunset };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.SCAW {
  width: 100%;
  height: 100px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-family: Roboto, Arial, sans-serif;
  color: black;
}
.SCAW__box {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}
.SCAW__text {
  width: 82%;
  height: 50px;
  margin-left: 10px;
  text-align: left;
}
.SCAW__text__name {
  width: 100%;
  height: 50%;
  line-height: 25px;
  font-weight: 500;
}
.SCAW__text__subtext {
  width: 100%;
  height: 50%;
  line-height: 25px;
  font-size: 0.9rem;
  color: rgb(95, 93, 93);
}
.SCAW__connect {
  font-family: Roboto, Arial, sans-serif;
  width: 110px;
  height: 30px;
  color: dodgerblue;
  border: 1px solid dodgerblue;
  font-weight: 500;
  border-radius: 2px;
  background-color: white;
}
.SCAW__connect:hover {
  cursor: pointer;
}
.SCAW__connect:focus {
  outline: unset;
}
</style>
