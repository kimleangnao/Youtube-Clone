<template>
  <div class="studioSettingPermissions">
    <div class="studioSettingPermissions__title">
      <div class="studioSettingPermissions__title__text">
        Permission for REdi
      </div>
      <div class="studioSettingPermissions__title__text --link">INVITE</div>
    </div>
    <div class="studioSettingPermissions__subText">
      Add or change permissions for this channel. For now, these permissions
      won't apply to some channel features and parts of YouTube.
      <span class="link__tag">Learn more</span>
    </div>
    <div class="studioSettingPermissions__head">
      <div class="studioSettingPermissions__head__text">Name</div>
      <div class="studioSettingPermissions__head__text">Access</div>
    </div>
    <div class="studioSettingPermissions__user">
      <div class="studioSettingPermissions__user__wrap">
        <div class="studioSettingPermissions__user__wrap__left">
          <img
            :src="profile"
            alt="profile image"
            class="studioSettingPermissions__user__wrap__left__image"
          />
        </div>
        <div class="studioSettingPermissions__user__wrap__right">
          <div class="studioSettingPermissions__user__wrap__right__name">
            REdi
          </div>
          <div class="studioSettingPermissions__user__wrap__right__email">
            REdi@gmail.com
          </div>
        </div>
      </div>
      <div class="studioSettingPermissions__user__wrap">Owner</div>
    </div>
  </div>
</template>

<script>
import profile from "@/assets/profile.png";
export default {
  name: "StudioSettingPermissions",
  setup() {
    return { profile };
  }
};
</script>

<style scoped>
.studioSettingPermissions {
  width: 100%;
  height: 100%;
  text-align: left;
}
.studioSettingPermissions__title {
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 20px auto;
}
.studioSettingPermissions__title__text {
  font-size: 0.95rem;
  font-weight: 500;
}
.--link {
  cursor: pointer;
  color: dodgerblue;
}
.studioSettingPermissions__subText {
  width: 90%;
  margin: 0px auto;
  font-size: 0.85rem;
}
.link__tag {
  cursor: pointer;
  color: dodgerblue;
}
.studioSettingPermissions__head {
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
  margin: 30px auto 0;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
}
.studioSettingPermissions__head__text {
  width: 50%;
  height: 50px;
  line-height: 50px;
  font-size: 0.9rem;
  color: grey;
}
.studioSettingPermissions__user {
  width: 90%;
  display: flex;
  flex-flow: row nowrap;
  margin: 0px auto 0;
  border-bottom: 1px solid lightgrey;
}
.studioSettingPermissions__user__wrap {
  width: 50%;
  height: 50px;
  line-height: 50px;
  font-size: 0.8rem;
  color: black;
  display: flex;
  flex-flow: row nowrap;
}
.studioSettingPermissions__user__wrap__left {
  width: 50px;
  height: 50px;
}
.studioSettingPermissions__user__wrap__left__image {
  width: 45px;
  height: 45px;
  margin: 2.5px;
  border-radius: 50%;
  object-fit: cover;
}
.studioSettingPermissions__user__wrap__right {
  width: 75%;
  height: 50px;
  margin-left: 10px;
  color: black;
}
.studioSettingPermissions__user__wrap__right__name {
  height: 50%;
  line-height: 30px;
  font-weight: 500;
}
.studioSettingPermissions__user__wrap__right__email {
  height: 50%;
  line-height: 15px;
}
</style>
