<template>
  <Suspense>
    <template #default>
      <PostEditor />
    </template>
    <template #fallback>
      <div class="columns">
        <div class="column is-one-third" />
        <div class="column is-one-third">
          <Progress />
        </div>
        <div class="column is-one-third" />
      </div>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostEditor from '../components/PostEditor.vue';
import Progress from '../components/Progress.vue';

export default defineComponent({
  components: {
    PostEditor,
    Progress,
  },
});
</script>
