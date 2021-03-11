<template>
  <div class="studioSendFeedback">
    <div class="studioSendFeedback__title">
      Send feedback
    </div>
    <textarea
      class="studioSendFeedback__textarea"
      placeholder="Have feedback? We'd love to hear it, but please don't share sensitive information. Have questions? Try help or support."
    ></textarea>
    <div class="studioSendFeedback__check">
      <input
        type="checkbox"
        id="include"
        name="include"
        value="include"
        class="studioSendFeedback__check__box"
        checked
      />
      <label for="include" class="studioSendFeedback__check__label"
        >Include screenshot</label
      >
    </div>
    <div class="studioSendFeedback__screenshot"></div>
    <div class="studioSendFeedback__subText">
      Go to the <span class="link__tag">Legal Help page</span> to request
      content changes for legal reasons. Some
      <span class="link__tag"> account and system information </span> may be
      sent to Google. We will use the information you give us to help address
      technical issues and to improve our services, subject to our
      <span class="link__tag"> Privacy Policy </span> and
      <span class="link__tag"> Terms of Service.</span>
    </div>
    <div class="studioSendFeedback__bottom">
      <div class="studioSendFeedback__bottom__text" @click="closeFeedback">
        CANCEL
      </div>
      <div class="studioSendFeedback__bottom__text --send">SEND</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudioSendFeedback",
  props: {
    closeFeedback: {
      type: Function,
      required: true
    }
  },
  setup() {
    return {};
  }
};
</script>

<style scoped>
.studioSendFeedback {
  width: 100%;
  height: 100%;
}
.studioSendFeedback__title {
  width: 100%;
  height: 55px;
  background-color: #546e7a;
  color: white;
  font-size: 1.3rem;
  line-height: 55px;
  text-align: left;
  text-indent: 15px;
}
.studioSendFeedback__textarea {
  width: 95%;
  height: 120px;
  margin-top: 5px;
  font-size: 1rem;
  font-family: Roboto, Arial, sans-serif;
  resize: none;
  border: unset;
}
.studioSendFeedback__textarea:focus {
  outline: unset;
}
.studioSendFeedback__check {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}
.studioSendFeedback__check__box {
  transform: scale(1.3);
  margin-left: 10px;
}
.studioSendFeedback__check__label {
  margin: 0 5px;
}
.studioSendFeedback__screenshot {
  width: 100%;
  height: 180px;
  background-color: rgb(224, 210, 210);
  margin: 10px 0;
}
.studioSendFeedback__subText {
  text-align: left;
  font-size: 0.8rem;
  color: grey;
  padding: 15px;
}
.studioSendFeedback__bottom {
  width: 100%;
  height: 50px;
  border-top: 1px solid lightgrey;
  line-height: 45px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
}
.studioSendFeedback__bottom__text {
  font-size: 0.9rem;
  color: grey;
  margin: 0 10px;
  font-weight: 500;
}
.studioSendFeedback__bottom__text:hover {
  cursor: pointer;
}
.--send {
  color: dodgerblue;
}

.link__tag {
  color: dodgerblue;
}
.link__tag:hover {
  cursor: pointer;
}
</style>
