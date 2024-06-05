<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import router from '../router'
import JsonEditor from 'vue3-ts-jsoneditor'
import axios from '../api'

const mockJson = ref('')
const url = ref('')
const method = ref('GET')
const statusCode = ref(200)

async function submit() {
  await axios.post('/endpoints', {
    url: url.value,
    method: method.value,
    statusCode: statusCode.value,
    mockJson: mockJson.value
  })

  router.push('/')
}
</script>

<template>
  <div class="fixed-grid has-3-cols">
    <div class="grid">
      <div class="cell is-col-span-2">
        <div class="box" style="height: 600px">
          <json-editor v-model="mockJson" mode="text" height="550" />
        </div>
      </div>
      <div class="cell">
        <div class="box">
          <div class="field">
            <label class="label">Url</label>
            <div class="control">
              <input v-model="url" class="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <div class="field">
            <label class="label">Method</label>
            <div class="select">
              <select v-model="method">
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
              <select v-model="statusCode">
                <option :value="200">200</option>
                <option :value="403">403</option>
                <option :value="404">404</option>
                <option :value="500">500</option>
              </select>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary" @click="submit">Добавить</button>
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
