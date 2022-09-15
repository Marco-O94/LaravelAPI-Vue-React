<template>
    <!-- Not Collapsible -->
    <li v-if="collapsible == false" class="relative">
        <router-link :to="link" class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-space text-ellipsis whitespace-nowrap rounded  hover:bg-primary-focus transition duration-300 ease-in-out">
          <i :class="fontAwesomeIcon" class="mr-5"></i>
          <span>{{label}}</span>
        </router-link>
      </li>
<!-- Collapsible -->
      <li v-else class="relative" :id="label">
        <i :class="fontAwesomeIcon" class="mr-5"></i>
          <span>{{label}}</span>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
          </svg>
        <ul class="relative accordion-collapse collapse" :id="'collapse' + label" :aria-labelledby="label">
          <slot />
        </ul>
      </li>
</template>
<script>
export default {
    name: 'MenuLink',
    props: {
        label: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        fontAwesomeIcon: {
            type: String,
            required: false
        },
        collapsible: {
            type: Boolean,
            required: true
        }
    }
}
</script>