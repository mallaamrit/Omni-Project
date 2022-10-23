<template>
    <div class="flex border font-Roboto ">
       
       <AsideNavBar/>
       
        <div class="grid grid-cols-5 gap-5 mx-5 my-5 py-3 border"> 
            <div class="rounded shadow-lg border " v-for="Card in Cards" :key="Card.title">
                <img class="w-full" :src="Card.img" alt="image">
                <div class=" border px-1  py-1">
                    <p class="font-semibold text-lg">{{Card.title}}</p>
                        <p class="text-[#9EB2CC] text-sm">{{Card.desc}}</p>
                    </div>
                        <div class="px-6 py-3">
                            <span class=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#16A1EB] mr-2 mb-2"><a href="">{{Card.list}}</a></span>
                        </div> 
                </div>
            </div>
        </div>
        
</template>

<script>
import AsideNavBar from './AsideNavBar.vue';
export default {
    setup() {
        return {
            Cards: [
                {
                    img: "../assets/images/res1.png",
                    title: "SMD & Financial Loading",
                    desc: "This is desc ksjfnskfj fskf",
                    list: "view all"
                },
                {
                    img: "../assets/images/res1.png",
                    title: "Media Finance Handbook",
                    desc: "This is desc ksjfnskfj fskf",
                    list: "view all"
                },
                {
                    img: "../assets/images/res1.png",
                    title: "Tools & Resources",
                    desc: "This is desc ksjfnskfj fskf",
                    list: "view all"
                }
            ]
        };
    },
    components: { AsideNavBar }
}
</script>

<style lang="scss" scoped>

</style>