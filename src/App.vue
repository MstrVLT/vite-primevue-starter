<script setup>
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'
import InputIcon from 'primevue/inputicon'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import SplitButton from 'primevue/splitbutton'
import { PrinterIcon } from '@heroicons/vue/20/solid'

import { ref } from "vue";

const items = ref([
  {
    label: 'Update',
    icon: 'pi pi-refresh'
  },
  {
    label: 'Delete',
    icon: 'pi pi-times'
  }
])

</script>

<template>
  <div class="card">
    <Toolbar :pt="{ root: { class: 'rounded-none border-0 border-b' } }">
      <template #start>
        <Button icon="pi pi-plus" class="mr-2" severity="secondary" text />
        <Button class="mr-2" severity="secondary" text>
          <template #icon>
            <PrinterIcon class="size-5" />
          </template>
        </Button>
        <Button icon="pi pi-upload" severity="secondary" text />
      </template>

      <template #center>
        <IconField>
          <InputIcon>
            <i class="pi pi-search" />
          </InputIcon>
          <InputText placeholder="Search" />
        </IconField>
      </template>

      <template #end>
        <SplitButton label="Save" :model="items"></SplitButton>
      </template>
    </Toolbar>
  </div>
</template>

<style scoped>
</style>
