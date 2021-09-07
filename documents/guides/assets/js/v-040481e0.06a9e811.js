"use strict";(self.webpackChunkeurynome_cloud_document=self.webpackChunkeurynome_cloud_document||[]).push([[365],{6424:(e,i,l)=>{l.r(i),l.d(i,{data:()=>r});const r={key:"v-040481e0",path:"/microservices/%E5%AE%B9%E5%99%A8%E5%8C%96%E6%8A%80%E6%9C%AF.html",title:"容器化技术",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Docker能解决什么问题?",slug:"docker能解决什么问题",children:[{level:3,title:"麻烦的环境配置",slug:"麻烦的环境配置",children:[]},{level:3,title:"现在的应用程序",slug:"现在的应用程序",children:[]},{level:3,title:"新架构的挑战",slug:"新架构的挑战",children:[]},{level:3,title:"统一的管理",slug:"统一的管理",children:[]}]},{level:2,title:"“容器”",slug:"容器",children:[{level:3,title:"虚拟化技术",slug:"虚拟化技术",children:[]},{level:3,title:"容器技术",slug:"容器技术",children:[]}]},{level:2,title:"Docker",slug:"docker",children:[{level:3,title:"Docker架构",slug:"docker架构",children:[]},{level:3,title:"Docker底层实现",slug:"docker底层实现",children:[]},{level:3,title:"Docker核心技术",slug:"docker核心技术",children:[]},{level:3,title:"Docker VS VM",slug:"docker-vs-vm",children:[]}]}],filePathRelative:"microservices/容器化技术.md",git:{updatedTime:1630997095e3,contributors:[{name:"herodotus",email:"pointer_v@qq.com",commits:1}]}}},4749:(e,i,l)=>{l.r(i),l.d(i,{default:()=>n});var r=l(6252);const a=(0,r.uE)('<h1 id="容器化技术" tabindex="-1"><a class="header-anchor" href="#容器化技术" aria-hidden="true">#</a> 容器化技术</h1><h2 id="docker能解决什么问题" tabindex="-1"><a class="header-anchor" href="#docker能解决什么问题" aria-hidden="true">#</a> Docker能解决什么问题?</h2><p><img src="/eurynome-cloud/images/docker/logo-01.png" alt="Docker Logo"></p><p>Docker是一个容器化工具，那么什么是容器呢，Docker和容器有什么关系，Docker又能解决什么问题呢？</p><h3 id="麻烦的环境配置" tabindex="-1"><a class="header-anchor" href="#麻烦的环境配置" aria-hidden="true">#</a> 麻烦的环境配置</h3><p>软件开发最大的麻烦事之一就是环境配置，在开发之前我们需要准备各种运行环境、IDE、辅助工具。就像我们要使用电脑前，先要安装操作系统一样。</p><p>而一个可用软件的交付过程通常包含两个部分 - 开发和维护。不幸的是，我们很难保证软件开发测试和运行维护阶段的软件能运行在一模一样的环境下。开发常说：&quot;It works on my machine&quot;，很多时候我们都要花大量的时间去配置环境和教别人配置环境。</p><h3 id="现在的应用程序" tabindex="-1"><a class="header-anchor" href="#现在的应用程序" aria-hidden="true">#</a> 现在的应用程序</h3><p><img src="/eurynome-cloud/images/docker/applications.jpg" alt="applications.jpg"></p><div class="custom-container tip"><p class="custom-container-title">以前的应用程序:</p><ul><li>几乎都是单块应用: 大系统, 多模块</li><li>紧耦合: 内部调用</li><li>不常变更: 需求稳定(改动成本高)</li></ul></div><div class="custom-container tip"><p class="custom-container-title">如今的应用程序:</p><ul><li>解耦: 微服务/异步</li><li>经常变更: 快速迭代</li><li>动态创建和部署: 服务化</li></ul></div><h3 id="新架构的挑战" tabindex="-1"><a class="header-anchor" href="#新架构的挑战" aria-hidden="true">#</a> 新架构的挑战</h3><ul><li>多样化的技术栈</li><li>需要动态创建机器</li><li>很多活动组件</li><li>运维人员需要管理复杂的架构</li></ul><div class="custom-container danger"><p class="custom-container-title">复杂的架构</p><p>在新的应用程序架构下，我们部署应用的成本大大增加。不但要搭建不同语言、不同技术栈适配的运行环境，还要部署到多个服务器主机上；并且这些主机还可能来自不同地方(公/私有云主机、物理主机)。</p></div><h3 id="统一的管理" tabindex="-1"><a class="header-anchor" href="#统一的管理" aria-hidden="true">#</a> 统一的管理</h3><p>其实在软件开发的过程中我们就思考过类似的问题 - 如何统一的管理我们的代码包。例如，Maven、Gradle、NPM，我们使用一个相同的格式(规范)将我们的代码划分成模块，并使用一套工具去管理他们。在此之后我们不需要重复的copy代码、复制文件，只需要声明式的引入我们需要的代码包就可以了。</p><p>当然，我们希望我们的应用部署也能如此简单。</p><h2 id="容器" tabindex="-1"><a class="header-anchor" href="#容器" aria-hidden="true">#</a> “容器”</h2><p><img src="/eurynome-cloud/images/docker/good-container.png" alt="good-container.png"></p><p><img src="/eurynome-cloud/images/docker/app-container.png" alt="app-container.png"></p><div class="custom-container tip"><p class="custom-container-title">“容器”是一个黑盒，对于它的使用者来说：</p><ul><li>无需关心里面有什么：只关注“容器”能做什么</li><li>有一套工具来管理黑盒：打包、运输、运行</li><li>减少了部署单元的数量，从而减少了花销：多个工具聚集在一个“容器”内</li><li>更容易管理多个环境：以“容器”为单位进行部署和管理</li></ul></div><h3 id="虚拟化技术" tabindex="-1"><a class="header-anchor" href="#虚拟化技术" aria-hidden="true">#</a> 虚拟化技术</h3><p><strong>(1) 虚拟机</strong>：精心配置的虚拟机也是满足我们(基本)要求的容器，我们能够通过虚拟机镜像来打包我们的应用。但是，庞大的操作系统占用了大量的系统资源，使运行成本大大上升。</p><p><img src="/eurynome-cloud/images/docker/vm.png" alt="vm.png"></p><div class="custom-container tip"><p class="custom-container-title">虚拟机</p><ul><li>应用 <ul><li>运行环境(Java/数据库/libs...)</li><li>客户机操作系统(Guest Operating System)</li><li>虚拟机管理系统(Hypervisor)</li><li>操作系统级：MacOS(HyperKit)，Windows的Hyper-V</li><li>应用软件级：VirtualBox，VMWare Workstation</li></ul></li><li>主操作系统(Host Operating System)</li><li>硬件(Infrastructure)/云主机</li></ul></div><p><strong>(2) 容器</strong>：(作为进程)共用内核并提供额外的隔离手段，避免虚拟的操作系统占用。</p><p><img src="/eurynome-cloud/images/docker/container.png" alt="container.png"></p><div class="custom-container tip"><p class="custom-container-title">容器</p><ul><li>应用</li><li>运行环境(Java/数据库/libs...)</li><li>Docker守护进程(Docker Daemon): 类似虚拟机管理系统</li><li>主操作系统(Host Operating System)</li><li>硬件(Infrastructure)/云主机</li></ul></div><h3 id="容器技术" tabindex="-1"><a class="header-anchor" href="#容器技术" aria-hidden="true">#</a> 容器技术</h3><p>容器技术已经发展了一段时间了, 例如, LXC, BSD Jails, Solaris Zones...</p><p><img src="/eurynome-cloud/images/docker/history.png" alt="history.png"></p><h4 id="容器技术特点" tabindex="-1"><a class="header-anchor" href="#容器技术特点" aria-hidden="true">#</a> 容器技术特点</h4><ul><li>看起来像虚拟机 <ul><li>可以SSH到容器</li><li>具有root的访问权限</li><li>可以安装包</li><li>可以mount文件系统</li><li>拥有自己的eth0接口</li><li>可以修改iptables 规则和routing table</li></ul></li><li>共享宿主机的内核</li><li>隔离 cgroups (memory, cpu, blkio)</li><li>拥有进程空间 (pid, mnt, net, ipc, uts) <ul><li>pid - 隔离进程PID</li><li>mnt - 允许创建不同的文件系统层级</li><li>net - 隔离网络控制、iptables、防火墙、路由</li><li>ipc - 定义内部进程交流的范围</li><li>uts - 允许修改hostname :::</li></ul></li></ul><h4 id="容器技术的局限" tabindex="-1"><a class="header-anchor" href="#容器技术的局限" aria-hidden="true">#</a> 容器技术的局限</h4><ul><li>容器没有标准的格式</li><li>所以容器是不可移植的</li><li>没有标准的工具,所以比如要自己管理网络</li><li>没有可重用的模块和API</li></ul><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h2><p><img src="/eurynome-cloud/images/docker/what-is-docker.png" alt="what-is-docker.png"></p><ul><li>使容器变得更容易使用</li><li>容器镜像的商品化</li><li>可插拔的模块易于吸引供应商加入</li><li>适当的API可用来创建高层次抽象的工具</li><li>和微服务诞生在同一个时代</li></ul><h3 id="docker架构" tabindex="-1"><a class="header-anchor" href="#docker架构" aria-hidden="true">#</a> Docker架构</h3><p><img src="/eurynome-cloud/images/docker/docker-architecture.png" alt="docker-architecture.png"></p><ul><li>Docker Client：接收命令和Docker Host进行交互的客户端</li><li>Docker Host：运行Docker服务的主机 <ul><li>Docker Daemon：守护进程，用于管理所有镜像和容器</li><li>Docker Images/Containers：镜像和容器实例</li></ul></li><li>Registry(Hub)：镜像仓库</li></ul><p><img src="/eurynome-cloud/images/docker/docker-architecture2.png" alt="docker-architecture2.png"></p><h3 id="docker底层实现" tabindex="-1"><a class="header-anchor" href="#docker底层实现" aria-hidden="true">#</a> Docker底层实现</h3><p><img src="/eurynome-cloud/images/docker/docker-tech.png" alt="docker-tech.png"></p>',44),c={href:"https://draveness.me/docker",target:"_blank",rel:"noopener noreferrer"},o=(0,r.Uk)("底层实现原理详解见"),t=(0,r.uE)('<h3 id="docker核心技术" tabindex="-1"><a class="header-anchor" href="#docker核心技术" aria-hidden="true">#</a> Docker核心技术</h3><p><img src="/eurynome-cloud/images/docker/core-tech.png" alt="core-tech.png"></p><ul><li>Namespace 命名空间 Linux 的命名空间机制提供了以下七种不同的命名空间，包括 <code>CLONE_NEWCGROUP、CLONE_NEWIPC、CLONE_NEWNET、CLONE_NEWNS、CLONE_NEWPID、CLONE_NEWUSER、CLONE_NEWUTS</code>，通过这七个选项我们能在创建新的进程时设置新进程应该在哪些资源上与宿主机器进行隔离。因此容器只能感知内部的进程，而对宿主机和其他容器一无所知。</li><li>CGroups (Control Groups) Linux 的 CGroup 能够为一组进程分配资源，也就是我们在上面提到的 CPU、内存、网络带宽等资源.</li><li>UnionFS <img src="/eurynome-cloud/images/docker/union-fs.png" alt="union-fs.png"></li></ul><p>Docker中的每一个镜像都是由一系列的只读层组成的，Dockerfile 中的每一个命令都会在已有的只读层上创建一个新的层。通过 docker run 命令可以在镜像的最上层添加一个可写的层 - 容器层，所有对于运行时容器的修改其实都是对这个容器读写层的修改。</p><p>容器和镜像的区别就在于，所有的镜像都是只读的，而每一个容器其实等于镜像加上一个可读写的层，也就是同一个镜像可以对应多个容器。同时已构建的每一层镜像也可以作为其他镜像的基础层进行共用。</p><h3 id="docker-vs-vm" tabindex="-1"><a class="header-anchor" href="#docker-vs-vm" aria-hidden="true">#</a> Docker VS VM</h3><p><img src="/eurynome-cloud/images/docker/docker-vs-vm.png" alt="docker-vs-vm.png"></p>',7),n={render:function(e,i){const l=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[a,(0,r._)("p",null,[(0,r._)("a",c,[o,(0,r.Wm)(l)])]),t],64)}}}}]);