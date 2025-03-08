
<script lang="ts">
   export let currentMessage=""
   export let IsConnected=false
	import { createEventDispatcher } from 'svelte';
   const dispatch = createEventDispatcher();
</script>
<div class="input-group input-group-divider grid-cols-[1fr_auto] rounded-container-token p-3">
	<textarea
		bind:value={currentMessage}
		class="bg-transparent border-0 ring-0 p-3"
		name="prompt"
		id="prompt"
		placeholder="Write a message..."
		rows="1"
		style="resize: none;"
		disabled={!IsConnected}
	/>
	<button class="variant-filled-primary" on:click={()=>dispatch('SendMessage')} disabled={!IsConnected}>Send</button>
</div>
					