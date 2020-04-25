<template>

      <div class="card text-center">
       
        <input  type="checkbox" >  {{info.obaveza}} {{info.broj}} 
        
        
       
      </div>

</template>

<script>



export default {
  props: [ "info"],
  data () {
    return {
     
    }
  },
 
}
</script>

<style>
 

 
  
</style>