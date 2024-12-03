
<template>
    <section class="w-full h-auto bg-white">
        <!-- banner section -->
            <SharedHomepageBanner/>
        <!-- /banner section -->

        <!-- smaller banners -->
            <SharedHomepageSmallerbanners/>
        <!-- /smaller banners -->
        <!-- category section -->
            <SharedHomepageCategory/>
        <!-- /category section -->
        <!-- products section -->
            <SharedHomepageProducts/>
        <!-- /products section -->
        <!-- Main products -->
        <SharedHomepageMainproducts/>
        <!-- /Main products -->
        <!-- Discount section -->
        <SharedHomepageDiscount/>
        <!-- /Discount section -->

        <NuxtImg src="/products/Banner 2.png" class="w-full"/>

        <LayoutsFooter/>
    </section>
</template>