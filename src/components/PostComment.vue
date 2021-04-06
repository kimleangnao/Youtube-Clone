<template>
  <div class="postComment">
    <img
      v-if="type == 'COMMENT'"
      :src="userImage"
      class="postComment__profile"
    />
    <img v-else :src="userImage" class="postComment__profile--reply" />
    <div
      :class="[
        myWidth == 7
          ? 'postComment__addComment--7'
          : myWidth == 8
          ? 'postComment__addComment--8'
          : myWidth == 9
          ? 'postComment__addComment--9'
          : 'postComment__addComment'
      ]"
    >
      <textarea
        placeholder="Add a public comment..."
        :class="[
          myWidth == 7
            ? 'postComment__addComment__text--7'
            : myWidth == 8
            ? 'postComment__addComment__text--8'
            : myWidth == 9
            ? 'postComment__addComment__text--9'
            : 'postComment__addComment__text'
        ]"
        @input="writeInput"
        :value="comment"
      >
      </textarea>
      <div
        :class="[
          hideCommentFunctions
            ? 'hideCommentFunctions'
            : 'postComment__addComment__functions'
        ]"
      >
        <div
          class="postComment__addComment__functions__cancel"
          @click="clickToReply"
        >
          CANCEL
        </div>
        <div
          v-if="type == 'REPLY'"
          :class="[
            comment != ''
              ? 'postComment__addComment__functions__submit postComment__addComment__functions__submit--active'
              : 'postComment__addComment__functions__submit'
          ]"
          @click="makeAreplyToCommentCall"
        >
          {{ type }}
        </div>
        <div
          v-else
          :class="[
            comment != ''
              ? 'postComment__addComment__functions__submit postComment__addComment__functions__submit--active'
              : 'postComment__addComment__functions__submit'
          ]"
          @click="makeAReplyCall"
        >
          {{ type }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageLogo from "@/assets/profile.png";
import { reactive, toRefs } from "vue";

export default {
  name: "PostComment",
  props: {
    type: {
      type: String,
      required: true
    },
    myWidth: {
      type: Number,
      required: true
    },
    makeAReply: {
      type: Function
    },
    videoId: {
      type: Number
    },
    commentId: {
      type: String
    },
    makeAreplyToComment: {
      type: Function
    },
    clickToReply: Function
  },
  setup(props) {
    const state = reactive({
      userImage: imageLogo,
      hideCommentFunctions: false,
      comment: ""
    });
    const makeAReplyCall = () => {
      props.makeAReply(props.videoId, state.comment);
      state.comment = "";
    };
    const makeAreplyToCommentCall = () => {
      props.makeAreplyToComment(props.videoId, props.commentId, state.comment);
      state.comment = "";
    };
    const writeInput = e => {
      state.comment = e.target.value;
    };

    return {
      ...toRefs(state),
      writeInput,
      makeAReplyCall,
      makeAreplyToCommentCall
    };
  }
};
</script>

<style scoped>
.postComment {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.postComment__profile {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}
.postComment__profile--reply {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
.postComment__addComment {
  width: 94%;
  height: 100%;
  margin-left: 10px;
}
.postComment__addComment--7 {
  width: 87%;
  height: 100%;
  margin-left: 10px;
}
.postComment__addComment--8 {
  width: 92%;
  height: 100%;
  margin-left: 10px;
}
.postComment__addComment--9 {
  width: 92%;
  height: 100%;
  margin-left: 10px;
}
.postComment__addComment__text {
  height: 30px;
  width: 100%;
  resize: none;
  border: 0px;
  border-bottom: 1px solid grey;
  font-size: 0.9rem;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 300;
  line-height: 30px;
}
.postComment__addComment__text--7 {
  height: 60px;
  width: 99%;
  resize: none;
  border: 0px;
  border-bottom: 1px solid grey;
  font-size: 0.9rem;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 300;
}
.postComment__addComment__text--8 {
  height: 60px;
  width: 99%;
  resize: none;
  border: 0px;
  border-bottom: 1px solid grey;
  font-size: 0.9rem;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 300;
}
.postComment__addComment__text--9 {
  height: 60px;
  width: 99%;
  resize: none;
  border: 0px;
  border-bottom: 1px solid grey;
  font-size: 0.9rem;
  font-family: "Roboto", Arial, sans-serif;
  font-weight: 300;
}
.postComment__addComment__text:focus {
  outline: 0px solid white;
  border-bottom: 2px solid black;
}
.postComment__addComment__functions {
  height: 40px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
}
.postComment__addComment__functions__cancel {
  width: 90px;
  height: 100%;
  line-height: 40px;
  font-size: 0.9rem;
  cursor: pointer;
}
.postComment__addComment__functions__submit {
  padding: 10px 20px;
  line-height: 25px;
  background-color: #cccccc;
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
  margin-left: 10px;
  border-radius: 2px;
  cursor: pointer;
}
.postComment__addComment__functions__submit--active {
  background-color: dodgerblue;
}
.hideCommentFunctions {
  display: none;
}
</style>
