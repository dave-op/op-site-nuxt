<template>
  <div
    class="px-10 md:px-20 lg:px-40 flex flex-col xl:flex-row justify-between gap-10 md:gap-20 mb-20"
  >
    <div>
      <NuxtLink to="/journal/1">
        <CustomImage
          url="e-learning-journal"
          name="E-Learning"
          description="Developing of an client-first e-Learning platform"
          class="mb-20"
        />
      </NuxtLink>
      <NuxtLink to="/journal/2">
        <CustomImage
          url="discovery"
          name="Discovery"
          description="Best practices for an all-encompassing discovery"
        />
      </NuxtLink>
    </div>

    <div class="xl:pt-40">
      <NuxtLink to="/journal/3">
        <CustomImage
          url="network-rail-app"
          name="Network Rail App"
          description="How to re-imagine the learning experience"
          class="mb-20"
        />
      </NuxtLink>
      <NuxtLink to="/journal/4">
        <CustomImage
          url="e-learning-journal"
          name="E-Learning"
          description="Developing of an client-first e-Learning platform"
        />
      </NuxtLink>
    </div>
  </div>
</template>
