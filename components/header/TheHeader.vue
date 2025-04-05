<script setup lang="ts">
const navArray: Array<string> = ['search', 'cart', 'user']
</script>

<template>
    <header class="header">
        <nav class="header__content">
            <img src="@/assets/img/icon.svg" alt="Bobby">
            <ul class="header__nav-list">
                <li v-for="(navItem, index) in navArray" :key="index">
                    <button>
                        <span><img :src="`/icons/${navItem}-icon.svg`"></span>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped></style>