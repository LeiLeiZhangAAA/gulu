<template>
  <svg class="g-icon">
    <use :xlink:href=`#icon-${iconName}`></use>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String
    }
  }
}
</script>

<style scoped>
.g-icon {
  width: 1em;
  height: 1em;
}
</style>