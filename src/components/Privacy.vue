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
    name: 'Privacy',
    components: {
        Toolbar,
        Footer
    }
}
</script>