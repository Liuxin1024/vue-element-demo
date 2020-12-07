<template>
  <div>
    <h1>列表拖拽上移下移</h1>
    <el-table :data="gridData" ref="singleTable"
              size="small"
              :row-style="{height:'52px'}"
              row-key="id">
      <el-table-column label="字段名称" property="fieldName"></el-table-column>
      <el-table-column label="字段顺序" property="fieldOrder"></el-table-column>
      <el-table-column label="是否展示" property="state">
        <template slot-scope="scope">
          <el-switch
            :width="35"
            @change="fieldStatus({state:scope.row.state ? 1 : 0})"
            active-color="#1890FF"
            inactive-color="#ccc"
            v-model="scope.row.state"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" property="address">
        <template slot-scope="scope">
          <span style="font-size:14px;"><div class="menu-icon"></div></span>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="saveField" type="primary">确 定</el-button>
  </div>
</template>

<script>
  import Sortable from "sortablejs";

  export default {
    name: "index",
    data() {
      return {
        gridData: [
          {
            "id": 28,
            "userid": 1,
            "fieldName": "标题",
            "fieldValue": "title",
            "fieldOrder": 1,
            "state": 1,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 29,
            "userid": 1,
            "fieldName": "发布时间",
            "fieldValue": "updateTime",
            "fieldOrder": 2,
            "state": 1,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 30,
            "userid": 1,
            "fieldName": "信息类型",
            "fieldValue": "progId",
            "fieldOrder": 3,
            "state": 1,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 31,
            "userid": 1,
            "fieldName": "省",
            "fieldValue": "province",
            "fieldOrder": 4,
            "state": 1,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 33,
            "userid": 1,
            "fieldName": "市",
            "fieldValue": "city",
            "fieldOrder": 5,
            "state": 0,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 34,
            "userid": 1,
            "fieldName": "县",
            "fieldValue": "country",
            "fieldOrder": 6,
            "state": 0,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 35,
            "userid": 1,
            "fieldName": "招标单位",
            "fieldValue": "zhaoBiaoUnit",
            "fieldOrder": 7,
            "state": 1,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 36,
            "userid": 1,
            "fieldName": "招标联系人",
            "fieldValue": "relationName",
            "fieldOrder": 8,
            "state": 0,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 37,
            "userid": 1,
            "fieldName": "招标联系人电话",
            "fieldValue": "relationWay",
            "fieldOrder": 9,
            "state": 0,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 38,
            "userid": 1,
            "fieldName": "招标单位一级行业",
            "fieldValue": "newZhaoFirstIndustry",
            "fieldOrder": 10,
            "state": 1,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 39,
            "userid": 1,
            "fieldName": "招标单位二级行业",
            "fieldValue": "newZhaoSecondIndustry",
            "fieldOrder": 11,
            "state": 1,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 40,
            "userid": 1,
            "fieldName": "招标单位三级行业",
            "fieldValue": "newZhaoThirdIndustry",
            "fieldOrder": 12,
            "state": 1,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 41,
            "userid": 1,
            "fieldName": "中标单位",
            "fieldValue": "zhongBiaoUnit",
            "fieldOrder": 13,
            "state": 1,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 42,
            "userid": 1,
            "fieldName": "中标联系人",
            "fieldValue": "linkMan",
            "fieldOrder": 14,
            "state": 0,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 43,
            "userid": 1,
            "fieldName": "中标联系人电话",
            "fieldValue": "linkPhone",
            "fieldOrder": 15,
            "state": 0,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 44,
            "userid": 1,
            "fieldName": "中标单位一级行业",
            "fieldValue": "newZhongFirstIndustry",
            "fieldOrder": 16,
            "state": 0,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 45,
            "userid": 1,
            "fieldName": "中标单位二级行业",
            "fieldValue": "newZhongSecondIndustry",
            "fieldOrder": 17,
            "state": 0,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 46,
            "userid": 1,
            "fieldName": "中标单位三级行业",
            "fieldValue": "newZhongThirdIndustry",
            "fieldOrder": 18,
            "state": 0,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 47,
            "userid": 1,
            "fieldName": "中标金额",
            "fieldValue": "amountUnit",
            "fieldOrder": 19,
            "state": 1,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 48,
            "userid": 1,
            "fieldName": "所属业务类型",
            "fieldValue": "businessType",
            "fieldOrder": 20,
            "state": 0,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 49,
            "userid": 1,
            "fieldName": "招标方式",
            "fieldValue": "biddingType",
            "fieldOrder": 21,
            "state": 1,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 50,
            "userid": 1,
            "fieldName": "是否电子招标",
            "fieldValue": "isElectronic",
            "fieldOrder": 22,
            "state": 0,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 51,
            "userid": 1,
            "fieldName": "一级产品",
            "fieldValue": "productParent",
            "fieldOrder": 23,
            "state": 1,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 52,
            "userid": 1,
            "fieldName": "二级产品",
            "fieldValue": "product",
            "fieldOrder": 24,
            "state": 0,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 53,
            "userid": 1,
            "fieldName": "品牌",
            "fieldValue": "brand",
            "fieldOrder": 25,
            "state": 0,
            "useLocation": 2,
            "createTime": 1606803826000
          },
          {
            "id": 54,
            "userid": 1,
            "fieldName": "型号",
            "fieldValue": "model",
            "fieldOrder": 26,
            "state": 0,
            "useLocation": 2,
            "createTime": 1606803826000
          }
        ],
      }
    },
    mounted() {
      this.dragSort()
      this.init()
    },
    methods: {
      init() {
        this.gridData.forEach((item, index, array) => {
          item.upMove = true
          item.downMove = true
          if (index === 0) {
            array[0].upMove = false
          } else if (index === array.length - 1) {
            array[array.length - 1].downMove = false
          }
          item.state = !!item.state
        })
      },
      //拖拽
      dragSort() {
        setTimeout(() => {
          const el = this.$refs.singleTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
          this.sortable = Sortable.create(el, {
            animation: 150, // ms, number 单位：ms，定义排序动画的时间
            ghostClass: 'blue-background-class',
            setData: function (dataTransfer) {
              dataTransfer.setData('Text', '')
            },
            onEnd: e => {
              //e.oldIndex为拖动一行原来的位置，e.newIndex为拖动后新的位置
              const targetRow = this.gridData.splice(e.oldIndex, 1)[0];
              this.gridData.splice(e.newIndex, 0, targetRow);
              let dragId = this.gridData[e.newIndex].id;//拖动行的id
              let oneId, twoId
              //拖动行的前一行
              if (this.gridData[e.newIndex - 1]) {
                oneId = this.gridData[e.newIndex - 1].id;
              } else {
                oneId = ""
              }
              //拖动行的后一行
              if (this.gridData[e.newIndex + 1]) {
                twoId = this.gridData[e.newIndex + 1].id;
              } else {
                twoId = ""
              }
            }
          })
        }, 0)
      },
      //保存字段
      saveField() {
        return
        this.gridData.forEach((item, index) => {
          delete item.upMove
          delete item.downMove
          delete item.createTime
          delete item.id
          delete item.userid
          if (item.state) {
            item.state = 1
          } else {
            item.state = 0
          }

          //向后端传顺序处理
          item.fieldOrder = index + 1
        })
        const customizationArr = []
        this.gridData.forEach(item => {
          customizationArr.push(item)
        })
        console.log('移动后的数据',customizationArr);
        //发送接口
        // customization(customizationArr).then(res => {
        //   this.gridData.forEach((item, index) => {
        //     if (item.state === 1) {
        //       item.active = true
        //     }
        //   })
        // })
      },
      fieldStatus(status) {
        console.log('status', status)
      },
    }
  }
</script>

<style scoped>

  .menu-icon {
    width: 25px;
    height: 19px;
    border-top: 3px solid #ccc;
    border-bottom: 3px solid #ccc;
    background-color: #ccc;
    padding: 5px 0;
    background-clip: content-box;
    /*border-top-left-radius: 4px;*/
    /*border-bottom-left-radius: 4px;*/
  }
</style>
