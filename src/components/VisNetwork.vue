<template>
  <div class="vis-container">
    <Network ref="network"
      :nodes="nodes"
      :edges="edges"
      :options="options"
      :events="['selectNode', 'hoverNode']"
      @selectNode="onNodeSelected"
      @hoverNode="onNodeHovered">
    </Network>
  </div>
</template>

<script>
import { Network } from "vue-vis-network"
export default {
  data () {
    return {
      nodes: [
        {id: 1,  label: 'image',  shape: 'image', image: 'https://picsum.photos/id/809/200/200' },
        {id: 2,  label: 'svg', shape: 'image', image: 'https://cdn.worldvectorlogo.com/logos/lorem-lorem-1.svg'},
        {id: 3,  label: 'database',shape: 'database'},
        {id: 4,  label: 'box',     shape: 'box'    },
        {id: 5,  label: 'diamond', shape: 'diamond'},
        {id: 6,  label: 'dot',     shape: 'dot'},
        {id: 7,  label: 'square',  shape: 'square'},
        {id: 8,  label: 'triangle',shape: 'triangle'},
      ],
      edges: [
        {from: 1, to: 2},
        {from: 2, to: 3},
        {from: 2, to: 4},
        {from: 2, to: 5}, 
        {from: 5, to: 6},
        {from: 5, to: 7},
        {from: 6, to: 8}
      ],
      options: {
         nodes: {
          borderWidth: 4
         },
         edges: {
          color: 'lightgray'
        },
        height: '800px'
      }
    }
  },
  components: {
    Network
  }
}
</script>

<style>
  .vis-container {
    height: 800px;
  }
</style>