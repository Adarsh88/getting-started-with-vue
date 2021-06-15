<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text " v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleWatch">Stop Watching</button>
    <!-- <h2>refs</h2>
    <p>{{ one.name }}-{{ one.age }}</p>
    <button @click="updateOne">Update one</button>
    <h2>Reactive</h2>
    <p>{{ two.name }} - {{ two.age }}</p>
    <button @click="updateTwo">Update two</button> -->

    <!-- <p ref="p">My name is {{ name }} and age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">add age</button>
    <input type="text" v-model="name" /> -->
  </div>
</template>

<script>
import { computed, ref, reactive } from "@vue/reactivity";
import { watch, watchEffect } from "@vue/runtime-core";
export default {
  name: "Home",
  setup() {
    // console.log("setup");
    // template ref
    // const p = ref(null);
    // console.log(p, p.value);

    // const name = ref("adarsh");
    // const age = ref(20);

    // const one = ref({ name: "adarsh", age: 20 });
    // const two = reactive({ name: "blade", age: 22 });

    // const updateOne = () => {
    //   one.value.age = 35;
    // };

    // const updateTwo = () => {
    //   two.age = 35;
    // };

    // const handleClick = () => {
    // name.value = "blade";
    // age.value = 35;
    // };
    const search = ref("");
    const names = ref(["adarsh", "vishnu", "abijith", "alfi"]);

    const stopWatch = watch(search, () => {
      console.log("watching you");
    });

    const stopEffect = watchEffect(() => {
      console.log("watchi effect run", search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleWatch = () => {
      stopWatch();
      stopEffect();
    };

    return { names, search, matchingNames, handleWatch };
  },
};
</script>
