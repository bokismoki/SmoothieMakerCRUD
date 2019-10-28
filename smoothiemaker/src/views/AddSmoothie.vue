<template>
  <div class="add-smoothie">
    <h1 class="title">Add New Smoothie Recipe</h1>
    <form @submit.prevent="addSmoothie" class="add-smoothie-form">
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
      <button class="add-smoothie-btn">Add Smoothie</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddSmoothie",
  data() {
    return {
      newName: "",
      newIng: "",
      newIngArray: []
    };
  },
  methods: {
    addSmoothie() {
      if (this.newName && this.newIngArray.length > 0) {
        this.$store
          .dispatch("addSmoothie", {
            name: this.newName,
            ingredients: this.newIngArray
          })
          .then(() => {
            setTimeout(() => {
              this.$router.push({ name: "smoothies" });
              this.$store.dispatch("setIsLoading", false);
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
  }
};
</script>

<style lang="scss">
.add-smoothie {
  justify-items: center;
  margin-top: 5em;
  padding: 0 10em;
  display: flex;
  flex-direction: column;
  .title {
    color: rgb(38, 90, 187);
    font-size: 2.5em;
    text-align: center;
  }
  .add-smoothie-form {
    display: flex;
    flex-direction: column;
    width: 600px;
    margin: 3em auto 0;
    label {
      color: #777;
      margin-bottom: 1em;
    }
    input {
      border: none;
      border-bottom: 1px solid #444;
      margin-bottom: 3em;
    }
  }
  .added-ingredients {
    display: flex;
    flex-direction: column;
  }
  .wrap {
    display: flex;
    justify-content: space-between;
  }
  .trash {
    opacity: 0.5;
    cursor: pointer;
  }
  .add-smoothie-btn {
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
}
</style>
