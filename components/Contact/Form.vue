<template>
  <div class="px-10 md:px-20 lg:px-60 pb-40">
    <div class="flex flex-col lg:flex-row justify-between mb-40">
      <div>
        <div class="text-2xl uppercase italic text-[#ff8f8f] leading-20.5">
          Call Us
        </div>
        <div class="text-2xl text-[#130f20] font-kumbh">
          +44 (0) 207 206 2694
        </div>
      </div>
      <div>
        <div class="text-2xl uppercase italic text-[#ff8f8f] leading-20.5">
          Find Us
        </div>
        <div class="text-2xl text-[#130f20] font-kumbh">
          Original People, 01Zero-One,
        </div>
        <div class="text-2xl text-[#130f20] font-kumbh">
          Hopkins Street, Soho,
        </div>
        <div class="text-2xl text-[#130f20] font-kumbh">London, W1F 0HS</div>
      </div>
      <div>
        <div class="text-2xl uppercase italic text-[#ff8f8f] leading-20.5">
          Find Us
        </div>
        <div class="text-2xl text-[#130f20] font-kumbh">Facebook</div>
        <div class="text-2xl text-[#130f20] font-kumbh">Instagram</div>
        <div class="text-2xl text-[#130f20] font-kumbh">Twitter</div>
      </div>
    </div>
    <div class="font-kumbh text-2xl text-[#130f20] text-bold lg:w-2/3">
      <div class="mb-14">
        <div class="mb-6">Full Name</div>
        <input class="px-8 py-5 bg-gray-200" style="width: 100%" />
      </div>
      <div class="mb-14">
        <div class="mb-6">Company Name?</div>
        <input class="px-8 py-5 bg-gray-200" style="width: 100%" />
      </div>
      <div class="mb-14">
        <div class="mb-6">Email Address?</div>
        <input class="px-8 py-5 bg-gray-200" style="width: 100%" />
      </div>
      <div class="mb-14">
        <div class="mb-6">Phone Number</div>
        <input class="px-8 py-5 bg-gray-200" style="width: 100%" />
      </div>
      <div class="mb-14">
        <div class="mb-6">Message</div>
        <textarea
          rows="7"
          class="px-8 py-5 bg-gray-200"
          style="width: 100%"
        ></textarea>
      </div>
      <button
        class="rounded-md bg-white text-black border border-black border-2 px-20 max-lg:w-full not-italic normal-case py-5"
        @mouseover="onEnter"
        @mouseleave="onLeave"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  methods: {
    onEnter({ currentTarget }) {
      gsap.to(currentTarget, { scale: 1.2 });
    },
    onLeave({ currentTarget }) {
      gsap.to(currentTarget, { scale: 1 });
    },
  },
};
</script>
