<template>
  <div id="app">
    <div class="flex items-center gap-x-6 bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p class="text-sm leading-6 text-white">
        <a href="https://fanlink.to/mPnA" target="__blank">
          New Single: A Dreamer's Song (Working for Good) & Photobook 
          <svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>
          <span class="whitespace-nowrap font-semibold">
            Stream and Download the Visual Bundle&nbsp;
            <span aria-hidden="true">&rarr;</span>
          </span>
        </a>
      </p>
      <div class="flex flex-1 justify-end">
      </div>
    </div>

    <div class="">
      <nav
        class="flex flex-col md:flex-row md:justify-center items-center bg-white px-8 py-4"
      >
        <div class="hidden md:block md:mr-24">
          <router-link to="/releases" class="font-semibold">Music</router-link>
          <a
            href="https://genius.com/artists/Dbilovd"
            target="__blank"
            class="font-semibold ml-6"
            >Lyrics</a
          >
        </div>
        <h1 class="font-bold text-2xl">
          <router-link to="/">Dbilovd</router-link>
        </h1>
        <div class="hidden md:block md:ml-24">
          <router-link to="/about" class="font-semibold">About</router-link>
          <router-link to="/freely-given" class="font-semibold ml-6"
            >#FreelyGiven</router-link
          >
        </div>

        <div class="block md:hidden mt-2">
          <router-link to="/releases" class="">Music</router-link>
          <a
            href="https://genius.com/artists/Dbilovd"
            target="__blank"
            class="ml-4"
            >Lyrics</a
          >
          <router-link to="/about" class="ml-4">About</router-link>
          <router-link to="/support" class="ml-4">Support</router-link>
        </div>
      </nav>
    </div>

    <slot />

    <FooterComponent></FooterComponent>
  </div>
</template>

<script type="text/javascript">
"use strict";
import FooterComponent from "~/components/Footer";

const DefaultLayout = {
  components: {
    FooterComponent,
  },
};

export default DefaultLayout;
</script>