"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[5370],{76495:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=o(85893),i=o(11151);const r={authors:["isuruf"],tags:["conda-forge"]},a="macOS ARM builds on conda-forge",c={permalink:"/blog/2020/10/29/macos-arm64",editUrl:"https://github.com/zklaus/conda-forge.github.io/tree/refs/heads/main/blog/2020-10-29-macos-arm64.md",source:"@site/blog/2020-10-29-macos-arm64.md",title:"macOS ARM builds on conda-forge",description:"A new platform osx-arm64 has been added to the build matrix of",date:"2020-10-29T00:00:00.000Z",formattedDate:"October 29, 2020",tags:[{label:"conda-forge",permalink:"/blog/tags/conda-forge"}],readingTime:7.22,hasTruncateMarker:!0,authors:[{name:"Isuru Fernando",title:"Member of conda-forge/core",url:"https://github.com/isuruf",imageURL:"https://github.com/isuruf.png",key:"isuruf"}],frontMatter:{authors:["isuruf"],tags:["conda-forge"]},unlisted:!1,prevItem:{title:"Package Distribution and the anaconda.com Terms of Service",permalink:"/blog/2020/11/20/anaconda-tos"},nextItem:{title:"The API Territory and Version Number Map",permalink:"/blog/2020/10/02/versions"}},t={authorsImageUrls:[void 0]},d=[{value:"Cross-compiling builds for <code>osx-arm64</code>",id:"cross-compiling-builds-for-osx-arm64",level:2},{value:"How to add a <code>osx-arm64</code> build to a feedstock",id:"how-to-add-a-osx-arm64-build-to-a-feedstock",level:2},{value:"Building locally",id:"building-locally",level:2},{value:"Testing packages",id:"testing-packages",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["A new platform ",(0,s.jsx)(n.code,{children:"osx-arm64"})," has been added to the build matrix of\nconda-forge. ",(0,s.jsx)(n.code,{children:"osx-arm64"})," packages are built to run on upcoming macOS\narm64 processors marketed as ",(0,s.jsx)(n.code,{children:"Apple Silicon"}),". An installer for this\nplatform can be found\n",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-arm64.sh",children:"here"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This will install a conda environment with python and conda in it.\nInstalled conda will be able to install packages like ",(0,s.jsx)(n.code,{children:"numpy, scipy"}),".\nCurrently there are about 100 packages out of 10000 packages pre-built\nfor this platform."]}),"\n",(0,s.jsxs)(n.p,{children:["All these packages are built on conda-forge's current macOS ",(0,s.jsx)(n.code,{children:"x86_64"}),"\ninfrastructure. In order to do so, we have made lots of changes to the\ninfrastructure including,\n",(0,s.jsx)(n.code,{children:"conda, conda-build, conda-smithy, constructor, conda-forge-ci-setup"})," to\nfacilitate cross-compiling which is the process of compiling a package\nthat will run on a ",(0,s.jsx)(n.code,{children:"host"})," platform (",(0,s.jsx)(n.code,{children:"osx-arm64"})," in our case), with the\ncompilation done on a ",(0,s.jsx)(n.code,{children:"build"})," platform (",(0,s.jsx)(n.code,{children:"osx-64"})," or ",(0,s.jsx)(n.code,{children:"linux-64"})," in our\ncase)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"osx-arm64"})," is the first conda platform that is completely bootstrapped\nusing conda-build's cross-compiling facility. Previously, when adding a\nnew platform, conda-build was built with an existing python and pip\nenvironment on the new platform. With cross-compiling, when the\ncompilers and a sysroot is set up on a different platform, an existing\nconda-build installation (on ",(0,s.jsx)(n.code,{children:"osx-64"})," and ",(0,s.jsx)(n.code,{children:"linux-64"})," in this case) will\nbe able to start building packages right away."]}),"\n",(0,s.jsxs)(n.h2,{id:"cross-compiling-builds-for-osx-arm64",children:["Cross-compiling builds for ",(0,s.jsx)(n.code,{children:"osx-arm64"})]}),"\n",(0,s.jsxs)(n.p,{children:["In order to cross compile packages for ",(0,s.jsx)(n.code,{children:"osx-arm64"})," we need compilers.\nSo, we first built ",(0,s.jsx)(n.code,{children:"clang=11.0.0.rc1"})," which has support for targetting\n",(0,s.jsx)(n.code,{children:"osx-arm64"}),". We also built ",(0,s.jsx)(n.code,{children:"compiler-rt=11.0.0.rc1"})," as a universal build\nsupport both ",(0,s.jsx)(n.code,{children:"osx-64"})," and ",(0,s.jsx)(n.code,{children:"osx-arm64"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Linker, archiver, ",(0,s.jsx)(n.code,{children:"otool"}),", ",(0,s.jsx)(n.code,{children:"install_name_tool"})," was built using the\n",(0,s.jsx)(n.a,{href:"https://github.com/tpoechtrager/cctools-port",children:"cctools-port project"})," by\nThomas P\xf6chtrager."]}),"\n",(0,s.jsxs)(n.p,{children:["One issue we ran into was that the macOS 11.0 Big Sur Beta 7 required\nthat all executables and shared libraries be ad-hoc signed which is\nsigning without a verified signature. On suggestion of ",(0,s.jsx)(n.code,{children:"cctools-port"}),"\ndeveloper we added support to ",(0,s.jsx)(n.code,{children:"cctools-port"})," to sign these executables\nusing ",(0,s.jsx)(n.code,{children:"ldid"})," which can be used on Linux as well as macOS to sign."]}),"\n",(0,s.jsxs)(n.p,{children:["Using these, the first cross compiled package we built was ",(0,s.jsx)(n.code,{children:"libcxx"})," to\nfacilitate C++ builds. For the ",(0,s.jsx)(n.code,{children:"osx-arm64"})," sysroot we used the\n",(0,s.jsx)(n.code,{children:"MacOSX11.0.sdk"})," already installed on Azure pipelines and Travis-CI. Due\nto licensing issues, we cannot distribute this, but it can be downloaded\nfrom the Apple developer website even on Linux."]}),"\n",(0,s.jsxs)(n.p,{children:["With clang we have a C/C++ compiler, but lack a Fortran compiler. We\nused the ",(0,s.jsx)(n.a,{href:"https://github.com/iains/gcc-darwin-arm64",children:"GCC fork for\ndarwin-arm64"}),". First, a cross\ncompiler (",(0,s.jsx)(n.code,{children:"build == host != target"}),") was built. Using that compiler, we\nbuilt a ",(0,s.jsx)(n.code,{children:"cross-native"})," compiler (",(0,s.jsx)(n.code,{children:"build != host == target"}),") which gave\nuse the shared libraries like ",(0,s.jsx)(n.code,{children:"libgfortran.dylib"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["We also added support for cross compiling rust programs to the rust\npackages in conda and installing ",(0,s.jsx)(n.code,{children:"rust_osx-64"})," on Linux will give you a\ncompiler that will build packages for ",(0,s.jsx)(n.code,{children:"osx-64"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["As we haven't done cross-compilation before, many packages needed to be\nupdated. Most were trivial changes that we automated later on. These\nincluded getting a newer ",(0,s.jsx)(n.code,{children:"config.sub"})," to identify the new autotools\nplatform ",(0,s.jsx)(n.code,{children:"arm64-apple-darwin20.0.0"}),", adding options to CMake with the\nenvironment variable ",(0,s.jsx)(n.code,{children:"CMAKE_ARGS"})," to correctly set up the toolchain and\nrecipes were update to use ",(0,s.jsx)(n.code,{children:"cmake ${CMAKE_ARGS} .."}),". Running tests when\nbuilding were also disabled by guarding commands like ",(0,s.jsx)(n.code,{children:"make check"}),",\n",(0,s.jsx)(n.code,{children:"make test"}),", ",(0,s.jsx)(n.code,{children:"ctest"})," with the env variable\n",(0,s.jsx)(n.code,{children:"CONDA_BUILD_CROSS_COMPILATION"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Cross-compiling python extensions is quite tricky as ",(0,s.jsx)(n.code,{children:"distutils"})," is not\nreally setup to do this. Thanks to the project\n",(0,s.jsx)(n.a,{href:"https://github.com/benfogle/crossenv",children:"crossenv"})," this is unofficially\nsupported with a few quirks. With ",(0,s.jsx)(n.code,{children:"crossenv"}),", we can run a python on the\nbuild machine (",(0,s.jsx)(n.code,{children:"osx-64"})," or ",(0,s.jsx)(n.code,{children:"linux-64"})," in this case) that acts like it is\non ",(0,s.jsx)(n.code,{children:"osx-arm64"}),". ",(0,s.jsx)(n.code,{children:"crossenv"})," monkey-patches a few functions like\n",(0,s.jsx)(n.code,{children:"os.uname"})," and sets up values like ",(0,s.jsx)(n.code,{children:"_PYTHON_SYSCONFIG_DATA"})," to make\npython running on ",(0,s.jsx)(n.code,{children:"osx-64"})," or ",(0,s.jsx)(n.code,{children:"linux-64"})," behave like ",(0,s.jsx)(n.code,{children:"osx-arm64"}),". One\nissue is that, monkey-patching ",(0,s.jsx)(n.code,{children:"sys.platform"})," doesn't work and\ntherefore if a python package in it's ",(0,s.jsx)(n.code,{children:"setup.py"})," uses ",(0,s.jsx)(n.code,{children:"sys.platform"})," to\ndifferentiate OSes this will lead to unintended consequences if you are\ncross-compiling from ",(0,s.jsx)(n.code,{children:"linux-64"}),". Therefore, we have to use ",(0,s.jsx)(n.code,{children:"osx-64"})," as\nour ",(0,s.jsx)(n.code,{children:"build"})," system when cross-compiling for ",(0,s.jsx)(n.code,{children:"osx-arm64"}),". Note that\npackages using ",(0,s.jsx)(n.code,{children:"sysconfig.get_platform()"})," will get the correct platform."]}),"\n",(0,s.jsxs)(n.p,{children:["For creating an installer for conda, we needed a standalone conda\nexecutable to bootstrap the conda environment. For other platforms we\nrelied on ",(0,s.jsx)(n.code,{children:"conda-standalone"})," which is a standalone conda executable\ncreated using ",(0,s.jsx)(n.code,{children:"pyinstaller"}),". Since ",(0,s.jsx)(n.code,{children:"pyinstaller"})," does not support\ncross-compile, we decided to use ",(0,s.jsx)(n.code,{children:"micromamba"})," as the bootstrapper and\nadded features to ",(0,s.jsx)(n.code,{children:"micromamba"})," so that it can function as the\nbootstrapper."]}),"\n",(0,s.jsxs)(n.h2,{id:"how-to-add-a-osx-arm64-build-to-a-feedstock",children:["How to add a ",(0,s.jsx)(n.code,{children:"osx-arm64"})," build to a feedstock"]}),"\n",(0,s.jsxs)(n.p,{children:["All the below changes will be done by a bot and the packages the bot\nwill send PRs to is determined by the list of packages at\n",(0,s.jsx)(n.a,{href:"https://github.com/conda-forge/conda-forge-pinning-feedstock/blob/master/recipe/migrations/osx_arm64.txt",children:"conda-forge-pinning"}),"\nand their dependences. If you would like to add support, please send a\nPR adding the feedstock name to the above list. After that PR is merged,\nyou can monitor the status at ",(0,s.jsx)(n.a,{href:"https://conda-forge.org/status/#armosxaddition",children:"conda-forge\nstatus-page"})," and if a\nparticular PR is stalled you can send a PR to the feedstock to fix it."]}),"\n",(0,s.jsx)(n.p,{children:"Following instructions are for when you want to add support manually."}),"\n",(0,s.jsxs)(n.p,{children:["Add the following to ",(0,s.jsx)(n.code,{children:"conda-forge.yml"})," (on Linux or OSX),"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"build_platform:\n  osx_arm64: osx_64\ntest: native_and_emulated\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can rerender using,"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"conda smithy rerender\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For python packages, add one or more of the following to\n",(0,s.jsx)(n.code,{children:"recipe/meta.yaml"})," as needed, noting that you ",(0,s.jsx)(n.em,{children:"must"})," only add\n",(0,s.jsx)(n.code,{children:"numpy"}),", ",(0,s.jsx)(n.code,{children:"cython"}),", and/or ",(0,s.jsx)(n.code,{children:"pybind11"}),"\nif they are used in ",(0,s.jsx)(n.code,{children:"host:"})," as well,"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"requirements:\n  build:\n    - python                                 # [build_platform != target_platform]\n    - cross-python_{{ target_platform }}     # [build_platform != target_platform]\n    - cython                                 # [build_platform != target_platform]\n    - numpy                                  # [build_platform != target_platform]\n    - pybind11                               # [build_platform != target_platform]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For autotools package, add the following to ",(0,s.jsx)(n.code,{children:"recipe/meta.yaml"}),","]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"requirements:\n  build:\n    - gnuconfig   # [unix]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["and to ",(0,s.jsx)(n.code,{children:"recipe/build.sh"}),","]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Get an updated config.sub and config.guess\ncp $BUILD_PREFIX/share/gnuconfig/config.* .\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For cmake packages, add the following to ",(0,s.jsx)(n.code,{children:"recipe/build.sh"}),","]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cmake ${CMAKE_ARGS} ..\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For ",(0,s.jsx)(n.code,{children:"meson"})," packages, add the following to ",(0,s.jsx)(n.code,{children:"recipe/build.sh"}),","]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"meson ${MESON_ARGS} builddir/\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Conda automatically creates a ",(0,s.jsx)(n.a,{href:"https://mesonbuild.com/Cross-compilation.html",children:"cross build definition\nfile"})," when\ncross-compiling, and adds the necessary argument to ",(0,s.jsx)(n.code,{children:"${MESON_ARGS}"})," to\npoint ",(0,s.jsx)(n.code,{children:"meson"})," to that file. ",(0,s.jsx)(n.code,{children:"${MESON_ARGS}"})," is only defined when\ncross-compiling, not for normal builds."]})}),"\n",(0,s.jsxs)(n.p,{children:["For rust packages, add the following to ",(0,s.jsx)(n.code,{children:"recipe/meta.yaml"}),","]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"requirements:\n  build:\n    - {{ compiler('rust') }}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If there's a line like ",(0,s.jsx)(n.code,{children:"make check"})," in ",(0,s.jsx)(n.code,{children:"recipe/build.sh"})," that cannot be\nrun when cross-compiling, do the following,"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'if [[ "$CONDA_BUILD_CROSS_COMPILATION" != "1" ]]; then\n  make check\nfi\n'})}),"\n",(0,s.jsx)(n.p,{children:"After these changes, another rerendering might be required."}),"\n",(0,s.jsx)(n.p,{children:"Some useful jinja variables,"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"build_platform"})," - conda subdir for ",(0,s.jsx)(n.code,{children:"BUILD_PREFIX"}),". eg:\n",(0,s.jsx)(n.code,{children:"linux-64"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"target_platform"})," - conda subdir for ",(0,s.jsx)(n.code,{children:"PREFIX"}),". eg: ",(0,s.jsx)(n.code,{children:"osx-arm64"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Some useful environment variables,"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"build_platform"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"target_platform"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CONDA_BUILD_CROSS_COMPILATION"})," - 1 if cross compiling"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CMAKE_ARGS"})," - arguments to pass to cmake"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CC_FOR_BUILD"})," - C compiler for build platform"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"CXX_FOR_BUILD"})," - C++ compiler for build platform"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"HOST"})," - a triplet for host passed to autoconf. eg:\n",(0,s.jsx)(n.code,{children:"arm64-apple-darwin20.0.0"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"BUILD"})," - a triplet for build passed to autoconf. eg:\n",(0,s.jsx)(n.code,{children:"x86_64-conda-linux-gnu"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Some useful configure options in ",(0,s.jsx)(n.code,{children:"conda-forge.yml"})]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"build_platform"})," - a dictionary mapping ",(0,s.jsx)(n.code,{children:"build"})," subdir to ",(0,s.jsx)(n.code,{children:"host"})," subdir. eg:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"build_platform:\n  osx_arm64: osx_64\n  linux_ppc64le: linux_64\n  linux_aarch64: linux_64\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"test_on_native_only"})," - a boolean to turn off testing on cross\ncompiling. If the tests don't require emulation (for eg: check\nthat a file exists), then ",(0,s.jsx)(n.code,{children:"test_on_native_only: false"})," will run\nthe tests even when cross compiling."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"building-locally",children:"Building locally"}),"\n",(0,s.jsxs)(n.p,{children:["For building locally add the following in\n",(0,s.jsx)(n.code,{children:"$HOME/conda_build_config.yaml"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"SDKROOT:\n  - /path/to/MacOSX11.0.sdk\n"})}),"\n",(0,s.jsxs)(n.p,{children:["After that, look for the config you want to run in ",(0,s.jsx)(n.code,{children:".ci_support"})," folder\nin the root of the feedstock For eg: ",(0,s.jsx)(n.code,{children:".ci_support/osx_arm64_.yaml"}),". Then\nrun,"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"conda build recipe -m .ci_support/osx_arm64_.yaml -c conda-forge -c conda-forge/label/rust_dev\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This should start a new build for ",(0,s.jsx)(n.code,{children:"osx-arm64"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"testing-packages",children:"Testing packages"}),"\n",(0,s.jsx)(n.p,{children:"In order to test packages intended to run on future Apple Silicon\nhardware, Apple provides a machine called Developer Transition Kit\n(DTK). Jonathan Helmus and Eli Rykoff has helped with testing these\npackages on DTKs. Thanks to Eli Rykoff, we are now running tests for\nthese packages as a daily cron job which has led to finding several bugs\nin our cross compiling infrastructure and also bugs in our recipes."}),"\n",(0,s.jsxs)(n.p,{children:["To test cross compiled recipes, transfer the built conda package to the\n",(0,s.jsx)(n.code,{children:"host"})," and run,"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"conda build --test /path/to/package -c conda-forge\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This work would not have been possible without the help of many people\nincluding the upstream maintainers of compiler infrastructure (which\nincludes conda, conda-build, cctools, tapi, cctools-port, ldid, llvm,\nclang, compiler-rt, openmp, libcxx, crossenv, rust, gcc-darwin-arm64),\n",(0,s.jsx)(n.code,{children:"conda-forge/help-osx-arm64"})," team including Matt Becker, Eli Rykoff and\nUwe Korn who sent PRs to fix recipes, ",(0,s.jsx)(n.code,{children:"conda-forge/bot"})," team and also\nall the conda-forge maintainers of the 100 feedstocks who reviewed and\nfixed PRs."]}),"\n",(0,s.jsx)(n.p,{children:"Isuru Fernando"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>a});var s=o(67294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);