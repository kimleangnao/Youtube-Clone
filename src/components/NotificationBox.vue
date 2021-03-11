<template>
  <div class="NotificationBox">
    <div class="NotificationBox__profile">
      <img
        :src="imageLogo"
        class="NotificationBox__profile__image"
        alt="profile logo"
      />
    </div>
    <div class="NotificationBox__details">
      <div class="NotificationBox__details__text">
        👍 Someone liked your comment: "#Eren'sGang Rise up!"
      </div>
      <div class="NotificationBox__details__time">
        2 days ago
      </div>
    </div>
    <div class="NotificationBox__thumbnail">
      <img
        :src="imageLogo"
        class="NotificationBox__thumbnail__image"
        alt="profile logo"
      />
    </div>
  </div>
</template>

<script>
import imageLogo from "@/assets/profile.png";
export default {
  name: "NotificationBox",
  setup() {
    return { imageLogo };
  }
};
</script>

<style scoped>
.NotificationBox {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.NotificationBox:hover {
  background-color: lightgrey;
}

.NotificationBox__profile {
  width: 17%;
  height: 80px;
}
.NotificationBox__profile__image {
  width: 70%;
  height: 70%;
  background-color: black;
  margin: 12px auto;
  border-radius: 50%;
  object-fit: cover;
}
.NotificationBox__details {
  width: 53%;
  height: 100%;
  text-align: left;
}
.NotificationBox__details__text {
  width: 100%;
  font-size: 0.9rem;
  margin-top: 10px;
}
.NotificationBox__details__time {
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 0.8rem;
}
.NotificationBox__thumbnail {
  width: 30%;
  height: 80px;
}
.NotificationBox__thumbnail__image {
  margin-top: 12px;
  margin-left: 12px;
  width: 60%;
  height: 60%;
  background-color: grey;
  object-fit: cover;
}
</style>
