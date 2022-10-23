<template>
    <div class="flex border font-Roboto ">
        <AsideNavBar/>
        
        <div class="grid grid-cols-5 gap-5 mx-5 my-3 py-3 border"> 
            <div class="rounded shadow-lg" v-for="Card in Cards" :key="Card.title">
                <img :src="Card.img" alt="image">
                <div class="px-6 py-1">
                    <div class="font-semibold text-lg">{{Card.title}}</div>
                        <p class="text-[#9EB2CC] text-sm">{{Card.desc}}</p>
                    </div>
                        <div class="px-6 py-11">
                            <span class=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#16A1EB] mr-2 mb-2"><a href="">{{Card.list}}</a></span>
                            <div class="flex gap-3 py-3">
                                <svg width="18" height="18"  fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 8.027v5.333m4-5.333v5.333M1 4.47h16m-1 0-.867 10.79c-.035.449-.26.87-.63 1.177-.37.307-.858.478-1.365.478H4.862c-.506 0-.993-.17-1.363-.477a1.708 1.708 0 0 1-.632-1.174L2 4.476l14-.005Zm-4 0V1.805a.804.804 0 0 0-.077-.34.89.89 0 0 0-.217-.289 1.017 1.017 0 0 0-.324-.192 1.11 1.11 0 0 0-.383-.068H7c-.265 0-.519.094-.706.26A.842.842 0 0 0 6 1.805V4.47h6Z" 
                            stroke="#9EB3CC" stroke-linecap="round" stroke-linejoin="round"/></svg>

                            <svg width="13" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.12 1.41a1.687 1.687 0 1 1 2.386 2.386L3.952 11.35l-3.18.795.795-3.18L9.12 1.41Z" 
                                stroke="#9EB3CC" stroke-linecap="round" stroke-linejoin="round"/></svg>

                            <svg width="18" height="18"  fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.778 4.916h12.444m-12.444 0c-.472 0-.924-.21-1.257-.586A2.134 2.134 0 0 1 1 2.916c0-.53.187-1.04.52-1.414A1.684 1.684 0 0 1 2.779.916h12.444c.472 0 .924.21 1.257.586.334.375.521.884.521 1.414 0 .53-.187 1.04-.52 1.414a1.684 1.684 0 0 1-1.258.586m-12.444 0v10c0 .53.187 1.04.52 1.414.334.375.786.586 1.258.586h8.888c.472 0 .924-.21 1.257-.586.334-.375.521-.884.521-1.414v-10m-8 4h3.556" 
                                stroke="#9EB2CC" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </div>
                            
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
                { img: "../assets/images/res1.png", title: "Inflation Report", desc: " The first Item", list: "view all" },
                { img: "../assets/images/res1.png", title: "Media Landscape", desc: " The second Item", list: "view all" },
                { img: "../assets/images/res1.png", title: "Pov Documents", desc: " The third Item", list: "view all" },
            ]
          
        };
    },
    components: { AsideNavBar }
}
</script>

