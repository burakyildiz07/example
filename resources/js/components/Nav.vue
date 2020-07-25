<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-navbar py-0">

        <div class="text-white">
            DUYURUBU
        </div>

        <ul class="m-0">
            <li class="navbar-icon">
                <i class="fa fa-home"></i>
            </li>
            <li class="navbar-icon">
                <i class="fa fa-home"></i>
            </li>
            <li class="navbar-icon">
                <i class="fa fa-home"></i>
            </li>
        </ul>


        <ul class="nav navbar-nav ml-auto d-flex flex-row justify-content-center align-items-center">
            <div class="text-white font-weight-bold mr-4">
                Yönetim Sayfasına Hoşgeldiniz
            </div>
            <div class="d-flex">
                <div class="profile">
                    <img src="img/user.jpeg" class="" alt="">
                </div>
                <div class="dropdown profile-name">
                    <div class="d-flex" data-toggle="dropdown" style="cursor: pointer;">
                        <div class="text-white font-weight-bold">
                            Macit Ahıskalı
                        </div>
                        <div class="text-white pl-5">
                            <i style="font-size: 25px;" class="fa fa-caret-down"></i>
                        </div>
                    </div>
                    <div class="dropdown-menu p-0">
                        <a class="dropdown-item" href="#">
                            <i class="fa fa-user"></i>
                            KULLANICI AYARLARI
                        </a>
                        <a class="dropdown-item" href="#">
                            <i class="fa fa-cog"></i>
                            DÜZEN AYARLARI
                        </a>
                        <a class="dropdown-item" href="#">
                            <i class="fa fa-times-circle"></i>
                            ÇIKIŞ YAP
                        </a>
                    </div>
                </div>
                <div class="text-white sign-out">
                    <i class="fa fa-sign-out" aria-hidden="true"></i>
                </div>
            </div>
        </ul>

    </nav>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style scoped>
    .bg-navbar{
        background-color: #0a1727;
    }
    .navbar-icon{
        font-size: 25px;
        color: white;
        display:inline;
        padding: 5px;
    }
    .profile img {
        width: 50px;
        height: 50px;
    }
    .profile-name{
        padding-left: 37px;
        padding-right: 37px;
        line-height: 50px;
        text-align: center;
    }
    .profile-name:hover{
        background-color:#577a99;
    }
    .dropdown-menu{
        border-top: none;
        border: 2px solid #577a99;
    }
    .dropdown-item{
        padding-left: 37px;
        padding-right: 37px;
    }
    .dropdown-item:hover{
        color: white;
        background-color: #577a99;
    }
    .sign-out{
        font-size: 25px;
        line-height: 50px;
        text-align: center;
    }

</style>
