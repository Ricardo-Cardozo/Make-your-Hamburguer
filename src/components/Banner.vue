<template>
  <div id="main-banner">
    <h1>Make your burguer</h1>
    <p>O hamburguer favorito da galera! não perca tempo e faça já o seu pedido!</p>
  </div>
</template>

<script>
export default {
  name: "Banner"
}
</script>

<style scoped>
#main-banner {
  background-image: url('../../public/img/burger.jpg');
  background-position: 0 -280px;
  background-size: cover;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

#main-banner h1 {
  background-color: #000;
  color: #fcba03;
  padding: 20px;
  border-radius: 0 20px 20px 0;
}

#main-banner p {
  background-color: rgba(0, 0, 0, 0.34);
  color: #fff;
  border-radius: 0 20px 20px 0;
  font-weight: bold;
  padding: 50px 20px;
  font-size: 20px;
}
</style>