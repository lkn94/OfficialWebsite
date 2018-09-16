<template>
    <div>
        <Toolbar />
            <p />
            <div class="display-3">Coding is a lifestyle</div>
            <div class="display-5">Software Engineering, Wirtschaftsinformatik, Smart Home</div>
        <p />
        <v-carousel hide-delimiters>
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            ></v-carousel-item>
        </v-carousel>
        <Footer />
    </div>
</template>

<script>
import Toolbar from './Toolbar'
import Footer from './Footer'

export default {
    name: 'Main',
    components: {
        Toolbar,
        Footer
    },
    metaInfo: {
        title: 'Startseite',
        titleTemplate: '%s',
        meta: [
          { name: 'Content-Type', content: 'text/html; charset=utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'description', content: 'Software Engineering, Wirtschaftsinformatik, Smart Home, Hobbyblogging' }
        ]
    },
    data () {
      return {
        items: [
        ]
      }
    }
}
</script>