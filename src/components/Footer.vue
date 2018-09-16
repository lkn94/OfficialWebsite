<template>
    <div>
        <p class="space" />
        <v-footer dark height="auto" fixed style="margin-top: 5%;">
            <v-card class="flex" flat tile>
                <v-card-text>
                    <v-btn v-for="item in items" :key="item.to" :href="item.to" :target="item.target" flat small>
                    {{ item.plattform }}
                    </v-btn>
                </v-card-text>
            <v-card-actions class="grey darken-4 justify-center">
                &copy; 2018 — &nbsp;<strong>Lukas Knöller</strong>
            </v-card-actions>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data: () => ({
        items: [
            {
                plattform: "LinkedIn", to: "https://www.linkedin.com/in/lukas-knoeller/", target: "_blank"
            },
            {
                plattform: "GitHub", to: "https://github.com/lkn94", target: "_blank"
            },
            {
                plattform: "Blog", to: "https://hobbyblogging.de", target: "_blank"
            },
            {
                plattform: "Mail", to: "mailto://message@lukasknoeller.de", target: "_self"
            }
            ]
        })
    }
</script>

<style>
.space {
    margin-top: 10%;
}

@media only screen and (max-width: 414px) {
    .space {
        margin-top: 50%;
    }
}
</style>