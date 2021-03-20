<template>
  <div>
    <div class="side_menu">
      <div class="logo">
        <NuxtLink to="index.html">
          <img src="~/assets/img/logo.png" height="140" class="nav-logo"/>
        </NuxtLink>
      </div>
      <ul class="list menu-left">
        <li>
          <NuxtLink to="/">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/experiance">Experience</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/portfolio">Portfolio</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/skills">Skills</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="canvus_menu">
      <div class="container">
        <div class="toggle_icon" title="Menu Bar">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.nav-logo {
  margin-left: 35px;
}
</style>