<template>
  <div class="container-fluid footer-wrapper">
    <div class="row">
      <div class="container">
        <div class="row contact-wrapper">
          <div class="col-md-6">
            <nav class="nav flex-column text-center text-md-left">
              <a class="nav-link" href="/">Home</a>
              <a class="nav-link" href="/privacy-policy">Privacy Policy</a>
            </nav>
          </div>
        </div>
        <hr>
        <div class="row copywright-wrapper">
          <div class="col-md-6 text-center text-md-left">
            Copyright &copy; {{ currentYear }} Therapy Space
          </div>
          <div class="col-md-6 text-center text-md-right">
            Created by <a href="https://www.michaeldyczkowski.co.uk">Michael Dyczkowski</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
