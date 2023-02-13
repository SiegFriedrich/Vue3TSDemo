<template>
    <div class="d-flex">
        <div class="item">
            <div>
                <h2>{{ article.title }}</h2>
            </div>
            <div>
                {{ article.content }}
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { ArticleModel } from '@/models/article.model';
import { PropType, defineComponent } from 'vue'

export default defineComponent({
    props: {
        article: {
            required: true,
            type: Object as PropType<ArticleModel>,
        }
    },
    setup() {


        return {}
    }
})
</script>

<style lang="scss" scoped>
.d-flex {
    display: flex;
    justify-content: center;

    .item {
        margin-right: 30%;
        margin-left: 30%;
        padding: 35px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 25px;
        margin-bottom: 10px;
    }

}
</style>