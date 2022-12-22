<template>
  <div class="bg-purple-1 min-h-screen text-white">
    <div class="main-tool-bar">
      <AppHeader />
    </div>
    <HomeHeroSection />
    <HomeTrustedSection />
    <HomeWhatWeDo />
    <HomeOurWork />
    <HomeOurServices />
    <HomeOPVentures />
    <HomeOurJournal />
    <AppFooter />
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const showAnim = gsap
    .from(".main-tool-bar", {
      yPercent: -100,
      paused: true,
      duration: 0.2,
    })
    .progress(1);


  ScrollTrigger.create({
    start: "top top",
    end: 99999,
    onUpdate: (self) => {
  console.log('debug ------------ ', self)
      self.direction && self.direction === -1 ? showAnim.play() : showAnim.reverse();
    },
  });
});
</script>

<style>
.main-tool-bar {
  transition: ease 0.4s;
}
</style>
