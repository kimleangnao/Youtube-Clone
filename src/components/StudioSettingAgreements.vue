<template>
  <div class="studioSettingAgreement">
    <div class="studioSettingAgreement__text">
      All use of the service is subject to the YouTube Terms of Service.
      <span class="link__tag">Learn more</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudioSettingAgreements",
  setup() {
    return {};
  }
};
</script>

<style scoped>
.studioSettingAgreement {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.studioSettingAgreement__text {
  font-size: 0.8rem;
  color: grey;
}
.link__tag {
  cursor: pointer;
  color: dodgerblue;
}
</style>
