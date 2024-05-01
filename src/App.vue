<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    document.title = "Pokémon Opale";
    const meta = document.createElement('meta');
    meta.name = 'robots';
    // meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
  }
}
</script>