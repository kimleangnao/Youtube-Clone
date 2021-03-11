<template>
  <div class="purchased">
    <div
      :class="[myWidth == 7 ? 'purchased__nothing--7' : 'purchased__nothing']"
    >
      <div class="purchased__nothing__icon">
        <i class="fas fa-tag"></i>
      </div>
      <p class="purchased__p">You don't have any purchases</p>
      <p class="purchased__p2">
        Movies and shows you rent or buy will appear here
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Purchased",
  props: {
    myWidth: {
      type: Number,
      required: false
    }
  },
  setup() {
    return {};
  }
};
</script>

<style scoped>
.purchased {
  width: 100%;
  height: 100%;
}
.purchased__nothing {
  width: 500px;
  height: 250px;
  margin: 120px auto;
}
.purchased__nothing--7 {
  width: 100%;
  height: 250px;
  margin: 120px auto;
}

.purchased__nothing__icon {
  width: 130px;
  height: 130px;
  margin: 0 auto;
}
.purchased__nothing__icon .fa-tag {
  font-size: 5rem;
  line-height: 130px;
}
.purchased__p {
  font-size: 1.5rem;
}
.purchased__p2 {
  font-size: 0.85rem;
}
</style>
