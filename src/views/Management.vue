<template>
  <div class="hello">
    <br />
    <br />
    <h1 align="center">การจัดการข้อมูลพรรณพืช</h1>

    <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Data</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success">Save</button>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />

    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
      style="width:3cm "
    >
      + เพิ่มข้อมูล ( Add Data)
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">เพิ่มข้อมูล (Add Data)</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>
              <br />
              <label for="username"> ชื่อ (Name) </label> <br />
              <input type="text" size="100px" v-model="name" placeholder="กรอกชื่อ" />
            </div>

            <div>
              <br />
              <label for="username"> ชื่อวิทยาศาสตร์ (Science name) </label> <br />
              <input type="text" size="100px" v-model="style" placeholder="กรอกชื่อวิทยาศาสตร์" />
            </div>

            <div class="form-group">
              <br />
              <label for="ีusername"> บริเวณที่พบ (Zone) </label> <br />
              <input type="text" size="100px" v-model="Zone" placeholder="กรอกบริเวณที่พบ" />
            </div>

            <div>
              <br />
              <label for="username"> ประเภท (Category) </label> <br />
              <input type="text" size="100px " v-model="category" placeholder="กรอกประเภท" />
            </div>

            <div>
              <br />
              <label for="myFile"> เลือกไฟล์ </label><br />
              <input type="file" size="100px" class="form-control-file" id="myFile" />
            </div>
            <div></div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                @click="insertToContact(name, category, style, Zone)"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br /><br />
    <table class="table table-bordered text-center ">
      <thead class="table-active">
        <tr>
          <th scope="col-6">ชื่อ (Name)</th>
          <th scope="col-6">ชื่อวิทยาศาสตร์ (Science name)</th>
          <th scope="col-6">บริเวณที่พบ (Zone)</th>
          <th scope="col-6">ประเภท (Category)</th>
          <th scope="col-6"></th>
        </tr>
      </thead>

      <tbody :key="key" v-for="(contact, key) in contacts">
        <div v-if="updateKey === key">
          <input type="text" v-model="updatename" placeholder=" ชื่อ (Name)" />
          <input type="text" v-model="updatecategory" placeholder="ประเภท (Class)" />
          <input type="text" v-model="updatezone" placeholder="บริเวณที่พบ (Zone)" />
          <input type="text" v-model="updatestyle" placeholder="ลักษณะ (Style)" />
          <button @click="updateContact(updatename, updatecategory, updatezone, updatestyle)">
            Save
          </button>
        </div>
        <tr v-else>
          <th scope="row">{{ contact.name }}</th>
          <th scope="row">{{ contact.category }}</th>
          <th scope="row">{{ contact.Zone }}</th>
          <th scope="row">{{ contact.style }}</th>
          <td>
            <button class="btn btn-success" @click="setUpdateContact(key, contact)">
              แก้ไข(Edit)</button
            >&nbsp;&nbsp;
            <i class="fas fa-trash-alt"></i>
            <button class="btn btn-danger" @click="deleteContact(key)">ลบ (Delete)</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import firestore from '@/database/firebase';

const database = firestore.database();
const contactRef = database.ref('/contacts');
export default {
  name: 'About',
  data() {
    return {
      contacts: {},
      name: '',
      category: '',
      Zone: '',
      style: '',

      updatename: '',
      updatecategory: '',
      updateKey: '',
      updatezone: '',
      updatestyle: '',
    };
  },
  methods: {
    insertToContact(name, category, Zone, style) {
      const data = {
        name,
        category,
        Zone,
        style,
      };
      contactRef.push(data);
      this.name = '';
      this.category = '';
      this.Zone = '';
      this.style = '';
    },
    setUpdateContact(key, contact) {
      this.updateKey = key;
      this.updatename = contact.name;
      this.updatecategory = contact.category;
      this.updatezone = contact.Zone;
      this.updatestyle = contact.style;
    },
    updateContact(name, category, Zone, style) {
      contactRef.child(this.updateKey).update({
        name,
        category,
        Zone,
        style,
      });
      this.updateKey = '';
      this.updatename = '';
      this.updatecategory = '';
      this.updatezone = '';
      this.updatestyle = '';
    },
    deleteContact(key) {
      contactRef.child(key).remove();
    },
  },
  mounted() {
    contactRef.on('value', (snapshot) => {
      this.contacts = snapshot.val();
    });
  },
};
</script>
<style scoped>
button {
  background-color: #663366;
  width: 3cm;
}
</style>
