<template>
  <footer>Irenkaaa Vue Project {{ date }}</footer>
</template>

<script>
export default {
  data() {
    return {
      date: null,
    };
  },
  created() {
    console.log(new Date().getFullYear());
    this.date = new Date().getFullYear();
  },
};
</script>

<style>
footer {
  border-top: 1px solid rgb(54, 48, 48);
  margin-top: 0.5em;
  text-align: center;
  padding-top: 1em;
}
</style>