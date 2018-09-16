<template>
    <v-layout>
    <v-toolbar dark color="primary">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat href="contact">Kontakt</v-btn>
            <v-btn flat href="imprint">Impressum</v-btn>
            <v-btn flat href="privacy">Datenschutz</v-btn>
        </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="mini"
      absolute
      dark
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="static/" class="lkimage" />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Title</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title" :href="item.to">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    </v-layout>
</template>

<script>
export default {
    name: 'Toolbar',
    data () {
        return {
            drawer: null,
            items: [
                { title: 'Startseite', icon: 'dashboard', to: '/' },
                { title: 'Lebenslauf', icon: 'subject', to: '/cv' },
                { title: 'Technikkram', icon: 'laptop', to: '/technical' },
                { title: 'Kontakt', icon: 'email', to: '/contact' },
                { title: 'Impressum', icon: 'face', to: '/imprint' },
                { title: 'Datenschutz', icon: 'lock', to: '/privacy' }
            ],
            mini: false,
            right: null
        }
    }
}
</script>

<style>
.lkimage {
    width: 50%;
}
</style>