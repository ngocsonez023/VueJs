<template>
  <div id="app">
    <router-view name="comp-header" />
    <router-view name="comp-side-bar" />
      <section class="content-wrapper" style="min-height: 201px;">
        <router-view class="container-fluid"/>
      </section>
    <router-view name ="comp-footer" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
