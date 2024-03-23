"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[822],{5998:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=n(4848),r=n(8453);const o={},a="Development",s={id:"faq/dev",title:"Development",description:"What is the process of creating a new SD card image release?",source:"@site/docs/faq/dev.md",sourceDirName:"faq",slug:"/faq/dev",permalink:"/docs/faq/dev",draft:!1,unlisted:!1,editUrl:"https://github.com/fusion44/raspiblitz/tree/main/docs/docs/faq/dev.md",tags:[],version:"current",frontMatter:{},sidebar:"blitzSidebar",previous:{title:"Core Lightning",permalink:"/docs/faq/cl"},next:{title:"FAQ",permalink:"/docs/faq/"}},c={},d=[{value:"What is the process of creating a new SD card image release?",id:"what-is-the-process-of-creating-a-new-sd-card-image-release",level:3},{value:"Versioning",id:"versioning",level:3},{value:"How can I customize my RaspiBlitz or add other software?",id:"how-can-i-customize-my-raspiblitz-or-add-other-software",level:3},{value:"GitHub Workflow",id:"github-workflow",level:3},{value:"Can I run RaspiBlitz on other computers than Raspberry Pi?",id:"can-i-run-raspiblitz-on-other-computers-than-raspberry-pi",level:3},{value:"How can I build an SD card from another branch?",id:"how-can-i-build-an-sd-card-from-another-branch",level:3},{value:"How can I build an SD card from my forked GitHub Repo?",id:"how-can-i-build-an-sd-card-from-my-forked-github-repo",level:3},{value:"How can I checkout a new branch from the RaspiBlitz repo to my forked repo?",id:"how-can-i-checkout-a-new-branch-from-the-raspiblitz-repo-to-my-forked-repo",level:3},{value:"How can I sync a branch of my forked GitHub with my local RaspiBlitz?",id:"how-can-i-sync-a-branch-of-my-forked-github-with-my-local-raspiblitz",level:3},{value:"How to add an app to the RaspiBlitz?",id:"how-to-add-an-app-to-the-raspiblitz",level:3},{value:"How contribute a feature/change from my forked branch back to the RaspiBlitz repo?",id:"how-contribute-a-featurechange-from-my-forked-branch-back-to-the-raspiblitz-repo",level:3},{value:"How can I help testing a Pull Request?",id:"how-can-i-help-testing-a-pull-request",level:3},{value:"How can I push changes to an existing Pull Request?",id:"how-can-i-push-changes-to-an-existing-pull-request",level:3},{value:"How to cherry-pick with branch protections &amp; CODEOWNERS file?",id:"how-to-cherry-pick-with-branch-protections--codeowners-file",level:3},{value:"How to run the automatic amd64 build on a VM on OSX?",id:"how-to-run-the-automatic-amd64-build-on-a-vm-on-osx",level:3}];function l(e){const i={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"development",children:"Development"}),"\n",(0,t.jsx)(i.h3,{id:"what-is-the-process-of-creating-a-new-sd-card-image-release",children:"What is the process of creating a new SD card image release?"}),"\n",(0,t.jsx)(i.p,{children:"Checklist before making a SD card image release:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:'"Versioning" number is updates in your RaspiBlitz Source Code (_version.info)'}),"\n",(0,t.jsx)(i.li,{children:"Latest code is merged in release branch"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Creating the base minimal sd card:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Start ",(0,t.jsx)(i.a,{href:"http://releases.ubuntu.com/18.04.3/ubuntu-18.04.3-desktop-amd64.iso",children:(0,t.jsx)(i.code,{children:"Ubuntu LIVE"})})," from USB stick"]}),"\n",(0,t.jsx)(i.li,{children:"Under Settings: best to set correct keyboard language & power settings to prevent monitor turn off"}),"\n",(0,t.jsx)(i.li,{children:"Connect to a secure WiFi (hardware switch on) or LAN"}),"\n",(0,t.jsxs)(i.li,{children:["Download the latest RaspiOS-64bit (zip/xz & sig file) named in the ",(0,t.jsx)(i.a,{href:"https://github.com/fusion44/raspiblitz/blob/95c495ea0195765d3391eb9603e6cdeb24075c2c/build_sdcard.sh",children:"build_sdcard.sh"})," and note the SHA256 checksum"]}),"\n",(0,t.jsxs)(i.li,{children:["From the browser ",(0,t.jsx)(i.code,{children:"Show All Downloads"})," and from the context menu select ",(0,t.jsx)(i.code,{children:"Open Containing Folder"})]}),"\n",(0,t.jsxs)(i.li,{children:["On that file manager open context (right click) on the white-space and select ",(0,t.jsx)(i.code,{children:"Open in Terminal"})]}),"\n",(0,t.jsxs)(i.li,{children:["Compare the checksum with the one you just made note of, using ",(0,t.jsx)(i.code,{children:"shasum -a 256 *.zip"})]}),"\n",(0,t.jsxs)(i.li,{children:["Check signature: ",(0,t.jsx)(i.code,{children:"wget https://www.raspberrypi.org/raspberrypi_downloads.gpg.key && gpg --import ./raspberrypi_downloads.gpg.key && gpg --verify *.sig"})]}),"\n",(0,t.jsxs)(i.li,{children:['The result should say "correct signature" and the fingerprint should end with ',(0,t.jsx)(i.code,{children:"8738 CD6B 956F 460C"})]}),"\n",(0,t.jsx)(i.li,{children:"Insert an NTFS formatted USB stick and use the file manager to move all files to the USB"}),"\n",(0,t.jsxs)(i.li,{children:["If image is an ZIP file use in file manager context on NTFS USB stick ",(0,t.jsx)(i.code,{children:"extract here"})," to unzip"]}),"\n",(0,t.jsxs)(i.li,{children:["Download script for later with ",(0,t.jsx)(i.code,{children:"curl https://raw.githubusercontent.com/Drewsif/PiShrink/master/pishrink.sh > pishrink.sh"})]}),"\n",(0,t.jsx)(i.li,{children:"Connect SD card reader with a SD card (16GB recommended)"}),"\n",(0,t.jsxs)(i.li,{children:["In the file manager open context on the .img-file, select ",(0,t.jsx)(i.code,{children:"Open With Disk Image Writer"})," and write the image to the SD card"]}),"\n",(0,t.jsxs)(i.li,{children:["In the file manager open context on ",(0,t.jsx)(i.code,{children:"boot"})," drive free space ",(0,t.jsx)(i.code,{children:"open in terminal"})]}),"\n",(0,t.jsxs)(i.li,{children:["Run the commands ",(0,t.jsx)(i.code,{children:"touch ssh"})]}),"\n",(0,t.jsxs)(i.li,{children:["Run the command: ",(0,t.jsx)(i.code,{children:'echo "pi:\\$6\\$TE7HmruYY9EaNiKP\\$Vz0inJ6gaoJgJvQrC5z/HMDRMTN2jKhiEnG83tc1Jsw7lli5MYdeA83g3NOVCsBaTVW4mUBiT/1ZRWYdofVQX0" > userconf'})," and ",(0,t.jsx)(i.code,{children:"exit"})]}),"\n",(0,t.jsxs)(i.li,{children:["Eject the ",(0,t.jsx)(i.code,{children:"boot"})," and the ",(0,t.jsx)(i.code,{children:"NTFS"})," volume"]}),"\n",(0,t.jsx)(i.li,{children:"Connect a RaspiBlitz (without HDD) to network, insert sd card and power up"}),"\n",(0,t.jsx)(i.li,{children:"Find the IP of the RaspiBlitz (arp -a or check router)"}),"\n",(0,t.jsxs)(i.li,{children:["In terminal ",(0,t.jsx)(i.code,{children:"ssh pi@[IP-OF-RASPIBLITZ]"})]}),"\n",(0,t.jsxs)(i.li,{children:["Password is ",(0,t.jsx)(i.code,{children:"raspberry"})]}),"\n",(0,t.jsxs)(i.li,{children:["Run the following command BUT REPLACE ",(0,t.jsx)(i.code,{children:"[BRANCH]"})," with the branch-string of your latest version"]}),"\n",(0,t.jsxs)(i.li,{children:["To run the minimal pack: ",(0,t.jsx)(i.code,{children:"wget --no-cache https://raw.githubusercontent.com/raspiblitz/raspiblitz/[BRANCH]/build_sdcard.sh && sudo bash build_sdcard.sh -u raspiblitz -b [BRANCH] -f 0 -d headless"})]}),"\n",(0,t.jsx)(i.li,{children:"Monitor/Check outputs for warnings/errors"}),"\n",(0,t.jsxs)(i.li,{children:["Login new with ",(0,t.jsx)(i.code,{children:"ssh admin@[IP-OF-RASPIBLITZ]"})," (pw: raspiblitz) and run ",(0,t.jsx)(i.code,{children:"release"})]}),"\n",(0,t.jsx)(i.li,{children:"Disconnect WiFi/LAN on build laptop (hardware switch off) and shutdown"}),"\n",(0,t.jsxs)(i.li,{children:["Remove ",(0,t.jsx)(i.code,{children:"Ubuntu LIVE"})," USB stick and cut power from the Raspberry Pi"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Creating the image of sd card:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Connect USB stick with latest ",(0,t.jsx)(i.code,{children:"TAILS"})," (make it stay offline)"]}),"\n",(0,t.jsx)(i.li,{children:"Boot Tails with extra setting of Admin-Passwort and remember (use later for sudo)"}),"\n",(0,t.jsx)(i.li,{children:"Menu > Systemtools > Settings > Energy -> best to set monitor to never turn off"}),"\n",(0,t.jsx)(i.li,{children:"Connect USB stick with GPG signing keys - decrypt drive if needed"}),"\n",(0,t.jsxs)(i.li,{children:["Open Terminal and cd into directory of USB Stick under ",(0,t.jsx)(i.code,{children:"/media/amnesia"})]}),"\n",(0,t.jsxs)(i.li,{children:["Run ",(0,t.jsx)(i.code,{children:"gpg --import ./sub.key"}),", check and ",(0,t.jsx)(i.code,{children:"exit"})]}),"\n",(0,t.jsx)(i.li,{children:"Disconnect USB stick with GPG keys"}),"\n",(0,t.jsx)(i.li,{children:"Take the SD card from the Raspberry Pi and connect with an external SD card reader to the laptop"}),"\n",(0,t.jsxs)(i.li,{children:["Click on ",(0,t.jsx)(i.code,{children:"boot"})," volume once in the file manger"]}),"\n",(0,t.jsx)(i.li,{children:"Connect the NTFS USB stick, open in file manager and delete old files"}),"\n",(0,t.jsxs)(i.li,{children:["To make a raw image from sd card - second way (UI with progress):","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:'Search "Laufwerke" or "Drives" on Tails Apps'}),"\n",(0,t.jsxs)(i.li,{children:["Create image named ",(0,t.jsx)(i.code,{children:"raspiblitz.img"})," to USB storage"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["Open Terminal and cd into directory of NTFS USB stick under ",(0,t.jsx)(i.code,{children:"/media/amnesia"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"shasum -a 256 ./pishrink.sh"})," should be ",(0,t.jsx)(i.code,{children:"e46e1e1e3c6e3555f9fff5435e2305e99b98aaa8dc28db1814cf861fbb472a69"})]}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"chmod +x ./pishrink.sh | sudo ./pishrink.sh ./raspiblitz.img"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"gzip -c ./raspiblitz.img > ./raspiblitz-min/fat-vX.X.X-YEAR-MONTH-DAY.img.gz"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"shasum -a 256 ./raspiblitz-min/fat-vX.X.X-YEAR-MONTH-DAY.img.gz > ./raspiblitz-min/fat-vX.X.X-YEAR-MONTH-DAY.img.gz.sha"})}),"\n",(0,t.jsx)(i.li,{children:"make analog copy/note of checksum"}),"\n",(0,t.jsxs)(i.li,{children:["Sign with ",(0,t.jsx)(i.code,{children:"gpg --output raspiblitz-min/fat-vX.X.X-YEAR-MONTH-DAY.img.gz.sig --detach-sign raspiblitz-min/fat-vX.X.X-YEAR-MONTH-DAY.img.gz"})]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Prepare template for subversion update later:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"mv ./raspiblitz.img ./raspiblitz-min-vX.X.X.img"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"shasum -a 256 ./raspiblitz-min-vX.X.img > ./raspiblitz-min-vX.X.X.img.sha"})}),"\n",(0,t.jsx)(i.li,{children:"make analog copy/note of checksum"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Creating a fatpack sd card from the minimal image:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Start TAILS live image"}),"\n",(0,t.jsx)(i.li,{children:"On NTFS USB Stick (Open in Terminal) check hash of raspiblitz-min-vX.X.X.img wit analog note:"}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"shasum -a 256 ./raspiblitz-min-vX.X.X.img"})}),"\n",(0,t.jsx)(i.li,{children:"Right-Click the file and write to a min 32GB sd card"}),"\n",(0,t.jsxs)(i.li,{children:["On ",(0,t.jsx)(i.code,{children:"bootfs"})," in FileManger (Open in Terminal):"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"touch stop"})," & ",(0,t.jsx)(i.code,{children:"exit"})," terminal"]}),"\n",(0,t.jsx)(i.li,{children:"Shutdown TAILS & eject sd card"}),"\n",(0,t.jsx)(i.li,{children:"Bootup UBUNTU LIVE"}),"\n",(0,t.jsx)(i.li,{children:"Connect a RaspiBlitz (without HDD) to network, insert sd card and power up"}),"\n",(0,t.jsx)(i.li,{children:"Find the IP of the RaspiBlitz (arp -a or check router)"}),"\n",(0,t.jsxs)(i.li,{children:["In terminal ",(0,t.jsx)(i.code,{children:"ssh admin@[IP-OF-RASPIBLITZ]"})]}),"\n",(0,t.jsxs)(i.li,{children:["Update to latest code with ",(0,t.jsx)(i.code,{children:"patch code"})]}),"\n",(0,t.jsxs)(i.li,{children:["the following only if its a ",(0,t.jsx)(i.code,{children:"fatpack"}),":","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["run command ",(0,t.jsx)(i.code,{children:"fatpack"})]}),"\n",(0,t.jsxs)(i.li,{children:["if it reboot, ssh in again & again run command ",(0,t.jsx)(i.code,{children:"fatpack"})]}),"\n",(0,t.jsx)(i.li,{children:"check that script ended without errors"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"do the creation & signing of the image file like in chapter above"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Publishing the images:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Connect the NTFS USB stick to MacOS (it is just read-only)"}),"\n",(0,t.jsx)(i.li,{children:"Run tests on the new image"}),"\n",(0,t.jsx)(i.li,{children:"Upload the new image to the Download Server - put sig-file next to it"}),"\n",(0,t.jsx)(i.li,{children:"Copy SHA256-String into GitHub README and update the download link"}),"\n",(0,t.jsxs)(i.li,{children:["Create Torrent file from image (for example with Transmission) and place in in the ",(0,t.jsx)(i.code,{children:"home.admin/assets"})," folder & link on README"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"This is a recommended tracker list to be used with the torrent:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"udp://tracker.coppersurfer.tk:6969/announce\nhttp://tracker.yoshi210.com:6969/announce\nhttp://open.acgtracker.com:1096/announce\nhttp://tracker.skyts.net:6969/announce\nudp://9.rarbg.me:2780/announce\nhttp://tracker2.itzmx.com:6961/announce\nudp://exodus.desync.com:6969/announce\nhttp://pow7.com:80/announce\nudp://tracker.leechers-paradise.org:6969\n"})}),"\n",(0,t.jsx)(i.h3,{id:"versioning",children:"Versioning"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Major Updates: 1.0.0, 2.0.0, 3.0.0, ... are epic updates signaling that the software reached a new era."}),"\n",(0,t.jsx)(i.li,{children:"Main Updates: 1.1.0, 1.2.0, 1.3.0, ... are release updates - the reflashing of the sd ard is mandatory."}),"\n",(0,t.jsx)(i.li,{children:"Minor Updates: 1.3.0, 1.3.1, 1.3.2, ... are patch updates - can be done by 'patching' the scripts & code, but new sd card reflash is still advised."}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["Every release has its own branch: ",(0,t.jsx)(i.code,{children:"v1.9"}),", ",(0,t.jsx)(i.code,{children:"v1.10"}),", ",(0,t.jsx)(i.code,{children:"v1.11"})," .. this way hot patches can be merged into the release branch and people update with the ",(0,t.jsx)(i.code,{children:"patch code"})," command"]}),"\n",(0,t.jsx)(i.h3,{id:"how-can-i-customize-my-raspiblitz-or-add-other-software",children:"How can I customize my RaspiBlitz or add other software?"}),"\n",(0,t.jsx)(i.p,{children:"The RaspiBlitz is your computer to experiment with. Feel free to add your own scripts, edit the system or install further software from the command line. Just keep in mind that after an update/recovery the RaspiBlitz starts with a fresh and clean operating system again. So all your editings and installs might be gone. To prevent this you should do the following:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["place your own scripts and data that should survive an update/recovery into the ",(0,t.jsx)(i.code,{children:"/mnt/hdd/app-data"})," directory"]}),"\n",(0,t.jsxs)(i.li,{children:["put all install commands & modification of the system into the script ",(0,t.jsx)(i.code,{children:"/mnt/hdd/app-data/custom-installs.sh"})," which will be started automatically on a recovery/update."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"github-workflow",children:"GitHub Workflow"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Development is done on the 'dev' branch, new features should be done on single feature branches and merged into 'dev' once ready."}),"\n",(0,t.jsx)(i.li,{children:"When a release of a new main-update (see above) comes closer, a new release branch gets created from 'dev' with the first release candidate - the RCs and the final release sd card will be build from this branch."}),"\n",(0,t.jsx)(i.li,{children:"All minor-releases will basically all work with the same 'build_sdcard.sh' script so that the code could be updated by just calling 'patch'. Emergency updates on lnd & bitcoin may break this guideline, but basic structure & packaging should stay mostly consistent over a main-update version."}),"\n",(0,t.jsx)(i.li,{children:'Once a release is ready, that release branch will be set as the "default" branch on GitHub (so its shown as main page)'}),"\n",(0,t.jsx)(i.li,{children:"Hot fixes & new features for minor versions will be created as single branches from the release branch, and once ready will be merged back into that release branch as a Pull Request using 'Squash-Merge' AND then, this 'Squash-Merge' (one single commit) will get cherry-picked into the 'dev' branch ('git cherry-pick COMMITHASH' - may call 'git fetch' & 'git pull' before to make a clean cherry-pick into dev)."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"can-i-run-raspiblitz-on-other-computers-than-raspberry-pi",children:"Can I run RaspiBlitz on other computers than Raspberry Pi?"}),"\n",(0,t.jsxs)(i.p,{children:["There is an experimental section in this GitHub that tries to build for other SingleBoardComputers. Feel free to try it out and share your experience: ",(0,t.jsx)(i.code,{children:"TODO: alternative.platforms/README.md alternative.platforms/README.md"})]}),"\n",(0,t.jsx)(i.h3,{id:"how-can-i-build-an-sd-card-from-another-branch",children:"How can I build an SD card from another branch?"}),"\n",(0,t.jsx)(i.p,{children:"There might be new, but not released features in development that are not yet in the default version branch - but you want to try them out."}),"\n",(0,t.jsxs)(i.p,{children:["To build a SD card image from another branch than master, you follow the ",(0,t.jsx)(i.code,{children:"TODO: Build the SD Card Image  README.md#build-the-sd-card-image "})," from the README, but execute the build script from the other branch and add the name of that branch as a parameter to the build script."]}),"\n",(0,t.jsx)(i.p,{children:"For example if you want to make a build from the 'dev' branch you execute the following command:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"wget --no-cache https://raw.githubusercontent.com/raspiblitz/raspiblitz/dev/build_sdcard.sh && sudo bash build_sdcard.sh -b dev"})}),"\n",(0,t.jsxs)(i.p,{children:["If you want to see all the optional parameters for building your sd card, just answere ",(0,t.jsx)(i.code,{children:"no"})," on first question and call ",(0,t.jsx)(i.code,{children:"sudo bash build_sdcard.sh --help"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"how-can-i-build-an-sd-card-from-my-forked-github-repo",children:"How can I build an SD card from my forked GitHub Repo?"}),"\n",(0,t.jsx)(i.p,{children:"If you fork the RaspiBlitz repo (much welcome) and you want to run that code on your RaspiBlitz, there are two ways to do that:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["The quick way: For small changes in a single script, go to ",(0,t.jsx)(i.code,{children:"/home/admin"})," on your running RaspiBlitz, delete the old git with ",(0,t.jsx)(i.code,{children:"sudo rm -r raspiblitz"})," then replace it with your code ",(0,t.jsx)(i.code,{children:"git clone [YOURREPO]"})," and ",(0,t.jsx)(i.code,{children:"patch"})]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["The long way: If you like to install/remove/change services and system configurations you need to build a SD card from your own code. Prepare like in ",(0,t.jsx)(i.code,{children:"TODO: Build the SD Card Image README.md#build-the-sd-card-image "})," from the README but in the end run the command:"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"wget --no-cache https://raw.githubusercontent.com/[GITHUB-USERNAME]/raspiblitz/[BRANCH]/build_sdcard.sh && sudo bash build_sdcard.sh -b [BRANCH]"})}),"\n",(0,t.jsxs)(i.p,{children:["If you are then working in your forked repo and want to update the scripts on your RaspiBlitz with your latest repo changes, run ",(0,t.jsx)(i.code,{children:"patch"})," - That's OK as long as you don't make changes to the SD card build script - for that you would need to build a fresh SD card again from your repo."]}),"\n",(0,t.jsx)(i.h3,{id:"how-can-i-checkout-a-new-branch-from-the-raspiblitz-repo-to-my-forked-repo",children:"How can I checkout a new branch from the RaspiBlitz repo to my forked repo?"}),"\n",(0,t.jsxs)(i.p,{children:["You need to have your forked repo checked-out on your laptop. There your should see your forked repo as ",(0,t.jsx)(i.code,{children:"origin"})," when you run ",(0,t.jsx)(i.code,{children:"git remote -v"}),". If you don't see an additional ",(0,t.jsx)(i.code,{children:"upstream"})," remote yet, then create it with the following command: ",(0,t.jsx)(i.code,{children:"git remote add upstream https://github.com/raspiblitz/raspiblitz.git"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["So, first checkout the new branch named ",(0,t.jsx)(i.code,{children:"BRANCH"})," from the original RaspBlitz repo to your local computer with: ",(0,t.jsx)(i.code,{children:"git fetch upstream"})," and then ",(0,t.jsx)(i.code,{children:"git checkout -b BRANCH upstream/BRANCH"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Now push the new branch to your forked GitHub repo with ",(0,t.jsx)(i.code,{children:"git push -u origin BRANCH"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"Once the branch is available and synced between the RaspiBlitz GitHub repo, your forked GitHub repo and your local computer git repo, you can start developing."}),"\n",(0,t.jsx)(i.h3,{id:"how-can-i-sync-a-branch-of-my-forked-github-with-my-local-raspiblitz",children:"How can I sync a branch of my forked GitHub with my local RaspiBlitz?"}),"\n",(0,t.jsxs)(i.p,{children:["Since v1.5 of RaspiBlitz there has been an easy way thru the SSH menus: Under ",(0,t.jsx)(i.code,{children:"MAIN MENU > UPDATE > PATCH"})," you have the option to change the GitHub repository and and branch to sync with. You change the GitHub Repository by setting the GitHub username where you forked the Repo."]}),"\n",(0,t.jsxs)(i.p,{children:["So for example: If you forked the RaspiBlitz project (raspiblitz/raspiblitz) on GitHub and your GitHub project page is now called: ",(0,t.jsx)(i.a,{href:"https://github.com/raumi75/raspiblitz",children:"https://github.com/raumi75/raspiblitz"})," ... then just change the repo to sync/patch with to your username ",(0,t.jsx)(i.code,{children:"raumi75"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["Now you can use the ",(0,t.jsx)(i.code,{children:"Patch/Sync RaspiBlitz with GitHub Repo"})," to easily keep your RaspiBlitz in sync with your forked repository and develop your own customizations and features."]}),"\n",(0,t.jsx)(i.p,{children:"Background info and doing it manually:"}),"\n",(0,t.jsxs)(i.p,{children:["There is a git copy of the original RaspiBlitz GitHub repo on your physical RaspiBlitz in the folder ",(0,t.jsx)(i.code,{children:"/home/admin/raspiblitz"}),". If you change into that folder and run ",(0,t.jsx)(i.code,{children:"git remote -v"})," you can see the set origin repo."]}),"\n",(0,t.jsx)(i.p,{children:"You need to change that origin repo to your forked repo. You do that with:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"git remote set-url origin [THE-URL-OF-YOUR-FORKED-REPO]\n"})}),"\n",(0,t.jsx)(i.p,{children:"Now to sync your branch namend BRANCH on your forked repo with your RaspiBlitz, you always just run:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"/home/admin/config.scripts/blitz.github.sh BRANCH\n"})}),"\n",(0,t.jsx)(i.p,{children:"So your workflow can go like this: You write code on your local computer. Commit to your local repo, push it to your forked repo and use the sync-script above to get the code to your RaspiBlitz."}),"\n",(0,t.jsx)(i.h3,{id:"how-to-add-an-app-to-the-raspiblitz",children:"How to add an app to the RaspiBlitz?"}),"\n",(0,t.jsxs)(i.p,{children:["To add your app you can fork the raspiblitz repo, follow the ",(0,t.jsx)(i.code,{children:"/home.admin/config.scripts/bonus.template.sh"})," script ",(0,t.jsx)(i.a,{href:"https://github.com/raspiblitz/raspiblitz/blob/dev/home.admin/config.scripts/bonus.template.sh",children:"see code"}),", copy/adapt it, test it on your RaspiBlitz and make a PR back to the main repo."]}),"\n",(0,t.jsx)(i.h3,{id:"how-contribute-a-featurechange-from-my-forked-branch-back-to-the-raspiblitz-repo",children:"How contribute a feature/change from my forked branch back to the RaspiBlitz repo?"}),"\n",(0,t.jsx)(i.p,{children:"In the same way as described above, you can build a new feature or test a change. Once you have something ready that you want to contribute back, you make sure it's pushed to your forked GitHub repo, and then start a pull request from your forked repo to the RaspiBlitz repo."}),"\n",(0,t.jsxs)(i.p,{children:["See more info: ",(0,t.jsx)(i.a,{href:"https://yangsu.github.io/pull-request-tutorial/",children:"https://yangsu.github.io/pull-request-tutorial/"})]}),"\n",(0,t.jsx)(i.h3,{id:"how-can-i-help-testing-a-pull-request",children:"How can I help testing a Pull Request?"}),"\n",(0,t.jsx)(i.p,{children:"Make sure to have the correct base image.\nThen go to the command line and create a branch for the PR:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"cd /home/admin/raspiblitz\ngit fetch origin pull/[PRNUMBER]/head:pr[PRNUMBER]\ngit checkout pr[PRNUMBER]\ncd /home/admin\n/home/admin/config.scripts/blitz.github.sh -justinstall\n"})}),"\n",(0,t.jsx)(i.p,{children:"Now you have the code of the PR active - depending on what scripts are changed you might need to reboot."}),"\n",(0,t.jsx)(i.p,{children:"To change back to the code:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"/home/admin/config.scripts/blitz.github.sh master\n"})}),"\n",(0,t.jsx)(i.h3,{id:"how-can-i-push-changes-to-an-existing-pull-request",children:"How can I push changes to an existing Pull Request?"}),"\n",(0,t.jsxs)(i.p,{children:["See article: ",(0,t.jsx)(i.a,{href:"https://tech.sycamore.garden/add-commit-push-contributor-branch-git-github",children:"https://tech.sycamore.garden/add-commit-push-contributor-branch-git-github"})," .. only works if your a contributor on raspiblitz repo."]}),"\n",(0,t.jsx)(i.h3,{id:"how-to-cherry-pick-with-branch-protections--codeowners-file",children:"How to cherry-pick with branch protections & CODEOWNERS file?"}),"\n",(0,t.jsxs)(i.p,{children:["Chery-picking patch PRs from dev to a release-branch like 'v1.8' (for example) is now a bit more complicated. Either an admin switches temorarly the branch protection \"require a pull request before merging\" setting off for the ",(0,t.jsx)(i.code,{children:"git cherry-pick"})," OR we create a ",(0,t.jsx)(i.code,{children:"p1.8"})," branch from ",(0,t.jsx)(i.code,{children:"v1.8"}),", cherry-pick the squashed patch PR into that unprotected ",(0,t.jsx)(i.code,{children:"p1.8"})," and then open a PR back to ",(0,t.jsx)(i.code,{children:"v1.8"}),"."]}),"\n",(0,t.jsx)(i.p,{children:"But what we gain is that better branch protection and we can add more contributors to the project that are allowed to manage issues - like adding labels or closing."}),"\n",(0,t.jsx)(i.h3,{id:"how-to-run-the-automatic-amd64-build-on-a-vm-on-osx",children:"How to run the automatic amd64 build on a VM on OSX?"}),"\n",(0,t.jsx)(i.p,{children:"just notes so far:"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://brew.sh",children:"https://brew.sh"}),"\nbrew install qemu\n",(0,t.jsx)(i.a,{href:"https://github.com/raspiblitz/raspiblitz/actions",children:"https://github.com/raspiblitz/raspiblitz/actions"})," --\x3e download amd64-lean image\ndouble unzip until ",(0,t.jsx)(i.code,{children:"qcow2"})," file\nconvert ",(0,t.jsx)(i.code,{children:"qcow2"})," to `vdi:\nqemu-img convert -f qcow2 raspiblitz-amd64-debian-lean.qcow2 -O vdi raspiblitz-amd64-debian-lean.vdi\n",(0,t.jsx)(i.a,{href:"https://www.virtualbox.org/wiki/Downloads",children:"https://www.virtualbox.org/wiki/Downloads"})]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>s});var t=n(6540);const r={},o=t.createContext(r);function a(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);