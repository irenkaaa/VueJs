<template>
  <div class="navigation">
    <ul>
      <li v-for="nav in navigationItems" :key="nav" class="navLink">
        <router-link tag="a" :to="`/${nav}`">
          {{ nav }}
        </router-link>
      </li>
    </ul>

    <ul class="logReg">
      <li>
        <router-link tag="a" :to="`/user/login`" class="navLink">
          LogIn/Register
        </router-link>
        <!-- <a href="#" @click="$emit('on-create-subject')">SUBJECT [+]</a> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigationItems: ["Home", "Articles", "Flowers", "About"],
    };
  },
  methods: {
    // onMenuClick(id) {
    //   this.$emit("nav-click", id);
    // },
  },
};
</script>

<style>
.navigation {
  display: flex;
  margin: 2em auto;
  border-bottom: 1px solid rgb(88, 71, 71);
  margin-bottom: 1em;
  padding-bottom: 0.5em;
}


/* 
img.lead-picture {

  width: 10rem;
  height: 10rem;
}

header .title {
  align-self: center;
  font-size: 3em;
} */


ul {
  display: flex;
  align-items: center;
}


ul>li,
.navLink,
button {
  display: block;
  list-style: none outside;
  padding: 0 0.5em;
}

/* .notlogged,
.inside {
  display: flex;
}

.notlogged li,
.inside li {
  list-style: none outside;
  padding: 0 0.5em;
} */

span {
  padding-right: 0.5em;
}

/* 
.btn.btn-dark {
  padding: 0.3em 0.5em;
  background-color: teal;
}

.btn.btn-dark:hover {
  background-color: tomato;
} */


.navLink > a:hover,
.logReg a:hover {
  background: rgb(26, 26, 29);
  color: rgb(46, 240, 8);
}



a {
  display: block;
  padding: 0.5em 1em;
  border-radius: 0.3em;
  background: rgb(223, 223, 219);
}
/* 
a.title {
  background: rgb(233, 215, 215);
  padding: 0 0.4em;
  color: rgb(129, 7, 68);
} */


.logReg{
    margin-left: auto;
    margin-right: 2em;
}

.logReg a {
    padding: 0.5em;
}

</style>
