<script lang="ts">
   export let Window = ""
   export let UserID = ""
   export let AnotherID = ""
   export let cameraSide = "user"
   export let IsConnected = false
   export let CameraOpen = false
   import { initializeStores,Drawer, getDrawerStore,AppBar,LightSwitch,RadioGroup,RadioItem } from '@skeletonlabs/skeleton';
   import type { DrawerSettings } from '@skeletonlabs/skeleton';
   import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
   import { faBars,faSearch } from '@fortawesome/free-solid-svg-icons';
   import { createEventDispatcher } from 'svelte';
   import Contacts from './Contacts.svelte';
   const dispatch = createEventDispatcher();
   initializeStores();
   const drawerStore = getDrawerStore();
   const drawerSettings: DrawerSettings = {
      id: 'example-3',
      // Provide your property overrides:
      // bgDrawer: 'bg-purple-900 text-white',
      // bgBackdrop: 'bg-gradient-to-tr from-indigo-500/50 via-purple-500/50 to-pink-500/50',
      width: 'w-[100%] md:w-[100%]',
      padding: 'p-4',
      rounded: 'rounded-xl',
   };
   // drawerStore.open(drawerSettings);
   // drawerStore.open();
   export function closedrawer(){
      drawerStore.close()
   }

   function ClickCameraradio(){
      setTimeout(() => {
         dispatch("CameraScreen")
      }, 200);
   }
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">
      <button type="button" class="btn" on:click={()=>{drawerStore.open(drawerSettings)}}>
         <FontAwesomeIcon icon={faBars} class="" />
      </button>
   </svelte:fragment>
	<h3 class="h3" data-toc-ignore>
      One Chat
   </h3>
	<svelte:fragment slot="trail">
      <LightSwitch/>
   </svelte:fragment>
</AppBar>

<Drawer class="p-3">
   <div class="p-3">
      <h4 class="h4" data-toc-ignore style="display: flex;flex-direction: row;justify-content: space-between;">
         Your ID ({UserID})
         <button class="btn" on:click={()=>{drawerStore.close()}}>✖</button>
      </h4>
   </div>
   <div class="p-3">
      <RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
         <RadioItem bind:group={Window} name="justify" value="ShareScreen" disabled={!IsConnected}>Share Screen</RadioItem>
         <RadioItem bind:group={Window} name="justify" value="Chat" disabled={!IsConnected}>Chat</RadioItem>
         <RadioItem bind:group={Window} name="justify" value="Camera" disabled={!IsConnected}>Camera</RadioItem>
      </RadioGroup>
   </div>
   <div class="p-3">
      <div class="input-group input-group-divider grid-cols-[1fr_auto]">
         <input type="text" placeholder="Another User ID" class="p-2" on:input={()=>{AnotherID = AnotherID.toLowerCase()}} bind:value={AnotherID} disabled={IsConnected} />
         <button class="btn" on:click={()=>dispatch('ConnectwithUserFirst')}><FontAwesomeIcon icon={faSearch} class="" /></button>
      </div>
   </div>
   <div class="p-3">
      <button type="button" class="btn variant-filled" disabled={!IsConnected} on:click={()=>{dispatch("LeaveConnection")}}>Leave</button>
   </div>
   <div class="p-3">
      {#if Window == "ShareScreen"}
         <div>
            <button type="button" class="btn variant-filled" on:click={()=>{dispatch("ShareScreen")}} disabled={CameraOpen}>Share Screen</button>
            <button type="button" class="btn variant-filled" on:click={()=>{dispatch("fullscreenbtn")}}>Full Screen</button>
            <!-- <RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
               <RadioItem bind:group={cameraSide} name="cameraSide" disabled={CameraOpen} value="user">Front Camera</RadioItem>
               <RadioItem bind:group={cameraSide} name="cameraSide" disabled={CameraOpen} value="environment">Back Camera</RadioItem>
            </RadioGroup>
            <button type="button" class="btn variant-filled" on:click={ClickCameraradio} disabled={CameraOpen}>Start Camera</button>
            <button type="button" class="btn variant-filled" on:click={()=>{dispatch("StopCamera")}} disabled={!CameraOpen}>Stop Camera</button> -->
         </div>
         <!-- <button type="button" class="btn variant-filled" on:click={()=>{dispatch("CameraScreen")}} disabled={CameraOpen}>Camera</button> -->
      {/if}
      {#if Window == "Camera"}
         <div class="">
            <RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
               <RadioItem bind:group={cameraSide} name="cameraSide" disabled={CameraOpen} value="user">Front Camera</RadioItem>
               <RadioItem bind:group={cameraSide} name="cameraSide" disabled={CameraOpen} value="environment">Back Camera</RadioItem>
            </RadioGroup>
         </div>
         <div class="py-3">
            <button type="button" class="btn variant-filled" on:click={ClickCameraradio} disabled={CameraOpen}>Start Camera</button>
            <button type="button" class="btn variant-filled" on:click={()=>{dispatch("StopCamera")}} disabled={!CameraOpen}>Stop Camera</button>
         </div>
      {/if}
   </div>
   <div class="p-3">
      <hr class="!border-t-4" />
   </div>
   <div class="p-3">
      <h1 class="h3">
         <blockquote class="blockquote">
            Note:- User can share screen when they are using Desktop, currently mobile devices can view another screen but cannot share it's on. since of device compatibility Issues. 
         </blockquote>
      </h1>
   </div>
   <div class="p-3">
      <hr class="!border-t-4" />
   </div>
   <div class="p-3">
      <Contacts/>
   </div>
</Drawer>