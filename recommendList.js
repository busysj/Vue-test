Vue.component("recommend-list", {
  props: ["recommend"],
  template: `
    <div>
        <v-container>
        <v-card>
        <v-slide-x-transition group>
            <v-list-item v-for="n, index in recommend" :key="index">
            <v-list-item-content>
                <v-list-item-title>{{ n }}를 추천합니다</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-slide-x-transition>
        </v-card>
    </v-container>
  </div>
    `,
});
