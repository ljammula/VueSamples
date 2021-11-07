<template>
  <section>
    <section>
      <header>
        <h1>User Information</h1>
      </header>
      <user-data @update-user="updateUserInformation"></user-data>
      <active-user
        :user-name="user.userName"
        :user-age="user.userAge"
      ></active-user>
    </section>

    <section>
      <header>
        <h1>My Friends</h1>
      </header>
      <new-friend @add-contact="addFriendContact"></new-friend>
      <ul>
        <!-- Props (1st example)
          <friend-contact name="Laxmi" email-address="ljammula@localhost.com" phone-number="123-456-7890" :is-favourite=true></friend-contact>
          <friend-contact name="Varsha" email-address="varsha@localhost.com" phone-number="123-456-7891" :is-favourite=false></friend-contact> 
      -->
        <!-- Props with dynamic values -->
        <friend-contact
          v-for="friend in friends"
          :key="friend.id"
          :id="friend.id"
          :name="friend.name"
          :email-address="friend.emailAddress"
          :phone-number="friend.phoneNumber"
          :isFavourite="friend.isFavourite"
          @toggle-favourite="toggleFavouriteStatus"
          @delete-friend="deleteFriendContact"
        ></friend-contact>
      </ul>
    </section>
  </section>
</template>

<script>
import UserData from "./components/UserData.vue";
import ActiveUser from "./components/ActiveUser.vue";
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";

export default {
  name: "App",
  data: function () {
    return {
      user: {
        userName: "Laxmi",
        userAge: "32",
      },
      friends: [
        {
          id: "1",
          name: "Varsha",
          emailAddress: "varsha@localhost.com",
          phoneNumber: "123-456-7891",
          isFavourite: false,
        },
      ],
    };
  },
  components: {
    FriendContact,
    NewFriend,
    ActiveUser,
    UserData,
  },
  methods: {
    toggleFavouriteStatus(friendId) {
      //get friend object using id
      const selectedfriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      console.log(
        `changing isFavourite in App.Vue -> toggleFavouriteStatus(${friendId}) from (${
          selectedfriend.isFavourite
        }) to (${!selectedfriend.isFavourite})`
      );
      selectedfriend.isFavourite = !selectedfriend.isFavourite;
    },
    addFriendContact(newFriendInput) {
      const newFriend = {
        id: new Date().toISOString(),
        name: newFriendInput.name,
        emailAddress: newFriendInput.email,
        phoneNumber: newFriendInput.phoneNumber,
        isFavourite: false,
      };
      this.friends.push(newFriend);
    },
    deleteFriendContact(friendId) {
      this.friends.pop((friend) => friend.id === friendId);
    },
    updateUserInformation(userDataInput) {
      console.debug(`App.Vue :: updateUserInformation(userDataInput):: ${userDataInput.userName} :: ${userDataInput.userAge}`);
      this.user.userName = userDataInput.userName;
      this.user.userAge = userDataInput.userAge;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
