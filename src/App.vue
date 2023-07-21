<template>
  <div id="app">
    <div id="nav">
    </div>
    <div>
    </div>
  <el-container style="border: 1px solid #eee">
      <el-header class="el-headerx" style="height:30px">
    <el-button @click="collapseStatus" size="mini" >
        <i :class='isCollapse?"el-icon-d-arrow-right":"el-icon-d-arrow-left"'></i>
     </el-button>
        </el-header>
   <el-container>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)" :hidden='isCollapse'>
    <el-menu >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>权限管理</span>
        </template>
          <el-menu-item index="1-1" @click="loadUsers">UserList</el-menu-item>
          <el-menu-item index="1-2" @click="addUser">AddUser</el-menu-item>
      </el-submenu>
        <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-info"></i>
          <span>运行状态</span>
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
          <span>资产管理</span>
        </template>
          <el-menu-item index="3-1" @click="loadAssets">DevicesList</el-menu-item>
          <el-menu-item index="3-2" @click="addDevice">AddDevice</el-menu-item>
          <el-menu-item index="3-3" @click="useRecords">UseRecords</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" @click="loadXCommand">XCommand</el-menu-item>
      <el-menu-item index="5" @click="loadOntDiag">OntDiag</el-menu-item>
      <el-menu-item index="6" @click="loadTopo">Topo</el-menu-item>
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

  private loadAssets() {
    this.$router.push({ path: '/assetsmanagement' }).catch(err => {
      console.warn(err)
    })
  }
}
</script>
