<template>
  <q-page class="bg-pink-3 column">
    <h3 class="text-h2 text-center text-weight-bold text-accent" >To do</h3>
    <div class="row-q-pa-sm bg-accent">
      <q-input
        @keyup.enter="addTask"
        square
        placeholder="Введите задачу"
        v-model="newTask"
        dense
      >
        <template v-slot:before>
          <q-avatar>
            <img src="../assets/avatar.jpg" />
          </q-avatar>
        </template>

        <template v-slot:append>
          <q-icon
            v-if="text !== ''"
            name="close"
            @click="text = ''"
            class="cursor-pointer"
          />
        </template>

        <template v-slot:after>
          <q-btn @click="addTask()" round dense flat icon="send" />
        </template>
      </q-input>
    </div>
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
    <div v-if="!tasks.length" class="no-task absolute-center">
      <q-icon name="check" size="150px" color="primary"></q-icon>
      <div class="text-h4 text-primary text-center">No tasks</div>
    </div>
  </q-page>
</template>

<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },

  methods: {
    deleteTask(index) {
      this.$q
        .dialog({
          dark: true,
          title: "Ахтунг!!!!!!",
          message: "Действительно ли вы хотите удалить задачу?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.tasks.splice(index);
          this.$q.notify({
            message: "Задача успешно удалена! Не тыкай!!!",
            color: "primary",
            avatar: "../assets/cat.jpg",
          });
        });
    },
    addTask() {
      this.tasks.push({
        content: this.newTask,
        done: false,
      });
      this.newTask = "";
    },
  },
};
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: $accent;
  }
}

.no-task {
  opacity: 0.5;
  margin-top: 70px;
}
</style>
