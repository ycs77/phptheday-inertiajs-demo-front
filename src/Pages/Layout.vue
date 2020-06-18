<template>
  <div>
    <nav class="bg-white shadow">
      <div class="container p-4 mx-auto flex items-center">
        <a href="/" class="text-xl font-semibold text-purple-600 select-none">Inertia 範例</a>
        <ul class="flex space-x-4 ml-6">
          <li><a class="inline-block text-purple-400 select-none hover:text-purple-600" href="/about">關於</a></li>
          <li><a class="inline-block text-purple-400 select-none hover:text-purple-600" href="/posts">文章</a></li>
          <li><a class="inline-block text-purple-400 select-none hover:text-purple-600" href="/todos">待辦事項</a></li>
        </ul>
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
  //     titleTemplate: `%s - ${this.$page.app.name}`
  //   }
  // }
}
</script>
