"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3148],{1560:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var t=n(5893),o=n(1151);const s={sidebar_position:2},a="Basic Setup",l={id:"setup/software-setup/basic",title:"Basic Setup",description:"Every time you start with a fresh SD card image you will be offered different options.",source:"@site/docs/setup/software-setup/2_basic.md",sourceDirName:"setup/software-setup",slug:"/setup/software-setup/basic",permalink:"/raspiblitz/docs/setup/software-setup/basic",draft:!1,unlisted:!1,editUrl:"https://github.com/fusion44/raspiblitz/tree/main/docs/docs/setup/software-setup/2_basic.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"blitzSidebar",previous:{title:"Download / Flash",permalink:"/raspiblitz/docs/setup/software-setup/download"},next:{title:"Final Steps",permalink:"/raspiblitz/docs/setup/software-setup/finalize"}},r={},h=[{value:"LNDRESCUE",id:"lndrescue",level:4},{value:"SEED+SCB Words Seed &amp; channel.backup file (OK)",id:"seedscb-words-seed--channelbackup-file-ok",level:4},{value:"ONLY SEED Only Seed Word List (Fallback)",id:"only-seed-only-seed-word-list-fallback",level:4}];function c(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h4:"h4",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,t.jsxs)(i.p,{children:["Every time you start with a fresh SD card image you will be offered different options.\nFor example this is also the point where you can import a Migration file from an older RaspiBlitz - read about Migration ",(0,t.jsx)(i.code,{children:"TODO: further down README.md#import-a-migration-file"}),".\nBut because you are setting up a brand new RaspiBlitz you will choose here ",(0,t.jsx)(i.code,{children:"FRESHSETUP"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"SSH0",src:n(6058).Z+"",width:"471",height:"235"})}),"\n",(0,t.jsx)(i.p,{children:"Then you will be asked what to do with the connected hard drive/SSD."}),"\n",(0,t.jsx)(i.p,{children:"If there is already a blockchain on your hard drive/SSD you will be asked if you want to use this pre-synced/validated data or if its OK to delete it.\nIf there is no blockchain data this question will be skipped."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"SSH0",src:n(7669).Z+"",width:"496",height:"271"})}),"\n",(0,t.jsx)(i.p,{children:"Finally you have to agree that all (other) data on the hard drive/SSD will be deleted, except the blockchain if you selected that previously.\nThis might take some seconds."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"SSH0",src:n(3707).Z+"",width:"480",height:"222"})}),"\n",(0,t.jsx)(i.p,{children:"First thing to setup is giving your RaspiBlitz a name:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"SSH1",src:n(8161).Z+"",width:"388",height:"219"})}),"\n",(0,t.jsx)(i.p,{children:"The name you choose for your RaspiBlitz will also be used as your public alias of your lightning node so choose wisely."}),"\n",(0,t.jsxs)(i.p,{children:["Then you can choose which Lightning implementation you want to run on top of your Bitcoin Fullnode.\nRaspiBlitz started with ",(0,t.jsx)(i.code,{children:"LND"})," from Lightning Labs which is used by most other RaspberryPi lightning nodes and works with most additional apps.\nBut you can now also choose ",(0,t.jsx)(i.code,{children:"CL"})," for Core Lightning by Blockstream which is a good choice for more experienced node operators & lightning developers that want to use the highly customizable plugin structure that Core Lightning offers."]}),"\n",(0,t.jsx)(i.p,{children:"It's also possible to use both lightning node implementations in parallel on your RaspiBlitz later on - just pick one to start with for now."}),"\n",(0,t.jsxs)(i.p,{children:["Choose ",(0,t.jsx)(i.code,{children:"NONE"})," if you're only interested in running a Bitcoin full node without Lightning."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"SSH1",src:n(8262).Z+"",width:"473",height:"235"})}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:"In the following we show the setup with LND - which is very similar to the steps with Core Lightning."})}),"\n",(0,t.jsxs)(i.p,{children:["If you chose to use one of the lightning implementations you will now be asked if you want to start a ",(0,t.jsx)(i.code,{children:"NEW"})," wallet/lightning node or if you have an ",(0,t.jsx)(i.code,{children:"OLD"})," lightning wallet/node that you want to re-create."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"SSH1",src:n(3416).Z+"",width:"446",height:"220"})}),"\n",(0,t.jsxs)(i.p,{children:["Normally you just chose ",(0,t.jsx)(i.code,{children:"NEW"})," here, but to recover an old wallet you have the following options if you choose ",(0,t.jsx)(i.code,{children:"OLD"}),":"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"SSH1",src:n(8419).Z+"",width:"442",height:"216"})}),"\n",(0,t.jsx)(i.p,{children:"You have the following options to recover an old node."}),"\n",(0,t.jsx)(i.h4,{id:"lndrescue",children:"LNDRESCUE"}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:"This is the preferred choice"})}),"\n",(0,t.jsx)(i.p,{children:"Choose this option if you have made a complete backup of the LND or Core Lightning data and have a tar.gz file starting with the word 'lnd-rescue' or 'cl-rescue' available.\nIt will recover all your on-chain funds and open channels you had.\nBut you have to make sure that the rescue backup you have is really the latest version - otherwise you might lose channel funds."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.em,{children:"If you have tar.gz file that starts with 'raspiblitz', that's a migration file.\nThat also includes your old LND/Core Lightning wallet, but you import that file at the beginning of the setup process with 'FROMBACKUP - Upload Migration Backup' instead choosing FRESHSETUP"})}),"\n",(0,t.jsx)(i.h4,{id:"seedscb-words-seed--channelbackup-file-ok",children:"SEED+SCB Words Seed & channel.backup file (OK)"}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:"This is the second best option if LNDRESCUE is not available"})}),"\n",(0,t.jsxs)(i.p,{children:['The next best option is if you have the channel.backup file and the word list seed.\nThis allows you to recover all on-chain funds (i.e. "bitcoin balance") in the lightning wallet, and gives you a good chance of recovering the off-chain funds (i.e. "lightning balance") you had in open channels, as long as the remote peer supports ',(0,t.jsx)(i.code,{children:"option_data_loss_protect"})," which is very common since 2020.\nAll channels you had open before will be closed during this procedure.\nSee ",(0,t.jsx)(i.a,{href:"https://bitcoinops.org/en/topics/static-channel-backups/",children:"Bitcoin Optech - Static Channel Backups"})," for more background information on this process."]}),"\n",(0,t.jsx)(i.h4,{id:"only-seed-only-seed-word-list-fallback",children:"ONLY SEED Only Seed Word List (Fallback)"}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsx)(i.p,{children:"This option should only be used if all off the above options fail."})}),"\n",(0,t.jsx)(i.p,{children:"If you only have the seed word list (RaspiBlitz 1.1 and older) you can at least try to recover your on-chain funds.\nRecovery of channel funds is not very likely in this scenario."}),"\n",(0,t.jsxs)(i.p,{children:["But normally you are setting up a new node - so simply choose ",(0,t.jsx)(i.code,{children:"NEW"})," in the menu."]})]})}function d(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},7669:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/ssh0-askchain-5ea42d9be4094190c164f0bf5527f233.png"},3707:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/ssh0-formathdd-39fb2ad55a034a5add5713824fde7408.png"},6058:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/ssh0-welcome2-5a73ec47262db4bf90b8ffb790d4fc69.png"},8262:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/ssh1-layer2-848dcb3c7e47c0ef31c771132c0354a1.png"},8161:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/ssh1-name-00cc9999d5fe23bd455198513fc9d6cf.png"},3416:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/ssh1-oldnew-91db702b0e7a62e57d0e1f43acb43118.png"},8419:(e,i,n)=>{n.d(i,{Z:()=>t});const t=n.p+"assets/images/ssh2-layer2old-014fe499e10eff7e7afeb2736e734c19.png"},1151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>a});var t=n(7294);const o={},s=t.createContext(o);function a(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);