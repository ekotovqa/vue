import {computed, ref} from "vue";

export default function useSortedPosts(posts) {
    const selectedSort = ref('')
    const sortedPosts = computed(() => {
        return [...posts.value].sort((x1, x2) => x1[selectedSort.value]?.localeCompare(x2[selectedSort.value]))
    })

    return {
        selectedSort,
        sortedPosts
    }
}