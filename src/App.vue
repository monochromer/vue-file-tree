<template>
  <div class="app-view">
    <div class="app-view__error" v-if="loadingError">{{ loadingError }}</div>
    <pre class="app-view__debug">{{ debugState }}</pre>
    <div class="app-view__main">
      <Tree
        :data="rootNode"
        @deleteItem="deleteItem"
        @changeItem="changeItem"
      />
    </div>
    <div class="app-view__loader" v-if="loading"></div>
    <button class="app-view__reset" type="button" @click="reset">Сбросить</button>
  </div>
</template>

<script>
import { useTreeStore } from './stores/tree';
import Tree from './components/Tree.vue'

export default {
  name: 'App',

  components: {
    Tree
  },

  setup() {
    const treeStore = useTreeStore()
    return {
      treeStore
    }
  },

  computed: {
    rootNode() {
      return this.treeStore.rootNode
    },

    loadingError() {
      return this.treeStore.loadingError
    },

    loading() {
      return this.treeStore.loading
    },

    debugState() {
      return JSON.stringify(this.rootNode, null, 2)
    }
  },

  mounted() {
    this.treeStore.init()
  },

  methods: {
    deleteItem(nodeId) {
      this.treeStore.deleteItem(nodeId)
    },

    changeItem(nodeId, name) {
      this.treeStore.changeName(nodeId, name)
    },

    reset() {
      this.treeStore.init()
    }
  }
}
</script>

<style>
#app {
  font: 100%/1.25 'PT Mono', monospace;
  color: #2c3e50;
}

.app-view {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-areas:
    "error error"
    "debug main";
  grid-template-columns: 40% 60%;
  grid-template-rows: auto 1fr;
  border-radius: 4px;
}

  .app-view__error {
    grid-area: error;
    padding: 4px;
    color: red;
  }

  .app-view__debug {
    grid-area: debug;
    margin: 0;
    overflow: auto;
    padding: 4px;
    font-family: inherit;
    line-height: 1.5;
  }

    .app-view__debug::before {
      content: 'debug';
      position: sticky;
      top: 0;
      left: 0;
      padding: 2px 4px;
      background-color: #f0f0f0;
      border-radius: 4px;
    }

  .app-view__main {
    grid-area: main;
    overflow: auto;
    padding: 4px;
  }

  .app-view__reset {
    margin: 0;
    appearance: none;
    position: fixed;
    left: 1rem;
    bottom: 1rem;
    box-sizing: border-box;
    padding: 8px 12px;
    width: max-content;
    border: 0;
    border-radius: 4px;
    background-color: #39f;
    color: #fff;
    font: inherit;
    cursor: pointer;
  }

  .app-view__loader {
    position: fixed;
    inset: 0;
    margin: auto;
    box-sizing: border-box;
    width: 4rem;
    height: 4rem;
    border: 2px solid hsl(0deg 0% 90%);
    border-top-color: #39f;
    border-radius: 50%;
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
</style>
