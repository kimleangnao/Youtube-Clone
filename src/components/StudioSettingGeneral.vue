<template>
  <div class="studioSettingGeneral">
    <div class="studioSettingGeneral__title">
      Default units<i class="far fa-question-circle"></i>
    </div>
    <div class="studioSettingGeneral__currency">
      <div class="studioSettingGeneral__currency__title">Currency</div>

      <select class="studioSettingGeneral__currency__select" name="currency">
        <option value="USD - US Dollar"> USD - US Dollar</option>
        <option value="SEK - Swedish Krona"> SEK - Swedish Krona</option>
        <option value="JPY - Japanese Yen"> JPY - Japanese Yen</option>
        <option value="GBP - British Pound"> GBP - British Pound</option>
        <option value="CNY - Chinese Yuan"> CNY - Chinese Yuan</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudioSettingGeneral",
  setup() {
    return {};
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.studioSettingGeneral {
  width: 100%;
  height: 100%;
  font-family: Roboto, Arial, sans-serif;
}
.studioSettingGeneral__title {
  text-align: left;
  text-indent: 20px;
  padding-top: 15px;
  font-size: 1rem;
  font-weight: 500;
}
.studioSettingGeneral__title .far {
  padding: 0;
  margin-left: -15px;
}
.studioSettingGeneral__currency {
  width: 300px;
  height: 60px;
  border: 1px solid lightgrey;
  margin: 20px;
  border-radius: 5px;
}
.studioSettingGeneral__currency__title {
  text-align: left;
  margin: 10px 0 0 10px;
  color: grey;
  font-size: 0.9rem;
}
.studioSettingGeneral__currency__select {
  width: 95%;
  height: 20px;
  background-color: transparent;
  border: unset;
  font-size: 0.95rem;
}
.studioSettingGeneral__currency__select:focus {
  outline: unset;
}
</style>
