<template>
    <div class="pt-4 pb-2 px-6 mb-3">
        <a href="#!">
          <div class="flex items-center">
            <div class="shrink-0">
              <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-full w-10" alt="Avatar">
            </div>
            <div class="grow ml-3">
              <p class="text-sm font-semibold text-primary-content">{{uname}}</p>
            </div>
          </div>
        </a>
      </div>
</template>
<script>
export default {
  name: 'ProfileBar',
  props: {
    uname: {
      type: String,
      required: false,
    },
  },
};
</script>