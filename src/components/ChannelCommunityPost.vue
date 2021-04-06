<template>
  <div :class="[myWidth == 7 ? 'cmp--7' : myWidth == 8 ? 'cmp--7' : 'cmp']">
    <div class="cmp__left">
      <img
        :src="require('@/assets/' + comment.userImage)"
        class="cmp__left__channel"
        alt="profile channel"
      />
    </div>
    <div class="cmp__middle">
      <div class="cmp__middle__channlAndDate">
        <div class="cmp__middle__channlAndDate__channel">
          {{ comment.userName }}
        </div>
        <div class="cmp__middle__channlAndDate__dateposted">
          {{ comment.posteDate }}
        </div>
      </div>
      <div class="cp__middle__content">
        {{ comment.postText }}
      </div>
      <div class="cp__middle__optional">
        <div class="cp__middle__optional__likeAndDislike">
          <div class="cp__middle__optional__likeAndDislike__like">
            <i class="fas fa-thumbs-up"></i>
          </div>
          <div class="cp__middle__optional__likeAndDislike__likeCount">
            {{ comment.like }}
          </div>
          <div class="cp__middle__optional__likeAndDislike__dislike">
            <i class="fas fa-thumbs-down"></i>
          </div>
        </div>
        <div class="cp__middle__optional__comments">
          <svg class="cp__middle__optional__comments__svg">
            <path d="M5 3 L 30 3 L 30 25 L 28 19 L 5 19 Z" class="svg__grey" />
            <path d="M8 6 L 27 6 L 27 7 L 8 7" class="svg__white" />
            <path d="M8 10 L 27 10 L 27 11 L 8 11" class="svg__white" />
            <path d="M8 14 L 27 14 L 27 15 L 8 15" class="svg__white" />
          </svg>
          <div class="cp__middle__optional__comments__count">
            {{ comment.comments.length }}
          </div>
        </div>
      </div>
    </div>
    <div class="cmp__right">
      <div class="cmp__right__option">
        <i class="fas fa-ellipsis-v"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChannelCommunityPost",
  props: {
    myWidth: {
      type: Number,
      required: false
    },
    comment: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {};
  }
};
</script>

<style scoped>
.cmp {
  width: 900px;
  height: 100%;
  border: 1px solid lightgrey;
  margin: 30px 0 15px;
  display: flex;
  flex-flow: row nowrap;
}
.cmp--7 {
  width: 100%;
  height: 100%;
  border: 1px solid lightgrey;
  margin: 30px 0 15px;
  display: flex;
  flex-flow: row nowrap;
}
.cmp:hover .cmp__right__option .fa-ellipsis-v {
  display: block;
}
.cmp__left {
  width: 10%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.cmp__left__channel {
  margin-top: 10px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
}
.cmp__middle {
  width: 84%;
  height: 100%;
}
.cmp__middle__channlAndDate {
  height: 30px;
  margin-top: 10px;
  line-height: 30px;
  display: flex;
}
.cmp__middle__channlAndDate__channel {
  font-weight: 500;
}
.cmp__middle__channlAndDate__dateposted {
  margin-left: 10px;
  font-size: 0.9rem;
}
.cp__middle__content {
  width: 100%;
  height: 100%;
  text-align: left;
  margin-bottom: 20px;
}
.cp__middle__optional {
  width: 100%;
  height: 30px;
  display: flex;
}
.cp__middle__optional__likeAndDislike {
  width: 120px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.cp__middle__optional__likeAndDislike__like {
  width: 25%;
  height: 100%;
}
.fa-thumbs-up {
  color: rgb(41, 41, 41);
}
.cp__middle__optional__likeAndDislike__like:hover {
  cursor: pointer;
}
.cp__middle__optional__likeAndDislike__likeCount {
  width: 40%;
  height: 100%;
  line-height: 30px;
}

.cp__middle__optional__likeAndDislike__dislike {
  width: 25%;
  height: 100%;
  transform: scaleX(-1);
}
.fa-thumbs-down {
  color: rgb(41, 41, 41);
}
.cp__middle__optional__likeAndDislike__dislike:hover {
  cursor: pointer;
}
.cp__middle__optional__comments {
  width: 60px;
  height: 100%;
  display: flex;
}
.cp__middle__optional__comments__svg {
  width: 30px;
  height: 30px;
}
.cp__middle__optional__comments__svg:hover {
  cursor: pointer;
}
.svg__grey {
  fill: grey;
  stroke: grey;
}
.svg__white {
  fill: white;
  stroke: white;
}
.cp__middle__optional__comments__count {
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 0.8rem;
}

.cmp__right {
  width: 6%;
  height: 100%;
}
.cmp__right__option {
  text-align: left;
  margin-top: 10px;
  margin-left: 10px;
}
.cmp__right__option .fa-ellipsis-v {
  font-size: 1.1rem;
  display: none;
}
.cmp__right__option .fa-ellipsis-v:hover {
  cursor: pointer;
}
</style>
