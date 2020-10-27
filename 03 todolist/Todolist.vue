<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-purple-700 text-3xl text-center">待辦事項</h1>
    <div class="bg-white mt-4 border border-purple-200 divide-y divide-purple-200 rounded-md shadow-md">
      <form class="flex px-6 py-4" @submit.prevent="createTodo">
        <div class="flex-1 mr-4">
          <input type="text" class="form-input w-full" placeholder="請輸入待辦事項..." v-model="form.content">
          <!-- <div class="mt-2 text-red-600 text-sm">
            錯誤訊息...
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
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
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
  data() {
    return {
      todos: [
        {
          id: 1,
          content: '修復 A bug',
          checked: true
        },
        {
          id: 2,
          content: '開發 B 功能',
          checked: false
        }
      ],
      form: {
        content: ''
      }
    }
  },
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
