<template>
    <div class="">
        <div class="p-10 w-[400px] shadow-md">
            <div class="flex px-4 py-2 border-b border-gray- justify-between">
                <div class="text-base font-medium ">
                    Onbaording
                </div>
                <div class="">
                    <button @click="checkALert(item.title)">view all</button>
                </div>
        
            </div>
            <div>
                <div>
                    <div class="flex justify-between py-2">
                        <div class="py-2 font-bold">Welcome to Onboarding</div>
                        <div class="py-2">
                            <span class="rounded-full bg-green-400 text-sm text-white font-bold px-4 py-1 capitalize">status</span>
                        </div>
                    </div>
                    <div class="py-2 text-gray-150">This is description. This is description. This is description.</div>
                    
                </div>
        
            </div>
        
        </div>
    </div>
</template>


<script>

export default {
    props:{
        item:{
            type: Object,
            default() {
                return {}
            }
        }
    },
    setup() {


        function checkALert(item)  {
            alert(item)
        }

        return {checkALert}
    }
}
</script>