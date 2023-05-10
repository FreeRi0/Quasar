<template>
  <q-page class="bg-pink-3 column">
    <h3 class="text-h2 text-center text-weight-bold text-accent">About</h3>
    <p class="text-h5 text-center text-weight-medium text-accent">Our advantages</p>
    <div class="q-pa-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <q-btn
            v-if="active"
            size="lg"
            icon="home"
            color="yellow"
            flat
            round
            dense
            @click="onClick"
          />
          <q-btn
            v-else
            size="sm"
            :icon="btnProps.icon"
            color="white"
            flat
            round
            dense
            @click="onClick"
          />
        </template>

        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem2 }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem3 }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref("style"),
      lorem: "our application allows you to create your own to-do list.",
      lorem2: "create tasks for every taste",
      lorem3: "nice app interface",
    };
  },
};
</script>

<style lang="scss">
.about-title {
  color: $accent;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
}
</style>
