const app2 = Vue.createApp({
   data() {
    return {
      manyFoods: [
        {name: 'Picture 1', url: 'home/Pic1 (1).png'},
        {name: 'Picture 2', url: 'home/Pic2 (1).png'},
        {name: 'Picture 3', url: 'home/Pic3 (1).png'}
      ]
    }
   }
  })
  app2.mount('#app2')
