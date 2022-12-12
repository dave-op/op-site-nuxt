<template>
  <div class="flex justify-between items-center px-10 py-[60px]">
    <img src="~/assets/images/logo.svg" alt="" style="width: 64px; height: 64px" />
    <div class="flex gap-6 items-center">
      <div class="italic uppercase" v-for="(menu, index) in menus" :key="index">
        <NuxtLink :to="menu.url">{{ menu.name }}</NuxtLink>
      </div>
      <Button :class="buttonColor">
        LET'S TALK <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['buttonColor'],
  setup() {
    const menus = [
      { url: '/work', name: 'Work' },
      { url: '/about', name: 'ABOUT' },
      { url: '/studio', name: 'STUDIO' },
      { url: '/ventures', name: 'OP VENTURES' },
      { url: '/journal', name: 'JOURNAL' },
      { url: '/contact', name: 'CONTACT'}
    ]

    return {
      menus
    }
  }
}
</script>
