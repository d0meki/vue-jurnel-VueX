<template>
    <div class="entry-container mb-3 pointer p-2"
        @click="$router.push({name : 'entry', params:{id:10}})"
    >
        <div class="entry-tittle d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Noviembre</span>
            <span class="mx-2 fw-light">2022, Martes</span>
        </div>
        <div class="entry-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint fugit sapiente nemo facilis, a id maiores illum beatae rerum tempora ducimus aperiam iure odio ab molestiae voluptas nobis? Quaerat, in.
        </div>   


    </div>
</template>


<style lang="scss" scoped>
 .entry-container{
     border-bottom: 1px solid #2c3e50;
     transition: 0.2s all ease-in;

     &:hover{
        background-color: lighten($color: grey, $amount: 45); 
        transition: 0.2s all ease-in;
     }
     .entry-description{
         font-size: 12px;
     }
 }

</style>