<template>
  <div class="home">
    <HelloWorld/>
    <project/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import project from '@/components/Projects.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    project,
  }
}
</script>
