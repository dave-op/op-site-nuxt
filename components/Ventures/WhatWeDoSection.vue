<template>
  <div
    class="p-10 md:p-20 lg:p-40 bg-purple-1 text-white md:text-center flex md:justify-center"
  >
    <div class="xl:w-2/3 flex flex-col gap-10 md:gap-40">
      <div
        class="uppercase italic text-4xl md:text-5xl lg:text-6xl lg:leading-tight text-[#ff8f8f]"
      >
        Help Startups get off the ground
      </div>
      <div
        class="uppercase italic text-4xl md:text-5xl lg:text-6xl lg:leading-tight text-[#ff8f8f]"
      >
        Develop digital products for part
      </div>
      <div
        class="uppercase italic text-4xl md:text-5xl lg:text-6xl lg:leading-tight text-[#ff8f8f]"
      >
        Dedicated strategy, technical, and design
      </div>
      <div v-for="(data, index) in DATA" :key="index">
        <div
          class="text-7xl md:text-8xl lg:text-10xl uppercase italic mb-4 text-[#130f20]"
          style="-webkit-text-stroke: white; -webkit-text-stroke-width: thin"
        >
          {{ (index + 1).toLocaleString("en-US", { minimumIntegerDigits: 2 }) }}
        </div>
        <div class="text-4xl md:text-5xl lg:text-6xl lg:leading-tight uppercase italic mb-10">
          {{ data.name }}
        </div>
        <div class="md:text-2xl font-kumbh">{{ data.description }}</div>
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
