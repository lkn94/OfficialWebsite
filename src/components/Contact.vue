<template>
    <div>
        <Toolbar />
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
        title: 'Kontakt',
        titleTemplate: '%s',
        meta: [
          { name: 'Content-Type', content: 'text/html; charset=utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'description', content: 'Nehmen Sie Kontakt zu mir aus und lassen Sie uns einen interessanten Austausch beginnen.' }
        ]
    },
}
</script>