<template>
  <router-link class="nav-link" active-class="active" to="/">
    Home
  </router-link>
  <router-link class="nav-link" active-class="active" to="/about">
    about
  </router-link>
  <router-link class="nav-link" active-class="detail" to="/detail">
    details
  </router-link>
  <router-view />
</template>
<style>
.nav-link{
  padding: 5px 10px;
  text-decoration: none;
  border: 1px solid #fa6558;
  color: #fa6558;
  margin-right: 5px;
}
.active{
  background-color: #fa6558;
  color: #fff;
}
</style>