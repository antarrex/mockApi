<script setup lang="ts">
import { ref, type Ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import axios from '../api'

type Endpoint = {
  _id: string
  url: string
  method: string
  statusCode: number
}
const endpoints: Ref<Endpoint[]> = ref([])
async function getEndpoints() {
  const { data } = await axios.get('/endpoints')
  endpoints.value = data
}
async function deleteEndpoint(id: string) {
  await axios.delete(`/endpoints/${id}`)
  getEndpoints()
}

onMounted(() => {
  getEndpoints()
})
</script>

<template>
  <table class="table is-narrow" style="width: 100%">
    <thead>
      <tr>
        <th>URL</th>
        <th>Method</th>
        <th>StatusCode</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="endpoint in endpoints" :key="endpoint.id">
        <td>{{ endpoint.url }}</td>
        <td>{{ endpoint.method }}</td>
        <td>{{ endpoint.statusCode }}</td>
        <td>
          <div class="buttons is-justify-content-flex-end">
            <router-link class="button is-link is-small is-outlined" :to="`/edit/${endpoint._id}`">
              Редактировать
            </router-link>
            <button
              class="button is-danger is-small is-outlined"
              @click="deleteEndpoint(endpoint._id)"
            >
              Удалить
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
