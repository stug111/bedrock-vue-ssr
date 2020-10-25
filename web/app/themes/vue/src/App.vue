<template>
  <div id="app">
    <Header />
    <main class="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Footer from './components/Footer';

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
    html,
    body,
    #app {
      height: 100%;
    }

    body {
        margin: 0;
        font-size: 16px;
        line-height: 1.2;

    }

    #app{
      display: flex;
      flex-direction: column;
    }

    .main {
      flex-grow: 1;
    }
</style>
