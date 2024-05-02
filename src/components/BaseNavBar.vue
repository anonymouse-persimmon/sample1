<script setup>
import { ref } from 'vue'
import { useAuth0 } from '@auth0/auth0-vue';
import { useRouter } from 'vue-router'

const { loginWithRedirect, user, isAuthenticated } = useAuth0()
const nav = ref(null)
const isMenuActive = ref(false)
const router = useRouter()

function onClickBurger() {
  isMenuActive.value = !(isMenuActive.value)
}

function signupApp() {
  loginWithRedirect({
    authorizationParams: {
      screen_hint: "signup",
    },
    appState: {
      target: 's'
    }
  })
}

function loginApp() {
  loginWithRedirect({
    appState: {
      target: '#l'

    }
  })
}

function changePage(page) {
  router.push({ name: page})
}
</script>

<template>
  <nav
    ref="nav"
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a
        class="navbar-item"
        @click="changePage('Home')"
      >
        <img
          alt="app icon"
          width="32"
          height="32"
          src="../assets/title.svg"
        />
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasic"
        :class="{ 'is-active': isMenuActive }"
        @click="onClickBurger"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div
      id="navbarBasic"
      class="navbar-menu"
      :class="{ 'is-active': isMenuActive }"
    >
      <slot />
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a
              v-show="!isAuthenticated"
              class="button is-primary is-light"
              @click="signupApp"
            >
              <strong>Sign up</strong>
            </a>
            <a
              v-show="!isAuthenticated"
              class="button is-primary"
              @click="loginApp"
            >
              Log in
            </a>
            <a
              v-show="isAuthenticated"
              class="user-icon"
              href="#"
              @click="changePage('MyProfile')"
            >
              <img
                v-if="isAuthenticated"
                alt="user icon"
                :src="user.picture"
              >
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@media (max-width: 1024px) {
  .navbar-menu  {
    display: block;
    opacity: 0;
    position: relative;
    padding: 0;
    left: 0;
    right: 0;
    max-height: 0px;
    transition: all 0.4s ease-in-out;
    pointer-events: none;
    overflow: hidden;
  }

  .navbar-menu.is-active {
    max-height: 200px;
    padding: .5rem .75rem;
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }
}

</style>