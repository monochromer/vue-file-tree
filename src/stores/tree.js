import { defineStore } from 'pinia'

// простой полифил для `structuredClone`
const clone = structuredClone || ((obj) => JSON.parse(JSON.stringify(obj)))

export const useTreeStore = defineStore({
  id: 'tree',

  state: () => {
    return {
      initialShape: [],
      itemsById: {},
      loadingError: '',
      loading: false
    }
  },

  getters: {
    rootNode: (state) => {
      const items = [...state.initialShape]

      function traverse(id, index, arr) {
        const item = clone(state.itemsById[id])
        arr[index] = item
        if (item.children) {
          item.children.forEach(traverse)
        }
      }

      items.forEach(traverse)

      return items
    }
  },

  actions: {
    async init() {
      try {
        this.loading = true

        const response = await fetch('./data.json')

        if (!response.ok) {
          throw response
        }

        const data = await response.json()

        const queue = clone(data)
        while (queue.length > 0) {
          const item = queue.shift()
          const currentId = item.id
          const children = item.children
          if (children) {
            item.children = children.map((item) => item.id)
            children.forEach((child) => {
              child.parentId = currentId
              queue.push(child)
            })
          }
          this.itemsById[item.id] = item
        }

        this.initialShape = data.map((item) => item.id)
      } catch (error) {
        console.log('error while loading tree data: ', error)
        this.loadingError = error.message || error.statusText
      } finally {
        this.loading = false
      }
    },

    deleteItem(nodeId) {
      const item = this.itemsById[nodeId]

      const collection = item.parentId
        ? this.itemsById[item.parentId].children
        : this.initialShape

      collection.splice(collection.indexOf(nodeId), 1)
      delete this.itemsById[nodeId]

      const allChildIds = [...item.children]
      while (allChildIds.length > 0) {
        const childId = allChildIds.shift()
        const children = this.itemsById[childId].children
        if (children) {
          allChildIds.push(...children)
        }
        delete this.itemsById[childId]
      }
    },

    changeName(nodeId, name) {
      const item = this.itemsById[nodeId]
      item.name = name
    }
  }
})