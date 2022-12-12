<template>
  <div class="p-40 bg-purple-1 text-white text-center flex justify-center">
    <div class="w-1/2 flex flex-col gap-20">
      <div class="uppercase italic text-6xl text-[#ff8f8f]">
        Help Startups get off the ground
      </div>
      <div class="uppercase italic text-6xl text-[#ff8f8f]">
        Develop digital products for part
      </div>
      <div class="uppercase italic text-6xl text-[#ff8f8f]">
        Dedicated strategy, technical, and design
      </div>
      <div v-for="(data, index) in DATA" :key="index">
        <div class="text-10xl uppercase italic">
          {{ (index + 1).toLocaleString("en-US", { minimumIntegerDigits: 2 }) }}
        </div>
        <div class="text-6xl uppercase italic mb-10">{{ data.name }}</div>
        <div class="text-2xl">{{ data.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const DATA = [
  {
    name: "A technical partner for your startup",
    description:
      "We’ll work with you to assist in defining your digital product strategy, starting by learning about your business goals, product value proposition, current and desired market positioning, along with the value that you want to convey to your customers. We complete a detailed, data-driven and research-based perspective to this process through testing, validating, iterating and then iterating again.",
  },
  {
    name: "Align incentives, succeed together",
    description:
      "First impressions are key as users will make their minds up within 3 seconds. Strong design enables you to engage meaningfully with your users. Our team of creative designers work alongside you during each step of the design process from brand identity, rapid prototyping, MVP’s through to detailed high-fidelity UX and UI designs. We utilise design best practices, data, research, consumer psychology and human-centred design to provide beautiful and engaging products",
  },
  {
    name: "A proven track record of startup success",
    description:
      "Getting a venture off the ground isn’t easy. Trust us – we’ve done it many times before. Knowing what success and failure looks like means we can help you navigate the process, reduce the risk of failure and find product-market fit faster.",
  },
];
</script>
