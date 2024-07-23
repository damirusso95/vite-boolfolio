
<script>
export default {
  name: 'App',
};
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <RouterLink to="/contacts">Contacts</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
}
</style>

