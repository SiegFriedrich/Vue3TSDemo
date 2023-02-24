<template>
    <div class="record">
        <div>{{ label }}</div>
        <div v-html="value" class="font-weight-bold"></div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});
</script>

<style lang="scss" scoped>
/**
    In CSS, a combinator is a character used to describe the relationship between two or more selectors. 
    There are four types of combinators in CSS:
    Descendant combinator (space): Selects all elements that are descendants of a specified parent element.
    Child combinator (>): Selects all elements that are direct children of a specified parent element.
    Adjacent sibling combinator (+): Selects the first element that is immediately after another specific element.
    General sibling combinator (~): Selects all sibling elements that come after a specified element.
*/
.record+.record {
    margin-left: 32px;
}

.record {
    display: flex;

    /**
        div:nth-child(1) is a CSS selector that targets the first child element that is a <div> element of its parent. 
        The :nth-child() pseudo-class allows you to select elements based on their position within their parent container.
        In the case of div:nth-child(1), it selects the first child element that is a <div> element of its parent. 
        If the parent contains multiple <div> elements, this selector will only target the first <div> element.
    */

    div:nth-child(1) {
        word-break: keep-all;
    }
}
</style>