<template>
  <button class="g-button" :class=`icon-${position}` @click="$emit('click')">
    <g-icon v-if="iconName && !loading" :icon-name="iconName"></g-icon>
    <g-icon class="loading" v-if="loading" icon-name="loding"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from '../vue/icon'
export default {
  /*props: ['iconName', 'position']*/
  components: {
    'g-icon': Icon
  },
  props: {
    iconName: {},
    loading: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>

<style lang="scss">
.g-button {
  font-size: var(--button-font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--button-border-radius);
  border: 1px solid var(--button-border-color);
  background-color: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  &.icon-right {
    > .g-icon {
      order: 2;
    }

    > .content {
      order: 1;
    }
  }

  & .g-icon {
    margin: .3em;
  }

  &:hover {
    border-color: var(--button-cloor-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  & .loading {
    animation: spin 2s infinite linear;
  }

  @keyframes spin {
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
  }
}
</style>