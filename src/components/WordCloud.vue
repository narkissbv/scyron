<template>
  <div>
    <div id="wordcloud" style="width: 100%; height: 800px;"></div>
  </div>
</template>

<script>
import axios from 'axios'
import wordcloud from 'wordcloud'

export default {
  data () {
    return {
      words: []
    }
  },
  components: {
    
  },
  methods: {
    
  },
  mounted () {
    axios.get('/data/words.json').then ( (resp) => {
      const data = eval(resp.data)
      data.forEach( (wordObj) => {
        this.words.push([wordObj.word, wordObj.weight])
      })
      wordcloud('wordcloud', { list: this.words })
    })
  }
}
</script>

<style>
  #wordcloud span:hover {
    display: inline-block;
    background-color: gray;
    text-transform: uppercase;
    width: auto !important;
  }
</style>