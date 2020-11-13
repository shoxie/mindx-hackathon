<template>
  <div class="min-h-full flex items-end justify-center">
    <input
      class="rounded-lg px-5 py-2"
      type="text"
      placeholder="Text to message"
    />
    <button
      class="bg-orange-300 rounded-lg flex flex-row items-center gap-2 px-5 py-2"
    >
      Send<i class="fad fa-location-arrow"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "Chat",
};
</script>
