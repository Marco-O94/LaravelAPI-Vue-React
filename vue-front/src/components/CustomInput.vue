<template>
  <label class="label">
    <span class="label-text">{{ label }}</span>
  </label>
      <input :type="type" :name="name" @input="$emit('update:modelValue', $event.target.value)" :value="modelValue" class="input input-bordered" :placeholder="placeholder">
  </template>
  
  <script>
  export default {
    name: 'CustomInput',
    props: ['modelValue','label','type','name','placeholder'],
      emits: ['update:modelValue'],
  }
  </script>