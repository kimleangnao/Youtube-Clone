<template>
  <div class="settingbilling">
    <div class="settingbilling__title">Billing and payments</div>
    <div class="settingbilling__boldText">
      Choose how you make purchases on YouTube
    </div>
  </div>
  <div class="settingbilling__quickpay">
    <div class="settingbilling__quickpay__wrap">
      <div class="settingbilling__quickpay__title">
        Quick purchase is disabled
      </div>
      <div class="settingbilling__quickpay__subtext">
        You will be asked to verify your account for all YouTube purchases
      </div>
      <div class="settingbilling__quickpay__linktag">
        Learn more about purchase verification
      </div>
    </div>

    <div class="settingbilling__quickpay__enable">ENABLE QUICK PURCHASE</div>
  </div>
</template>

<script>
export default {
  name: "SettingBilling",
  props: {
    myWidth: { type: Number, required: false }
  },
  setup() {
    return {};
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");
.settingbilling {
  width: 100%;
  text-align: left;
  color: black;
  padding-bottom: 40px;
  font-family: Roboto, Arial, sans-serif;
  border-bottom: 1px solid lightgrey;
}
.settingbilling__title {
  font-weight: 500;
  padding: 40px 0;
}
.settingbilling__boldText {
  font-size: 1.5rem;
}
.settingbilling__quickpay {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  font-family: Roboto, Arial, sans-serif;
}
.settingbilling__quickpay__wrap {
  width: 50%;
  height: 100%;
  text-align: left;
}
.settingbilling__quickpay__title {
  font-weight: 500;
  color: black;
  font-size: 0.9rem;
}
.settingbilling__quickpay__subtext {
  font-size: 0.9rem;
  color: rgb(100, 95, 95);
  margin: 5px 0;
}
.settingbilling__quickpay__linktag {
  font-size: 0.9rem;
  margin: 5px 0;
  color: rgb(20, 105, 190);
}
.settingbilling__quickpay__enable {
  width: 200px;
  height: 40px;
  border: 1px solid rgb(20, 105, 190);
  font-weight: 500;
  border-radius: 2px;
  color: rgb(20, 105, 190);
  line-height: 40px;
  font-size: 0.95rem;
}
.settingbilling__quickpay__enable:hover {
  cursor: pointer;
}
.settingbilling__quickpay__enable:focus {
  outline: unset;
}
</style>
