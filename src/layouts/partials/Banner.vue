<template>
  <div class="bg-h clear-fix">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <table style="width: 100%; margin-top: 4px">
            <tbody>
              <tr>
                <td>
                  <g-link to="/">
                    <img
                      src="../../assets/images/logo.png"
                      class="img-fluid"
                      :alt="$static.metadata.company.name"
                      :title="$static.metadata.company.name"
                      style="max-width: 268px"
                    />
                  </g-link>
                </td>
                <td class="text-right d-block d-lg-none">
                  <b-button type="button" class="btn btn-primary btn-lg">
                    <b-icon icon="list"></b-icon>
                  </b-button>
                  <div></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-lg-6 text-center d-none d-lg-block">
          <div style="margin-bottom: 19px"></div>
          <div class="sm-ti" style="font-size: 14px; padding-bottom: 13px">
            {{ $static.metadata.company.name }}
          </div>
          <div class="sm-ti" style="font-size: 25px; color: #e5cb50">
            {{ $static.metadata.company.description }}
          </div>
        </div>
        <div class="col-lg-3 form-group text-center">
          <b-link
            :href="'tel:' + $static.metadata.company.telephone1"
            class="hot-contact hot-bord"
          >
            <b-icon icon="telephone"></b-icon>
            {{ $static.metadata.company.telephone1 }}
          </b-link>
          <b-link
            :href="'tel:' + $static.metadata.company.telephone2"
            class="hot-contact hot-bord"
          >
            <b-icon icon="telephone"></b-icon>
            {{ $static.metadata.company.telephone2 }}
          </b-link>
          <b-button type="button" v-b-modal.modal-1>Đặt Lịch Sửa Chữa</b-button>
        </div>
      </div>
      <b-modal id="modal-1" title="ĐẶT LỊCH SỬA CHỮA" hide-footer>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group label="Giới Tính" v-slot="{ ariaDescribedby }">
            <b-form-radio-group>
              <b-form-radio
                v-model="form.sex"
                :aria-describedby="ariaDescribedby"
                name="gt"
                value="Male"
              >
                Anh
              </b-form-radio>
              <b-form-radio
                v-model="form.sex"
                :aria-describedby="ariaDescribedby"
                name="gt"
                value="Female"
              >
                Chị
              </b-form-radio>
            </b-form-radio-group>
          </b-form-group>
          <b-form-group v-slot="{ ariaDescribedby }">
            <b-row>
              <b-col sm="6">
                <b-form-input
                  id="txt_datlich_name"
                  v-model="form.name"
                  placeholder="Họ và Tên *"
                  :aria-describedby="ariaDescribedby"
                  required
                />
              </b-col>
              <b-col sm="6">
                <b-form-input
                  id="txt_datlich_phone"
                  v-model="form.phone"
                  type="phone"
                  placeholder="Số điện thoại *"
                  :aria-describedby="ariaDescribedby"
                  required
                />
              </b-col>
            </b-row>
          </b-form-group>
          <b-form-group v-slot="{ ariaDescribedby }">
            <b-form-textarea
              id="textarea"
              v-model="form.text"
              placeholder="Yêu cầu (không bắt buộc)"
              rows="3"
              max-rows="6"
              :aria-describedby="ariaDescribedby"
            />
          </b-form-group>
          <b-form-group
            label="Để được phục vụ nhanh hơn vui lòng chọn"
            label-class="font-weight-bold"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-input
              id="txt_datlich_address"
              v-model="form.address"
              placeholder="Vui lòng nhập địa chỉ"
              :aria-describedby="ariaDescribedby"
              required
            />
          </b-form-group>
          <b-form-group v-slot="{ ariaDescribedby }">
            <b-row>
              <b-col sm="6">
                <b-form-datepicker
                  id="txt_datlich_chonngay"
                  v-model="form.selectedDate"
                  class="mb-2"
                  :aria-describedby="ariaDescribedby"
                />
              </b-col>
              <b-col sm="6">
                <b-form-timepicker
                  id="txt_datlich_chongio"
                  v-model="form.selectedTime"
                  locale="en"
                  :aria-describedby="ariaDescribedby"
                />
              </b-col>
            </b-row>
          </b-form-group>
          <b-form-group v-slot="{ ariaDescribedby }" align="right">
            <b-button
              type="submit"
              :aria-describedby="ariaDescribedby"
              variant="primary"
            >
              Đặt lịch ngay
            </b-button>
            <b-button
              type="reset"
              :aria-describedby="ariaDescribedby"
              variant="danger"
            >
              Reset
            </b-button>
          </b-form-group>
        </b-form>
      </b-modal>
    </div>
  </div>
</template>
<static-query>
query {
  metadata {
    company {
      name
      telephone1
      telephone2
      fax
      address
      description
    }
  }
}
</static-query>
<script>
export default {
  data() {
    return {
      form: {
        phone: "",
        name: "",
        text: "",
        sex: "",
        address: "",
        selectedDate: "",
        selectedTime: "",
      },
      show: true,
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      Object.keys(this.form).forEach((key) => (this.form[key] = ""))
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>
