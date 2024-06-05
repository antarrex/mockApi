<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from '../api'
import { useRoute } from 'vue-router'
import JsonEditor from 'vue3-ts-jsoneditor'
import router from '../router'

const route = useRoute()
const endpoint = ref(null)
onMounted(async () => {
  const { data } = await axios.get(`/endpoints/${route.params.id}`)
  data.mockJson = JSON.parse(data.mockJson)
  endpoint.value = data
})

async function submit() {
  await axios.patch(`/endpoints/${route.params.id}`, {
    url: endpoint.value.url,
    method: endpoint.value.method,
    statusCode: endpoint.value.statusCode,
    mockJson: endpoint.value.mockJson
  })

  router.push('/')
}
</script>

<template>
  <div v-if="endpoint" class="fixed-grid has-3-cols">
    <div class="grid">
      <div class="cell is-col-span-2">
        <div class="box" style="height: 600px">
          <json-editor v-model="endpoint.mockJson" mode="text" height="550" />
        </div>
      </div>
      <div class="cell">
        <div class="box">
          <div class="field">
            <label class="label">Url</label>
            <div class="control">
              <input v-model="endpoint.url" class="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <div class="field">
            <label class="label">Method</label>
            <div class="select">
              <select v-model="endpoint.method">
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PATCH">PATCH</option>
                <option value="DELETE">DELETE</option>
              </select>
            </div>
          </div>
          <div class="field">
            <label class="label">Status</label>
            <div class="select">
              <select v-model="endpoint.statusCode">
                <option :value="200">200</option>
                <option :value="403">403</option>
                <option :value="404">404</option>
                <option :value="500">500</option>
              </select>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary" @click="submit">Сохранить</button>
            </div>
            <div class="control">
              <router-link class="button is-link is-light" to="/">Отмена</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
