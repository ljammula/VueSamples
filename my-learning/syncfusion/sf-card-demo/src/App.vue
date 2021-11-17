<template>
  <div>
    <h1 style="text-align:center;color:maroon;background-color:white">Learning Resource</h1>
    <ul>
      <learning-resource
        v-for="resource in storedResources"
        :key="resource.id"
        :title="resource.title"
        :description="resource.description"
        :link="resource.link"
      ></learning-resource>
    </ul>
  </div>
</template>

<script>
import LearningResource from "./components/LearningResource.vue";

export default {
  name: "App",
  components: {
    LearningResource,
  },
  data() {
    return {
      storedResources: [
        {
          id: "1",
          title: "Google",
          description: "Learn to google...",
          link: "https://www.google.com/",
        },
        {
          id: "2",
          title: "Vue 3 Guide",
          description: "Vue.js official guide",
          link: "https://v3.vuejs.org/guide/introduction.html",
        },
        {
          id: "3",
          title: "Cook food",
          description: "How to cook food?",
          link: "https://www.youtube.com/watch?v=WEDndTCyGgU",
        },
      ],
    };
  },
};
</script>


