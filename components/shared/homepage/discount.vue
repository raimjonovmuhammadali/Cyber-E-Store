<script lang="ts">
import { producta } from '~/constants/index'; // Kategoriyalarni import qilish

export default {
    data() {
        return {
            producta,
        };
    },
};
</script>

<template>
    <div class="w-[99%] md:w-[80%] mx-auto h-[auto] bg-white text-black flex flex-col justify-center">
        <div class="w-full h-full flex items-center justify-between mt-10">
            <!-- Tabs Header -->
            <div class="w-[500px] flex">
                <h1>Discounts up to -50%</h1>
            </div>
        </div>

        <div class="w-full flex">
            <!-- Tabs Content -->
            <div class="w-full p-4">
                <div class="w-full flex items-center justify-between gap-3 text-center flex-wrap">
                    <div v-for="product in producta" :key="product.id"
                        class="w-[45%] md:w-[23%] h-[352px] p-4 border rounded-[9px] shadow flex flex-col items-center justify-center gap-2 bg-[#F6F6F6] relative">
                            <NuxtImg :src="`/products/${product.icon}`" class="w-[104px] h-[104px] md:w-[160px] md:h-[160px] object-cover mb-4"/>
                        <h3 class="text-[16px] font-[500]">{{ product.name }}</h3>
                        <p class="mt-2 font-bold">${{ product.price }}</p>
                        <span
                            class="w-[139px] md:w-[188px] rounded-[8px] py-2 px-2 flex items-center justify-center cursor-pointer bg-black text-white">Buy
                            Now</span>

                            <Icon name="uil:heart" class="absolute text-[25px] top-4 right-5 cursor-pointer text-[#909090]'"  />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>