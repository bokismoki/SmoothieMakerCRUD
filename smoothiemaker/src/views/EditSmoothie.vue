<template>
  <div class="edit-smoothie">
    <h1 class="title">Edit Smoothie Recipe</h1>
    <form @submit.prevent="editSmoothie" class="edit-smoothie-form">
      <label for="name">Smoothie Name:</label>
      <input type="text" id="name" v-model="newName" />
      <div class="added-ingredients" v-for="(ing, index) in newIngArray" :key="index">
        <div class="wrap">
          <label for="added-ing">Ingredient:</label>
          <i class="fas fa-trash trash" @click="deleteIng(index)"></i>
        </div>
        <input type="text" id="added-ing" v-model="newIngArray[index]" />
      </div>
      <label for="ingredient">Add an ingredient:</label>
      <input type="text" id="ingredient" v-model="newIng" @keydown.tab.prevent="pushIng" />
      <button class="edit-smoothie-btn">Finish Edit</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "EditSmoothie",
  data() {
    return {
      newName: "",
      newIng: "",
      newIngArray: []
    };
  },
  methods: {
    editSmoothie() {
      if (this.newName && this.newIngArray.length > 0) {
        this.$store
          .dispatch("updateSmoothie", {
            smoothie: { name: this.newName, ingredients: this.newIngArray },
            id: this.$route.params.id
          })
          .then(() => {
            setTimeout(() => {
              this.$router.push({ name: "smoothies" });
              this.$store.dispatch('setIsLoading', false);
            }, 500);
          });
      }
    },
    pushIng() {
      this.newIngArray.push(this.newIng);
      this.newIng = "";
    },
    deleteIng(index) {
      this.newIngArray.splice(index, 1);
    }
  },
  computed: {
    ...mapGetters(["editableSmoothie"])
  },
  created() {
    this.newName = this.$store.state.editableSmoothie.name;
    this.newIngArray = this.$store.state.editableSmoothie.ingredients;
  }
};
</script>

<style>
.edit-smoothie {
  justify-items: center;
  margin-top: 5em;
  padding: 0 10em;
  display: flex;
  flex-direction: column;
}
.edit-smoothie .title {
  color: rgb(38, 90, 187);
  font-size: 2.5em;
  text-align: center;
}
.edit-smoothie .edit-smoothie-form {
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 3em auto 0;
}
.edit-smoothie-form label {
  color: #777;
  margin-bottom: 1em;
}
.edit-smoothie-form input {
  border: none;
  border-bottom: 1px solid #444;
  margin-bottom: 3em;
}
.edit-smoothie .added-ingredients {
  display: flex;
  flex-direction: column;
}
.edit-smoothie .wrap {
  display: flex;
  justify-content: space-between;
}
.edit-smoothie .trash {
  opacity: 0.5;
  cursor: pointer;
}
.edit-smoothie .edit-smoothie-btn {
  align-self: center;
  background-color: rgb(238, 44, 83);
  color: #fff;
  text-transform: uppercase;
  border: none;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  padding: 1em 2em;
  cursor: pointer;
  letter-spacing: 1px;
}
</style>
