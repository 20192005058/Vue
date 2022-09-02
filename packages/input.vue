<template>
  <div class="one-input" 
  :style="{width:width}"
  :class="{'one-input_suffix':clearable||showpassword}">
   <input class="one-input_inner"
   :class="[`size-${size}`,
   {
    'is-disabled':disabled
    }]"
   :placeholder="placeholder"
   :type="showpassword ? (passwordVisible ? 'text' : 'password') : type"
   :name="name"
   :value="value"
   :disabled="disabled"
   @input="handleInput"
   >
    <span class="one-input_suffix">
        <i class="icon-guanbi" v-if="value && clearable" @click="clear"></i>
        <i class="icon-yulan" v-if="showpassword && type =='password'" @click="handlePassword"
        :class="{'show-activity':passwordVisible}"
        ></i>
    </span>


  </div>
</template>

<script>
export default {
    name:'oneInput',
    data(){
        return{
            passwordVisible:false
        }
    },
    methods:{
        handleInput(e){
            this.$emit('input',e.target.value)
        },
        clear(){
            this.$emit('input','')
        },
        handlePassword(){
            this.passwordVisible=!this.passwordVisible
        }
    },
    props:{
       disabled:{
        type:Boolean,
        default:false
       },
       type:{
        type:String,
        default:'text'
       },
       placeholder:{
        type:String,
        default:''
       },
       name:{
        type:String,
        default:''
       },
       width:{
        type:String,
        default:'100%'
       },
       size:{
        type:String,
        default:'middle'
       },
       value:{
        type:String,
        default:''
       },
       clearable:{
        type:Boolean,
        default:false
       },
       showpassword:{
        type:Boolean,
        default:false
       }
    }
}
</script>

<style lang="scss" scoped>
    .one-input{
      width: 100%;
      position: relative;
      font-size: 14px;
      display: inline-block;
      .one-input_inner{
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,045,.355,1);
        width: 100%;
        &:focus{
          outline: none;
          border-color: #409eff;
        }
        // input禁用样式
        &.is-disabled{
          background-color: #f5f7fa;
          border-color: #e4e7ed;
          color: #c0c4cc;
          cursor:not-allowed;
        }
        &.size-small{
            height: 20px;
            line-height: 20px;
            font-size:5px;
            padding:0 5px
        }
        &.size-large{
            height: 60px;
            line-height: 60px;
            font-size:20px;
            padding:0 20px
        }
        &.size-middle{
            height: 40px;
            line-height: 40px;
            font-size:14px;
            padding:0 15px
        }
      }
    }
    .one-input_suffix{
    .one-input_inner{
      padding-right: 30px;
    }
    .one-input_suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
      .show-activity{
        color: blue;
      }
    }
  }
  </style>