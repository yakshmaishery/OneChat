
<script lang="ts">
   export let LogMessages:{type:string;message:string;timestamp:Date}[] = []
</script>
<div class="grid grid-row-[1fr_auto]">
   <!-- Conversation -->
   <section class=" p-4 overflow-y-auto space-y-4">
   {#each LogMessages as item}
      {#if item.type=="Sender"}
         <div class="grid grid-cols-[auto_80%] gap-2">
            <!-- <Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" width="w-12" /> -->
            <div></div>
            <div class="card p-4 variant-soft rounded-tr-none space-y-2">
               <header class="flex justify-between items-center">
                  <p class="font-bold"><button class="btn" style="padding: 0;" on:click={()=>{navigator.clipboard.writeText(item.message)}}>📋</button></p>
                  <small class="opacity-50">{item.timestamp.toLocaleDateString()} {item.timestamp.toLocaleTimeString()}</small>
               </header>
               <pre style="overflow: auto;">{item.message}</pre>
            </div>
         </div>
      {/if}
      {#if item.type!="Sender"}
         <div class="grid grid-cols-[80%_auto] gap-2">
            <div class="card p-4 rounded-tl-none space-y-2 ">
               <header class="flex justify-between items-center">
                  <p class="font-bold"><button class="btn" style="padding: 0;" on:click={()=>{navigator.clipboard.writeText(item.message)}}>📋</button></p>
                  <small class="opacity-50">{item.timestamp.toLocaleDateString()} {item.timestamp.toLocaleTimeString()}</small>
               </header>
               <pre style="overflow: auto;">{item.message}</pre>
            </div>
            <!-- <Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" width="w-12" /> -->
            <div></div>
         </div>
      {/if}
   {/each}
   </section>
</div>