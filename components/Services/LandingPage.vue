<template>
  <div
    class="px-10 md:px-20 lg:px-40 grid xl:grid-cols-2 gap-20 pb-10 md:pb-20 lg:pb-40"
  >
    <div class="flex flex-col gap-20">
      <NuxtLink to="services/1">
        <CustomImage
          url="blank"
          name="Product Design"
          description="UI/UX Product DesignWe design beautiful user experiences that distil complex functionality into intuitive user interfaces."
        />
      </NuxtLink>
      <NuxtLink to="services/2">
        <CustomImage
          url="blank"
          name="Product Development"
          description="UI/UX Product DesignWe design beautiful user experiences that distil complex functionality into intuitive user interfaces."
        />
      </NuxtLink>
      <NuxtLink to="services/3">
        <CustomImage
          url="blank"
          name="VR/AR"
          description="UI/UX Product DesignWe design beautiful user experiences that distil complex functionality into intuitive user interfaces."
        />
      </NuxtLink>
    </div>
    <div class="flex flex-col gap-20 xl:pt-32">
      <NuxtLink to="services/4">
        <CustomImage
          url="blank"
          name="Product Strategy"
          description="Explore your product concept, create and test design prototypes, plan out your technical approach."
        />
      </NuxtLink>
      <NuxtLink to="services/5">
        <CustomImage
          url="blank"
          name="e-Learning"
          description="UI/UX Product DesignWe design beautiful user experiences that distil complex functionality into intuitive user interfaces."
        />
      </NuxtLink>
    </div>
  </div>
</template>
