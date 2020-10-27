<template>
  <div>
    <nav class="bg-white shadow">
      <div class="container mx-auto md:flex">
        <div class="flex justify-between items-center flex-1 p-4 md:flex-initial">
          <a href="/" class="text-xl font-semibold text-purple-600 select-none">Inertia 範例</a>
          <button type="button" class="text-purple-400 hover:text-purple-600 focus:outline-none md:hidden" @click="showMenu = !showMenu">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>

        <div class="md:flex md:justify-between md:items-center md:flex-1" :class="{ 'hidden': !showMenu }">
          <ul class="p-2 pt-0 space-y-1 tracking-wider md:flex md:space-y-0 md:pb-0 md:space-x-2">
            <li><a class="block px-2 py-1 text-purple-500 rounded select-none hover:bg-purple-100" href="/posts">文章</a></li>
            <li><a class="block px-2 py-1 text-purple-500 rounded select-none hover:bg-purple-100" href="/about">關於</a></li>
          </ul>

          <ul class="p-2 border-t border-gray-300 space-y-1 tracking-wider md:flex md:py-0 md:border-t-0 md:space-y-0 md:space-x-2">
            <template v-if="true">
              <li><a class="block px-2 py-1 text-purple-500 rounded select-none hover:bg-purple-100" href="/login">登入</a></li>
            </template>
            <template v-else>
              <li><div class="block px-2 py-1 text-gray-700">User</div></li>
              <li><a class="block px-2 py-1 text-purple-500 rounded select-none hover:bg-purple-100" href="/todos">待辦事項</a></li>
              <li><a class="block px-2 py-1 text-purple-500 rounded select-none hover:bg-purple-100 focus:outline-none" href="/logout">登出</a></li>
            </template>
          </ul>
        </div>
      </div>
    </nav>

    <div class="py-6">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  // metaInfo() {
  //   return {
  //     titleTemplate: `%s - Title`
  //   }
  // },
  data() {
    return {
      showMenu: false
    }
  }
}
</script>
