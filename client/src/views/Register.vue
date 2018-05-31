<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <h1>Register</h1>
        <v-text-field label="Email" placerholder="Email"></v-text-field>
        <v-text-field label="Password" placerholder="Password" autocomplete="new-password">
        </v-text-field>
        <v-btn color="blue" dark>
          <v-icon class="mr-2">account_circle</v-icon>
          Register
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {

};
</script>

<style>

</style>
