<template>
  <div id="container" style="margin: 50px auto 0; width: 50%">
    <div tabindex="0" class="e-card" id="basic">
      <div class="e-card-header">
        <div class="e-card-header-caption">
          <div class="e-card-title">{{ title }}</div>
        </div>
      </div>
      <div class="e-card-separator" />
      <div class="e-card-content content">{{ description }}</div>
      <div class="e-card-separator" />
      <div class="e-card-content link">
        <nav>
          <a :href="link"> View Resource </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LearningResource",
  props: ["title", "description", "link"],
};
</script>

<style scoped>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";

div .e-card {
  background-color: maroon;
  color:white;
}

div .e-card .content {
  background-color: whitesmoke;
  font-size: 16px;
}

div .e-card .link {
  background-color: whitesmoke;
}
</style>