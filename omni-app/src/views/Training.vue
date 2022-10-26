<template>
        <div class="flex justify-between rounded overflow-hidden shadow-lg m-5">
            <div class="grid grid-cols-4 gap-8 font-Roboto">
                    <AsideNavBar />
                <div v-for="item in items" :key="item.title">
                    <img class="w-full" :src="item.img" alt="Sunset in the mountains">

                    <div class=" p-4">
                        <h1 class="text-gray-900 text-lg font-semibold not-italic">{{ item.title }}</h1>
                      
                        <h2 class="font-normal leading-5 not-italic text-skynetsecondaryblue">{{ item.desc }}</h2>
                    
                    </div>

                    <div class="p-4">
                        <span class="text-md text-skynetblue font-normal leading-4 float-right">{{ item.list }}</span>
                    </div>
                </div>
        
            </div>
        </div>
</template>


<script>
import AsideNavBar from '../components/AsideNavBar.vue'
    export default {
  components: { AsideNavBar },

    data() {
        return {
            items: [
                {
                    img: '../assets/images/tran1.png',
                    title: "Training",
                    list: 'View all',
                    desc: ' This is dec',
                    updatedDate: '21.02.2022'
                },
                {
                    img: '../assets/images/tran2.png',
                    title: "Training",
                    list: 'View all',
                    desc: ' This is dec',
                    updatedDate: '21.02.2022'
                },
                {
                    img: '../assets/images/tran3.png',
                    title: "Training",
                    list: 'View all',
                    desc: ' This is dec',
                    updatedDate: '21.02.2022'
                },
            ]

        }

    }
}
        
</script>


<!-- <template>
    <div class="flex border font-Roboto ">
       <AsideNavBar/>
       
        <div class="grid grid-cols-5 gap-5 mx-5 my-5 py-3 border"> 
            <div class="rounded shadow-lg border " v-for="Card in Cards" :key="Card.title">
                <img class="w-full" :src="Card.img" alt="image">
                <div class=" border px-1  py-1">
                    <p class="font-semibold text-lg">{{Card.title}}</p>
                        <p class="text-gray-150 text-sm">{{Card.desc}}</p>
                    </div>
                        <div class="px-6 py-3">
                            <span class=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#16A1EB] mr-2 mb-2"><a href="">{{Card.list}}</a></span>
                        </div> 
                </div>
            </div>
        </div>
        
</template>

<script>
import AsideNavBar from '../components/AsideNavBar.vue';
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

<style lang="scss" scoped> -->

<!-- </style> -->

