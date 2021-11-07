<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? "(favourite)" : "" }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="togglefavourite">Toggle Favourite</button>
    <button @click="$emit('delete-friend', id)">Delete</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  //1st-Way
  // props:['name', 'emailAddress', 'phoneNumber'],

  //2nd-Way
  // props:{
  //   name: String,
  //   emailAddress: String,
  //   phoneNumber: String
  // },

  //ideal-way
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: false,
    },
    /* Custom-Validator
    isFavourite:{
      type:String,
      required: false,
      default: '0',
      validator: function(value){
        return value === '1' || value === '0';
      }
    }*/
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: {
    "toggle-favourite": function (id) {
      if (id) {
        return true;
      } else {
        console.warn("Id is missing");
        false;
      }
    },
    "delete-friend":{},
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    togglefavourite() {
      this.$emit("toggle-favourite", this.id);
    },
  },
};
</script>