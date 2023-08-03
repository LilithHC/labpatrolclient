<template>
  <div id="app">
  <div id="nav">
  </div>
  <div>
  </div>

  <el-container style="border: 1px solid #eee" v-if="$route.meta.keepAlive" >
      <el-header class="el-headerx" style="height:30px">
    <el-button @click="collapseStatus" size="mini" >
        <i :class='isCollapse?"el-icon-d-arrow-right":"el-icon-d-arrow-left"'></i>
     </el-button>
        </el-header>
  <el-container>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)" v-if="$route.meta.keepAlive" :hidden='isCollapse'>
    <el-menu >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>Permission</span>
        </template>
          <el-menu-item index="1-1" @click="loadUserInfo">UserInfo</el-menu-item>
          <el-menu-item index="1-2" @click="loadAddUser">AddUser</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-info"></i>
          <span>Runtime</span>
        </template>
      <el-menu-item index="2-1" @click="loadAxos">AxosCard</el-menu-item>
      <el-menu-item index="2-2" @click="loadExa">ExaCard</el-menu-item>
      <el-menu-item index="2-3" @click="loadAxosOnt">AxosOnt</el-menu-item>
      <el-menu-item index="2-4" @click="loadExaOnt">ExaOnt</el-menu-item>
      <el-menu-item index="2-5" @click="loadAxosModule">AxosModule</el-menu-item>
      <el-menu-item index="2-6" @click="loadExaModule">ExaModule</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>Assets</span>
        </template>
          <el-menu-item index="3-1" @click="loadDevicesInfo">DevicesInfo</el-menu-item>
          <el-menu-item index="3-2" @click="loadAddDevice">AddDevice</el-menu-item>
          <el-menu-item index="3-3" @click="loadUseRecords">UseRecords</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" @click="loadXCommand">XCommand</el-menu-item>
      <el-menu-item index="5" @click="loadOntDiag">OntDiag</el-menu-item>
      <el-menu-item index="6" @click="loadTopo">Topo</el-menu-item>
      <el-menu-item index="6" @click="loadNotify">Notify</el-menu-item>
    </el-menu>
  </el-aside>

  <el-main>

      <router-view/>
  </el-main>
</el-container>
  </el-container>

  </div>

</template>

<style>
  .el-headerx {
    background-color: #B3C0D1;
    color: #333;
    line-height: 20px;
    height: 30px;
  }
  .el-aside {
    color: #333;
  }
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'App'
})
export default class extends Vue {
  private isCollapse = false
  protected collapseStatus() {
    this.isCollapse = !this.isCollapse
    console.log(this.isCollapse)
  }

  private loadAxos() {
    this.$router.push({ path: '/axoscard' }).catch(err => {
      console.warn(err)
    })
  }

  private loadExa() {
    this.$router.push({ path: '/exacard' }).catch(err => {
      console.warn(err)
    })
  }

  private loadAxosOnt() {
    this.$router.push({ path: '/axosont' }).catch(err => {
      console.warn(err)
    })
  }

  private loadExaOnt() {
    this.$router.push({ path: '/exaont' }).catch(err => {
      console.warn(err)
    })
  }

  private loadExaModule() {
    this.$router.push({ path: '/examodule' }).catch(err => {
      console.warn(err)
    })
  }

  private loadAxosModule() {
    this.$router.push({ path: '/axosmodule' }).catch(err => {
      console.warn(err)
    })
  }

  private loadXCommand() {
    this.$router.push({ path: '/xcommand' }).catch(err => {
      console.warn(err)
    })
  }

  private loadOntDiag() {
    this.$router.push({ path: '/ontdiag' }).catch(err => {
      console.warn(err)
    })
  }

  private loadTopo() {
    this.$router.push({ path: '/topo' }).catch(err => {
      console.warn(err)
    })
  }

  private loadDevicesInfo() {
    this.$router.push({ path: '/devicesinfo' }).catch(err => {
      console.warn(err)
    })
  }

  private loadAddDevice() {
    this.$router.push({ path: '/adddevice' }).catch(err => {
      console.warn(err)
    })
  }

  private loadUseRecords() {
    this.$router.push({ path: '/userecords' }).catch(err => {
      console.warn(err)
    })
  }

  private loadUserInfo() {
    this.$router.push({ path: '/userinfo' }).catch(err => {
      console.warn(err)
    })
  }

  private loadAddUser() {
    this.$router.push({ path: '/adduser' }).catch(err => {
      console.warn(err)
    })
  }

  private loadNotify() {
    this.$router.push({ path: '/notify' }).catch(err => {
      console.warn(err)
    })
  }
}
</script>
