<template>
  <div class="one-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'oneRadiogroup',
    props:{
        value:null
    },
    provide(){
        return{
            Radiogroup:this
        }
    }
}
</script>

<style>

</style>