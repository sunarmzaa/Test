<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col-sm-12">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggler="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigtion"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collaps nanbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link class="nav-link" to="/">หน้าหลัก</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/management"
                  >การจัดการข้อมูลคำศัพท์</router-link
                >
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="addbook">คำศัพท์</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="video">วิดิโอ</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/setting"
                  >เกี่ยวกับ</router-link
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
export default {
  name: "app",
};
</script>

<style>
body {
  background-color: rgb(199, 240, 213);
}
</style>
