<template>
  <ul class="tree">
    <TreeItem
      v-for="item in data"
      :data="item"
      :key="item.id"
      @deleteItem="deleteItem"
      @changeItem="changeItem"
    />
  </ul>
</template>

<script>
import TreeItem from './TreeItem.vue'

export default {
  name: 'TreeComponent',

  components: {
    TreeItem
  },

  props: {
    data: {
      type: Array
    }
  },

  methods: {
    deleteItem(nodeId) {
      this.$emit('deleteItem', nodeId)
    },

    changeItem(nodeId, nodeName) {
      this.$emit('changeItem', nodeId, nodeName)
    }
  }
}
</script>

<style>
.tree {
  margin: 0;
  padding-left: 24px;
  list-style-type: none;
  display: grid;
  grid-gap: 8px;
}
</style>
