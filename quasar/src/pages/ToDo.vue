<template>
  <q-page class="bg-pink-3 column">
    <h3 class="todo-title">To do</h3>
    <q-list separator bordered>
      <q-item
        @click="task.done = !task.done"
        clickable
        :class="{ 'done bg-pink-4': task.done }"
        v-for="(task, index) in tasks"
        :key="task.id"
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox
            class="no-pointer-events"
            v-model="task.done"
            val="teal"
            color="primary"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.content }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn
            @click.stop="deleteTask(index)"
            round
            color="primary"
            icon="delete"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: "1",
          content: "Прогулка в парке",
          done: false,
        },
        {
          id: "2",
          content: "Играть",
          done: false,
        },
        {
          id: "3",
          content: "Бегать",
          done: false,
        },
      ],
    };
  },

  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
.todo-title {
  color: $accent;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
}

.done {
  .q-item__label {
    text-decoration: line-through;
    color: $accent;
  }
}
</style>
