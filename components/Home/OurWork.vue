<template>
  <div class="flex justify-center">
    <div class="pt-10 md:pt-20 lg:pt-40 w-4/5">
      <div class="lg:px-10">
        <div class="text-2xl font-bold mb-4 font-kumbh">
          The work we do, and the people we help.
        </div>
        <div
          class="text-7xl md:text-8xl lg:text-9xl xl:text-10xl leading-tight 2xl:leading-48 text-[#ff8f8f] uppercase italic"
        >
          Our Work
        </div>
      </div>
      <div class="grid lg:grid-cols-2 gap-14 pt-20">
        <div>
          <CustomImage
            url="network-rail"
            name="Network Rail"
            description="Transforming the way signallers learn mission-critical codes through a
                        cross-platform iOS and Android mobile app."
            class="mb-10 sm:mb-14 md:mb-22 lg:mb-32"
          />
          <Button class="px-0">
            <NuxtLink to="/work" class="px-16">Our Work</NuxtLink>
          </Button>
        </div>
        <CustomImage
          class="lg:pt-32"
          url="clasiq"
          name="Clasiq"
          description="Transforming one of the US’s largest classic car marketplaces,
            utilising data-driven research."
        />
      </div>
    </div>
  </div>
</template>
