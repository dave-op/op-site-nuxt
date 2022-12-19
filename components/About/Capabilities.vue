<script setup>
const capabilities = [
  {
    name: "Design",
    description:
      "First impressions are key as users will make their minds up within 3 seconds. Strong design enables you to engage meaningfully with your users. Our team of creative designers work alongside you during each step of the design process from brand identity, rapid prototyping, MVP’s through to detailed high-fidelity UX and UI designs.",
    shortDescription:
      "We utilise design best practices, data, research, consumer psychology and human-centred design to provide beautiful and engaging products.",
  },
  {
    name: "Product strategy",
    description:
      "We’ll work with you to assist in defining your digital product strategy, starting by learning about your business goals, product value proposition, current and desired market positioning, along with the value that you want to convey to your customers.",
    shortDescription:
      "We complete a detailed, data-driven and research-based perspective to this process through testing, validating, iterating and then iterating again.",
  },
  {
    name: "Development & Engineering",
    description:
      "Our development team are your true technical partner, influencing tech decisions based on business logic from day one, we utilise the most appropriate tech stack, infrastructure and architecture to ensure your digital product is built to scale as seamlessly as your business does.",
    shortDescription:
      "We will love ambitious projects and will consistently find ways to use technology creatively, in order to design effective and engaging solutions.",
  },
];
</script>

<template>
  <div class="flex justify-center">
    <div class="w-4/5 pt-20 lg:pt-40">
      <div
        class="uppercase italic text-6xl md:text-8xl lg:text-[135px] lg:leading-8.5 text-[#ff8f8f] lg:w-1/2 mb-20 lg:mb-40 max-md:break-all"
      >
        Our Capabilities
      </div>
      <div class="lg:px-20">
        <div
          v-for="(capability, index) in capabilities"
          :key="index"
          class="flex mb-20 flex-col lg:flex-row"
        >
          <div class="mr-20 uppercase italic text-6xl lg:text-7xl mb-10 md:mb-20">
            {{
              (index + 1).toLocaleString("en-US", { minimumIntegerDigits: 2 })
            }}
          </div>
          <div class="">
            <div class="uppercase italic text-5xl md:text-6xl lg:text-7xl mb-10 max-md:break-all">
              {{ capability.name }}
            </div>
            <div class="md:text-2xl font-medium mb-5 font-kumbh">
              {{ capability.description }}
            </div>
            <div class="md:text-2xl font-medium font-kumbh">
              {{ capability.shortDescription }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
