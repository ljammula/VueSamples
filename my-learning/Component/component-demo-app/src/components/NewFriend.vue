<template>
  <form id="new-friend-form" @submit.prevent="addNewFriend">
    <div>
      <!-- Friend Name -->
      <label for="nameTextBox">Name</label>
      <input type="text" id="nameTextBox" v-model="enteredName"/>
    </div>
    <div>
      <!-- Friend Email -->
      <label for="emailTextBox">Email</label>
      <input type="email" id="emailTextBox" v-model="enteredEmail"/>
    </div>
    <div>
      <!-- Friend Number -->
      <label for="phoneTextBox">PhoneNumber</label>
      <input type="tel" id="phoneTextBox" v-model="enteredPhone"/>
    </div>
    <!-- submit button -->
    <div class="field has-text-right">
      <button type="submit" class="button is-danger">Add New Friend</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "NewFriend",
  emits:["add-contact"],
  data: function(){
      return {
      "enteredName": '',
      "enteredEmail": '',
      "enteredPhone": ''
      }
  },
  methods:{
      addNewFriend(){
          const newFriendInput = {
              name: this.enteredName,
              email: this.enteredEmail,
              phoneNumber: this.enteredPhone
          };
          console.debug(`${this.enteredName} :: ${this.enteredEmail} :: ${this.enteredPhone}`)
          this.$emit('add-contact', newFriendInput);
      }
  }
};
</script>