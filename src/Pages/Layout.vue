<template>
  <div>
    <nav class="bg-white shadow">
      <div class="container p-4 mx-auto flex items-center">
        <div class="text-xl font-semibold text-purple-600">Inertia 範例</div>
        <ul class="flex space-x-4 ml-6">
          <li><a class="inline-block text-purple-300 hover:text-purple-600" href="/">Home</a></li>
          <li><a class="inline-block text-purple-300 hover:text-purple-600" href="/about">About</a></li>
          <li><a class="inline-block text-purple-300 hover:text-purple-600" href="/posts">Posts</a></li>
        </ul>
      </div>
    </nav>

    <div class="container p-4 mx-auto text-center text-3xl text-purple-800">
      <slot></slot>
    </div>
  </div>
</template>
