<template>
<div>
    <v-list></v-list>
    <v-add></v-add>
</div>
</template>
<script>
 import {mapGetters,mapActions} from 'vuex';
 import vList from './list/list';
 import vAdd from './add/add';
export default {
props: [],
components: {
    vList,vAdd
},
data() {
return {};
},
computed: {
...mapGetters({}),
},
methods: {
...mapActions({}),
},
mounted() {},
};
</script>
<style scoped>
</style>