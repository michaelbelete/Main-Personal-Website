<template>
    <section class="banner_area ">
        <div class="banner_inner overlay d-flex align-items-center">
            <div class="container">
                <div class="banner_content text-left">
                    <div class="page_link">
                        <nuxt-link to="/">Home</nuxt-link>
                        <nuxt-link :to="link">{{ title }}</nuxt-link>
                    </div>
                    <h2>{{ title }}</h2>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        link: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }
}
</script>