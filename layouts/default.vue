<script setup lang="ts">
    useHead({
        title: "Cyber | E-Store"
    })
</script>
<template>
    <section class="w-full h-auto">
        <LayoutsNavbar/>
        <slot/>
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

*{
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
}

</style>