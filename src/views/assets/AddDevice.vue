<template>
  <div class="adddevice">
   <hello-world></hello-world>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
@Component({
  components: {
    HelloWorld
  }
})
export default class AddDevice extends Vue {
}
</script>
