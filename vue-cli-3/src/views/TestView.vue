<template>
    <div>
        <button @click="fn">show</button>
    </div>
    <Comp>
        <template #default>
            <div>
                <p>123</p>
            </div>
        </template>
        <template #slot1>
            <div>
                <p>456</p>
            </div>
        </template>
        <template #slot2="{msg}">
            <div>
                <p>slot2:{{ msg }}</p>
            </div>
        </template>
    </Comp>
</template>

<script setup lang="ts">
import showMes from '@/utils/showMsg'
import Comp from '@/components/Comp.js'

const fn = () => {
    showMes('title', (close:Function) => {
        close()
    }, 'name')
}


</script>