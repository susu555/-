import Vue from "vue"

let obj = {
  
}

for(let i in obj){
  Vue.component(i,obj[i])
}