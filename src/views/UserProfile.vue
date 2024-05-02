<script setup>
import {useAuth0} from "@auth0/auth0-vue";
import log from "loglevel";

const { user, logout, isAuthenticated } = useAuth0()

function logoutApp() {
  log.info("logout")
  logout({ logoutParams: { returnTo: import.meta.env.VITE_AUTH_LOG_OUT } })
}

</script>

<template>
  <section class="section">
    <div class="container">
      <div class="p-1">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <span
              v-show="isAuthenticated"
            >
              {{ user.nickname }}
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">email</label>
          <div class="control">
            <span
              v-show="isAuthenticated"
            >
              {{ user.email }}
              {{ user.email_verified }}
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">email verified</label>
          <div class="control">
            <span
              v-show="isAuthenticated"
            >
              {{ user.email_verified }}
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">status</label>
          <div class="control">
            <span
              v-show="isAuthenticated"
            >
              free membership
            </span>
          </div>
        </div>
        <button
          v-show="isAuthenticated"
          class="button is-primary is-light"
          @click="logoutApp"
        >
          Log out
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
</style>
