<template>
  <div class="flex justify-between items-center px-10 py-[60px]">
    <NuxtLink to="/">
      <img
        src="~/assets/images/logo.svg"
        alt=""
        style="width: 64px; height: 64px"
      />
    </NuxtLink>
    <div class="flex gap-6 items-center max-lg:hidden">
      <div class="italic uppercase" v-for="(menu, index) in menus" :key="index">
        <NuxtLink :to="menu.url">{{ menu.name }}</NuxtLink>
      </div>
      <Button :class="buttonColor">
        LET'S TALK <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
      </Button>
    </div>
    <div @click="showMenu = true" class="lg:hidden">
      <font-awesome-icon
        icon="fa-solid fa-bars"
        style="height: 24px !important"
      />
    </div>
  </div>
  <modal
    v-if="showMenu"
    @close="showMenu = false"
    class="z-50 fixed h-full top-0 left-0 w-full bg-black text-white"
  >
    <div class="p-10">
      <div class="flex justify-end mb-10" @click="showMenu = false">
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          style="height: 64px !important"
        />
      </div>
      <div
        class="italic uppercase text-4xl mb-5"
        v-for="(menu, index) in menus"
        :key="index"
      >
        <NuxtLink :to="menu.url">{{ menu.name }}</NuxtLink>
      </div>
      <Button class="bg-pink-1">
        LET'S TALK <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
      </Button>
    </div>
  </modal>
</template>

<script>
export default {
  props: ["buttonColor"],
  setup() {
    const menus = [
      { url: "/work", name: "Work" },
      { url: "/about", name: "ABOUT" },
      { url: "/studio", name: "STUDIO" },
      { url: "/ventures", name: "OP VENTURES" },
      { url: "/journal", name: "JOURNAL" },
      { url: "/contact", name: "CONTACT" },
    ];

    return {
      menus,
    };
  },
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
