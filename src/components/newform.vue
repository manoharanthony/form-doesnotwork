<template>
    <div class="card">
        <div class="card-header"><h3>Form</h3></div>
        <div class="card-body">
            <form name="details" class="form text-left" @submit.prevent="onSubmit" action="">
                <button v-on:click="form">Fill the form</button>

            </form>
        </div>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style lang="scss">

</style> 