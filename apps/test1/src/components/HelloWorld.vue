<template>
  <div class="hello">
    HelloWorld
  </div>
</template>

<script>
import { name } from '@pkg/modules'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props, ctx) {
    console.log('----------')
    console.log(ctx.$data)
    console.log('----------')
    return {
      name
    }
  }
}
</script>

<style scoped>
</style>
