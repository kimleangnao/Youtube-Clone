<template>
  <div class="account">
    <div class="account__title">Account</div>
    <div class="account__choose">
      Choose how you appear and what you see on YouTube
    </div>
    <div class="account__accountname">Signed in as sundaycoding@gmail.com</div>
  </div>
  <div class="account__channel">
    <div class="account__channel__title">Your YouTube channel</div>
    <div class="account__channel__subtext">
      This is your public presence on YouTube. You need a channel to upload your
      own videos, comment on videos, or create playlists.
    </div>
    <div class="account__channel__wrap">
      <div class="account__channel__wrap__left">
        <div class="account__channel__wrap__left__title">Your channel</div>
      </div>
      <div class="account__channel__wrap__right">
        <div class="account__channel__wrap__right__channel">
          <div class="account__channel__wrap__right__channel__profile">
            <img
              :src="logo"
              class="account__channel__wrap__right__channel__profile__img"
              alt="profile image"
            />
          </div>
          <div class="account__channel__wrap__right__channel__name">
            CodingSunday
          </div>
        </div>
        <div class="account__channel__wrap__right__tag">
          Channel status and features
        </div>
        <div class="account__channel__wrap__right__tag">
          Create a new channel
        </div>
        <div class="account__channel__wrap__right__tag">
          View advanced settings
        </div>
      </div>
    </div>
  </div>
  <div class="account__youraccount">
    <div class="account__youraccount__title">Your account</div>
    <div class="account__youraccount__subtext">
      You sign into YouTube with your Google Account
    </div>
    <div class="account__youraccount__accountType">
      <div class="account__youraccount__accountType__name">Google Account</div>
      <div class="account__youraccount__accountType__details">
        <div class="account__youraccount__accountType__details__link">
          View or change your Google Account settings
        </div>
        <div class="account__youraccount__accountType__details__subtext">
          You will be redirected to your Google Account page
        </div>
      </div>
    </div>
    <div class="account__youraccount__membership">
      <div class="account__youraccount__membership__name">Membership</div>
      <div class="account__youraccount__membership__detail">
        <div class="account__youraccount__membership__detail__link">
          No membership |
          <span class="account__youraccount__membership__detail__link__tag"
            >Get YouTube Premium</span
          >
        </div>
        <div class="account__youraccount__membership__detail__subtext">
          YouTube Premium offers uninterrupted music, ad-free videos, and more
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/profile.png";

export default {
  name: "SettingAccount",
  setup() {
    return { logo };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.account {
  width: 100%;
  height: 100%;
  color: black;
  font-family: Roboto, Arial, sans-serif;
  border-bottom: 1px solid lightgrey;
  padding-bottom: 50px;
  text-align: left;
}
.account__title {
  font-size: 1rem;
  font-weight: 500;
  padding: 40px 0;
  font-weight: 500;
}
.account__choose {
  font-size: 1.4rem;
}
.account__accountname {
  padding: 15px 0;
  font-size: 0.9rem;
}
.account__channel {
  width: 100%;
  height: 100%;
  color: black;
  font-family: Roboto, Arial, sans-serif;
  border-bottom: 1px solid lightgrey;
  padding-bottom: 50px;
  text-align: left;
}
.account__channel__title,
.account__youraccount__title {
  font-size: 1rem;
  font-weight: 500;
  padding: 15px 0;
  margin-top: 15px;
}
.account__channel__subtext,
.account__youraccount__subtext {
  font-size: 0.9rem;
}
.account__channel__wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 20px;
}
.account__channel__wrap__left {
  width: 20%;
}

.account__channel__wrap__left__title {
  font-size: 1rem;
  font-weight: 500;
}
.account__channel__wrap__right {
  width: 80%;
}
.account__channel__wrap__right__channel {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.account__channel__wrap__right__channel__profile {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.account__channel__wrap__right__channel__profile__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.account__channel__wrap__right__channel__name {
  width: 70%;
  height: 60px;
  margin-left: 15px;
  line-height: 60px;
}
.account__channel__wrap__right__tag {
  color: rgb(18, 106, 194);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 7px 0;
}

.account__youraccount {
  width: 100%;
  height: 100%;
  color: black;
  font-family: Roboto, Arial, sans-serif;
  padding-bottom: 50px;
  text-align: left;
}
.account__youraccount__accountType,
.account__youraccount__membership {
  width: 100;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 30px;
}
.account__youraccount__accountType__name,
.account__youraccount__membership__name {
  width: 20%;
  font-size: 0.9rem;
  font-weight: 500;
}
.account__youraccount__accountType__detail,
.account__youraccount__membership__detail {
  width: 80%;
}
.account__youraccount__membership__detail__link {
  font-size: 0.9rem;
  font-weight: 500;
}
.account__youraccount__accountType__details__link,
.account__youraccount__membership__detail__link__tag {
  color: rgb(18, 106, 194);
  font-weight: 500;
  font-size: 0.9rem;
}
.account__youraccount__accountType__details__link:hover,
.account__youraccount__membership__detail__link__tag:hover {
  cursor: pointer;
}

.account__youraccount__accountType__details__subtext,
.account__youraccount__membership__detail__subtext {
  font-size: 0.9rem;
  color: grey;
}
</style>
