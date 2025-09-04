<template>
  <div class="bg-gray-100">
    <DarkHeader />
    <SimplestAgentForm>
      <template #alert>
        <div class="bg-blue-50 border border-blue-200 rounded-md p-4 mb-8">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0L20.116 16.47c.672 1.166-.17 2.625-1.516 2.625H1.401c-1.347 0-2.188-1.459-1.516-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-blue-800">
                Simplified Form Version
              </h3>
              <div class="mt-2 text-sm text-blue-700">
                <p>This is a simplified version designed to work in restricted network environments. If you prefer the enhanced version, <nuxt-link to="/agent" class="underline font-medium">click here</nuxt-link>.</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </SimplestAgentForm>
  </div>
</template>
