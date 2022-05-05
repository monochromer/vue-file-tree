<template>
  <li class="tree-item">
    <div class="tree-item__header">
      <svg v-if="data.type === 'directory'" class="tree-item__icon tree-item__icon_view_folder" viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
      <svg v-if="data.type === 'file'" class="tree-item__icon tree-item__icon_view_file" viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
        <polyline points="13 2 13 9 20 9"></polyline>
      </svg>

      <div class="tree-item__name" v-show="!isEdit" @dblclick="enterEdit">
        {{ data.name }}
      </div>
      <form class="tree-item__edit-form" v-show="isEdit" @submit.prevent="leaveEdit">
        <input ref="input" class="tree-item__name tree-item__input" :value="data.name" @input="changeItem">
      </form>
      <div class="tree-item__actions">
        <button class="tree-item__button" type="button" title="edit" @click="enterEdit">
          <svg class="tree-item__icon" viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </button>
        <button class="tree-item__button tree-item__button_type_delete" type="button" title="delete" @click="deleteItem">
          <svg class="tree-item__icon" viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>
    </div>
    <div class="tree-item__body" v-if="hasChildren">
      <Tree
        :data="data.children"
        @deleteItem="forwardDeleteItem"
        @changeItem="forwardChangeItem"
      />
    </div>
  </li>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'TreeItemComponent',

  components: {
    // асинхронное определение - для рекурсивных ссылок `Tree` и `TreeItem` друг на друга
    Tree: defineAsyncComponent(() => import('./Tree.vue'))
  },

  props: {
    data: {
      type: Object
    }
  },

  data() {
    return {
      isEdit: false
    }
  },

  computed: {
    hasChildren() {
      return this.data.children && this.data.children.length > 0
    }
  },

  methods: {
    enterEdit() {
      this.isEdit = true

      this.$nextTick(() => {
        this.$refs?.input?.focus()
      })
    },

    leaveEdit() {
      this.isEdit = false
    },

    toggleEdit() {
      console.log(this.isEdit)
      if (this.isEdit) {
        this.leaveEdit()
      } else {
        this.enterEdit()
      }
    },

    changeItem(event) {
      this.$emit('changeItem', this.data.id, event.target.value)

    },

    deleteItem() {
      this.$emit('deleteItem', this.data.id)
    },

    forwardDeleteItem(nodeId) {
      this.$emit('deleteItem', nodeId)
    },

    forwardChangeItem(nodeId, nodeName) {
      this.$emit('changeItem', nodeId, nodeName)
    }
  }
}
</script>

<style>
.tree-item {
  padding: 8px;
  min-width: 0;
  border: 1px solid hsl(0deg 0% 92%);
  border-radius: 4px;
}

  .tree-item__header {
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .tree-item__icon {
    flex: 0 0 auto;
  }

  .tree-item__name {
    flex: 1 1 0%;
    overflow: hidden;
    box-sizing: border-box;
    padding: 4px;
    min-width: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .tree-item__edit-form {
    flex: 1 1 0%;
  }

  .tree-item__input {
    --border-color: #ccc;
    margin: 0;
    appearance: none;
    padding: 4px;
    border: 0;
    width: 100%;
    min-width: 0;
    display: block;
    font: inherit;
    border-radius: 4px;
    box-shadow: 0 0 0 1px var(--border-color);
    background-color: hsl(0deg 0% 98%);
  }

    .tree-item__input:focus {
      --border-color: #39f;
    }

  .tree-item__actions {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .tree-item__button {
    margin: 0;
    appearance: none;
    padding: 8px;
    border: 0;
    background: 0;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s;
  }

    .tree-item__button_type_delete {
      color: red;
    }

    .tree-item__button:hover {
      background-color: #f2f2f2;
    }

  .tree-item__icon {
    display: block;
  }

  .tree-item__body {}

</style>