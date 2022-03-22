<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx-1 fs-3">Noviembre</span>
            <span class="mx-2 fs-4 fw-light">2022, Martes</span>
        </div>

        <div class="btn btn-danger mx-2">
            <button>Borrar <i class="fa fa-trash-alt"></i></button>
        </div>
        <div class="btn btn-primary mx-2">
            <button>Subir foto <i class="fa fa-upload"></i></button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Que suscedio hoy?"></textarea>
    </div>
    <Fab
        icono="fa-save"
    />

    <img src="https://www.geekmi.news/__export/1620533291846/sites/debate/img/2021/05/08/3_1.jpg_172596871.jpg" alt="entry-picture" class="img-thumbnail">

</template>

<script>

import { defineAsyncComponent } from "vue";
export default {
    components:{
        Fab: defineAsyncComponent(()=> import('../components/FabComponent.vue')),   
    }
}
</script>

<style lang="scss" scoped>
    textarea {
        font-size: 20px;
        border: none;
        height: 100%;
        &:focus{
            outline: none;
        }
    }
    img{
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 2.0);
    }
</style>
