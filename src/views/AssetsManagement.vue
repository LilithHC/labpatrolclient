<template>
  <div>
    <div>
      <el-row>
        <el-col :span="3"
          ><div>
            <el-input placeholder="device name" v-model="input"></el-input>
          </div>
        </el-col
        >
        <el-col :span="4"
          ><el-button icon="el-icon-search" circle></el-button>
        </el-col>
      </el-row>
    </div>
    <div>
      <svg width="1900" height="1000"></svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'


export default class AssetsManagement extends Vue {
}
</script>
