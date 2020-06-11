<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-purple-700 text-3xl text-center">待辦事項</h1>
    <div class="bg-white mt-4 border border-purple-200 divide-y divide-purple-200 rounded-md shadow-md">
      <form class="flex px-6 py-4" @submit.prevent="createTodo">
        <div class="flex-1 mr-4">
          <input type="text" class="form-input w-full" placeholder="請輸入待辦事項..." v-model="form.content">
          <!-- <div class="mt-1 text-red-600 text-sm">
            Error message.
          </div> -->
        </div>
        <div>
          <button class="px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-400 focus:outline-none">新增</button>
        </div>
      </form>
      <div v-for="todo in todos" :key="todo.id" class="flex select-none">
        <label class="flex flex-1 px-6 py-4 cursor-pointer">
          <div class="mr-4">
            <input type="checkbox" class="form-checkbox cursor-pointer" v-model="todo.checked" @change="checkTodo(todo.id, todo.checked)">
          </div>
          <div class="flex-1" :class="todo.checked ? 'text-gray-500 line-through' : ''">{{ todo.content }}</div>
        </label>
        <button class="px-6 text-red-600 hover:text-red-400 focus:outline-none" @click="removeTodo(todo.id)">
          <svg class="fill-current h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8H3a1 1 0 1 1 0-2h5zM6 8v12h12V8H6zm8-2V4h-4v2h4zm-4 4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: '待辦事項'
  },
  data: () => ({
    todos: [
      {
        id: 1,
        content: '修復 A bug',
        checked: false
      },
      {
        id: 2,
        content: '開發 B 功能',
        checked: true
      }
    ],
    form: {
      content: ''
    }
  }),
  methods: {
    createTodo() {
      console.log(`新增 ${this.form.content} 待辦事項...`)
    },
    checkTodo(id, checked) {
      console.log(`核選 ${id} 號待辦事項...`, checked)
    },
    removeTodo(id) {
      console.log(`刪除 ${id} 號待辦事項...`)
    }
  }
}
</script>
