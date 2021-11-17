<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resource</base-button
    >
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </base-card>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: new Date().toISOString(),
          title: "Google",
          description: "Learn to google...",
          link: "https://www.google.com/",
        },
        {
          id: new Date().toISOString(),
          title: "Vue 3 Guide",
          description: "Vue.js official guide",
          link: "https://v3.vuejs.org/guide/introduction.html",
        },
        {
          id: new Date().toISOString(),
          title: "Cook food",
          description: "How to cook food?",
          link: "https://www.youtube.com/watch?v=WEDndTCyGgU",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(enteredTitle, enteredDescription, enteredlink) {
      const newResource = {
        id: new Date().toISOString(),
        title: enteredTitle,
        description: enteredDescription,
        link: enteredlink,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },
    deleteResource(resId) {
      console.log(`deleting: ${resId}`);
      const resIndex = this.storedResources.findIndex(
        (res) => res.id === resId
      );
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>
