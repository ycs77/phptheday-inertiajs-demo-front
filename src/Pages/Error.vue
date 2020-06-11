<template>
  <div class="bg-white text-gray-600 font-hairline h-screen flex justify-center items-center relative">
    <div class="text-center text-3xl px-4 border-r-2 border-current">
      {{ code }}
    </div>

    <div class="text-center text-lg p-3">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.message
    }
  },
  props: {
    code: Number,
    message: String
  }
}
</script>
