<template>
  <HeaderPage/>
  <PositionPage/>
  <SliderPage/>
  <ChoosePage/>
  <ArrivalsPage/>
  <LogosPage/>
  <FooterPage/>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue'
import PositionPage from './components/PositionPage.vue'
import SliderPage from './components/SliderPage.vue'
import ChoosePage from './components/ChoosePage.vue'
import ArrivalsPage from './components/ArrivalsPage.vue'
import LogosPage from './components/LogosPage.vue'
import FooterPage from './components/FooterPage.vue'

export default {
  name: 'App',
  components: {
    HeaderPage,
    PositionPage,
    SliderPage,
    ChoosePage,
    ArrivalsPage,
    LogosPage,
    FooterPage
  }
}
</script>

<style>
* {
padding: 0;margin: 0;box-sizing: border-box;
}
section{
   margin: 8rem;
}
@media (max-width: 680px) {
  section {
    margin: 4rem;
  }
}

@media (max-width: 450px) {
  section {
    margin: 2rem;
  }
}

</style>
