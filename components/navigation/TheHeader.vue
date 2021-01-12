<template>
  <div class="header-wrapper">
    <b-navbar toggleable="sm" fixed="top">
      <b-navbar-toggle target="nav-text-collapse" />

      <b-navbar-brand href="/">Therapy Space</b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/">
            Welcome
          </b-nav-item>
          <b-nav-item-dropdown text="Services">
            <b-dropdown-item href="/consuelling">
              Consuelling
            </b-dropdown-item>
            <b-dropdown-item href="/cbt">
              CBT
            </b-dropdown-item>
            <b-dropdown-item href="/emdr">
              EMDR
            </b-dropdown-item>
            <b-dropdown-item href="/walk_and_talk">
              Walk & Talk
            </b-dropdown-item>
            <b-dropdown-item href="/supervision">
              Supervision
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="/what_to_expect">
            What to Expect
          </b-nav-item>
          <b-nav-item href="/contact">
            Contact
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
