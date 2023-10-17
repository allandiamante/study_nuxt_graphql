<template lang="">
    <section>
       <h1 class="text-5xl font-bold mt-20"> Hello, I'm Allan Diamante</h1>
       <p class="text-base text-gray-900 p-2 italic">Web & Blockchain Developer Advocate at Dartroom</p> 
    </section>
    <section class="flex flex-col md:flex-row">
        <div class="md:w-3/4">
            <h2 class="text-3xl font-bold mt-8"> My Story</h2>
            <p class="text-lg py-2"> I am a recent graduate in computer science, currently living in Maringá, Paraná. I work in the blockchain programming field.</p>
            <p class="text-lg py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam esse rerum eius aspernatur dolorum voluptates, nemo vero laboriosam. Esse veniam in magni ab modi corporis velit error officia sapiente obcaecati!</p>
        </div>
        <div>
            <img src="~/assets/images/eu-avatar.png" class=" md:max-w-sm p-8 mx-auto">
        </div>
    </section>
    <section>
        <h2 class="text-3xl font-bold mt-8"> Latest Blog Posts </h2>
        <div class="grid md:grid-cols-3 pt-8 gap-10">
            <Post :posts="posts" />
        </div>
    </section>
</template>
<script setup>
const {data: posts} = await useAsyncData('latest-posts', () => 
    queryContent('/blog')
    .sort({data: 1})
    .limit(3)
    .find()
)
</script>
<style lang="">
    
</style>