<template>

    <div class="border-right sidebar" id="sidebar-wrapper">
        <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action active-menu">
                <i class="fa fa-user"></i>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa fa-television" aria-hidden="true"></i>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa fa-film" aria-hidden="true"></i>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
                <i class="fa fa-headphones" aria-hidden="true"></i>
            </a>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Sidebar"
    }
</script>

<style scoped>
    #sidebar-wrapper{
        padding-top: 40px;
    }
    .sidebar{
        min-height: 100vh;
        background-color: #1c2f50;
        min-width: 78px;
        max-width: 78px;
    }
    .list-group-item i{
        font-size:25px;
    }
    .list-group-item{
        padding: 20px 24px;
        color: #a7a8aa;
        background: none;
        border-bottom: none;
    }
    .list-group .active-menu{
        color: white;
        border-left: 4px solid #57ddb6;
    }
</style>
