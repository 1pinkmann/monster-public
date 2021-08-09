export default function useVideo() {

    function handleVideoPlay(e) {
        console.log(e.currentTarget);
        e.currentTarget.classList.add('play');
    }

    function handleVideoPause(e) {
        console.log(e.currentTarget);
        e.currentTarget.classList.remove('play');
    }

    return {
        handleVideoPlay,
        handleVideoPause
    }
}
