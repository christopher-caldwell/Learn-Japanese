<template lang='pug'>
div
  v-navigation-drawer(v-model='drawer', app, clipped)
    v-list.internal-drawer-container.listing-listy.list(dense)
      v-subheader {{ usersName }}
      v-divider
      NavMenuItem(v-for='(route, index) in allowableRoutes', :key='index', :route='route')
    .find-me
      v-switch(
        v-model='isDarkMode',
        @change='saveDarkModeSetting',
        label='Dark Mode',
        :color='greenColor',
        hide-details
      )
  v-app-bar(app, dense, clipped-left)
    v-app-bar-nav-icon(@click.stop='drawer = !drawer')
    v-toolbar-title.full-width
      v-row(justify='space-between', align='baseline')
        v-col
        v-col(cols='3', align-self='center') 
          v-img(height='60px', :src='require("@/assets/images/all-white.png")', contain)
</template>

<script lang='ts'>
import { Component } from 'vue-p'
import { mapGetters } from 'vuex'
import NavMenuItem from '@/components/header/NavMenuItem.vue'

export default {
  components: {
    NavMenuItem,
  },
  data() {
    return {
      drawer: false,
      isDarkMode: true,
    }
  },
  computed: {
    ...mapGetters('user', ['usersName']),
    ...mapGetters('session', ['allowableRoutes', 'isInDarkMode']),
    isMobile() {
      return window.innerWidth < 1264
    },
    menuActivatorClassName() {
      return this.drawer ? 'menu-open' : ''
    },
    menuActivatorIconName() {
      return this.drawer ? 'mdi-close' : 'mdi-chevron-right'
    },
  },
  mounted() {
    this.$vuetify.theme.dark = true
  },
  methods: {
    saveDarkModeSetting() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>

<style lang='sass'>
.find-me
  height: 40px
  width: 130px
  position: absolute
  bottom: 15%
  right: 4%
  @media screen and (min-width: 786px)
    bottom: 5%
    right: 4%
  .internal-drawer-container
    height: 100%
  #menu-badge
    left: -1px !important
    top: 1px !important
</style>