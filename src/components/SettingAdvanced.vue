<template>
  <div class="settingadv">
    <div class="settingadv__title">Advanced settings</div>
    <div class="settingadv__boldtext">
      Set up YouTube exactly how you want it
    </div>
  </div>

  <div class="settingadv__wrap">
    <div class="settingadv__wrap__title">UserID</div>
    <div class="settingadv__wrap__details">
      <div class="settingadv__wrap__details__wrap">
        <div class="settingadv__wrap__details__wrap__input">
          <input
            class="settingadv__wrap__details__wrap__input__text"
            type="text"
            value="JeKDRzKgW8TlLQor-9w"
          />
        </div>
        <button class="settingadv__wrap__details__wrap__button">COPY</button>
      </div>
    </div>
  </div>
  <div class="settingadv__wrap">
    <div class="settingadv__wrap__title">Channel ID</div>
    <div class="settingadv__wrap__details">
      <div class="settingadv__wrap__details__wrap">
        <div class="settingadv__wrap__details__wrap__input">
          <input
            class="settingadv__wrap__details__wrap__input__text"
            type="text"
            value="JeKDRzKgW8TlLQor-9w"
          />
        </div>
        <button class="settingadv__wrap__details__wrap__button">COPY</button>
      </div>
    </div>
  </div>

  <div class="settingadv__wrap">
    <div class="settingadv__wrap__title">Move channel</div>
    <div class="settingadv__wrap__details">
      <div class="settingadv__wrap__details__linktag">
        Move channel to a brand account
      </div>
      <div class="settingadv__wrap__details__subtext">
        You can move your channel to a brand account
      </div>
    </div>
  </div>

  <div class="settingadv__wrap">
    <div class="settingadv__wrap__title">Delete channel</div>
    <div class="settingadv__wrap__details">
      <div class="settingadv__wrap__details__linktag">
        Delete channel
      </div>
      <div class="settingadv__wrap__details__subtext">
        Deleting your YouTube channel won't close your Google Account
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingAdvanced",
  setup() {
    return {};
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.settingadv {
  width: 100%;
  color: black;
  text-align: left;
  padding-bottom: 100px;
  border-bottom: 1px solid lightgrey;
  font-family: Roboto, Arial, sans-serif;
}
.settingadv__title {
  padding: 40px 0;
  font-size: 1rem;
  font-weight: 500;
}
.settingadv__boldtext {
  font-size: 1.5rem;
}
.settingadv__wrap {
  width: 100%;
  height: 100%;
  margin: 40px 0;
  text-align: left;
  display: flex;
  flex-flow: row nowrap;
}
.settingadv__wrap__title {
  font-family: Roboto, Arial, sans-serif;
  width: 15%;
  font-weight: 500;
  font-size: 0.9rem;
}
.settingadv__wrap__details {
  width: 40%;
  height: 100%;
  margin-left: 80px;
  background-color: rgb(247, 247, 247);
}
.settingadv__wrap__details__wrap {
  width: 75%;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  border: 1px solid rgb(243, 242, 242);
}
.settingadv__wrap__details__wrap__input {
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.settingadv__wrap__details__wrap__input__text {
  width: 90%;
  border: unset;
  background-color: rgb(247, 247, 247);
}
.settingadv__wrap__details__wrap__button {
  font-family: Roboto, Arial, sans-serif;
  width: 25%;
  height: 100%;
  color: rgb(18, 108, 199);
  font-weight: 500;
  font-size: 0.95rem;
  background-color: rgb(247, 247, 247);
  border: unset;
}
.settingadv__wrap__details__wrap__button:hover {
  cursor: pointer;
}
.settingadv__wrap__details__wrap__button:focus {
  outline: unset;
}

.settingadv__wrap__details__linktag {
  font-family: Roboto, Arial, sans-serif;
  color: rgb(18, 108, 199);
  font-size: 0.9rem;
  font-weight: 500;
}
.settingadv__wrap__details__subtext {
  font-family: Roboto, Arial, sans-serif;
  font-size: 0.9rem;
  color: grey;
}
</style>
