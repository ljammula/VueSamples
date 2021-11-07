<template>
  <form id="user-data-form" @submit.prevent="updateUserInformation">
    <div>
      <!-- User Name -->
      <label for="userNameTextBox">Name</label>
      <input type="text" id="userNameTextBox" v-model="enteredUserName" />
    </div>
    <div>
      <!-- User Age -->
      <label for="userAgeTextBox">Age</label>
      <input type="text" id="userAgeTextBox" v-model="enteredUserAge" />
    </div>
    <!-- submit button -->
    <div class="field has-text-right">
      <button type="submit">Update Information</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "UserData",
  emits: ["update-user"],
  data: function () {
    return {
      enteredUserName: "",
      enteredUserAge: "",
    };
  },
  methods: {
    updateUserInformation() {
      const userDataInput = {
        userName: this.enteredUserName,
        userAge: this.enteredUserAge,
      };
      console.debug(`UserData.Vue ::  updateUserInformation():: ${userDataInput.userName} :: ${userDataInput.userAge}`);
      this.$emit("update-user", userDataInput);
    },
  },
};
</script>