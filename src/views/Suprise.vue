<template>
    <div v-if="showAnimation" class="fixed inset-0 flex justify-center items-center bg-black z-50">
        <video ref="video" autoplay loop class="w-full h-full object-cover">
            <source src="/src/assets/videos/whirlwind.mp4" type="video/mp4">
        </video>
    </div>
    <div v-else>
        <h2 class="text-3xl">Surprise</h2>
        <p>Surprise, surprise...</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showAnimation: true
        };
    },
    mounted() {
        this.playVideoForTwoSeconds();
    },
    methods: {
        playVideoForTwoSeconds() {
            const video = this.$refs.video;
            if (video) {
                video.play();
                setTimeout(() => {
                    video.pause();
                    this.showAnimation = false;
                }, 2000); // 2000 milliseconds = 2 seconds
            }
        }
    }
};
</script>

