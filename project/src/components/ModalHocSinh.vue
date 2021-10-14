<template>
  <v-layout row justify-center>
    <v-dialog v-model="isShow" persistent max-width="500px">
      <v-card>
        <v-card-title class="headline primary" style="color:white">
          {{ isUpdate? 'Cập nhật Học Sinh' : 'Thêm Học Sinh' }}
        </v-card-title>
        <v-card-text>
          <v-form scope="frmHocSinh">
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs5>
                <v-text-field label="Tên Học Sinh" style="margin-bottom:50px" hide-details v-model="HocSinh.ten"
                name="ten" data-vv-scope="frmHocSinh"
                required></v-text-field>
              </v-flex>
               <v-flex xs4>
                <v-select
                class=""
                v-model="HocSinh.maLop"
                :items="LopOpts"
                label="Chọn Lớp"
                item-text="tenLop"
                item-value="maLop"
                data-vv-scope="frmHocSinh"
                hide-details
              ></v-select>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs4>
                <v-text-field label="Ngày Sinh" style="margin-bottom:50px" hide-details v-model="HocSinh.ngaySinh"
                name="ngaySinh" data-vv-scope="frmHocSinh"
                required>
                  <template slot="selection" slot-scope="data">
                      {{ data.item.ngay | moment("DD/MM/YYYY") }}
                  </template>
                  <template slot="item" slot-scope="data">
                      {{ data.item.ngay | moment("DD/MM/YYYY") }}
                  </template>
                </v-text-field>
              </v-flex>
                <v-flex xs8>
                <v-text-field label="Quê Quán" style="margin-bottom:50px" hide-details v-model="HocSinh.queQuan"
                name="queQuan" data-vv-scope="frmHocSinh"
                required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 class="text-xs-right">
                    <v-btn flat @click.native="isShow = false" class="mb-0">Hủy</v-btn>
                    <v-btn v-if="isUpdate" class="mr-0  mb-0" color="primary" @click.native="suaHocSinhJS">Cập nhật</v-btn>
                    <v-btn v-if="!isUpdate" class="mr-0 mb-0" color="primary" @click.native="themHocSinhJS">Thêm</v-btn>
                </v-flex>
              </v-layout>
          </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  name: 'ModalHocSinh',
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      isShow: false,
      isUpdate: false,
      HocSinh: {},
      trachNhiemTmp: {},
      HocSinhOpts: [],
      LopOpts: [
        {
          maLop: '111',
          tenLop: 'KTPM 14'
        },
        {
          maLop: '112',
          tenLop: 'KTPM 13'
        },
        {
          maLop: '113',
          tenLop: 'KTPM 15'
        }
      ]
    }
  },
  methods: {
    show (HocSinh, isUpdate) {
      this.isShow = true
      this.isUpdate = isUpdate
      this.HocSinh = Object.assign({}, HocSinh)
    },
    hide () {
      this.isShow = false
    },
    themHocSinhJS () {
      this.$emit('themHocSinhJS', this.HocSinh)
    },
    suaHocSinhJS () {
      this.$emit('suaHocSinhJS', this.HocSinh)
    },
    taoHocSinh () {
      this.$validator.validateAll('frmHocSinh').then((result) => {
        if (result) {
          this.$emit('taoHocSinh', this.HocSinh)
        }
      })
    },
    capNhatHocSinh () {
      this.$validator.validateAll('frmHocSinh').then((result) => {
        if (result) {
          this.$emit('capNhatHocSinh', this.HocSinh)
        }
      })
    }
  }
}
</script>
