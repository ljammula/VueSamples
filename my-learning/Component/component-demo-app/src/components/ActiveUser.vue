<template>
  <ul>
    <li>
      <h2>{{ userName }}</h2>
      <h3>Age: {{ userAge }}</h3>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["userName", "userAge"],
};
</script>
