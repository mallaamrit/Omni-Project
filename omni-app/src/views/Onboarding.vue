
<template>
    <div class="flex rounded overflow-hidden shadow-lg m-5">
        
            <AsideNavBar />
            <div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Button
            </button>
            </div>
           
     </div>   
 
</template>



<script>
import AsideNavBar from '../components/AsideNavBar.vue'
export default {

    data() {
        return {
            
        }
    },
    components: { AsideNavBar },
}

</script>


