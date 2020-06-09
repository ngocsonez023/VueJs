<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img
        src="../../../assets/dist/img/AdminLTELogo.png"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: .8"
      />
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <!-- Sidebar -->
    <div
      class="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-transition os-host-scrollbar-horizontal-hidden"
    >
      <div class="os-resize-observer-host">
        <div class="os-resize-observer observed" style="left: 0px; right: auto;"></div>
      </div>
      <div class="os-size-auto-observer" style="height: calc(100% + 1px); float: left;">
        <div class="os-resize-observer observed"></div>
      </div>
      <div class="os-content-glue" style="margin: 0px -8px; width: 249px; height: 274px;"></div>
      <div class="os-padding">
        <div
          class="os-viewport os-viewport-native-scrollbars-invisible"
          style="overflow-y: scroll;"
        >
          <div class="os-content" style="padding: 0px 8px; height: 100%; width: 100%;">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
              <div class="image">
                <img
                  src="../../../assets/dist/img/user2-160x160.jpg"
                  class="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div class="info">
                <a href="#" class="d-block">Alexander Pierce</a>
              </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
              <ul
                class="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li class="nav-item has-treeview">
                  <a class="nav-link" href="" @click="e => e.target.classList.toggle('active')">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                      Customer
                      <i class="right fas fa-angle-left"></i>
                    </p>
                  </a>
                  <ul class="nav nav-treeview">
                    <li class="nav-item">
                      <router-link to="/addcustomer" tag="a" class="nav-link" active-class="active" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>Add Customer</p>
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/listcustomer" tag="a" class="nav-link" active-class="active" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>List Customer</p>
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item has-treeview" >
                  <a class="nav-link" href="" @click="e => e.target.classList.toggle('active')">
                    <i class="nav-icon fas fa-copy"></i>
                    <p>
                      Layout Options
                      <i class="fas fa-angle-left right"></i>
                      <span class="badge badge-info right">6</span>
                    </p>
                  </a>
                  <ul class="nav nav-treeview">
                    <li class="nav-item">
                      <router-link to="/layout1" tag="a" class="nav-link" active-class="active" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>Layout 1</p>
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/layout2" tag="a" class="nav-link" active-class="active" exact>
                        <i class="far fa-circle nav-icon"></i>
                        <p>Layout 2</p>
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="nav-header">EXAMPLES</li>
                <li class="nav-item has-treeview">
                  <a class="nav-link" href="" @click="e => e.target.classList.toggle('active')">
                    <i class="nav-icon far fa-envelope"></i>
                    <p>
                      Mailbox
                      <i class="fas fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul class="nav nav-treeview">
                    <li class="nav-item">
                      <a href="pages/mailbox/mailbox.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Inbox</p>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="pages/mailbox/compose.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Compose</p>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="pages/mailbox/read-mail.html" class="nav-link">
                        <i class="far fa-circle nav-icon"></i>
                        <p>Read</p>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <!-- /.sidebar-menu -->
          </div>
        </div>
      </div>
      <div
        class="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden"
      >
        <div class="os-scrollbar-track">
          <div class="os-scrollbar-handle" style="width: 100%; transform: translate(0px, 0px);"></div>
        </div>
      </div>
      <div class="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
        <div class="os-scrollbar-track">
          <div
            class="os-scrollbar-handle"
            style="height: 21.8601%; transform: translate(0px, 0px);"
          ></div>
        </div>
      </div>
      <div class="os-scrollbar-corner"></div>
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {}
</script>

<style>
</style>
