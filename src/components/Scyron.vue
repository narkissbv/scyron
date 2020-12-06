<template>
  <div>
    <v-container>
      <h1>Scyron home assignment</h1>
      <h2>By Matan Narkiss</h2>
      <v-card class="mb-10">
        <h3 @click="showTask1 = !showTask1">Task 1: Data Table</h3>
      </v-card>
      <DataTable v-if="showTask1" class="mb-10"/>
      <v-card class="mb-10">
        <h3 @click="showTask2 = !showTask2">Task 2: Word Cloud</h3>
      </v-card>
      <WordCloud v-if="showTask2"/>
      <v-card>
        <h3 @click="showTask3 = !showTask3">Task3: vis-network</h3>
      </v-card>
      <VisNetwork v-if="showTask3"/>
    </v-container>
  </div>
</template>

<script>
import DataTable from './DataTable'
import WordCloud from './WordCloud'
import VisNetwork from './VisNetwork'
export default {
  data () {
    return {
      showTask1: false,
      showTask2: false,
      showTask3: false
    }
  },
  components: {
    DataTable,
    WordCloud,
    VisNetwork
  }
}
</script>

<style>
  h2 {
    color: lightcoral;
    margin-bottom: 20px;
  }
  h3 {
    cursor: pointer;
  }
</style>