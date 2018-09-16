<template>
    <div>
        <Toolbar />
        <v-container fluid>
            <v-layout justify-space-around>
            <v-flex xs3>
                <v-layout column>
                <v-img src="static/" aspect-ratio="1.1"></v-img>
                </v-layout>
            </v-flex>
            </v-layout>
        </v-container>
        <p />

        <v-stepper v-model="e1">
            <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">Schulisch</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">Praktika</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">Beruflich</v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="4">Projekte</v-stepper-step>

            </v-stepper-header>

            <v-stepper-items>
            <v-stepper-content step="1">
                <v-card class="mb-5" color="grey lighten-3">
                    <div class="title">Schulische Ausbildung</div>
                    <p />
                    <span class="font-weight-bold">Year - Year</span>
                    <p />
                    <span class="font-weight-bold">Year - Year</span>
                    <p />
                    <span class="font-weight-bold">Year - Year</span>
                    <p />
                    <span class="font-weight-bold">Year - Year</span>
                </v-card>

                <v-btn color="darken-4" @click="e1 = 2">
                Weiter
                </v-btn>

            </v-stepper-content>

            <v-stepper-content step="2">
                <v-card class="mb-5" color="grey lighten-3">
                    <div class="title">Praktika</div>
                    <p />
                    <span class="font-weight-bold">Duration</span>
                    <p />
                    <span class="font-weight-bold">Duration</span>
                    <p />
                    <span class="font-weight-bold">Duration</span>
                    <p />
                    <span class="font-weight-bold">Duration</span>
                </v-card>

                <v-btn color="darken-4" @click="e1 = 3">
                Weiter
                </v-btn>

            </v-stepper-content>

            <v-stepper-content step="3">
                <v-card class="mb-5" color="grey lighten-3">
                    <div class="title">Berufliche Erfahrung</div>
                    <p />
                    <span class="font-weight-bold">Since</span>
                </v-card>

                <v-btn color="darken-4" @click="e1 = 4">
                Weiter
                </v-btn>

            </v-stepper-content>

            <v-stepper-content step="4">
                <v-card class="mb-5" color="grey lighten-3">
                    <div class="title">Projekte</div>
                    <p />
                    <span class="font-weight-bold">professional/private</span>
                    <p />
                    <span class="font-weight-bold">professional/private</span>
                    <p />
                    <span class="font-weight-bold">professional/private</span>
                </v-card>

                <v-btn color="darken-4" @click="e1 = 1">
                Zum Anfang
                </v-btn>

            </v-stepper-content>
            </v-stepper-items>
        </v-stepper>

        <p class="space" />
        <Footer />
    </div>
</template>

<script>
import Toolbar from './Toolbar'
import Footer from './Footer'

export default {
    name: 'Curriculum',
    components: {
        Toolbar,
        Footer
    },
    data () {
      return {
        e1: 0
      }
    },
    metaInfo: {
        title: 'Lebenslauf',
        titleTemplate: '%s',
        meta: [
          { name: 'Content-Type', content: 'text/html; charset=utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { name: 'description', content: 'Meine wichtigsten Meilensteine und mehr Informationen über meinen bisherigen Werdegang.' }
        ]
    },
}
</script>

<style>
.space {
    margin-bottom: 5%;
}

@media only screen and (max-width: 414px) {
    .space {
        margin-bottom: 50%;
    }
}
</style>