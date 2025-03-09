<script lang="ts">
	import NavBar from "$lib/Components/NavBar.svelte";
	import ChatWindow from "$lib/Components/ChatWindow.svelte";
	import ChatMessage from "$lib/Components/ChatMessage.svelte";
	import '$lib/Styles/MainPage.css'
	import {Peer} from 'peerjs'
   import {nanoid} from 'nanoid'
   import Swal from 'sweetalert2';
	import { initializeStores, Toast,getToastStore, type ToastSettings  } from '@skeletonlabs/skeleton';
	initializeStores();
	let Window: string = "Chat";
	let IsConnected:boolean = false
	let UserID = ""
	let AnotherID = ""
	let UserMessage = ""
	let conn:any
	let LogMessages:{type:string;message:string;timestamp:Date}[] = []
	let NavchildRef: NavBar;
	let videodata:HTMLVideoElement
   let VulnerableMessages = ["jhzxkdvbuyizxv","CHATLEAVECODE","SharedScreenzjhgdvzjvguyzgv","StopScreenzjhgdvzjvguyzgv"]
   let CameraOpen = false
   let CameraStream:any = null
   let cameraSide:string = "user"
	const toastStore = getToastStore();
	const shortdummyID = nanoid(4).toLowerCase() // Generate Random User ID
   var peer = new Peer(shortdummyID,{config: {iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]}}) // Create Peer

   peer.on("open",(id) => { // Connect Peer if Success set the ID
      UserID = id
   })

	peer.on('error', (err) => { // IF Peer connection fails
      Swal.fire({icon:"error",title:"PEER CONNECTION:- "+err.type,confirmButtonColor: "green"})
   });

	// Connect with another person
   function ConnectwithUserFirst(){
      debugger
      conn = peer.connect(AnotherID)
      conn.on("open",function(){
         conn.send("jhzxkdvbuyizxv")
         IsConnected = true
         Swal.fire({icon:"success",title:"Connected successfully",confirmButtonColor: "green"})
      })
      conn.on('error', (err:any) => {
         Swal.fire({icon:"error",title:err.type,confirmButtonColor: "green"})
      });
   }

	// Get other Data
   peer.on('connection', function(inconn) {
      inconn.on('data', function(data:any){
			if(data == "jhzxkdvbuyizxv"){
				console.warn(inconn.peer)
            AnotherID = inconn.peer
            conn = peer.connect(AnotherID)
            conn.on("open",function(){
               IsConnected = true
               Swal.fire({icon:"success",title:`Connection has been established with ${AnotherID}`,confirmButtonColor: "green"})
            })
			}
			else if(data == "CHATLEAVECODE"){
            // If leave
            conn.close()
            location.reload()
         }
			else if(data == "SharedScreenzjhgdvzjvguyzgv"){
				Window = "ShareScreen"
				NavchildRef.closedrawer();
			}
			else if(data == "StopScreenzjhgdvzjvguyzgv"){
				NavchildRef.closedrawer();
            videodata.srcObject=null
            try{
               document.exitFullscreen()
            }
            catch{}
			}
			else{
				LogMessages.push({type:"Receiver",message:data,timestamp:new Date()})
				LogMessages = LogMessages
				if(Window != "Chat"){
					const t: ToastSettings = {
						message: 'You got a message',
					};
					toastStore.trigger(t);
				}
				scrolldownmessages()
			}
		})
	})

   // Send Messages
	const SendMessage = () => {
      if(!VulnerableMessages.includes(UserMessage) && UserMessage!=""){
         conn.send(UserMessage)  
         LogMessages.push({type:"Sender",message:UserMessage,timestamp:new Date()})
         UserMessage = ""
         LogMessages = LogMessages
         scrolldownmessages()
      }
      else if(UserMessage==""){
         const t: ToastSettings = {
				message: 'Please enter message!',
			};
			toastStore.trigger(t);
      }
      else{
         const t: ToastSettings = {
				message: 'User Data contains vulnerable Information',
			};
			toastStore.trigger(t);
      }
   }

   // Leave Connection
	const LeaveConnection = () => {
      conn.send("CHATLEAVECODE")
      conn.close()
      location.reload()
   }

   // Auto Scroll down
	const scrolldownmessages = () => {
      setTimeout(() => {
         const div = document.getElementById("chatwindow");
         if(div){
            div.scrollTo({
               top: div.scrollHeight+2000,
               behavior: "smooth"
            });
         }
      }, 500);
   }

	// Start Share Screen
   async function ShareScreen() {
      let screenStream = await navigator.mediaDevices.getDisplayMedia({
      audio: true,
      video:{
             width:{ideal:4096},
             height:{ideal:2160}
      }
      }).catch((e) => {
             if(e.name == "NotAllowedError"){
                    Swal.fire({icon:"warning",title:"Recording was cancelled",confirmButtonColor: "green"})
             }
             else{
                    Swal.fire({icon:"error",title:"Something went wrong!",confirmButtonColor: "green"})
             }
      })
      if(screenStream){
         // @ts-ignore
         peer.call(AnotherID,screenStream)
         conn.send("SharedScreenzjhgdvzjvguyzgv")
         const mediarecorder = new MediaRecorder(screenStream)
         mediarecorder.start()
         mediarecorder.addEventListener("stop",()=>{
            // LeaveConnection()
            conn.send("StopScreenzjhgdvzjvguyzgv")
         })
         // Swal.fire({icon:"success",title:"Screen is shared",confirmButtonColor: "green"})
         const t: ToastSettings = {
				message: 'Screen is Shared!',
			};
			toastStore.trigger(t);
      }
   }
	// Start Share Screen
   async function CameraScreen() {
      const constraints = { video: { facingMode: cameraSide } }; // Use "environment" for back camera
      CameraStream = await navigator.mediaDevices.getUserMedia(constraints).catch((e) => {
             if(e.name == "NotAllowedError"){
                    Swal.fire({icon:"warning",title:"Recording was cancelled",confirmButtonColor: "green"})
             }
             else{
                    Swal.fire({icon:"error",title:"Something went wrong!",confirmButtonColor: "green"})
             }
      })
      if(CameraStream){
         CameraOpen = true
         // @ts-ignore
         peer.call(AnotherID,CameraStream)
         conn.send("SharedScreenzjhgdvzjvguyzgv")
         const mediarecorder = new MediaRecorder(CameraStream)
         mediarecorder.start()
         mediarecorder.addEventListener("stop",()=>{
            // LeaveConnection()
            conn.send("StopScreenzjhgdvzjvguyzgv")
         })
         // Swal.fire({icon:"success",title:"Camera is opened",confirmButtonColor: "green"})
         const t: ToastSettings = {
				message: 'Camera is Opened 📷',
			};
			toastStore.trigger(t);
      }
   }

   function StopCamera(){
      CameraOpen = false
      if (CameraStream) {
         CameraStream.getTracks().forEach((track:any) => track.stop()); // Stop all tracks
      }
   }

	// Fetch the Stream of video
   peer.on('call', function(call) {
      call.answer()
      call.on("stream",function(remoteStream:any) {
         // if(videodata){
         //    videodata.srcObject = remoteStream
         //    videodata.play()
         // }
			const video = document.createElement('video');
         video.autoplay = true;
         video.playsInline = true;
			video.srcObject = remoteStream;
			videodata.srcObject = remoteStream
         videodata.play()
			const canvas:any = document.getElementById('videoCanvas');
			if(canvas){
				const ctx = canvas.getContext('2d');
				function resizeCanvas() {
					 canvas.width = canvas.clientWidth;
					 canvas.height = canvas.clientHeight;
				}
				function drawFrame() {
					 resizeCanvas();
					 ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
					 requestAnimationFrame(drawFrame);
				}
				video.onloadedmetadata = () => {
					 drawFrame();
				};
			}
      })
   })

   // Full screen video
	function fullscreenbtn() {
		if(videodata){
			videodata.requestFullscreen()
			NavchildRef.closedrawer();
		}
	}
</script>
<div id="EntireScreen">
	<div class="box">
		<NavBar bind:this={NavchildRef} bind:Window={Window} bind:IsConnected={IsConnected} bind:UserID={UserID} bind:AnotherID={AnotherID}
		on:ConnectwithUserFirst={ConnectwithUserFirst} on:LeaveConnection={LeaveConnection} on:ShareScreen={ShareScreen} 
      on:fullscreenbtn={fullscreenbtn} on:CameraScreen={CameraScreen} bind:CameraOpen={CameraOpen} on:StopCamera={StopCamera} bind:cameraSide={cameraSide}/>
	</div>
	<div class="box" id="chatwindow">
		<div style={`content-visibility:${Window!="Chat"?"hidden":"auto"}`}>
			<ChatWindow bind:LogMessages={LogMessages}/>
		</div>
		<div style={`content-visibility:${(Window!="ShareScreen" && Window!="Camera")?"hidden":"auto"};height: 100%;display: flex;justify-content: center;`}>
			<!-- <canvas id="videoCanvas"></canvas> -->
          <!-- svelte-ignore a11y-media-has-caption -->
         <video bind:this={videodata} controls id="videotag"/>
		</div>
	</div>
	<div class="box" style={`content-visibility:${Window!="Chat"?"hidden":"auto"}`}>
		<ChatMessage bind:currentMessage={UserMessage} bind:IsConnected={IsConnected} on:SendMessage={SendMessage}/>
	</div>
</div>
<Toast />