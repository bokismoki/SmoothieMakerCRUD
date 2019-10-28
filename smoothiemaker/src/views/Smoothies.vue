<template>
  <div class="smoothies">
    <div class="smoothie" v-for="(smoothie, index) in smoothies" :key="smoothie._id">
      <h1 class="smoothie-name">{{smoothie.name}}</h1>
      <i class="fas fa-edit edit" @click="editSmoothie(smoothie._id)"></i>
      <i class="fas fa-trash trash" @click="deleteSmoothie(smoothie._id, index)"></i>
      <div class="ingredients">
        <span v-for="(ing, index) in smoothie.ingredients" :key="index" class="smoothie-ing">{{ing}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Smoothies",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["smoothies"])
  },
  methods: {
    editSmoothie(id) {
      this.$store.dispatch("getSmoothieById", id).then(() => {
        setTimeout(() => {
          this.$router.push({ name: "EditSmoothies", params: { id } });
          this.$store.dispatch("setIsLoading", false);
        }, 500);
      });
    },
    deleteSmoothie(id, index) {
      this.$store.dispatch("deleteSmoothie", { id, index });
    }
  },
  created() {
    this.$store.dispatch("getSmoothies");
  }
};
</script>

<style lang="scss">
.smoothies {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin-top: 3.5em;
  padding: 0 10em;
  .smoothie {
    width: 350px;
    height: 300px;
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
    padding: 2em;
    position: relative;
    margin-bottom: 3.5em;
    overflow-y: auto;
    .edit {
      position: absolute;
      top: 0.8em;
      right: 2.5em;
      opacity: 0.5;
      font-size: 1.5em;
      cursor: pointer;
    }
    .trash {
      position: absolute;
      top: 0.8em;
      right: 0.8em;
      opacity: 0.5;
      font-size: 1.5em;
      cursor: pointer;
    }
    .smoothie-name {
      text-align: center;
      color: #265abb;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .ingredients {
      display: flex;
      flex-wrap: wrap;
    }
    .smoothie-ing {
      color: #333;
      background-color: #ddd;
      border-radius: 50px;
      margin: 0.2em;
      padding: 0.5em;
    }
  }
}
</style>
