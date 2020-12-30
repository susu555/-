import Vue from "vue"

let obj = {

}

for(let i in obj){
  Vue.filter(i,obj[i])
}