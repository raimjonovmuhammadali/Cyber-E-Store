<template>
    <div class="banner w-full h-[632px] flex flex-col md:flex-row items-center justify-center  gap-0 md:gap-20 overflow-hidden"
        style="background: linear-gradient(90.7deg, #211C24 0.64%, #211C24 101%)">
        <div
            class="banner_info w-full md:w-6/12 flex flex-col gap-2 md:gap-8 items-center justify-center md:items-start mt-11">
            <div class="text-center md:text-start">
                <p class="text-[25px] text-[#7A777C] font-semibold">Pro.Beyond.</p>
                <h1 class="text-[62px] md:text-[96px] font-normal ">IPhone 14 <span class="font-bold">Pro</span>
                </h1>
                <span class="text-[18px] text-[#7A777C]">Created to change everything for the better. For
                    everyone</span>
            </div>

            <NuxtLink to="/"
                class="w-[191px] border rounded-md border-red-100 py-4 px-6 flex items-center justify-center cursor-pointer hover:bg-white hover:text-black transition ease-linear delay-100">
                Shop Now
            </NuxtLink>
        </div>
        <img src="~/assets/img/Iphone Image.png" alt="iphone" class="w-[321px] md:w-[406px] h-[289px] md:h-[632px]">
    </div>
</template>