<template>
  <nav id="nav">
    <router-link to="/" id="logo_url">
      <img src="../../public/img/logo.png" alt="Logo do site" id="logo">
    </router-link>
    <ul>
      <li>
        <router-link to="/">Home</router-link> 
      </li>
      <li>
        <router-link to="/pedidos">Pedidos</router-link> 
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
#nav {
  background-color: rgb(183, 42, 42);
  padding: 15px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid #000;
}

#logo_url img {
  width: 70px;
}

#nav ul {
  list-style: none;
  display: flex;
}

#nav ul li {
 margin-left: 1em;
}

#nav ul li a {
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 10px;
  transition: .5s;
}

#nav ul li a:hover {
  text-decoration: none;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  background-color: #000;
  border: 1px solid #000
}
</style>