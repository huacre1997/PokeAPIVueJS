<template>
<div>
  <Header></Header>
  <Populate></Populate>
    <Footer></Footer>

</div>

</template>

<script>
const Header = () => import('@/components/home/header.vue')
const Footer = () => import('@/components/home/footer.vue')
const Populate = () => import('@/components/home/populate.vue')

export default {
  name: "Home",
  components: {
   Header,Footer,Populate
  },
  data() {
    return {
    
    };
  },
};
</script>
