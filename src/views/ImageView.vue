<!-- <script setup>
import ChatWindowImage from '../components/ChatWindowImage.vue'
import { useImageChatStore } from '../stores/imageChat'
const imageChatStore = useImageChatStore()
</script>

<template>
  <article class="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
    <div class="mt-1">
      <h2>🖼️ Add an image URL that you would like to ask questions about.</h2>
      <section class="my-4">
    <textarea v-model="imageChatStore.imageURL" class="w-full h-15 resize-none max-w-xs" style="border-width: 1px; border-radius: 5px; "></textarea>
    </section>

      <img class="w-60 mt-10" :src="imageChatStore.imageURL" /> 
    </div>
    <div class="min-h-60 flex flex-col justify-between">
      <chat-window-image />
      <div class="flex justify-end">
        <button @click="imageChatStore.clearChat()" class="button button-secondary">Clear</button>
      </div>
    </div>
  </article>
</template> -->

<script setup>
import ChatWindowImage from '../components/ChatWindowImage.vue'
import { useImageChatStore } from '../stores/imageChat'
import { ref } from 'vue'

const imageChatStore = useImageChatStore()
const imageFile = ref(null)

// Handle image file selection
const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      imageChatStore.imageURL = reader.result
    }
    reader.readAsDataURL(file)
  }
}
</script>

<template>
  <article class="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
    <div class="mt-1">
      <h2>🖼️ Upload an Image that you would like to ask questions about.</h2>
      
      <section class="my-4 flex items-center">
        <textarea v-model="imageChatStore.imageURL" class="w-full h-15 resize-none max-w-xs mr-4" style="border-width: 1px; border-radius: 5px;"></textarea>
        <button class="button button-primary" @click="$refs.fileInput.click()" style="height: 50px;">Choose Image</button>
        <input type="file" ref="fileInput" @change="handleImageUpload" style="display: none;" />
      </section>

      <img class="w-60 mt-10" :src="imageChatStore.imageURL" v-if="imageChatStore.imageURL" /> 
    </div>
    <div class="min-h-60 flex flex-col justify-between">
      <chat-window-image />
      <div class="flex justify-end">
        <button @click="imageChatStore.clearChat()" class="button button-secondary">Clear</button>
      </div>
    </div>
  </article>
</template>
