<script lang="ts">
import { categories } from '~/constants/index'; // Kategoriyalarni import qilish

export default defineComponent({
  data() {
    return {
      categoriesList: categories, // Ma'lumotlarni mahalliy holatda saqlash
    };
  },
});
</script>
<template>
    <div class="w-[90%] md:w-[80%] mx-auto h-[624px] md:h-[352px] bg-white text-black flex flex-col justify-center items-center">
        <div class="w-full flex items-center justify-between mt-20">
            <h1 class="text-[24px] font-[500]">Browse By Category</h1>

            <div>
                <Icon name="uil:arrow" class="" />
            </div>
        </div>

        <div class="w-full flex justify-between flex-wrap">
          <div v-for="item in categoriesList" :key="item.id" class="w-[49%] md:w-[160px] py-10 flex justify-between items-center flex-wrap">
            <span class="w-full h-[128px] bg-[#EDEDED] flex flex-col items-center justify-center rounded-md">
              <NuxtImg :src="`/icons/${item.icon}`"/>
              <span class="font-[500] text-[16px]">{{ item.name }}</span>
            </span>
        </div>
        </div>
    </div>
</template>