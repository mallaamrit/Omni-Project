<template>
    <div>
        <div  class="px-8 pt-6 pb-8 mb-4">
            <h1 class="font-semibold text-md">Contact Form</h1>
            <p class="font-normal text-sm text-gray-150">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, ea nemo eum maxime voluptatem molestias perferendis
                nostrum qui in provident. Voluptate ea maxime et fuga magni mollitia reiciendis numquam corrupti? Dolore,
                esse beatae vel nemo eligendi saepe aliquid officiis provident cum corrupti ratione optio mollitia accusamus ipsam
                repudiandae rerum quidem.</p>
        </div>
        
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
            <div class="mb-6">
                <label class="block text-gray-700 text-md font-semibold mb-2" for="name">
                    Name
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username" type="text" placeholder="">
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-md font-semibold mb-2" for="email">
                    Email
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" type="text">
        
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-md font-semibold mb-2" for="type">
                    Type
                </label>
                <select
                    class="shadow appearance-none border text-md font-semibold rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="type">
                    <option>MSS</option>
                    <option>IT</option>
                    <option>HR</option>
                    <option>Finance</option>
        
                </select>
        
            </div>
        
            <div class="mb-6">
                <label class="block text-gray-700 text-md font-semibold mb-2" for="description">
                    Description
                </label>
                <textarea name="description"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        
                        </textarea>
        
            </div>
            <div class="flex justify-start text-md font-semibold ">
                <button
                    class="bg-white hover:bg-blue-700 text-blue-400 py-2 px-4 rounded focus:outline-none focus:shadow-outline border border-blue-400"
                    type="button">
                    Cancel
                </button>
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white text-md font-semibold  ml-5 py-2 px-5 rounded focus:outline-none focus:shadow-outline"
                    type="button">
                    Submit
                </button>
        
            </div>
        </form>
    </div>
   
</template>

<script>
    export default {
        
        
    }
</script>

<style lang="scss" scoped>

</style>