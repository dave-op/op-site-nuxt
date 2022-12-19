<template>
  <div>
    <div class="bg-pink-1 py-[140px] text-center overflow-hidden">
      <div
        class="uppercase italic text-10xl mb-10 whitespace-nowrap my-text w-[200%] flex"
      >
        <p ref="myText">&nbsp;Build Something Together</p>
        <p>&nbsp; Build Something Together</p>
      </div>
      <Button class="border">
        <NuxtLink to="/contact">Contact Us</NuxtLink>
      </Button>
    </div>
    <div class="flex justify-center">
      <div class="w-4/5 py-24">
        <div class="flex flex-wrap justify-between mb-20">
          <div class="mb-10 mr-10">
            <ul>
              <li class="uppercase italic text-2xl mb-4">
                <NuxtLink to="/jobs">Careers</NuxtLink>
              </li>
              <li class="uppercase italic text-2xl mb-4">
                Awwwards
                <font-awesome-icon icon="fa-solid fa-up-right-from-square" />
              </li>
              <li class="uppercase italic text-2xl mb-4">
                Facebook
                <font-awesome-icon icon="fa-solid fa-up-right-from-square" />
              </li>
              <li class="uppercase italic text-2xl mb-4">
                Twitter
                <font-awesome-icon icon="fa-solid fa-up-right-from-square" />
              </li>
              <li class="uppercase italic text-2xl mb-4">
                Instagram
                <font-awesome-icon icon="fa-solid fa-up-right-from-square" />
              </li>
              <li class="uppercase italic text-2xl">
                Linkedin
                <font-awesome-icon icon="fa-solid fa-up-right-from-square" />
              </li>
            </ul>
          </div>
          <div class="mb-10 mr-10">
            <div class="uppercase italic text-4.5xl mb-10 leading-none">
              New Projects
            </div>
            <ul class="font-kumbh">
              <li class="text-lg font-medium underline">020 7206 2694</li>
              <li class="text-lg font-medium underline">
                hello@weareoriginalpeople.com
              </li>
              <li class="text-lg font-medium underline">Contact</li>
            </ul>
          </div>
          <div class="mb-10 mr-10">
            <div class="uppercase italic text-4.5xl mb-10 leading-none">
              London
            </div>
            <ul class="font-kumbh">
              <li class="text-lg font-medium">Original People,</li>
              <li class="text-lg font-medium">01Zero-One,</li>
              <li class="text-lg font-medium">Hopkins Street,</li>
              <li class="text-lg font-medium">Soho, London</li>
              <li class="text-lg font-medium">W1F 0HS</li>
            </ul>
          </div>
          <div class="mb-10 mr-10">
            <div class="uppercase italic text-4.5xl mb-10 leading-none">
              Nottingham
            </div>
            <ul class="font-kumbh">
              <li class="text-lg font-medium">Original People,</li>
              <li class="text-lg font-medium">01Zero-One,</li>
              <li class="text-lg font-medium">Hopkins Street,</li>
              <li class="text-lg font-medium">Soho, London</li>
              <li class="text-lg font-medium">W1F 0HS</li>
            </ul>
          </div>
        </div>
        <div class="flex justify-between flex-col lg:flex-row font-kumbh">
          <div class="flex flex-col sm:flex-row">
            <div class="mr-10 text-lg mb-4">
              © Original People, 2021. All rights reserved.
            </div>
            <div class="text-lg underline mb-4">Privacy policy</div>
          </div>
          <div class="text-lg">Made with in London</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";

const myText = ref(null);

onMounted(() => {
  const itemWidth = myText.value.scrollWidth + 42;

  gsap.to(".my-text", {
    duration: 7,
    ease: "none",
    x: `-=${itemWidth}px`,
    repeat: -1,
  });
});
</script>
