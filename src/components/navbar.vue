<template>
    <div >
      <v-app-bar color="red">
        <v-toolbar-title>My app</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon
          @click.stop="drawer = true"
          class="hidden-sm-and-up"
        ></v-app-bar-nav-icon>

        <v-toolbar-items class="hidden-xs-only">
          <v-btn to="/" text>Home</v-btn>

          <v-btn to="about" text>About</v-btn>

          <v-btn to="contact" text>Contact</v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute temporary top>
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.link"
            link
          >
            <v-icon aria-hidden="false">mdi-{{ item.icon }}</v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", link: "/", icon: "home" },
        { title: "Contact", link: "contact", icon: "phone" },

        { title: "About", link: "about", icon: "information" },
      ],
    };
  },
};
</script>