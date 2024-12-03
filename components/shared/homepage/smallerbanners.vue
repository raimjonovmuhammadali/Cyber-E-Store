<template>
    <div class="w-full h-auto md:h-[600px] flex flex-col md:flex-row items-center justify-between">
        <div class="w-full flex flex-col-reverse md:flex-col items-center justify-between h-full">
            <div
                class="w-full h-auto flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-start bg-white py-5 md:py-0">
                <img src="~/assets/img/PlayStation.png" alt="macbook" class="hidden md:flex">
                <img src="~/assets/img/PlayStation (1).png" alt="macbook" class="flex md:hidden">
                <div class="text-black md:px-10 w-[338px] flex flex-col gap-5">
                    <h1 class="text-[46px]">Playstation 5</h1>
                    <p class="text-[#A5A5A5]">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
                        redefine your PlayStation experience.</p>
                </div>
            </div>
            <div class="w-full flex flex-col md:flex-row items-center justify-between h-full">
                <div
                    class="w-full flex flex-col md:flex-row items-center justify-between bg-[#E3E3E3] text-center md:text-start py-5 md:py-0">
                    <img src="~/assets/img/hero__gnfk5g59t0qe_xlarge_2x 1.png" alt="macbook" class="hidden md:flex">
                    <img src="~/assets/img/hero__gnfk5g59t0qe_xlarge_2x 1 (1).png" alt="macbook" class="flex md:hidden">
                    <div class="text-black px-10 w-[360px] flex flex-col gap-5">
                        <h1 class="text-[29px]">Apple
                            AirPods Max</h1>
                        <p class="text-[#A5A5A5]">Computational audio. Listen, it's powerful</p>
                    </div>
                </div>
                <div
                    class="w-full flex flex-col md:flex-row items-center justify-between bg-[#313131] h-full text-center md:text-start py-5 md:py-0">
                    <img src="~/assets/img/image 36.png" alt="macbook" class="hidden md:flex">
                    <img src="~/assets/img/image 36 (1).png" alt="macbook" class="flex md:hidden">
                    <div class="text-black px-10 w-[360px] flex flex-col gap-5">
                        <h1 class="text-[29px] text-white">Apple
                            Vision Pro</h1>
                        <p class="text-[#A5A5A5]">An immersive way to experience entertainment</p>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="w-full h-full flex flex-col-reverse md:flex-row items-center justify-between bg-[#EAEAEA] text-center md:text-start py-5 md:py-0">
            <div class="text-black px-10 w-[360px] flex flex-col gap-5 items-center md:items-start ">
                <h1 class="text-[34px] md:text-[64px] font-thin">Macbook <span class="font-semibold">Air</span></h1>
                <p class="">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid
                    Retina
                    display.</p>
                <NuxtLink to="/"
                    class="w-[191px] border rounded-md border-black py-4 px-6 flex items-center justify-center cursor-pointer">
                    Shop Now
                </NuxtLink>
            </div>
            <img src="~/assets/img/MacBook Pro 14.png" alt="macbook" class="hidden md:flex">
            <img src="~/assets/img/MacBook Pro 14 (1).png" alt="macbook" class="flex md:hidden">
        </div>
    </div>
</template>