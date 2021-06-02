<template>
  <h1>{{ title }}</h1>
  <p>Welcome</p>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModalone">
      <h1>Giveaway alert</h1>
      <p>Grab your giveaway</p>
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">More info</a>
      </template>
    </Modal>
  </teleport>
  <teleport to=".modals" v-if="showModaltwo">
    <Modal theme="" @close="toggleModaltwo">
      <h1>New modal</h1>
      <template v-slot:new>
        <a href="#">Get it now</a>
      </template>
    </Modal>
  </teleport>

  <button @click="toggleModalone">Open Modal 1</button>
  <button @click="toggleModaltwo">Open Modal 2</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My first vue app ;)",
      showModal: false,
      showModaltwo: false,
    };
  },
  methods: {
    toggleModalone() {
      this.showModal = !this.showModal;
    },
    toggleModaltwo() {
      this.showModaltwo = !this.showModaltwo;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 5px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
