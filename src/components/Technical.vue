<template>
    <div>
        <Toolbar />
        <div class="display-3">Technikkram</div>
        <p />
        <center><v-img src="static/vuelogo.png" style="width: 10%;" aspect-ratio="1.1"></v-img></center>
        <p />
        Diese Seite wurde mit VueJS erstellt und dank Vuetify mit dem Material Design verbessert.<br />
        Sie war gleichzeitig mein erstes Projekt mit diesem Framework und diente dazu, meine Kenntnisse zu erweitern.
        <p />
        Mit Hilfe von Webpack wurden alle Dateien für den Server gebaut. Aus diesem Grund werden keine CDNs oder ähnliches eingesetzt.
        <p />
        Die Datenschützer werden sich freuen.
        <Footer />
    </div>
</template>

<script>
import Toolbar from './Toolbar'
import Footer from './Footer'

export default {
    name: 'Contact',
    components: {
        Toolbar,
        Footer
    },
    metaInfo: {
        title: 'Technikkram',
        titleTemplate: '%s',
        meta: [
          { name: 'Content-Type', content: 'text/html; charset=utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'description', content: 'Hintergrundinformationen zu dieser Website und spannende technische Neuigkeiten, die mich betreffen.' }
        ]
    },
}
</script>