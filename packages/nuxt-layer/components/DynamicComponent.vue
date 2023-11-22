<script setup lang="ts">
import { mapper } from '../model/mapper'

</script>

<template>
  <div>
    <Component :is="mapper['innerTest']" />
  </div>
</template>
