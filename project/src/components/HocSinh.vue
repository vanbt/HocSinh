<template>
  <v-card>
    <v-card-title>
      <v-layout row wrap>
        <v-flex xs4>
          <v-text-field append-icon="search" label="Tìm kiếm..." single-line hide-details v-model="dataFiltersHocSinh.search"></v-text-field>
        </v-flex>
        <v-flex xs8 class="text-xs-right">
          <v-btn fab dark small color="primary" @click="showModalHocSinh({}, false)">
            <v-icon>add</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs12>
          <v-data-table class="table-border mt-3" :headers="headersHocSinh" :items="gridDataHocSinh"
          :loading="tableHocSinhLoading" :pagination.sync="dataFiltersHocSinh"
            :total-items="totalItems" :rows-per-page-items="[10,20,30,50,100]">
            <template slot="items" slot-scope="props" style="max-height:100px;">
              <td style="max-width:100px;width:20%; text-overflow: ellipsis; overflow: hidden;">
                {{ props.item.ten }}
              </td>
              <td style="max-width:100px;width:20%; text-overflow: ellipsis; overflow: hidden;">
                {{ props.item.tenLop }}
              </td>
              <td style="max-width:100px;width:20%; text-overflow: ellipsis; overflow: hidden;">
                {{ props.item.ngaySinh }}
              </td>
              <td style="max-width:100px;width:20%; text-overflow: ellipsis; overflow: hidden;">
                {{ props.item.queQuan }}
              </td>
              <td class="justify-center" style="width:90px;">
                <v-btn icon small class="mx-0 my-0" @click="showModalHocSinh(props.item, true)">
                  <v-icon color="teal">edit</v-icon>
                </v-btn>
                <v-btn icon small class="mx-0 my-0" @click="showXoaHocSinh(props.item)">
                  <v-icon color="pink">delete</v-icon>
                </v-btn>
              </td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Không có dữ liệu.
            </v-alert>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-dialog v-model="dialogXoaHocSinh" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Xác nhận xóa</v-card-title>
        <v-card-text>
          Bạn có chắc chắn muốn xóa bản ghi này không?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="pink" flat @click.native="xoaHocSinh">Xóa</v-btn>
          <v-btn color="green darken-1" flat @click.native="dialogXoaHocSinh = false">Hủy</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <modal-hoc-sinh ref="modalHocSinh" @themHocSinhJS="themHocSinhJS" @suaHocSinhJS="suaHocSinhJS"></modal-hoc-sinh>
  </v-card>
</template>
<script>
import ModalHocSinh from './ModalHocSinh.vue'
import {
  HTTP
} from '@/http-services'
export default {
  name: 'HocSinh',
  components: {
    ModalHocSinh
  },
  data () {
    return {
      dialogXoaHocSinh: false,
      tableHocSinhLoading: false,
      seclectedHocSinh: {},
      gridDataHocSinh: [
        {
          ma: '111',
          ten: 'Ngô Văn Nam',
          tenLop: 'KTPM 14',
          ngaySinh: '22-12-1999',
          queQuan: 'Ha Noi',
          maLop: '111'
        },
        {
          ma: '112',
          ten: 'Hoàng Mạnh Hùng',
          tenLop: 'KTPM 13',
          ngaySinh: '22-12-1999',
          queQuan: 'Ha Noi',
          maLop: '112'
        },
        {
          ma: '113',
          ten: 'Cao Tuấn Anh',
          tenLop: 'KTPM 15',
          ngaySinh: '22-12-1999',
          queQuan: 'Ha Noi',
          maLop: '113'
        }
      ],
      headersHocSinh: [
        {
          text: 'Tên Học Sinh',
          align: 'left',
          value: 'ten'
        },
        {
          text: 'Lớp',
          align: 'left',
          value: 'tenLop'
        },
        {
          text: 'Ngày Sinh',
          align: 'left',
          value: 'ngaySinh'
        },
        {
          text: 'Quê Quán',
          align: 'left',
          value: 'queQuan'
        },
        {
          text: 'Thao tác',
          value: 'name',
          sortable: false
        }
      ],
      dataFiltersHocSinh: {
        page: 1,
        rowsPerPage: 50,
        sortBy: '',
        descending: true,
        totalItems: 0,
        search: ''
      },
      totalItems: 0
    }
  },
  watch: {
    dataFiltersHocSinh: {
      handler: function (newValue, oldValue) {
        if (newValue.totalItems === oldValue.totalItems) {
          // this.getDanhSachHocSinh()
        }
      },
      deep: true
    }
  },
  methods: {
    getData () {
      HTTP.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response) {
          console.log(response)
        })
    },
    themHocSinhJS (HocSinh) {
      this.gridDataHocSinh.push(HocSinh)
      this.$refs.modalHocSinh.hide()
    },
    suaHocSinhJS (HocSinh) {
      this.gridDataHocSinh.forEach(element => {
        if (element.ma === HocSinh.ma) {
          element.ten = HocSinh.ten
          element.tenLop = HocSinh.tenLop
          element.ngaySinh = HocSinh.ngaySinh
          element.queQuan = HocSinh.queQuan
        }
        this.$refs.modalHocSinh.hide()
      })
    },
    showModalHocSinh (HocSinh, isUpdate) {
      this.$refs.modalHocSinh.show(HocSinh, isUpdate)
    },
    getDanhSachHocSinh () {
      this.tableHocSinhLoading = true
      HTTP.get('HocSinh', {
        params: this.dataFiltersHocSinh
      })
        .then(response => {
          this.tableHocSinhLoading = false
          this.gridDataHocSinh = response.data.results
          this.totalItems = response.data.meta.totalItems
        })
        .catch(e => {
          console.log(e)
          this.$notify({
            group: 'notifications',
            type: 'error',
            title: 'Thông báo',
            text: 'Không thể lấy dữ liệu!'
          })
        })
    },
    showXoaHocSinh (HocSinh) {
      this.dialogXoaHocSinh = true
      this.seclectedHocSinh = HocSinh
    },
    xoaHocSinh () {
      HTTP.delete('HocSinh/delete/' + this.seclectedHocSinh.HocSinhId)
        .then(response => {
          this.getDanhSachHocSinh()
          this.dialogXoaHocSinh = false
          this.seclectedHocSinh = null
          this.$notify({
            group: 'notifications',
            type: 'success',
            title: 'Thông báo',
            text: 'Xóa thành công!'
          })
        })
        .catch(e => {
          console.log(e)
          this.$notify({
            group: 'notifications',
            type: 'error',
            title: 'Thông báo',
            text: 'Xóa thất bại!'
          })
        })
    },
    capNhatHocSinh (HocSinh) {
      HTTP.put('HocSinh/update', HocSinh)
        .then(response => {
          this.$notify({
            group: 'notifications',
            type: 'success',
            title: 'Thông báo',
            text: 'Cập nhật thành công!'
          })
          this.$refs.modalThemSuaHocSinh.hide()
          this.getDanhSachHocSinh()
        })
        .catch(e => {
          console.log(e)
          this.$notify({
            group: 'notifications',
            type: 'error',
            title: 'Thông báo',
            text: 'Cập nhật thất bại!'
          })
        })
    },
    themHocSinh (HocSinh) {
      HTTP.post('HocSinh/create', HocSinh)
        .then(response => {
          this.$notify({
            group: 'notifications',
            type: 'success',
            title: 'Thông báo',
            text: 'Tạo thành công!'
          })
          this.$refs.modalThemSuaHocSinh.hide()
          this.getDanhSachHocSinh()
        })
        .catch(e => {
          console.log(e)
          this.$notify({
            group: 'notifications',
            type: 'error',
            title: 'Thông báo',
            text: 'Tạo thất bại!'
          })
        })
    }
  }
}
</script>
