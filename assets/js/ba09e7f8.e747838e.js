"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[119],{3990:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=o(4848),i=o(8453);const s={sidebar_position:2},a="Workshop Tutorial",r={id:"community/workshops",title:"Workshop Tutorial",description:"One goal of the RaspiBlitz project is to provide an open DIY platform for workshops - to setup your own full node and learn to manage it. This tutorial is collecting best practices on how to organize a RaspiBlitz workshop.",source:"@site/docs/community/workshops.md",sourceDirName:"community",slug:"/community/workshops",permalink:"/docs/community/workshops",draft:!1,unlisted:!1,editUrl:"https://github.com/fusion44/raspiblitz/tree/main/docs/docs/community/workshops.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"blitzSidebar",previous:{title:"Support",permalink:"/docs/community/support"},next:{title:"FAQ's",permalink:"/docs/category/faqs"}},h={},l=[{value:"Time Planning",id:"time-planning",level:2},{value:"Checklist for Running a Workshop",id:"checklist-for-running-a-workshop",level:2},{value:"Buy all the Hardware",id:"buy-all-the-hardware",level:2},{value:"Prepare Blockchain Data",id:"prepare-blockchain-data",level:2},{value:"Prepare SD Cards with Latest RaspiBlitz Image",id:"prepare-sd-cards-with-latest-raspiblitz-image",level:2},{value:"Setup Workshop Environment",id:"setup-workshop-environment",level:2},{value:"Welcome and Intro",id:"welcome-and-intro",level:2},{value:"Assembling",id:"assembling",level:2},{value:"Basic Setup",id:"basic-setup",level:2},{value:"Waiting Time",id:"waiting-time",level:2},{value:"Finalizing Setup",id:"finalizing-setup",level:2},{value:"Funding, Channels, API",id:"funding-channels-api",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"workshop-tutorial",children:"Workshop Tutorial"}),"\n",(0,n.jsx)(t.p,{children:"One goal of the RaspiBlitz project is to provide an open DIY platform for workshops - to setup your own full node and learn to manage it. This tutorial is collecting best practices on how to organize a RaspiBlitz workshop."}),"\n",(0,n.jsx)(t.h2,{id:"time-planning",children:"Time Planning"}),"\n",(0,n.jsx)(t.p,{children:"First thing on planning a RaspiBlitz workshop is to calculate the time needed correctly. For example, the setup from scratch with no further support is still a weekend project - mostly because downloading and syncing the blockchain takes a lot of time."}),"\n",(0,n.jsx)(t.p,{children:"So the time required for the workshop all depends on the preparation you as a workshop organizer are interested to provide ahead of the workshop. If you already provide an up-2-date copy of the blockchain for each participant thats the biggest time saver."}),"\n",(0,n.jsx)(t.p,{children:'Note that the time estimates below are about getting a node to a "clean setup". They do not include the funding & setting up channels process - which is adding an additional hours to the calculation und could become quite costly in a high transaction fee environment on mainnet.'}),"\n",(0,n.jsx)(t.p,{children:"Also, if your group is lager then 5 participants, calculate some extra time for individual support. You can compensate for that if you let two participants work together on one RaspiBlitz setup; this way you limit individual support and let them help each other."}),"\n",(0,n.jsx)(t.h2,{id:"checklist-for-running-a-workshop",children:"Checklist for Running a Workshop"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"SetupRaspiBlitzWorkshop",src:o(8301).A+"",width:"960",height:"540"})}),"\n",(0,n.jsx)(t.p,{children:"Make sure you have the following hardware and infrastructure ready for the workshop:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Lots of 'multiple power outlets/extensions' (minimum outlets: number of RaspiBlitzes x 2 plus 6)"}),"\n",(0,n.jsx)(t.li,{children:"Network-Switch with enough ports (min. 1 per RaspiBlitz)"}),"\n",(0,n.jsx)(t.li,{children:"Enough LAN network cables (short ones to connect the RaspiBlitzes)"}),"\n",(0,n.jsx)(t.li,{children:"Good internet connection at location with LAN port (or a WLAN to LAN adapter)"}),"\n",(0,n.jsx)(t.li,{children:"Extra WLAN Router (if you are not sure if LAN & WLAN is not on the same network at location)"}),"\n",(0,n.jsx)(t.li,{children:"One or two USB SD card adapters"}),"\n",(0,n.jsx)(t.li,{children:"One or two USB-C to USB-A adapters"}),"\n",(0,n.jsx)(t.li,{children:"Some Tape, Markers & Pens always come in handy (also for participants to write down seeds & passwords)"}),"\n",(0,n.jsx)(t.li,{children:"Potentially some bitcoin funds or hardware wallets (just if you want to make demos)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The location should provide a big TV or projector for you to guide the workshops with slides and examples."}),"\n",(0,n.jsx)(t.p,{children:"Participants need to bring at least their laptops."}),"\n",(0,n.jsx)(t.h1,{id:"workshop-scenario-provide-a-raspiblitz-hardware-kit",children:"Workshop Scenario: Provide a RaspiBlitz Hardware-Kit"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Estimated Duration: 3 Hours"})}),"\n",(0,n.jsx)(t.p,{children:"In this workshop scenario you buy all the hardware but let participants assemble the RaspiBlitz themselves - that's half the fun and people get a feel for the gear. But to keep the blockchain sync time short and be able to keep in a 3 hour time frame you need to prepare the HDDs (or NVMes) with blockchain data not much older than one or two days. Start ordering the parts at least one week before the workshop (budget is needed) and reserve the day before the workshop completely for creating copies of the blockchain ."}),"\n",(0,n.jsx)(t.p,{children:"Next we go thru all the major preparation steps:"}),"\n",(0,n.jsx)(t.h2,{id:"buy-all-the-hardware",children:"Buy all the Hardware"}),"\n",(0,n.jsx)(t.p,{children:"See the shopping list in the RaspiBlitz documentation. You need to buy all of those, and every participant also needs a short (about 1m) network cable."}),"\n",(0,n.jsx)(t.p,{children:"From experience start ordering two weeks before the workshop - even if you have Amazon Prime. There is always a shipment coming late, and it's a lot of packages."}),"\n",(0,n.jsxs)(t.p,{children:["If you like to support the RaspiBlitz project you can order a complete RaspiBlitz workshop set from ",(0,n.jsx)(t.a,{href:"https://raspiblitz.com",children:"raspiblitz.com"})]}),"\n",(0,n.jsx)(t.h2,{id:"prepare-blockchain-data",children:"Prepare Blockchain Data"}),"\n",(0,n.jsx)(t.p,{children:"This is the most time consuming part of the preparation. Try it once to get a feel for how much time you need to prepare one copy of a blockchain."}),"\n",(0,n.jsxs)(t.p,{children:["The most effective way to create multiple copies of the blockchain for the participants is to get a NVMe cloning device like this one: ",(0,n.jsx)(t.a,{href:"https://www.amazon.com/-/dp/B09LHLBWD4",children:"https://www.amazon.com/-/dp/B09LHLBWD4"})]}),"\n",(0,n.jsx)(t.p,{children:"Then you setup one RaspiBlitz (just install Bitcoin - no lightning need) and have iut fully synced the day before the day of the workshop. Then you SSH into the device and choose: SSHMAINMENU > REPAIR > RESET-HDD (Delete HDD data but keep Blockchain data). After your RaspiBlitz shutsdown you have a clean NVMe with the blockchain data that you can use as template (source) with your NVMe cloing device."}),"\n",(0,n.jsx)(t.p,{children:"If you need to update your template blockchain - setup a new RaspiBlitz with it like above, let it sync up and then RESET-HDD again."}),"\n",(0,n.jsx)(t.h2,{id:"prepare-sd-cards-with-latest-raspiblitz-image",children:"Prepare SD Cards with Latest RaspiBlitz Image"}),"\n",(0,n.jsxs)(t.p,{children:["Download the latest RaspiBlitz SD card image from the README page. ",(0,n.jsx)(t.code,{children:"Balena Etcher"})," is the best image writing software for this use case because if you have multiple sd card adapters, you can write multiple cards at once,cutting down your preparation time."]}),"\n",(0,n.jsx)(t.h2,{id:"setup-workshop-environment",children:"Setup Workshop Environment"}),"\n",(0,n.jsx)(t.p,{children:"The room setup is also something to keep in mind. The easiest way is to choose one corner of the room where you place your WIFI router and setup a switch there so that participants can connect their RaspiBlitz with LAN & power once assembled. Then they write down their assigned IP they read on the LCD and continue from their laptop. The laptop can be used at any place in the room and connects thru the WIFI to the RaspiBlitz."}),"\n",(0,n.jsx)(t.h1,{id:"running-of-the-workshop",children:"Running of the Workshop"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"The basic structure of the workshop is set by the RaspiBlitz setup process. Simply follow that. The following parts should share some experiences and suggestions on how you can optimize the time and mentoring during this process. Feel free to share your experience here."})}),"\n",(0,n.jsx)(t.h2,{id:"welcome-and-intro",children:"Welcome and Intro"}),"\n",(0,n.jsx)(t.p,{children:"In the beginning, it's great to give a small introduction to the Lightning Network and show the RaspiBlitz documentation & GitHub page to let everybody know where to find the basic info. But try to keep it around 10 min, in order to not waste time."}),"\n",(0,n.jsx)(t.h2,{id:"assembling",children:"Assembling"}),"\n",(0,n.jsx)(t.p,{children:"Its time to to put the single hardware parts together. Try to go step by step thru the process and best to show example pictures as slides."}),"\n",(0,n.jsx)(t.h2,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,n.jsx)(t.p,{children:"Connect everybody's laptop to the same local network the RaspiBlitzes are connected to. Be prepared to explain how to open a terminal - Windows users especially need some help here (see README on this)."}),"\n",(0,n.jsx)(t.p,{children:"Then everybody starts with the RaspiBlitz setup. Its best to do the setup together - showing the single steps on the projector for the participants to follow. Use the WebUI for setup (Bitcoin + LND), but if time also demo the SSH login later and mention that it provides more options if needed. Hand out paper and pens for people to write down their passwords and wallet seeds."}),"\n",(0,n.jsx)(t.h2,{id:"waiting-time",children:"Waiting Time"}),"\n",(0,n.jsx)(t.p,{children:"After the lightning wallet setup comes the longest waiting time during the workshop - around 30 min. It's the time when the node is syncing up the blockchain and LND is scanning. If you see someone's blockchain progress under 95%, something is wrong - possibly the HDD was not correctly prepared or the blockchain data it might be too old to finish during workshop."}),"\n",(0,n.jsx)(t.p,{children:"Use this time for a more in-depth educational segment on Bitcoin & Lightning in general. This time can also be used to demo with one RaspiBlitz that is already on clean-setup (you prepared before the workshop) how the funding, setting up channels and the other features of the RaspiBlitz work. That way people see what are the next steps once their node is ready and even if your workshop time is over by then they can know the next steps to do at home."}),"\n",(0,n.jsxs)(t.p,{children:["Also this time is good for troubleshooting in individual sessions. If someone is not able to finish the sync on location in time shutdown the RaspiBlitz from SSH terminal with CTRL+C and then ",(0,n.jsx)(t.code,{children:"shutdown now"}),". If the device gets connected to the internet again at home it should pickup the sync/scan process (let people know about the wallet unlock)."]}),"\n",(0,n.jsx)(t.h2,{id:"finalizing-setup",children:"Finalizing Setup"}),"\n",(0,n.jsxs)(t.p,{children:["Once the RaspiBlitz is ready (LCD shows status screen) and people can open the main menu, let them go and install a demo app. ",(0,n.jsx)(t.code,{children:"Mempool"})," is nice to explore the users personal blockain copy or ",(0,n.jsx)(t.code,{children:"RTL"})," to see more lightning options."]}),"\n",(0,n.jsx)(t.h2,{id:"funding-channels-api",children:"Funding, Channels, API"}),"\n",(0,n.jsxs)(t.p,{children:["If you have much more time and the funds to experiment you can use ",(0,n.jsx)(t.code,{children:"RTL"})," to go thru the next steps of connecting to peers, funding and opening channels. While you wait on funding or channel opening confirmations, its a good moment to try to connect users mobile wallets with the device. But just so that on the local network for demo - dynamicDNS is something people then can try at home with port forwarding on their routers."]}),"\n",(0,n.jsx)(t.p,{children:"Its also nice to add casual social open-end segment to the end of the workshop. So people can already go into personal conversations, music and beverages while some last nodes sync up, confirmations come in and people sending their first satoshis on some lightning chess or from node to node."}),"\n",(0,n.jsx)(t.p,{children:"Here are some videos that show what else is possible with the RaspiBlitz:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://youtu.be/tocJFPU8sAc",children:"Lightning Network LND API - Buying Stickers using Commandline"})," 24min"]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8301:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/SetupRaspiBlitzWorkshop-b55fcfe29362ef89d113982407819c49.png"},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>r});var n=o(6540);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);