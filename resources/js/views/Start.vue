<template>
        <div class="row">

            <div class="col-lg-3 col-sm-6">
                <div class="card">
                    <div class="card-header d-flex">
                        <div>
                            <i class="fa fa-user"></i>
                            Kullanıcılar
                        </div>
                        <div class="ml-auto card-header-process-icon">
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                            <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <border-place-holder-input v-model="searchText"
                                                       :label="'ARA'"
                                                       :icon="'fa fa-search'"
                                                       :options="searchInputOptions"/>
                        </div>


                        <div v-for="user in users" class="form-group">
                            <border-place-holder-input v-model="user.name" :label="user.title"
                                                       :options="userInputOptions"
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-sm-6">
                <div class="card">
                    <div class="card-header d-flex">
                        <div>
                            <i class="fa fa-user"></i>
                            BİLGİLERİ
                        </div>
                        <div class="ml-auto card-header-process-icon">
                            <i class="fa fa-edit" aria-hidden="true"></i>
                            <i class="fa fa-check-square-o" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="form-group d-flex">
                            <border-place-holder-input style="margin-right: 10px;" v-model="selectedUser.name" :label="'ERKEK KULLANICI RESMİ'"
                                                       :isRequired="true"
                                                       :options="{inputType:'file',inputFileImage:'man.png'}" />

                            <border-place-holder-input v-model="selectedUser.name" :label="'KADIN KULLANICI RESMİ'"
                                                       :isRequired="true"
                                                       :options="{inputType:'file',inputFileImage:'man.png'}" />
                        </div>
                        <div class="form-group">
                            <border-place-holder-input v-model="selectedUser.name" :label="'AD SOYAD'"
                                                       :isRequired="true"
                                                       :icon="'fa fa-user'" />
                        </div>
                        <div class="form-group">
                            <border-place-holder-input v-model="selectedUser.department" :label="'BİRİM'"
                                                       :isRequired="true"
                                                       :icon="'fa fa-user'" />
                        </div>
                        <div class="form-group">
                            <border-place-holder-input v-model="selectedUser.title" :label="'ÜNVAN'"
                                                       :isRequired="true"
                                                       :icon="'fa fa-user'" />
                        </div>
                        <div class="form-group">
                            <border-place-holder-input v-model="selectedUser.phone" :label="'SABİT NUMARA'"
                                                       :isRequired="true"
                                                       :icon="'fa fa-phone'" />
                        </div>
                        <div class="form-group">
                            <border-place-holder-input v-model="selectedUser.mobilePhone" :label="'CEP TELEFONU'"
                                                       :isRequired="true"
                                                       :icon="'fa fa-mobile'" />
                        </div>
                        <div class="form-group">
                            <border-place-holder-input v-model="selectedUser.email" :label="'E-POSTA'"
                                                       :isRequired="true"
                                                       :icon="'fa fa-envelope-o'" />
                        </div>
                        <div class="form-group">
                            <border-place-holder-input v-model="selectedUser.email" :label="'ŞİFRE'"
                                                       :icon="'fa fa-key'" :options="{inputType:'password'}" />
                        </div>
                        <div class="form-group">
                            <border-place-holder-input v-model="selectedUser.email" :label="'GİRİŞ DOĞRULAMA YÖNTEMİ'"
                                                       :isRequired="true"
                                                       :icon="'fa fa-user'" />
                        </div>
                        <div class="form-group">
                            <border-place-holder-input v-model="selectedUser.email" :label="'İÇERİK ONAY YETKİSİ'"
                                                       :icon="'fa fa-user'" />
                        </div>
                        <div class="form-group">
                            <border-place-holder-input v-model="selectedUser.email" :label="'ERİŞİM IP ADRESİ'"
                                                       :icon="'fa fa-user'" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3  col-sm-6">
                <div class="card">
                    <div class="card-header d-flex">
                        <div>
                            <i class="fa fa-user"></i>
                            YETKİLER
                        </div>
                        <div class="ml-auto">
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                            <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="card-body">
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="card">
                    <div class="card-header d-flex">
                        <div>
                            <i class="fa fa-user"></i>
                            YÖNETTİĞİ EKRANLAR
                        </div>
                        <div class="ml-auto">
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                            <i class="fa fa-plus-square-o" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div class="card-body">

                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: "Start",
        data: function () {
            return {
                searchText:'',
                users:[
                    {
                        title:'MÜDÜR',
                        name:'SÜLEYMAN ALTINKAYA',
                    },
                    {
                        title:'MEMUR',
                        name:'TARIK SARI',
                    },
                    {
                        title:'FOTOĞRAFÇI',
                        name:'MACİT AHISKALI',
                    }
                ],
                selectedUser:{
                    name:'',
                    department:'',
                    title:'',
                    phone:'',
                    mobilePhone:'',
                    email:'',
                    password:'',
                    loginVertificationMethod:'',
                    contentAuthorization:'',
                    ipAddress:'',
                },
                userInputOptions:{
                    disableInput:true
                },
                searchInputOptions:{
                    borderColor:'#abeedb',
                    iconCursorEnabled:true
                }
            }
        }
    }
</script>

<style scoped>

    .card-header{
        background-color: #d6f7f1;
        border:1px solid #66e0bd;
        border-bottom: none;
        color:#1a6a54;
        font-size: 19px;
        padding: 0.50rem 1.25rem;
    }
    .card-body{
        border:1px solid #66e0bd;
    }
    .card-header-process-icon i{
        cursor: pointer;
        margin-left: 7px;
    }


</style>
