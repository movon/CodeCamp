<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>{{ rocketMsg }}</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <div is="sui-container">
      <sui-menu :widths="3">
        <sui-menu-item>Editorials</sui-menu-item>
        <sui-menu-item>Reviews</sui-menu-item>
        <sui-menu-item active>Upcoming Events</sui-menu-item>
      </sui-menu>
      <sui-grid celled>
        <sui-grid-row>
          <sui-grid-column :width="3">
            <sui-segment>
              <h5>Information</h5>
            </sui-segment>
          </sui-grid-column>
          <sui-grid-column :width="13">
            <sui-form>
              <sui-form-field>
                <label>First Name</label>
                <input placeholder="First Name" />
              </sui-form-field>
              <sui-form-field>
                <label>Last Name</label>
                <input placeholder="Last Name" />
              </sui-form-field>
              <sui-form-field>
                <sui-checkbox label="I agree to the Terms and Conditions" />
              </sui-form-field>
              <sui-button type="submit">Submit</sui-button>
            </sui-form>
          </sui-grid-column>
        </sui-grid-row>
        <sui-grid-row>
          <sui-grid-column :width="3">
            <sui-segment>
              <h5>Image</h5>
            </sui-segment>
          </sui-grid-column>
          <sui-grid-column :width="10">
            <sui-image src="https://picsum.photos/200/300" size="small" />
          </sui-grid-column>
          <sui-grid-column :width="3">
            <div>
              <sui-button primary compact>Accept</sui-button>
              <sui-button secondary compact>Decline</sui-button>
            </div>
          </sui-grid-column>
        </sui-grid-row>
      </sui-grid>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      rocketMsg: ''
    }
  },
  mounted () {
    axios.get('http://localhost:8000/hello')
      .then(result => {
        this.rocketMsg = result.data.message
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
