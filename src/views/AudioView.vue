<script setup>
import Transcriber from '../components/Transcriber.vue'
import Uploader from '../components/Uploader.vue'
import ChatWindowAudio from '../components/ChatWindowAudio.vue'
import { useAudioChatStore } from '../stores/audioChat'
const audioChatStore = useAudioChatStore()
</script>

<template>
  <article class="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
    <div class="mt-1">
      <h2>Select Audio or Video with speech you want to question.</h2>
      <section class="my-4">
        <uploader fileType="audio/*" />
      </section>

      <transcriber />
    </div>
    <div class="min-h-80 flex flex-col justify-between">
      <chat-window-audio page="audio" />

      <div class="flex justify-end">
        <button @click="audioChatStore.clearChat()" class="button button-secondary">Clear</button>
      </div>
    </div>
  </article>
</template>
