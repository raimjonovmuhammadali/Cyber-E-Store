<script setup lang="ts">
const route = useRoute();

</script>


<template>
    <div class="w-full mx-auto h-[10vh] text-black bg-white overflow-hidden">
        <div class="w-[80%] mx-auto hidden items-center h-full justify-between md:flex">
            <NuxtLink to="/" class="font-bold text-xl">
                cyber
            </NuxtLink>
            <form action="" class="relative">
                <input type="text" placeholder="Search" class="w-[372px] bg-gray-100 py-2 px-9 rounded-md outline-none text-gray-500">
                <Icon name="uil:search" class="absolute left-3 text-gray-500 top-3"/>
            </form>

            <ul class="flex items-center justify-center gap-10 font-normal">
                <li><nuxt-link to="/" :class="{ 'font-semibold': route.path === '/' }">Home</nuxt-link></li>
                <li><nuxt-link to="/" :class="{ 'font-semibold': route.path === '/about' }">About</nuxt-link></li>
                <li><nuxt-link to="/" :class="{ 'font-semibold': route.path === '/contact' }">Contact Us</nuxt-link></li>
                <li><nuxt-link to="/" :class="{ 'font-semibold': route.path === '/blog' }">Blog</nuxt-link></li>
            </ul>

            <div class="icons flex items-center justify-center gap-5 cursor-pointer">
                <Icon name="uil:heart"/>
                <Icon name="uil:cart"/>
                <Icon name="uil:user"/>
            </div>
        </div>

        <div class="w-[90%] mx-auto sm:flex max-sm:flex items-center h-full justify-between md:hidden xl:hidden">
            <NuxtLink to="/" class="font-bold text-xl">
                cyber
            </NuxtLink>
            <Icon name="uil:bars" class="text-2xl"/>
        </div>

    </div>
</template>