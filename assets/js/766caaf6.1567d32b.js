"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[2205],{34623:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var s=i(85893),o=i(11151);const r={title:"2016-11-24"},l="2016-11-24: General Discussion",t={id:"orga/minutes/2016-11-24",title:"2016-11-24",description:"Time00 (UTC)",source:"@site/docs/orga/minutes/2016-11-24.md",sourceDirName:"orga/minutes",slug:"/orga/minutes/2016-11-24",permalink:"/docs/orga/minutes/2016-11-24",draft:!1,unlisted:!1,editUrl:"https://github.com/zklaus/conda-forge.github.io/tree/refs/heads/main/docs/orga/minutes/2016-11-24.md",tags:[],version:"current",lastUpdatedAt:1709213755,formattedLastUpdatedAt:"Feb 29, 2024",frontMatter:{title:"2016-11-24"},sidebar:"docs",previous:{title:"2017-01-06",permalink:"/docs/orga/minutes/2017-01-06"},next:{title:"2016-11-17",permalink:"/docs/orga/minutes/2016-11-17"}},c={},d=[];function a(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",s:"s",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"2016-11-24-general-discussion",children:"2016-11-24: General Discussion"}),"\n",(0,s.jsx)(n.p,{children:"Time: 20:00 (UTC)"}),"\n",(0,s.jsxs)(n.p,{children:["Hangout link: ",(0,s.jsx)(n.a,{href:"https://hangouts.google.com/call/v5olhwzpfzgzpoq5i3wthjpqpie"}),(0,s.jsx)(n.a,{href:"https://hangouts.google.com/call/v5olhwzpfzgzpoq5i3wthjpqpie",children:"https://hangouts.google.com/call/v5olhwzpfzgzpoq5i3wthjpqpie"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Attendees"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Filipe"}),"\n",(0,s.jsx)(n.li,{children:"Mike"}),"\n",(0,s.jsx)(n.li,{children:"Phil"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Standing Items"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"How many repos? ~1400"}),"\n",(0,s.jsx)(n.li,{children:"How many contributors? ~300"}),"\n",(0,s.jsx)(n.li,{children:"CFEP status"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Notes"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Action: Phil to take a look at ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge.github.io/pull/256",children:"conda forge/conda forge.github.io#256"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Filipe will ask Carlos whether he is prepared to build qt"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Binary data (repacking)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'*   Currently done with "low hanging fruit" or difficult packages\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"CFEP would be helpful to give clear guidance"}),"\n",(0,s.jsx)(n.li,{children:"What does it take to merge repackaging stuff?  At what point does it become painful enough to allow repackaging?"}),"\n",(0,s.jsxs)(n.li,{children:["MSYS2 - ",(0,s.jsx)(n.a,{href:"https://conda-forge.hackpad.com/ep/profile/yHQTJXZ4gyS",children:"Michael Sarahan"})," to ask Ray about build infrastructure for MSYS2 and perhaps unification with conda/conda-forge"]}),"\n",(0,s.jsx)(n.li,{children:"Git  for windows as example to avoid (Large agglomeration of individual  projects - prefer to build individual projects).  If MSYS2 were not  available, this would be an OK candidate for repackaging, because it is  such a huge pain.  Because MSYS2 is available, we should avoid  repackaging git for windows."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"conda-build 2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   bldpkg_path also takes a config argument. See [](https://circleci.com/gh/conda-forge/texinfo-feedstock/24)[https://circleci.com/gh/conda-forge/texinfo-feedstock/24](https://circleci.com/gh/conda-forge/texinfo-feedstock/24)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["There is very little that needs to be done. See ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-build-setup-feedstock/issues/38",children:"conda forge/conda forge build setup feedstock#38"}),"#issuecomment-262931757"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"(It is a matter of merging PRs now :-)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"can we just disable symlinks for environments when building to fix the CMAKE issue? Phil: I believe so. MS +1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"    *   [](http://conda.pydata.org/docs/config.html#disallow-soft-linking-allow-softlinks)[http://conda.pydata.org/docs/config.html#disallow-soft-linking-allow-softlinks](http://conda.pydata.org/docs/config.html#disallow-soft-linking-allow-softlinks)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"ACTION: Let's get rid of softlinks when using conda-build"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Handling broken packages"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"*   Hotfix  capability: we will never have control of the channel index, so we must  rebuild or modify existing packages. MS: There should be a preference  for rebuild vs modify. CFEP (policy) would be helpful.\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Generally,  moving broken packages to a "broken" channel is preferable to deleting  them. We can consider purging these after a period of time.'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Agenda"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.s,{children:"Binary data in recipes "}),"Repackaging existing executables"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"conda-forge installer (our own Miniconda)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://conda-forge.hackpad.com/DZNKZdgiMbF",children:"Staged Releases"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Smoothly handling CI registration failures during conversion - ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/staged-recipes/pull/1466",children:"conda forge/staged recipes#1466"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Handling broken packages"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Mention ",(0,s.jsx)(n.a,{href:"https://conda-forge.hackpad.com/N5evEX7bZAf",children:"conda forge upload service"})," idea"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Build infrastructure status - ",(0,s.jsx)(n.a,{href:"https://github.com/conda/build_infrastructure/issues/1",children:"conda/build_infrastructure#1"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Team update web service - ",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-webservices/issues/63",children:"conda forge/conda forge webservices#63"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Windows BLAS Solutions"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Build/Upload Qt"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Move to conda-build 2!"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"conda-forge.org"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"pycon 2017"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>l});var s=i(67294);const o={},r=s.createContext(o);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);