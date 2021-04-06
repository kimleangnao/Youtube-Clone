<template>
  <div class="NSA">
    <div
      :class="[
        agree
          ? Annotataion
            ? 'NSA__rope NSA__rope--agree '
            : 'NSA__rope'
          : 'NSA__rope'
      ]"
    ></div>
    <div
      v-if="Annotataion"
      :class="[
        agree ? 'NSA__circle NSA__circle--agree--annotation' : 'NSA__circle'
      ]"
    ></div>
    <div
      v-else
      :class="[agree ? 'NSA__circle NSA__circle--agree' : 'NSA__circle']"
    ></div>
  </div>
</template>

<script>
export default {
  name: "NSA",
  props: {
    agree: {
      type: Boolean,
      required: true
    },
    Annotataion: Boolean
  },
  setup() {
    return {};
  }
};
</script>

<style scoped>
.NSA {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
}
.NSA:hover {
  cursor: pointer;
}
.NSA__rope {
  width: 100%;
  height: 70%;
  background-color: lightgrey;
  border-radius: 25px;
}
.NSA__rope--agree {
  transition: all 0.5s ease;
  background-color: red;
}
.NSA__circle {
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: rgb(167, 167, 167);
  border-radius: 50%;
  transition: all 0.5s ease;
  left: 0px;
}
.NSA__circle--agree--annotation {
  transition: all 0.5s ease;
  left: 30px;
}
.NSA__circle--agree {
  transition: all 0.5s ease;
  left: 30px;
  background-color: dodgerblue;
}
</style>
