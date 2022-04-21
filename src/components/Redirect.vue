<template>
    <h1>Redirect...</h1>
</template>

<script>
export default {
    name: 'RedirectComponent',
    mounted () {
        var searchString =  this.$route.params.searchString;
        this.$router.push('/search/'+searchString);
    }
}
</script>