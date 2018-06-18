<template>
<b-container fluid>
<b-row align-v="center">
  <b-col cols="4" class="container mt-5">
        <icon class="image" solid name="eye"></icon>
              <router-link style="color:white" to="/rooms">

  <div class="overlay_eye">
    <div class="text">
      <h2>Temps réel</h2>
      <ul>Signaux haute-fréquence</ul>
      <ul>Indices dérivés</ul>
      <ul>Annotation</ul>
      <ul>Pancarte</ul>
    </div>
  </div>
    </router-link>

  </b-col>
  <b-col cols="4" class="container mt-5">
        <icon class="image" solid name="edit"></icon>
                      <router-link style="color:white" to="/editing">

  <div class="overlay_edit">
    <div class="text">
            <h2>Edition</h2>

    <b-list-group flush>
      <ul>Recherche de signaux</ul>
      <ul>Annotation a posteriori</ul>
      <ul>Exportation de données</ul>
    </b-list-group>
    </div>
  </div>
  </router-link>
  </b-col>
</b-row>  
</b-container>
</template>

<script>
import 'vue-awesome/icons/edit'
import 'vue-awesome/icons/eye'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bold;
  margin-bottom: 0.5em;
}
ul {
  list-style-type: none;
  padding: 0;
  text-align: left;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}

.overlay_edit {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: .5s ease;
  background-color: black;
  -webkit-border-radius: 35px;
  -moz-border-radius: 35px;
  border-radius: 35px;
}
.overlay_eye {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: .3s ease;
  background-color: black;
  -webkit-border-radius: 35px;
  -moz-border-radius: 35px;
  border-radius: 35px;
}

.container:hover .overlay_edit {
  opacity: 0.75;
}

.container:hover .overlay_eye {
  opacity: 0.75;
}

.text {
  border: 1px;
  color: white;
  background: transparent;
  font-size: 1.4em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

</style>
