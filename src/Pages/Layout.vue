<template>
  <div>
    <nav class="bg-white shadow">
      <div class="container px-4 flex items-center py-4 mx-auto">
        <div class="text-xl font-semibold text-purple-600">Inertia 範例</div>
        <ul class="flex space-x-4 ml-6">
          <li><a class="text-purple-400 hover:text-purple-600" href="/">Home</a></li>
          <li><a class="text-purple-400 hover:text-purple-600" href="/about">About</a></li>
          <li><a class="text-purple-400 hover:text-purple-600" href="/posts">Posts</a></li>
        </ul>
      </div>
    </nav>

    <div class="container px-4 mx-auto py-4 text-center text-3xl text-purple-800">
      <slot></slot>
    </div>
  </div>
</template>
