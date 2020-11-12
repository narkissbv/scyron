<template>
  <v-app>
    <v-main>
      <Scyron/>
    </v-main>
  </v-app>
</template>

<script>
import Scyron from './components/Scyron';

export default {
  name: 'App',

  components: {
    Scyron,
  },

  data: () => ({
    //
  }),
};
</script>
