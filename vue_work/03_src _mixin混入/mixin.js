export const mixin={
    methods: {
        showName(){
            alert(this.name);
        }
     },
}
export const mixin2={
   data(){
       return {
           x:200,
           y:100
       }
   },
   mounted() {
       //1个VM3个VC 输出4次
      console.log('挂载了！') 
   },
} 