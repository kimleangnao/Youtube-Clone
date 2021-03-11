<template>
  <div class="SCA">
    <div class="SCA__title">
      Connected apps
    </div>
    <div class="SCA__boldtext">
      Expand your experience
    </div>
    <div class="SCA__subtext1">
      Connect YouTube with other apps and watch more easily
    </div>
    <div class="SCA__subtext2">
      See all sites authorized to access your Google Accounts
    </div>
  </div>
  <div class="SCA__components">
    <SettingConnectedAppWrap />
    <SettingConnectedAppWrap />
    <SettingConnectedAppWrap />
    <SettingConnectedAppWrap />
    <SettingConnectedAppWrap />
    <SettingConnectedAppWrap />
    <SettingConnectedAppWrap />
    <SettingConnectedAppWrap />
    <SettingConnectedAppWrap />
    <SettingConnectedAppWrap />
  </div>
</template>

<script>
import SettingConnectedAppWrap from "@/components/SettingConnectedAppWrap.vue";

export default {
  name: "SettingConnectedApps",
  components: {
    SettingConnectedAppWrap
  },
  setup() {
    return {};
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.SCA {
  width: 100%;
  border-bottom: 1px solid lightgrey;
  color: black;
  text-align: left;
  font-family: Roboto, Arial, sans-serif;
  padding-bottom: 40px;
}
.SCA__title {
  font-weight: 500;
  padding: 40px 0;
}
.SCA__boldtext {
  font-size: 1.5rem;
}
.SCA__subtext1 {
  font-size: 0.9rem;
  color: grey;
  margin-top: 20px;
}
.SCA__subtext2 {
  font-size: 0.9rem;
  color: rgb(18, 109, 201);
}
</style>
