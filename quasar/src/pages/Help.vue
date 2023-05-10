<template>
  <q-page class="bg-pink-3 column">
    <h3 class="text-h2 text-center text-weight-bold text-accent">Help</h3>
    <p class="text-h5 text-center text-weight-medium text-accent">
      What happened????
    </p>
    <div class="q-pa-md">
      <q-input filled v-model="text" label="Filled">
        <template v-slot:after>
          <q-btn round dense flat icon="send" />
        </template>
      </q-input>
    </div>
  </q-page>
</template>

<script></script>

<style lang="scss">
.help-title {
  color: $accent;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
}
</style>
