<template>
  <div class="max-w-xs mx-auto">
    <h1 class="text-purple-700 text-3xl text-center">登入</h1>
    <div class="bg-white mt-4 border border-purple-200 divide-y divide-purple-200 rounded-md shadow-md">
      <form class="p-6" @submit.prevent="login">
        <div>
          <div class="text-gray-500 mb-2">E-mail：</div>
          <input type="text" class="form-input w-full" autocomplete="email" v-model="form.email" autofocus>
          <!-- <div class="mt-2 text-red-600 text-sm">
            錯誤訊息...
          </div> -->
        </div>
        <div class="mt-6">
          <div class="text-gray-500 mb-2">密碼：</div>
          <input type="password" class="form-input w-full" autocomplete="current-password" v-model="form.password">
        </div>
        <div class="mt-8">
          <button type="submit" class="w-full px-4 py-2 text-white bg-purple-500 rounded hover:bg-purple-400 focus:outline-none">登入</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Layout from '../Layout'

export default {
  layout: Layout,
  metaInfo: {
    title: '登入'
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      console.log(`E-mail：${this.form.email}`)
      console.log(`密碼：${this.form.password}`)
    }
  }
}
</script>
